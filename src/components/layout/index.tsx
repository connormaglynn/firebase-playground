import Meta from './meta'
import Header from './header'

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Header />
      {children}
    </>
  )
}

export default Layout
