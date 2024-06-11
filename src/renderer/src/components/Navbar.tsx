import ScannerIconButton from '@components/iconButtons/ScannerIconButton'
import SettingsIconButton from '@components/iconButtons/SettingsIconButton'
import { Stack } from '@mui/material'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar: FC = () => {
  const navigate = useNavigate()

  return (
    <Stack direction="row" gap={1} justifyContent="space-between">
      <ScannerIconButton onClick={() => navigate('/')} title="" />
      <SettingsIconButton onClick={() => navigate('/settings')} title="" />
    </Stack>
  )
}

export default Navbar
