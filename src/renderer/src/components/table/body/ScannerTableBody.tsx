import ScannerTableBodyCell from '@components/table/body/ScannerTableBodyCell'
import ScannerHeadCell from '@components/table/head/ScannerTableHeadCell'
import TableBody from '@mui/material/TableBody'
import TableRow from '@mui/material/TableRow'
import { FC, PropsWithChildren } from 'react'

type ScanTableBodyProps = PropsWithChildren<{
  dirs: string[]
  vendors: string[]
}>

const ScanTableBody: FC<ScanTableBodyProps> = ({ dirs, vendors }) => {
  return (
    <TableBody>
      {dirs.map((dir, i) => (
        <TableRow key={`${dir}:${i}`}>
          <ScannerHeadCell>{dir}</ScannerHeadCell>
          {vendors.map((vendor, i) => (
            <ScannerTableBodyCell key={`${vendor}:${i}`} dvkey={{ dir, vendor }} />
          ))}
        </TableRow>
      ))}
    </TableBody>
  )
}

export { type ScanTableBodyProps as ScannerHeadCellProps }
export default ScanTableBody
