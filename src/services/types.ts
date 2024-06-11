type DirVendorKey = {
  dir: string
  vendor: string
}

type DirVendorValue = {
  comments: string | undefined
  state: string
}

const EMPTY_DIR_VENDOR_VALUE: DirVendorValue = {
  comments: undefined,
  state: '-'
}

export { EMPTY_DIR_VENDOR_VALUE, type DirVendorKey, type DirVendorValue }
