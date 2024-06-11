import ScanSettingsForm from '@components/forms/settings/ScannerSettingsForm'
import VendorsSettingsForm from '@components/forms/settings/VendorsSettingsForm'
import { FC } from 'react'

const SettingsView: FC = () => {
  return (
    <>
      <ScanSettingsForm />
      <VendorsSettingsForm />
    </>
  )
}

export default SettingsView
