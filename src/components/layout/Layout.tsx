import React from 'react'
import {Header} from "../header"
import {Navbar} from "../navbar"
import {Footer} from "../footer"

type LayoutProps = {
  children: React.ReactNode
}

const Layout: React.FunctionComponent<LayoutProps> = ({children}: LayoutProps) => {
  return (
    <>
      <Header />
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout