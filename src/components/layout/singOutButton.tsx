import { useAuth } from 'reactfire'

const SignOutButton = () => {
  const auth = useAuth()

  const handleSignOut = async () => {
    await auth.signOut()
  }

  return <button onClick={handleSignOut}>Sign out</button>
}

export default SignOutButton
