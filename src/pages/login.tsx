import Layout from '../components/layout'
import { useState } from 'react'
import { useAuth } from 'reactfire'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import { useRouter } from 'next/router'

const LoginPage = () => {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [message, setMessage] = useState(null)

  const auth = useAuth()

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleSignupSubmit = (e) => {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredentials) => {
        setError(null)
        setMessage(`Created user: ${userCredentials.user.email}`)
        await router.push('/user')
      })
      .catch((error) => {
        setMessage(null)
        setError(error.message)
      })
  }

  const handleSigninSubmit = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredentials) => {
        setError(null)
        setMessage(`Signed in as user: ${userCredentials.user.email}`)
        await router.push('/user')
      })
      .catch((error) => {
        setMessage(null)
        setError(error.message)
      })
  }

  return (
    <Layout>
      <div className="flex flex-col justify-center content-center text-center p-10 pb-20">
        <h1 className="text-6xl">Login</h1>
        <form onSubmit={handleSigninSubmit}>
          <input
            className="outline-none p-2 w-[30ch] max-w-full border-b-2 border-blue-500"
            type="text"
            placeholder="Email"
            name="email"
            onChange={handleEmailChange}
          />
          <br />
          <input
            className="outline-none p-2 w-[30ch] max-w-full border-b-2 border-orange-500"
            type="password"
            placeholder="Password"
            name="password"
            onChange={handlePasswordChange}
          />
          <br />
          <div className="flex justify-center gap-2 ">
            <button
              type="button"
              onClick={handleSignupSubmit}
              className="mt-5 bg-accent-1 border border-accent-1 border-1 text-white font-bold px-5 py-2 pointer-cursor "
            >
              REGISTER
            </button>
            <button
              type="submit"
              className="mt-5 bg-white border border-accent-1 border-1 text-orange-500 font-bold px-5 py-2 pointer-cursor "
            >
              SIGN IN
            </button>
          </div>
        </form>
        <div className="flex justify-center pt-2">
          {message && (
            <span className="bg-green-500 text-white font-bold px-5 py-2 ">
              {message}
            </span>
          )}
          {error && (
            <span className="text-red-500 font-bold px-5 py-2">❗️{error}</span>
          )}
        </div>
      </div>
    </Layout>
  )
}

export default LoginPage
