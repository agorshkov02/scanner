import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { FC } from 'react'

type EditFormHeaderProps = {
  dir: string
  vendor: string
}

const EditFormHeader: FC<EditFormHeaderProps> = ({ dir, vendor }) => {
  return (
    <Typography>
      <Box sx={{ textTransform: 'capitalize' }}>{dir}</Box>
      <Box sx={{ textTransform: 'capitalize' }}>{vendor}</Box>
    </Typography>
  )
}

export default EditFormHeader
