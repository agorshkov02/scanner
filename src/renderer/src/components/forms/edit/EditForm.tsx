import Form from '@components/forms/Form'
import Submit from '@components/forms/Submit'
import EditFormHeader from '@components/forms/edit/EditFormHeader'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import { createValidationValueMessage, mapFieldErrorAsTextFieldProps } from '@utils/forms'
import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { DirVendorKey, DirVendorValue, STATE_HIGHLIGHT } from '../../../types'

type EditFormProps = {
  dvkey: DirVendorKey
  dvvalue: DirVendorValue
  afterEdit: () => void
}

type EditFormFormData = {
  comments: string
  state: string
}

const EditForm: FC<EditFormProps> = ({ dvkey, dvvalue, afterEdit }) => {
  const { dir, vendor } = dvkey
  const { comments, state } = dvvalue

  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<EditFormFormData>({
    defaultValues: {
      comments,
      state
    }
  })

  const onSubmit = (data: EditFormFormData) => {
    window.dvApi.setSync(dvkey, {
      comments: data.comments,
      state: data.state
    })
    afterEdit()
  }

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        bgcolor: 'background.paper',
        boxShadow: 24,
        left: '50%',
        p: 2,
        position: 'absolute',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400
      }}
    >
      <EditFormHeader dir={dir} vendor={vendor} />
      <Autocomplete
        // separate component?
        defaultValue={state}
        freeSolo
        fullWidth
        title="State"
        options={Object.keys(STATE_HIGHLIGHT).sort()}
        renderInput={(params) => (
          <TextField
            label="State"
            {...mapFieldErrorAsTextFieldProps(
              errors.state,
              'State must be specified and be between 1 and 64 characters'
            )}
            {...register('state', {
              maxLength: createValidationValueMessage(64, 'State must be less than 64 characters'),
              minLength: createValidationValueMessage(1, 'State must be at least 1 character'),
              required: createValidationValueMessage(true, 'State must be specified')
            })}
            {...params}
          />
        )}
      />
      <TextField
        fullWidth
        label="Notes"
        maxRows={15}
        minRows={5}
        multiline
        {...mapFieldErrorAsTextFieldProps(
          errors.comments,
          'Comments must be less than 2048 characters'
        )}
        {...register('comments', {
          maxLength: createValidationValueMessage(
            2048,
            'Comments must be less than 2048 characters'
          )
        })}
      />
      <Submit>Save</Submit>
    </Form>
  )
}

export { type EditFormProps }
export default EditForm
