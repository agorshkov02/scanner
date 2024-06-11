declare global {
  interface Window {
    dvApi: {
      getSync(key: DirVendorKey): DirVendorValue
      setSync(key: DirVendorKey, value: DirVendorValue): void
    }
    scannerApi: {
      getIntervalSync(): number | undefined
      setIntervalSync(interval: number)
      getPathSync(): string | undefined
      setPathSync(path: string)
      scanSync(): string[]
    }
    vendorsApi: {
      getVendorsSync(): string[]
      addVendorSync: (vendor: string) => void
      deleteVendorSync: (vendor: string) => void
    }
  }
}

export {}
