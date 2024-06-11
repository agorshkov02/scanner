import Navbar from '@components/Navbar'
import ScannerView from '@components/views/ScannerView'
import SettingsView from '@components/views/SettingsView'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import { HashRouter, Outlet, Route, Routes } from 'react-router-dom'

const App = (): JSX.Element => {
  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Box>
              <Box sx={{ p: 2 }}>
                <Navbar />
              </Box>
              <Divider />
              <Box sx={{ p: 2 }}>
                <Outlet />
              </Box>
            </Box>
          }
        >
          <Route path="/" element={<ScannerView />} index />
          <Route path="/settings" element={<SettingsView />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
