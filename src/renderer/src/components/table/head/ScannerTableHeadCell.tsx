import TableCell, { TableCellProps } from '@mui/material/TableCell'
import Typography from '@mui/material/Typography'
import { FC } from 'react'

type ScannerHeadCellProps = TableCellProps

const ScannerHeadCell: FC<ScannerHeadCellProps> = ({ children }) => {
  return (
    <TableCell sx={{ border: '1px solid #e3e3e3' }}>
      <Typography sx={{ fontWeight: 600, textTransform: 'capitalize' }}>{children}</Typography>
    </TableCell>
  )
}

export { type ScannerHeadCellProps }
export default ScannerHeadCell
