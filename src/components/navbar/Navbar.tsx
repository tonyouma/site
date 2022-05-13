import React , { useState, useEffect } from 'react'
import { Link } from './../link'


function Navbar() {
  const [open, setOpen] = useState<boolean>(false)

  useEffect(()=>{
    window.onscroll = function() {scrollFunction()};
  }, [])

  function scrollFunction() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
      document.getElementById("logo")!.style.maxWidth = "100px";
      document.getElementById("navbar")!.classList.remove("p-5");
      document.getElementById("nav")!.classList.remove("bg-white");
      document.getElementById("nav")!.classList.add("bg-primary");
      document.getElementById("navbar")!.classList.add("p-2");
    } else {
      document.getElementById("logo")!.style.maxWidth=("100%");
      document.getElementById("nav")!.classList.add("bg-white");
      document.getElementById("navbar")!.classList.remove("p-2");
      document.getElementById("navbar")!.classList.add("p-5");
    }
  }
  
  return (
    <nav id='nav' className=" fixed w-[100%] bg-white z-10 top-0  ">
      <div id="navbar" className="container ease-in p-5 md:px-0 flex items-center justify-between">
        <div className="pt-2">
          <Link id={'logo'} name={"Logo"} url={"/"} image={"/assets/logo.svg"} />
        </div>
        <div id="navbar_links" className="hidden transition-300 space-x-6  md:flex">
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