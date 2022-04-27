import React from 'react'
import { SecondaryTitle } from '../titles';
import { Link } from './../link';

function Footer() {
  return (
      <>
        <div className="bg-white">
            <footer className="container flex flex-col justify-between items-center px-6 py-10 m-auto space-y-8 md:items-start md:flex-row md:space-y-8 space-x-4">
                <div className="flex flex-col items-center flex-1 justify-between space-y-6 md:flex-col m-auto md-y-0 md:items-start">
                    <Link name="Logo" url={"/"} image={"/assets/logo.svg"} />
                    <p className='text-sm text-textSecondary font-regular'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut accusamus adipisci nisi quasi.</p>
                    <div className="flex flex-col space-y-4">
                        <h1 className="text-textPrimary font-bold">Get M-Epesi</h1>
                        <Link name="Play Store" blank url="#" image={"/assets/playstore.svg"} />
                    </div>
                </div>

                <div className="flex flex-col items-center flex-1  justify-between space-y-6 md-y-0 m-auto md:items-start">
                    <SecondaryTitle text="Our Products"/>
                    <p className="text-sm text-textSecondary font-regular">M-Epesi App</p>
                    <p className="text-sm text-textSecondary font-regular">Mobitill Epesi</p>
                    <p className="text-sm text-textSecondary font-regular">SME Payroll - Mapato</p>
                    <p className="text-sm text-textSecondary font-regular">Mobitill Point of Sale</p>
                    <p className="text-sm text-textSecondary font-regular">Epesi Tap & Go Cashless Card</p>
                    <p className="text-sm text-textSecondary font-regular">Epesi Scheduling</p>
                </div>

                <div className="flex flex-col items-center flex-1 justify-between space-y-6  md-y-0 md:items-start">
                    <SecondaryTitle text="Company"/>
                    <a href='/news' className="text-sm text-textSecondary font-regular hover:text-textPrimary">News</a>
                    <a href='/clients' className="text-sm text-textSecondary font-regular hover:text-textPrimary">Partners</a>
                    <a href='/about' className="text-sm text-textSecondary font-regular hover:text-textPrimary">About</a>
                    <a href='/careers' className="text-sm text-textSecondary font-regular hover:text-textPrimary">Careers</a>
                </div>

                <div className="flex flex-col items-center  justify-between space-y-6 sm-y-0 md:items-start">
                    <SecondaryTitle text="Get in touch"/>
                    <p className="text-sm text-textSecondary font-regular">Phone: +254 711 520 705</p>
                    <p className="text-sm text-textSecondary font-regular">communications@dataintegrated.co.ke</p>
                    <p className="text-sm text-textSecondary font-regular">Avon Centre, 2nd Floor, Industrial Area</p>
                    <p className="text-sm text-textSecondary font-regular">P.O Box 17615 - 00500 Enterprise Rd, Nairobi</p>
                </div>

            </footer>
            
        </div>
        <div className='bg-defaultWhite p-6'>
            <div className='container flex flex-col justify-between items-center space-y-3 mx-auto md:flex-row'>
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
    </>
  )
}

export default Footer