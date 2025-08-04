# Lead Capture System Setup Guide

## Overview
This system captures leads through a popup modal offering either a 7-day trial ($49) or a free Python cheat sheet. Leads are tracked and can be contacted later.

## Components Added

### 1. Email Capture Popup (`src/components/EmailCapture.jsx`)
- Shows after 30 seconds or when user tries to leave page
- Offers two options: 7-day trial ($49) or free cheat sheet
- Collects name, email, and optional phone number
- Prevents showing again after submission (localStorage)

### 2. WhatsApp Floating Button (`src/components/WhatsAppButton.jsx`)
- Appears after scrolling 300px
- Opens WhatsApp app on mobile, WhatsApp Web on desktop
- Pre-filled message for easy communication

### 3. Updated Pricing Section
- Added 7-day trial plan ($49)
- Updated money-back guarantee to 7 days
- Trial offer banner highlighting the deal

### 4. Contact Section Updates
- Added WhatsApp contact option
- Direct link to WhatsApp with pre-filled message

## Data Storage Options

### Option 1: Google Sheets (Recommended)
**Setup:**
1. Create a new Google Sheet
2. Add these columns: Timestamp | Name | Email | Phone | Offer Type | Source | Status | Created At
3. Go to Extensions > Apps Script
4. Paste this code:

```javascript
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = JSON.parse(e.postData.contents);
  
  const rowData = [
    new Date(),
    data.name,
    data.email,
    data.phone || '',
    data.offerType,
    data.source,
    'New',
    data.timestamp
  ];
  
  sheet.appendRow(rowData);
  
  return ContentService.createTextOutput(JSON.stringify({success: true}))
    .setMimeType(ContentService.MimeType.JSON);
}
```

5. Deploy as web app (Execute as: Me, Who has access: Anyone)
6. Copy the web app URL
7. Add to your environment variables: `GOOGLE_APPS_SCRIPT_URL=your_url_here`

### Option 2: EmailJS (Already configured)
- Uses your existing EmailJS setup
- Sends you email notifications for new leads
- No additional setup needed

### Option 3: Local JSON File (Development)
- Saves leads to a local file for testing
- Good for development but not production

## Environment Variables
Add these to your `.env` file:

```env
# Google Sheets (if using Option 1)
GOOGLE_APPS_SCRIPT_URL=your_google_apps_script_url

# Or for Google Sheets API
GOOGLE_SHEETS_API_KEY=your_api_key
GOOGLE_SPREADSHEET_ID=your_spreadsheet_id
```

## Lead Follow-up Process

### For Trial Signups ($49):
1. Lead gets redirected to your calendar booking
2. You receive email notification
3. Lead is saved to your tracking system
4. Follow up within 24 hours

### For Cheat Sheet Downloads:
1. Lead gets the cheat sheet immediately
2. You receive email notification
3. Lead is saved to your tracking system
4. Send follow-up email sequence

## Email Templates

### Trial Signup Follow-up:
```
Subject: Your 7-Day Python Trial Starts Now! 🐍

Hi [Name],

Welcome to TezCode.Tech! Your 7-day trial is ready to begin.

Here's what you'll get:
✅ 7 days of live Python classes
✅ Access to our Discord community
✅ Recorded sessions for review
✅ 7-day money-back guarantee

Your first class starts in [X] hours. I'll send you the Zoom link shortly.

Questions? Reply to this email or WhatsApp me at +91 6361125087

Best regards,
Tejas
TezCode.Tech
```

### Cheat Sheet Follow-up:
```
Subject: Your Python Cheat Sheet + Special Offer 🎁

Hi [Name],

Thanks for downloading our Python cheat sheet! I hope you find it helpful.

Since you're interested in Python, I wanted to offer you a special deal:

🎯 7-Day Trial for just $49 (instead of $499)
✅ Live interactive classes
✅ 7-day money-back guarantee
✅ Cancel anytime

This is perfect if you want to:
- Learn Python hands-on
- Get help with college assignments
- Build real projects
- Join our community

Ready to start? Book a quick call: [Calendar Link]

Best regards,
Tejas
TezCode.Tech
```

## Analytics & Tracking

### What to Track:
- Popup conversion rate
- Trial vs cheat sheet preference
- WhatsApp engagement
- Trial to full course conversion
- Money-back requests

### Key Metrics:
- Email capture rate: Target 5-8%
- Trial conversion: Target 15-25%
- WhatsApp response rate: Target 60-80%

## Optimization Tips

### Popup Timing:
- Current: 30 seconds or exit intent
- Test: 15 seconds, 45 seconds, scroll-based

### Offer Testing:
- Current: $49 trial vs free cheat sheet
- Test: $39 trial, $59 trial, different lead magnets

### Message Testing:
- Different WhatsApp pre-filled messages
- Various email subject lines
- Different CTA button text

## Troubleshooting

### Popup not showing:
- Check localStorage: `localStorage.getItem('emailCaptured')`
- Clear browser data to test again

### API errors:
- Check browser console for errors
- Verify API endpoint is working
- Test with Postman/curl

### WhatsApp not opening:
- Test on mobile vs desktop
- Check phone number format
- Verify WhatsApp is installed

## Next Steps

1. **Set up Google Sheets tracking** (recommended)
2. **Create email templates** for follow-up
3. **Test the system** end-to-end
4. **Monitor conversion rates** for first week
5. **Optimize based on data**

## Support

If you need help setting up any part of this system, let me know! The Google Sheets option is the easiest to get started with and gives you a simple way to track all your leads. 