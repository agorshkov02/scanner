import Button, { ButtonProps } from '@mui/material/Button'
import { FC } from 'react'

type SubmitProps = ButtonProps

const Submit: FC<SubmitProps> = ({ children, ...other }) => {
  return (
    <Button type="submit" variant="contained" {...other}>
      {children}
    </Button>
  )
}

export { type SubmitProps }
export default Submit
