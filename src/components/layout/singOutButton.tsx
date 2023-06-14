import { useAuth } from 'reactfire'
import { useRouter } from 'next/router'
import { config } from '../../config'

const SignOutButton = () => {
  const auth = useAuth()
  const router = useRouter()

  const handleSignOut = async () => {
    await auth.signOut()
    await router.push(config.auth.logout.redirectLocation)
  }

  return <button onClick={handleSignOut}>Sign out</button>
}

export default SignOutButton
