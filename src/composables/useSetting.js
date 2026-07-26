import { fetchSettingRows } from '@/api/setting'

let cachedSettings = null

export async function loadSettings(force = false) {
  if (cachedSettings && !force) return cachedSettings
  const rows = await fetchSettingRows()
  cachedSettings = rows.reduce((settings, row) => {
    const key = String(row?.key || '').trim()
    if (key) settings[key] = row.value ?? ''
    return settings
  }, {})
  return cachedSettings
}

export function clearSettingsCache() {
  cachedSettings = null
}
