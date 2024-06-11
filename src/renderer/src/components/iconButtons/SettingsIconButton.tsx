import { Settings } from '@mui/icons-material'
import IconButton, { IconButtonProps } from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import { FC } from 'react'

type SettingsIconButtonProps = {
  title: string
} & IconButtonProps

const SettingsIconButton: FC<SettingsIconButtonProps> = ({ title, ...other }) => {
  return (
    <Tooltip title={title}>
      <IconButton size="small" {...other}>
        <Settings />
      </IconButton>
    </Tooltip>
  )
}

export default SettingsIconButton
