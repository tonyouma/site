import { useState } from 'react'
import { Socials } from '../socials';
import { Link } from './../link'


function Navbar() {
  const [open, setOpen] = useState<boolean>(false)


  return (
    <nav id='nav' className=" w-[100%] bg-white top-0  ">
      <div id="navbar" className="container flex items-center justify-between px-5 pt-10 ease-in md:px-0">

        <div id="navbar_links" className="hidden ml-0 space-x-6 space-x-reverse transition-300 md:flex">
          <Link url='/' name='' />
          <Link url='/about-us' name='Who we are' />
          <Link url='/products' name='Products & Solutions' />
          <Link url='/partners' name='Partners' />
          <Link url='/news' name='News' />
          <Link url='/careers' name='Careers' />
          <Link url='/contact' name='Talk to Us' />
        </div>

        {/* <div className="hidden md:block">
          <Socials items='end'/>
        </div> */}

        <button onClick={() => setOpen(!open)} id="menu-btn" className="block hamburger md:hidden">
          <img src="/assets/menu.svg" alt="" />
        </button>
        {open &&
          <div id='menu' className="absolute flex flex-col items-start self-start px-8 py-8 mt-10 space-y-6 font-bold bg-white md:hidden top-12 w-max md:w-auto left-5 md:left-6 drop-shadow-md">
            <Link url='/' name='' />
            <Link url='/about-us' name='Who we are' />
            <Link url='/products' name='Products & Solutions' />
            <Link url='/partners' name='Partners' />
            <Link url='/news' name='News' />
            <Link url='/careers' name='Careers' />
            <Link url='/contact' name='Talk to Us' />
            <Socials items='end' />
          </div>
        }
        <div className="pt-2 ">
          <Link id={'logo'} name={"Logo"} url={"/"} image={"/assets/logo.svg"} />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
