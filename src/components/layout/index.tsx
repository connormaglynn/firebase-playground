import Meta from './meta'
import Header from './header'

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Header />
      <main>{children}</main>
    </>
  )
}

export default Layout
