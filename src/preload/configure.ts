import settings from 'electron-settings'

const SETTINGS_DIR = 'do_not_touch'
const SETTINGS_FILE_NAME = 'scanner.settings.json'

settings.configure({
  atomicSave: true,
  dir: SETTINGS_DIR,
  fileName: SETTINGS_FILE_NAME
})
