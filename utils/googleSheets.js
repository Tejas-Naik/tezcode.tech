// Google Sheets integration for lead tracking
// This is a simple solution to track leads without a complex backend

const GOOGLE_SHEETS_API_KEY = process.env.GOOGLE_SHEETS_API_KEY;
const SPREADSHEET_ID = process.env.GOOGLE_SPREADSHEET_ID;
const SHEET_NAME = 'Leads';

export async function saveLeadToGoogleSheets(leadData) {
  try {
    // Format data for Google Sheets
    const rowData = [
      new Date().toISOString(), // Timestamp
      leadData.name,
      leadData.email,
      leadData.phone || '',
      leadData.offerType,
      leadData.source,
      'New', // Status
      leadData.timestamp
    ];

    // Append to Google Sheets
    const response = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${SHEET_NAME}!A:H:append?valueInputOption=USER_ENTERED&key=${GOOGLE_SHEETS_API_KEY}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          values: [rowData]
        })
      }
    );

    if (!response.ok) {
      throw new Error('Failed to save to Google Sheets');
    }

    return true;
  } catch (error) {
    console.error('Error saving to Google Sheets:', error);
    return false;
  }
}

// Alternative: Use Google Apps Script for easier setup
export async function saveLeadViaAppsScript(leadData) {
  try {
    // This would be a Google Apps Script web app URL
    const APPS_SCRIPT_URL = process.env.GOOGLE_APPS_SCRIPT_URL;
    
    const response = await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(leadData)
    });

    if (!response.ok) {
      throw new Error('Failed to save via Apps Script');
    }

    return true;
  } catch (error) {
    console.error('Error saving via Apps Script:', error);
    return false;
  }
}

// Setup instructions:
/*
1. Create a Google Sheet with these columns:
   A: Timestamp | B: Name | C: Email | D: Phone | E: Offer Type | F: Source | G: Status | H: Created At

2. Option 1 - Google Sheets API:
   - Enable Google Sheets API
   - Create API key
   - Set environment variables

3. Option 2 - Google Apps Script (Recommended for simplicity):
   - Create a new Google Sheet
   - Go to Extensions > Apps Script
   - Paste this code:

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

4. Deploy as web app and use the URL in your environment variables
*/ 