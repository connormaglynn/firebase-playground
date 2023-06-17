import Layout from '../components/layout'
import EmailAndPasswordForm from '../components/auth/emailAndPasswordForm'
import GoogleProviderButton from '../components/auth/googleProviderButton'
import { useEffect, useState } from 'react'
import FacebookProviderButton from '../components/auth/facebookProviderButton'
import { useSigninCheck } from 'reactfire'
import { useRouter } from 'next/router'
import { config } from '../config'

const LoginPage = () => {
  const [error, setError] = useState(null)
  const router = useRouter()
  const { status, data: signInCheckResult } = useSigninCheck()

  useEffect(() => {
    if (signInCheckResult?.signedIn) {
      router.push(config.auth.login.redirectLocation)
    }
  }, [signInCheckResult])

  if (status === 'loading') {
    return <h1>Loading...</h1>
  }

  return (
    <Layout>
      <div className="flex flex-col justify-center content-center text-center p-10">
        <h1 className="text-6xl">Login</h1>
        <div className="flex justify-center pt-2 pb-2">
          {error && <span className="text-red-500 font-bold">❗️{error}</span>}
        </div>
        <EmailAndPasswordForm setError={setError} />
        <p className="text-gray-400">or</p>
        <FacebookProviderButton setError={setError} />
        <GoogleProviderButton setError={setError} />
      </div>
    </Layout>
  )
}

export default LoginPage
