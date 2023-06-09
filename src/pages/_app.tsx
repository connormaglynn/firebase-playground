import '../styles/index.css'
import { config } from '../config'
import {
  AnalyticsProvider,
  AuthProvider,
  FirebaseAppProvider,
  PerformanceProvider,
  useFirebaseApp,
} from 'reactfire'
import { connectAuthEmulator, getAuth } from 'firebase/auth'
import { StrictMode, useEffect } from 'react'
import { getAnalytics } from '@firebase/analytics'
import { getPerformance } from '@firebase/performance'

const FirebaseProviders = ({ children }) => {
  const app = useFirebaseApp()
  const analytics = typeof window !== 'undefined' ? getAnalytics(app) : false
  const performance =
    typeof window !== 'undefined' ? getPerformance(app) : false
  const auth = getAuth(app)

  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      connectAuthEmulator(auth, 'http://localhost:9099')
    }
  }, [auth])

  if (analytics && performance)
    return (
      <AnalyticsProvider sdk={analytics}>
        <PerformanceProvider sdk={performance}>
          <AuthProvider sdk={auth}>{children}</AuthProvider>
        </PerformanceProvider>
      </AnalyticsProvider>
    )
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
