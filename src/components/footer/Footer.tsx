import React from 'react'
import { Link } from './../link';

function Footer() {
  return (
      <>
        <div className="bg-primary">
            <footer className="container flex flex-col justify-between items-center py-3 m-auto space-y-3 md:items-start md:flex-row md:space-y-3 space-x-4">
                <div className="flex flex-col p-5 md:p-0 items-center flex-1 justify-between space-y-3 md:flex-col m-auto md-y-0 md:items-start">
                    <Link name="Logo" url={"/"} image={"/assets/logo.svg"} />
                    <p className='text-sm text-textPrimary'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut accusamus adipisci nisi quasi.</p>
                    <div className="flex flex-col space-y-4">
                        <h3 className="text-lg font-SatoshiBold">Get M-Epesi</h3>
                        <Link name="Play Store" blank url="#" image={"/assets/playstore.svg"} />
                    </div>
                </div>

                <div className="flex flex-col p-5 md:p-0 items-center flex-1 justify-between  space-y-3 md-y-0 md:items-start">
                    <h3 className='text-lg font-SatoshiBold'>Our Products</h3>
                    <p className="text-sm text-textPrimary">M-Epesi App</p>
                    <p className="text-sm text-textPrimary">Mobitill Epesi</p>
                    <p className="text-sm text-textPrimary">SME Payroll - Mapato</p>
                    <p className="text-sm text-textPrimary">Mobitill Point of Sale</p>
                    <p className="text-sm text-textPrimary">Epesi Tap & Go Cashless Card</p>
                    <p className="text-sm text-textPrimary">Epesi Scheduling</p>
                </div>

                <div className="flex flex-col p-5 md:p-0 items-center flex-1 justify-between space-y-3  md-y-0 md:items-start">
                    <h3 className='text-lg font-SatoshiBold'>Company</h3>
                    <a href='/news' className="text-sm text-textPrimary">News</a>
                    <a href='/clients' className="text-sm text-textPrimary">Partners</a>
                    <a href='/about' className="text-sm text-textPrimary">About</a>
                    <a href='/careers' className="text-sm text-textPrimary">Careers</a>
                </div>

                <div className="flex flex-col p-5 md:p-0 items-center  justify-between space-y-3 sm-y-0 md:items-start">
                    <h3 className='text-lg font-SatoshiBold'>Get in touch</h3>
                    <p className="text-sm text-textPrimary">Phone: +254 711 520 705</p>
                    <p className="text-sm text-textPrimary">communications@dataintegrated.co.ke</p>
                    <p className="text-sm text-textPrimary">Avon Centre, 2nd Floor, Industrial Area</p>
                    <p className="text-sm text-textPrimary">P.O Box 17615 - 00500 Enterprise Rd, Nairobi</p>
                    <div className="hidden space-x-6 mt-3 md:flex items-center">
                        <Link blank url='https://linked.com' name='LinkedIn' image={'/assets/linkedin.svg'}/>
                        <Link blank url='https://linked.com' name='YouTube' image={'/assets/youtube.svg'}/>
                        <Link blank url='https://linked.com' name='Twitter' image={'/assets/twitter.svg'}/>
                        <Link blank url='https://linked.com' name='Instagram' image={'/assets/instagram.svg'}/>
                        <Link blank url='https://linked.com' name='Facebook' image={'/assets/facebook.svg'}/>
                    </div>
                </div>

                

            </footer>
            
        <div className='bg-white p-2'>
            <div className='container flex flex-col justify-between items-center space-y-3 mx-auto md:flex-row px-5 md:px-0'>
                <p className='text-xs text-textPrimary'>{new Date().getFullYear()} Data Integrated Ltd. All Rights Reserved</p>
                <div className='flex gap-2 items-center'>
                    <a href='' className='text-xs text-textPrimary hover:text-primary'>Privacy Policy</a>
                    <span className='text-4xl -mt-6'>.</span>
                    <a href='' className='text-xs text-textPrimary hover:text-primary'>Terms of Use</a>
                    <span className='text-4xl -mt-6'>.</span>
                    <a href='' className='text-xs text-textPrimary hover:text-primary'>Credits</a>
                </div>

            </div>
        </div>
        </div>
    </>
  )
}

export default Footer