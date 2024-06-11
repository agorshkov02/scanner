import { Visibility } from '@mui/icons-material'
import IconButton, { IconButtonProps } from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import { FC } from 'react'

type ScannerIconButtonProps = {
  title: string
} & IconButtonProps

const ScannerIconButton: FC<ScannerIconButtonProps> = ({ title, ...other }) => {
  return (
    <Tooltip title={title}>
      <IconButton size="small" {...other}>
        <Visibility />
      </IconButton>
    </Tooltip>
  )
}

export default ScannerIconButton
