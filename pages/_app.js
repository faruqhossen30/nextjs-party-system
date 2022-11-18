import '../styles/globals.css'
import '../styles/front.css'
import 'react-loading-skeleton/dist/skeleton.css'
import UserContext from '../contexts/UserContext'
import { AuthContextProvider } from '../contexts/AuthContext';

function MyApp({ Component, pageProps }) {

  const user = '';

  return (
    <AuthContextProvider>
      <Component {...pageProps} />
    </AuthContextProvider>
  )
}

export default MyApp
