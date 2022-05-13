import React from 'react'
import {Header} from "../header"
import {Navbar} from "../navbar"
import {Footer} from "../footer"
import  Container  from './Container'

type LayoutProps = {
  children: React.ReactNode
}

const Layout: React.FunctionComponent<LayoutProps> = ({children}: LayoutProps) => {
  return (
    <>
      <Header />
      <Navbar />
      <div className='mt-[100px]'>
        {children}
      </div>
      
      <Footer />
    </>
  )
}

export default Layout