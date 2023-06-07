import Meta from './meta'
import Header from './header'
import { Component, ReactNode } from 'react'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta />
      <Header />
      {children}
    </>
  )
}

export default Layout
