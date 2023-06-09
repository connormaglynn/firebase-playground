import { GoogleAuthProvider, signInWithPopup } from '@firebase/auth'
import { useAuth } from 'reactfire'
import { useRouter } from 'next/router'
import { config } from '../../config'
import { FcGoogle } from 'react-icons/fc'

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
        className="flex justify-left px-3 py-2 pointer-cursor border border-google-blue border-1 min-w-[30ch]"
      >
        <FcGoogle className="h-full text-google-blue" size="2em" />
        <span className="p-2 font-bold w-full text-center text-google-blue">
          SIGN IN WITH GOOGLE
        </span>
      </button>
    </div>
  )
}

export default GoogleProviderButton
