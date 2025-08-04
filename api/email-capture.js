// This would be your backend API endpoint
// For now, we'll create a simple handler that you can integrate with your preferred backend

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, phone, offerType, timestamp, source } = req.body;

    // Validate required fields
    if (!name || !email || !offerType) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Here you would typically:
    // 1. Save to your database (MongoDB, PostgreSQL, etc.)
    // 2. Send to your email marketing service (Mailchimp, ConvertKit, etc.)
    // 3. Send to your CRM (HubSpot, Salesforce, etc.)
    // 4. Send notification to your team

    // Example data structure to save:
    const leadData = {
      name,
      email,
      phone: phone || '',
      offerType,
      timestamp,
      source,
      status: 'new',
      createdAt: new Date().toISOString()
    };

    // Save to Google Sheets via Apps Script
    const googleSheetsResult = await saveToGoogleSheets(leadData);
    
    // Also send email notification via EmailJS
    try {
      await sendEmailJS(leadData);
    } catch (emailError) {
      console.error('EmailJS error:', emailError);
    }

    console.log('New lead captured:', leadData);
    console.log('Google Sheets result:', googleSheetsResult);

    res.status(200).json({ 
      success: true, 
      message: 'Lead captured successfully',
      data: leadData 
    });

  } catch (error) {
    console.error('Error capturing lead:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to capture lead' 
    });
  }
}

// Example helper functions you can implement:

// 1. Save to Google Sheets via Apps Script
async function saveToGoogleSheets(data) {
  try {
    const APPS_SCRIPT_URL = process.env.GOOGLE_APPS_SCRIPT_URL;
    
    if (!APPS_SCRIPT_URL) {
      console.error('GOOGLE_APPS_SCRIPT_URL not configured');
      return false;
    }
    
    const response = await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.text();
    console.log('Google Apps Script response:', result);
    
    return true;
  } catch (error) {
    console.error('Error saving to Google Sheets:', error);
    return false;
  }
}

// 2. Send to EmailJS
async function sendEmailJS(data) {
  // You can use your existing EmailJS setup to send yourself notifications
  const emailjs = require('@emailjs/browser');
  
  const templateParams = {
    to_name: 'Tejas',
    from_name: data.name,
    from_email: data.email,
    phone: data.phone,
    offer_type: data.offerType,
    message: `New lead from website: ${data.name} (${data.email}) wants ${data.offerType}`
  };

  // Send notification email to yourself
  await emailjs.send(
    'service_970w8dw', // Your service ID
    'template_6ftmlmx', // Your template ID
    templateParams,
    'ntVP5BsBHxPI046Mj' // Your public key
  );
}

// 3. Save to local file (for development/testing)
async function saveToLocalFile(data) {
  const fs = require('fs').promises;
  const path = require('path');
  
  const filePath = path.join(process.cwd(), 'leads.json');
  
  try {
    let leads = [];
    try {
      const existingData = await fs.readFile(filePath, 'utf8');
      leads = JSON.parse(existingData);
    } catch (error) {
      // File doesn't exist, start with empty array
    }
    
    leads.push(data);
    await fs.writeFile(filePath, JSON.stringify(leads, null, 2));
  } catch (error) {
    console.error('Error saving to file:', error);
  }
}

// 4. Send notification email
async function sendNotificationEmail(data) {
  // Send yourself an email notification about the new lead
  // You can use Nodemailer, SendGrid, or any email service
} 