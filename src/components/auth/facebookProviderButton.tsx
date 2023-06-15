import { FacebookAuthProvider, signInWithPopup } from '@firebase/auth'
import { useAuth } from 'reactfire'
import { useRouter } from 'next/router'
import { config } from '../../config'
import { BsFacebook } from 'react-icons/bs'

const FacebookProviderButton = ({ setError }) => {
  const auth = useAuth()
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const provider = new FacebookAuthProvider()
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
        className="flex justify-left px-3 py-2 pointer-cursor border border-facebook-blue border-1 bg-facebook-blue min-w-[30ch]"
      >
        <BsFacebook color="white" className="h-full" size="2em" />
        <span className="p-2 font-bold w-full text-center text-white">
          SIGN IN WITH FACEBOOK
        </span>
      </button>
    </div>
  )
}

export default FacebookProviderButton
