import { AuthProvider } from '@/contexts/AuthContext'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import useRouteElements from './hooks/useRouteElements'

function App() {
  const routeElements = useRouteElements()
  return (
    <AuthProvider>
      <div>
        {routeElements}
        <ToastContainer />
      </div>
    </AuthProvider>
  )
}

export default App
