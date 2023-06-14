import { useState } from 'react'
import { useAuth } from 'reactfire'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import { useRouter } from 'next/router'
import { config } from '../../config'

const EmailAndPasswordForm = ({ setError }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const auth = useAuth()
  const router = useRouter()

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleSignupSubmit = async (e) => {
    e.preventDefault()
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      await router.push(config.auth.login.redirectLocation)
    } catch (error) {
      setError(error.message)
    }
  }

  const handleSigninSubmit = async (e) => {
    e.preventDefault()
    try {
      await signInWithEmailAndPassword(auth, email, password)
      await router.push(config.auth.login.redirectLocation)
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <form className="py-3" onSubmit={handleSigninSubmit}>
      <input
        className="outline-none p-2 w-[30ch] max-w-full border-b-2 border-blue-500"
        type="text"
        placeholder="Email"
        name="email"
        autoComplete="username"
        onChange={handleEmailChange}
      />
      <br />
      <input
        className="outline-none p-2 w-[30ch] max-w-full border-b-2 border-orange-500"
        type="password"
        placeholder="Password"
        name="password"
        autoComplete="current-password"
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
  )
}

export default EmailAndPasswordForm
