import React , { useState } from 'react'
import { Link } from './../link'


function Navbar() {
  const [open, setOpen] = useState<boolean>(false)
  
  return (
    <nav id="navbar" className="container relative mx-auto bg-defaultWhite p-5 md:px-0">
      <div className="flex items-center justify-between">
        <div className="pt-2">
          <Link name={"Logo"} url={"/"} image={"/assets/logo.svg"} />
        </div>
        <div className="hidden  space-x-6 md:flex">
          <Link  url='/' name='Who we are'/>
          <Link  url='/products' name='Products & Solutions'/>
          <Link  url='/partners' name='Partners'/>
          <Link  url='/news' name='News'/>
          <Link  url='/careers' name='Careers'/>
          <Link  url='/contact' name='Talk to Us'/>
        </div>

        <div className="hidden space-x-6 md:flex items-end">
          <Link blank url='https://linked.com' name='LinkedIn' image={'/assets/linkedin.svg'}/>
          <Link blank url='https://linked.com' name='YouTube' image={'/assets/youtube.svg'}/>
          <Link blank url='https://linked.com' name='Twitter' image={'/assets/twitter.svg'}/>
          <Link blank url='https://linked.com' name='Instagram' image={'/assets/instagram.svg'}/>
          <Link blank url='https://linked.com' name='Facebook' image={'/assets/facebook.svg'}/>
        </div>
        <button onClick={()=>setOpen(!open)} id="menu-btn" className="block hamburger md:hidden">
          <img src="/assets/menu.svg" alt="" />
        </button>
        {open &&
          <div id='menu' className=" md:hidden absolute flex flex-col items-end px-8 self-end py-8 mt-10 top-12 space-y-6 font-bold bg-white w-max md:w-auto  right-5 md:right-6 md:left-6 drop-shadow-md">
            <Link  url='/' name='Who we are'/>
            <Link  url='/products' name='Products & Solutions'/>
            <Link  url='/partners' name='Partners'/>
            <Link  url='/news' name='News'/>
            <Link  url='/careers' name='Careers'/>
            <Link  url='/contact' name='Talk to Us'/>
            
            <div className="flex space-x-6 items-end">
              <Link blank url='https://linked.com' name='LinkedIn' image={'/assets/linkedin.svg'}/>
              <Link blank url='https://linked.com' name='YouTube' image={'/assets/youtube.svg'}/>
              <Link blank url='https://linked.com' name='Twitter' image={'/assets/twitter.svg'}/>
              <Link blank url='https://linked.com' name='Instagram' image={'/assets/instagram.svg'}/>
              <Link blank url='https://linked.com' name='Facebook' image={'/assets/facebook.svg'}/>
            </div>
          </div>
        }
      </div>
    </nav>
  )
}

export default Navbar