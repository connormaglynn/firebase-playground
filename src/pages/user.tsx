import User from '../components/pages/user'
import Layout from '../components/layout'
import { useRouter } from 'next/router'
import { useSigninCheck } from 'reactfire'
import { config } from '../config'
import { useLayoutEffect } from 'react'

const UserPage = () => {
  const router = useRouter()
  const { data: signInCheckResult } = useSigninCheck()

  useLayoutEffect(() => {
    if (!signInCheckResult?.signedIn) {
      router.push(config.auth.logout.redirectLocation)
    }
  }, [router, signInCheckResult])

  return (
    <Layout>
      <User />
    </Layout>
  )
}

export default UserPage
