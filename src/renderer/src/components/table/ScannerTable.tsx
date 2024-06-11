import ScannerTableBody from '@components/table/body/ScannerTableBody'
import ScannerTableHead from '@components/table/head/ScannerTableHead'
import Table from '@mui/material/Table'
import { FC } from 'react'

type ScanProps = {
  dirs: string[]
  vendors: string[]
}

const ScanTable: FC<ScanProps> = ({ dirs, vendors }) => {
  return (
    <Table>
      <ScannerTableHead dirs={dirs} vendors={vendors} />
      <ScannerTableBody dirs={dirs} vendors={vendors} />
    </Table>
  )
}

export { type ScanProps }
export default ScanTable
