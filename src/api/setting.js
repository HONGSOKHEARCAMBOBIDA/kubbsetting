import http from './http'

// The Google Apps Script Web App URL that serves the sheet as JSON.
// Configure this in .env as VITE_GOOGLE_SHEET_API_URL.
const SHEET_API_URL = import.meta.env.VITE_GOOGLE_SHEET_API_URL

/**
 * Fetches the raw [{ key, value }, ...] rows from the Google Sheet
 * via the Google Apps Script Web App endpoint.
 *
 * @returns {Promise<Array<{key: string, value: string}>>}
 */
export async function fetchSettingRows() {
  if (!SHEET_API_URL) {
    throw new Error(
      'Missing VITE_GOOGLE_SHEET_API_URL. Set it in your .env file (see .env.example).'
    )
  }

  const { data } = await http.get(SHEET_API_URL)

  if (!Array.isArray(data)) {
    throw new Error('Unexpected response shape from Google Sheet API. Expected an array.')
  }

  return data
}
