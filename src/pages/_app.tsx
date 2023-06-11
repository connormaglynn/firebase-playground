import '../styles/index.css'
import { config } from '../config'
import { AuthProvider, FirebaseAppProvider, useFirebaseApp } from 'reactfire'
import { connectAuthEmulator, getAuth } from 'firebase/auth'
import { StrictMode, useEffect } from 'react'

const FirebaseProviders = ({ children }) => {
  const app = useFirebaseApp()
  const auth = getAuth(app)

  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      connectAuthEmulator(auth, 'http://localhost:9099')
    }
  }, [])

  return <AuthProvider sdk={auth}>{children}</AuthProvider>
}

const App = ({ Component, pageProps }) => {
  return (
    <>
      <StrictMode>
        <FirebaseAppProvider firebaseConfig={config.firebase}>
          <FirebaseProviders>
            <Component {...pageProps} />
          </FirebaseProviders>
        </FirebaseAppProvider>
      </StrictMode>
    </>
  )
}
export default App
