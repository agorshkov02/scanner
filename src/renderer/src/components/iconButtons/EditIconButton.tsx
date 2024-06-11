import { Edit } from '@mui/icons-material'
import IconButton, { IconButtonProps } from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import { FC } from 'react'

type EditIconButtonProps = {
  title: string
} & IconButtonProps

const EditIconButton: FC<EditIconButtonProps> = ({ title, ...other }) => {
  return (
    <Tooltip title={title}>
      <IconButton size="small" {...other}>
        <Edit />
      </IconButton>
    </Tooltip>
  )
}

export default EditIconButton
