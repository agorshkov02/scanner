import ScannerHeadCell from '@components/table/head/ScannerTableHeadCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { FC, PropsWithChildren } from 'react'

type ScanHeadProps = PropsWithChildren<{
  dirs: string[]
  vendors: string[]
}>

const ScanHead: FC<ScanHeadProps> = ({ vendors }) => {
  return (
    <TableHead>
      <TableRow>
        {['directory', ...vendors].map((vendor, i) => (
          <ScannerHeadCell key={`${vendor}:${i}`}>{vendor}</ScannerHeadCell>
        ))}
      </TableRow>
    </TableHead>
  )
}

export { type ScanHeadProps }
export default ScanHead
