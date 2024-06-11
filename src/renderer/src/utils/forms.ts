import { TextFieldProps } from '@mui/material'
import { FieldError, ValidationValue, ValidationValueMessage } from 'react-hook-form'

const createValidationValueMessage = <T extends ValidationValue>(
  value: T,
  message: string
): ValidationValueMessage<T> => ({
  value,
  message
})

const mapFieldErrorAsTextFieldProps = (
  error: FieldError | undefined,
  helperTextPlaceholder: string | undefined
): TextFieldProps => {
  return {
    error: !!error,
    helperText: error?.message ?? helperTextPlaceholder
  }
}

export { createValidationValueMessage, mapFieldErrorAsTextFieldProps }
