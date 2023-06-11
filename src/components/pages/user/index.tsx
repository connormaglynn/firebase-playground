import { useAuth } from 'reactfire'

const User = () => {
  const auth = useAuth()
  const currentUser = auth.currentUser

  return (
    <div className="flex px-20 py-20">
      <h1>
        {' '}
        {currentUser
          ? `Hello ${currentUser.email}! 👋`
          : `No user signed in 😢`}
      </h1>
    </div>
  )
}

export default User
