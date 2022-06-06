import React from 'react'
import { Socials } from '../socials';
import { Link } from './../link';

function Footer() {
    return (
        <>
            <div className="">
                <footer className="container flex flex-col items-center justify-between py-3 m-auto space-x-4 space-y-3 md:py-12 md:items-start md:flex-row md:space-y-3">
                    <div className="flex flex-col items-center justify-between flex-1 p-5 m-auto space-y-3 md:p-0 md:flex-col md-y-0 md:items-start">
                        <Link name="Logo" url={"/"} image={"/assets/logo.svg"} />
                        <p className='text-sm text-textPrimary'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut accusamus adipisci nisi quasi.</p>
                        <div className="flex flex-col space-y-4">
                            <h4 className="text-lg font-SatoshiBold">Get M-Epesi</h4>
                            <Link name="Play Store" blank url="#" image={"/assets/playstore.svg"} />
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-between flex-1 p-5 space-y-3 md:p-0 md-y-0 md:items-start">
                        <h4 className='text-lg font-SatoshiBold'>Our Products</h4>
                        <p className="text-sm text-textPrimary">M-Epesi App</p>
                        <p className="text-sm text-textPrimary">Mobitill Epesi</p>
                        <p className="text-sm text-textPrimary">SME Payroll - Mapato</p>
                        <p className="text-sm text-textPrimary">Mobitill Point of Sale</p>
                        <p className="text-sm text-textPrimary">Epesi Tap & Go Cashless Card</p>
                        <p className="text-sm text-textPrimary">Epesi Scheduling</p>
                    </div>

                    <div className="flex flex-col items-center justify-between flex-1 p-5 space-y-3 md:p-0 md-y-0 md:items-start">
                        <h4 className='text-lg font-SatoshiBold'>Company</h4>
                        <a href='/news' className="text-sm text-textPrimary">News</a>
                        <a href='/clients' className="text-sm text-textPrimary">Partners</a>
                        <a href='/about' className="text-sm text-textPrimary">About</a>
                        <a href='/careers' className="text-sm text-textPrimary">Careers</a>
                    </div>

                    <div className="flex flex-col items-center justify-between p-5 space-y-3 md:p-0 sm-y-0 md:items-start">
                        <h4 className='text-lg font-SatoshiBold'>Get in touch</h4>
                        <p className="text-sm text-textPrimary">Phone: +254 711 520 705</p>
                        <p className="text-sm text-textPrimary">communications@dataintegrated.co.ke</p>
                        <p className="text-sm text-textPrimary">Avon Centre, 2nd Floor, Industrial Area</p>
                        <p className="mb-3 text-sm text-textPrimary">P.O Box 17615 - 00500 Enterprise Rd, Nairobi</p>
                        <Socials items='end' />
                    </div>
                </footer>

                <div className='p-2 bg-white'>
                    <div className='container flex flex-col items-center justify-between px-5 mx-auto space-y-3 md:flex-row md:px-0'>
                        <p className='text-xs text-textPrimary'>{new Date().getFullYear()} &copy; Data Integrated Ltd. All Rights Reserved</p>
                        <div className='flex items-center gap-2'>
                            <a href='/policy' className='text-xs text-textPrimary hover:text-secondary'>Privacy Policy</a>
                            <span className='-mt-6 text-4xl'>.</span>
                            <div className='flex items-center gap-2'>
                                <a href='' className='text-xs text-textPrimary hover:text-secondary'>Privacy Policy</a>
                                <span className='-mt-6 text-4xl'>.</span>
                                <a href='/terms' className='text-xs text-textPrimary hover:text-secondary'>Terms of Use</a>
                                <span className='-mt-6 text-4xl'>.</span>
                                <a href='' className='text-xs text-textPrimary hover:text-secondary'>Credits</a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
