# Google Apps Script Update Instructions

## Update Your Google Apps Script Code

Replace your current Google Apps Script code with this updated version that handles form data:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Get form data
    const name = e.parameter.name || '';
    const email = e.parameter.email || '';
    const phone = e.parameter.phone || '';
    const offerType = e.parameter.offerType || '';
    const timestamp = e.parameter.timestamp || new Date().toISOString();
    const source = e.parameter.source || 'website_popup';
    
    const rowData = [
      new Date(),
      name,
      email,
      phone,
      offerType,
      source,
      'New',
      timestamp
    ];
    
    sheet.appendRow(rowData);
    
    // Return a simple HTML response
    return HtmlService.createHtmlOutput(`
      <html>
        <head>
          <title>Success</title>
        </head>
        <body>
          <h1>Thank you!</h1>
          <p>Your information has been saved successfully.</p>
          <script>
            // Close the tab after 2 seconds
            setTimeout(function() {
              window.close();
            }, 2000);
          </script>
        </body>
      </html>
    `);
    
  } catch (error) {
    return HtmlService.createHtmlOutput(`
      <html>
        <head>
          <title>Error</title>
        </head>
        <body>
          <h1>Error</h1>
          <p>There was an error saving your information: ${error.toString()}</p>
          <script>
            setTimeout(function() {
              window.close();
            }, 3000);
          </script>
        </body>
      </html>
    `);
  }
}

// Keep the doOptions function for CORS preflight requests
function doOptions(e) {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  };
  
  return ContentService.createTextOutput('')
    .setHeaders(headers);
}
```

## Steps to Update:

1. **Go to your Google Apps Script**
2. **Replace the existing code** with the code above
3. **Save the changes**
4. **Deploy again** (Create new deployment)
5. **Copy the new URL** and update your `.env.local` file

## What This Does:

- **Handles form data** instead of JSON (avoids CORS issues)
- **Saves to Google Sheets** with all the lead information
- **Returns a success page** that automatically closes
- **Includes error handling** with user-friendly messages

## Test the Updated System:

1. **Clear localStorage:**
   ```javascript
   localStorage.removeItem('emailCaptured')
   ```

2. **Refresh your page** and test the popup

3. **Check your Google Sheet** - you should see new entries

4. **Check your email** - you should receive notifications

This approach completely bypasses CORS issues by using traditional form submission instead of AJAX requests. 