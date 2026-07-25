import { fetchSettingRows } from '@/api/setting'

// Module-level cache so repeated calls in the same session
// don't hit the Google Sheet API again unless forced.
let cachedSettings = null

/**
 * Converts the raw [{ key, value }, ...] rows from the sheet
 * into a flat object: { key: value, ... }
 *
 * @param {Array<{key: string, value: string}>} rows
 * @returns {Object}
 */
function rowsToObject(rows) {
  return rows.reduce((acc, row) => {
    if (row && row.key) {
      acc[row.key] = row.value ?? ''
    }
    return acc
  }, {})
}

/**
 * Loads app settings/content from the Google Sheet and returns
 * them as a flat, easy-to-use object.
 *
 * Usage:
 *   const settings = await loadSettings()
 *   settings.app_name
 *   settings.phone
 *
 * @param {boolean} force - bypass the in-memory cache and refetch
 * @returns {Promise<Object>}
 */
export async function loadSettings(force = false) {
  if (cachedSettings && !force) {
    return cachedSettings
  }

  const rows = await fetchSettingRows()
  cachedSettings = rowsToObject(rows)
  return cachedSettings
}

/**
 * Clears the in-memory settings cache. Useful after a retry
 * or when content is known to have changed upstream.
 */
export function clearSettingsCache() {
  cachedSettings = null
}
