import ScannerTable from '@components/table/ScannerTable'
import TableContainer from '@mui/material/TableContainer'
import { FC, useEffect, useState } from 'react'

const ScanTableContainer: FC = () => {
  const [dirs, setDirs] = useState<string[]>([])
  const [vendors, setVendors] = useState<string[]>([])

  useEffect(() => {
    const fetchData = () => {
      const dirs = window.scannerApi.scanSync()
      const vendors = window.vendorsApi.getVendorsSync()
      if (dirs.length && vendors.length) {
        setDirs(dirs.sort())
        setVendors(vendors.sort())
      }
    }

    fetchData()

    const interval = window.scannerApi.getIntervalSync() ?? Infinity
    const intervalId = setInterval(fetchData, interval * 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return (
    <TableContainer>
      <ScannerTable dirs={dirs} vendors={vendors} />
    </TableContainer>
  )
}

export default ScanTableContainer
