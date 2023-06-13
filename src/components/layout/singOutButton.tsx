import { useAuth } from 'reactfire'
import { useRouter } from 'next/router'

const SignOutButton = () => {
  const auth = useAuth()
  const router = useRouter()

  const handleSignOut = async () => {
    await auth.signOut()
    await router.push('/')
  }

  return <button onClick={handleSignOut}>Sign out</button>
}

export default SignOutButton
