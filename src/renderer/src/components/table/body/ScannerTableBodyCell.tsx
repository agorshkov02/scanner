import EditFormModal from '@components/forms/edit/EditFormModal'
import EditIconButton from '@components/iconButtons/EditIconButton'
import Stack from '@mui/material/Stack'
import TableCell, { TableCellProps } from '@mui/material/TableCell'
import Typography from '@mui/material/Typography'
import { FC, useState } from 'react'
import { DirVendorKey, STATE_HIGHLIGHT } from '../../../types'

type ScanTableBodyCellProps = {
  dvkey: DirVendorKey
} & TableCellProps

const ScanTableBodyCell: FC<ScanTableBodyCellProps> = ({ dvkey }) => {
  const [open, setOpen] = useState<boolean>(() => false)

  const onClose = () => setOpen(() => false)
  const onOpen = () => setOpen(() => true)

  const { comments, state } = window.dvApi.getSync(dvkey)

  return (
    <>
      <TableCell sx={{ border: '1px solid #e3e3e3' }}>
        <Stack alignItems="center" direction="row" gap={1} justifyContent="space-between">
          <Typography
            sx={{
              color: STATE_HIGHLIGHT[state] ?? 'primary.text',
              fontWeight: 600,
              textTransform: 'capitalize'
            }}
          >
            {state}
          </Typography>
          <EditIconButton title={comments ?? 'Empty comments'} onClick={onOpen} />
        </Stack>
      </TableCell>
      <EditFormModal dvkey={dvkey} dvvalue={{ comments, state }} open={open} onClose={onClose} />
    </>
  )
}

export default ScanTableBodyCell
