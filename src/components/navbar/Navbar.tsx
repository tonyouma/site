import { useEffect, useState } from 'react';
import { Socials } from '../socials';
import { Link } from './../link';


function Navbar() {
  const [open, setOpen] = useState<boolean>(false)

  useEffect(() => {
    window.onscroll = function () { scrollFunction() };
  }, [])

  function scrollFunction() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
      document.getElementById("logo")!.style.maxWidth = "100px";
      document.getElementById("navbar")!.classList.remove("p-5");
      document.getElementById("nav")!.classList.remove("bg-white");
      document.getElementById("nav")!.classList.add("bg-primary");
      document.getElementById("navbar")!.classList.add("p-2");
    } else {
      document.getElementById("logo")!.style.maxWidth = ("100%");
      document.getElementById("nav")!.classList.add("bg-white");
      document.getElementById("navbar")!.classList.remove("p-2");
      document.getElementById("navbar")!.classList.add("p-5");
    }
  }

  return (
    <nav id='nav' className=" fixed w-[100%] bg-white z-20 top-0  ">
      <div id="navbar" className="container flex items-center justify-between p-5 ease-in md:px-0">
        <div className="">
          <Socials items='end' />
        </div>
        <div id="navbar_links" className="hidden space-x-6 transition-300 md:flex">
          <Link url='/' name='Who we are' />
          <Link url='/products' name='Products & Solutions' />
          <Link url='/partners' name='Partners' />
          <Link url='/news' name='News' />
          <Link url='/careers' name='Careers' />
          <Link url='/contact' name='Talk to Us' />
        </div>
        <div className="hidden md:block">
          <Link id={'logo'} name={"Logo"} url={"/"} image={"/assets/logo.svg"} />

        </div>

        <button onClick={() => setOpen(!open)} id="menu-btn" className="block hamburger md:hidden">
          <img src="/assets/menu.svg" alt="" />
        </button>
        {open &&
          <div id='menu' className="absolute flex flex-col items-end self-end px-8 py-8 mt-10 space-y-6 font-bold bg-white md:hidden top-12 w-max md:w-auto right-5 md:right-6 md:left-6 drop-shadow-md">
            <Link url='/' name='Who we are' />
            <Link url='/products' name='Products & Solutions' />
            <Link url='/partners' name='Partners' />
            <Link url='/news' name='News' />
            <Link url='/careers' name='Careers' />
            <Link url='/contact' name='Talk to Us' />
            <Socials items='end' />
          </div>
        }
      </div>
    </nav>
  )
}

export default Navbar
