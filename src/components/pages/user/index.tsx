import { useAuth, useSigninCheck } from 'reactfire'

const User = () => {
  const auth = useAuth()
  const { status, data: signInCheckResult } = useSigninCheck()

  if (status === 'loading') {
    return <h1>Loading...</h1>
  }

  if (!signInCheckResult.signedIn) {
    return <h1>Need to be signed in 🔒</h1>
  }

  return <h1>Hello {auth?.currentUser?.email}! 👋</h1>
}

export default User
