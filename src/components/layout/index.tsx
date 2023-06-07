import Meta from './meta'
import Header from './header'

type Props = {
  children: React.ReactNode
}

export default ({ children }: Props) => {
  return (
    <>
      <Meta />
      <Header />
      {children}
    </>
  )
}
