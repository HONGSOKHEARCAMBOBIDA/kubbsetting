/**
 * Google Apps Script Web App
 *
 * Deploy this bound to your Google Sheet:
 * 1. Open the sheet -> Extensions -> Apps Script
 * 2. Paste this code, save
 * 3. Deploy -> New deployment -> Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 4. Copy the /exec URL into your frontend's .env as VITE_GOOGLE_SHEET_API_URL
 *
 * Expects a sheet with two columns: key | value (row 1 = headers)
 */
function doGet() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet1')
  const rows = sheet.getDataRange().getValues()

  // Skip the header row, map remaining rows to { key, value }
  const data = rows.slice(1).map(function (row) {
    return {
      key: String(row[0] || '').trim(),
      value: String(row[1] || '').trim()
    }
  }).filter(function (row) {
    return row.key !== ''
  })

  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON)
}
