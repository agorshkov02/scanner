import Form from '@components/forms/Form'
import Submit from '@components/forms/Submit'
import Autocomplete from '@mui/material/Autocomplete'
import Chip from '@mui/material/Chip'
import TextField from '@mui/material/TextField'
import { createValidationValueMessage, mapFieldErrorAsTextFieldProps } from '@utils/forms'
import { FC, useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import vendorsfeed from '../../../assets/vendors-feed.json'

type VendorsSettingsFormData = {
  vendorCandidate: string
}

const VendorsSettingsForm: FC = () => {
  const [vendors, setVendors] = useState<string[]>([])

  useEffect(() => {
    const vendors = window.vendorsApi.getVendorsSync()
    setVendors(() => vendors)
  }, [])

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<VendorsSettingsFormData>({
    defaultValues: {
      vendorCandidate: ''
    }
  })

  const onSubmit: SubmitHandler<VendorsSettingsFormData> = (data: VendorsSettingsFormData) => {
    window.vendorsApi.addVendorSync(data.vendorCandidate)
    setVendors(() => window.vendorsApi.getVendorsSync())
  }

  const deleteVendor = (vendorCandidate: string) => {
    if (vendorCandidate) {
      window.vendorsApi.deleteVendorSync(vendorCandidate)
      setVendors(() => window.vendorsApi.getVendorsSync())
    }
  }

  return (
    <>
      <Form direction="row" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 2 }}>
        <Autocomplete
          // separate component?
          defaultValue={''}
          freeSolo
          fullWidth
          options={vendorsfeed.vendors.sort()}
          renderInput={(params) => (
            <TextField
              label="Vendor"
              {...mapFieldErrorAsTextFieldProps(
                errors.vendorCandidate,
                'Vendor must be specified, be less than 64 character and at least 1 character'
              )}
              {...register('vendorCandidate', {
                maxLength: createValidationValueMessage(
                  64,
                  'Vendor length must be less than 64 characters'
                ),
                minLength: createValidationValueMessage(
                  1,
                  'Vendor length must be at least 1 character'
                ),
                required: createValidationValueMessage(true, 'Vendor must be specified')
              })}
              {...params}
            />
          )}
        />
        <Submit sx={{ mb: 3 }}>Add</Submit>
      </Form>
      <Form direction="row" sx={{ mt: 2 }}>
        {vendors.map((vendor, i) => (
          <Chip key={`${vendor}:${i}`} label={vendor} onDelete={() => deleteVendor(vendor)} />
        ))}
      </Form>
    </>
  )
}

export default VendorsSettingsForm
