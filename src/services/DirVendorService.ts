import sha256 from 'crypto-js/sha256'
import * as fs from 'fs'
import { join } from 'path'
import { DirVendorKey, DirVendorValue, EMPTY_DIR_VENDOR_VALUE } from './types'

class DirVendorService {
  private path2DirVendor: Record<string, Record<string, DirVendorValue>> = {}

  getSync(path: string, key: DirVendorKey): DirVendorValue {
    const data = this.getData(path)
    return data[`${key.dir}:${key.vendor}`] ?? EMPTY_DIR_VENDOR_VALUE
  }

  setSync(path: string, key: DirVendorKey, value: DirVendorValue) {
    const data = this.getData(path)
    data[`${key.dir}:${key.vendor}`] = value
    this.writeDataSync(path, data)
  }

  private getData(path: string): Record<string, DirVendorValue> {
    if (!this.path2DirVendor[path]) {
      this.path2DirVendor[path] = this.readDataSync(path)
    }
    return this.path2DirVendor[path]
  }

  private readDataSync(path: string): Record<string, DirVendorValue> {
    path = join(this.createAppDataDir(), sha256(path).toString())
    if (!fs.existsSync(path)) {
      const data: Record<string, DirVendorValue> = {}
      fs.writeFileSync(path, JSON.stringify(data))
      return data
    }
    return JSON.parse(fs.readFileSync(path, 'utf-8'))
  }

  private writeDataSync(path: string, data: Record<string, DirVendorValue>) {
    path = join(this.createAppDataDir(), sha256(path).toString())
    fs.writeFileSync(path, JSON.stringify(data))
    this.path2DirVendor[path] = data
  }

  private createAppDataDir(): string {
    const appDataDir = join(process.env.APPDATA || '', 'scanner')
    if (!fs.existsSync(appDataDir)) {
      fs.mkdirSync(appDataDir)
    }
    return appDataDir
  }
}

const INSTANCE = new DirVendorService()
export { INSTANCE }
