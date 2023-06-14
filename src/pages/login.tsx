import Layout from '../components/layout'
import EmailAndPasswordForm from '../components/auth/emailAndPasswordForm'
import GoogleProviderButton from '../components/auth/googleProviderButton'
import { useState } from 'react'

const LoginPage = () => {
  const [error, setError] = useState(null)

  return (
    <Layout>
      <div className="flex flex-col justify-center content-center text-center p-10">
        <h1 className="text-6xl">Login</h1>
        <div className="flex justify-center pt-2 pb-2">
          {error && <span className="text-red-500 font-bold">❗️{error}</span>}
        </div>
        <EmailAndPasswordForm setError={setError} />
        <GoogleProviderButton setError={setError} />
      </div>
    </Layout>
  )
}

export default LoginPage
