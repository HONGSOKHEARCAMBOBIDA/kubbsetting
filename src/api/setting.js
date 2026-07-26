import http from './http'

const sheetApiUrl = import.meta.env.VITE_GOOGLE_SHEET_API_URL

export async function fetchSettingRows() {
  if (!sheetApiUrl) throw new Error('Missing VITE_GOOGLE_SHEET_API_URL. Set it in your .env file.')
  const { data } = await http.get(sheetApiUrl)
  if (!Array.isArray(data)) throw new Error('Unexpected response from the Google Sheet API.')
  return data
}
