import { GoogleAuthProvider, signInWithPopup } from '@firebase/auth'
import { useAuth } from 'reactfire'

import { FcGoogle } from 'react-icons/fc'
import { useRouter } from 'next/router'
import { config } from '../../config'

const GoogleProviderButton = ({ setError }) => {
  const auth = useAuth()
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const provider = new GoogleAuthProvider()
    provider.addScope('profile')
    provider.addScope('email')

    try {
      await signInWithPopup(auth, provider)
      await router.push(config.auth.login.redirectLocation)
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <div className="flex justify-center flex-row gap-5 pt-2">
      <button
        onClick={handleSubmit}
        className="flex justify-center align-middle px-3 py-2 pointer-cursor border border-blue-500 border-1"
      >
        <FcGoogle className="h-full" size="2em" />
        <span className="p-2 font-bold">SIGN IN WITH GOOGLE</span>
      </button>
    </div>
  )
}

export default GoogleProviderButton
