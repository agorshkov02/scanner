import { contextBridge } from 'electron'
import { INSTANCE as DIR_VENDOR_SERVICE } from '../services/DirVendorService'
import { INSTANCE as SCANNER_SERVICE_INSTANCE } from '../services/ScannerService'
import { INSTANCE as SCANNER_SETTINGS_SERVICE_INSTANCE } from '../services/settings/ScannerSettingsService'
import { INSTANCE as VENDORS_SETTINGS_SERVICE_INSTANCE } from '../services/settings/VendorsSettingsService'
import { DirVendorKey, DirVendorValue, EMPTY_DIR_VENDOR_VALUE } from '../services/types'
import './configure'

contextBridge.exposeInMainWorld('dvApi', {
  getSync(key: DirVendorKey): DirVendorValue | undefined {
    const path = SCANNER_SETTINGS_SERVICE_INSTANCE.getPathSync()
    if (!path) {
      console.warn('path is not specified, check your scan settings')
      return EMPTY_DIR_VENDOR_VALUE
    }
    return DIR_VENDOR_SERVICE.getSync(path, key)
  },
  setSync(key: DirVendorKey, value: DirVendorValue) {
    const path = SCANNER_SETTINGS_SERVICE_INSTANCE.getPathSync()
    if (!path) {
      console.warn('path is not specified, check your scan settings')
      return
    }
    return DIR_VENDOR_SERVICE.setSync(path, key, value)
  }
})

contextBridge.exposeInMainWorld('scannerApi', {
  getIntervalSync(): number | undefined {
    return SCANNER_SETTINGS_SERVICE_INSTANCE.getIntervalSync()
  },
  setIntervalSync(interval: number) {
    SCANNER_SETTINGS_SERVICE_INSTANCE.setIntervalSync(interval)
  },
  getPathSync(): string | undefined {
    return SCANNER_SETTINGS_SERVICE_INSTANCE.getPathSync()
  },
  setPathSync(path: string) {
    SCANNER_SETTINGS_SERVICE_INSTANCE.setPathSync(path)
  },
  scanSync(): string[] {
    SCANNER_SERVICE_INSTANCE.scan()
    return SCANNER_SERVICE_INSTANCE.dirs
  }
})

contextBridge.exposeInMainWorld('vendorsApi', {
  getVendorsSync(): string[] {
    return VENDORS_SETTINGS_SERVICE_INSTANCE.getVendorsSync()
  },
  addVendorSync: (vendor: string): void => {
    return VENDORS_SETTINGS_SERVICE_INSTANCE.addVendorSync(vendor)
  },
  deleteVendorSync: (vendor: string): void => {
    return VENDORS_SETTINGS_SERVICE_INSTANCE.deleteVendorSync(vendor)
  }
})
