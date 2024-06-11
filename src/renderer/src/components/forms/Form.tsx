import Stack, { StackProps } from '@mui/material/Stack'
import { FC } from 'react'

type FormProps = StackProps

const Form: FC<FormProps> = (props) => {
  return <Stack component="form" gap={2} {...props}></Stack>
}

export { type FormProps }
export default Form
