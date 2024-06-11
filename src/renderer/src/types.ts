type DirVendorKey = {
  dir: string
  vendor: string
}

type DirVendorValue = {
  comments: string | undefined
  state: string
}

const STATE_HIGHLIGHT: Record<string, string> = {
  /* success color */
  /* FIXME: use mui api */
  Added: 'rgba(46, 125, 50)',
  /* rejected color */
  /* FIXME: use mui api */
  Rejected: 'rgba(211, 47, 47)',
  /* waiting color */
  /* FIXME: use mui api */
  Waiting: 'rgba(96, 125, 139)'
}

export { STATE_HIGHLIGHT, type DirVendorKey, type DirVendorValue }
