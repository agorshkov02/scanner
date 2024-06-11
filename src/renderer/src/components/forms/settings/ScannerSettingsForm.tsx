import Form from '@components/forms/Form'
import Submit from '@components/forms/Submit'
import TextField from '@mui/material/TextField'
import { createValidationValueMessage, mapFieldErrorAsTextFieldProps } from '@utils/forms'
import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

type ScannerSettingsFormData = {
  interval: number
  path: string
}

const ScannerSettingsForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ScannerSettingsFormData>({
    defaultValues: {
      interval: window.scannerApi.getIntervalSync() ?? 0,
      path: window.scannerApi.getPathSync() ?? ''
    }
  })

  const onSubmit: SubmitHandler<ScannerSettingsFormData> = (data: ScannerSettingsFormData) => {
    window.scannerApi.setIntervalSync(Number(data.interval))
    window.scannerApi.setPathSync(data.path)
  }

  return (
    <Form direction="row" onSubmit={handleSubmit(onSubmit)}>
      <TextField
        fullWidth
        label="Scan Path"
        {...mapFieldErrorAsTextFieldProps(
          errors.path,
          'Scan path must be specified, be less than 1000 and at least 1 character'
        )}
        InputProps={{
          inputProps: {
            ...register('path', {
              maxLength: createValidationValueMessage(
                1000,
                'Scan path length must be less than 1000 characters'
              ),
              minLength: createValidationValueMessage(
                1,
                'Scan path length must be at least 1 character'
              ),
              required: createValidationValueMessage(true, 'Scan path must be specified')
            })
          }
        }}
      />
      <TextField
        fullWidth
        label="Scan Interval"
        {...mapFieldErrorAsTextFieldProps(
          errors.interval,
          'Scan interval must be specified, be less than 360 seconds and at least 1 second'
        )}
        InputProps={{
          inputProps: {
            ...register('interval', {
              max: createValidationValueMessage(360, 'Scan interval must be less then 360 seconds'),
              min: createValidationValueMessage(1, 'Scan interval must be at least 1 second'),
              required: createValidationValueMessage(true, 'Scan interval must be specified')
            })
          }
        }}
        type="number"
      />
      <Submit sx={{ mb: 3 }}>Save</Submit>
    </Form>
  )
}

export { type ScannerSettingsForm as ScanSettingsForm }
export default ScannerSettingsForm
