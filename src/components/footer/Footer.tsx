/* eslint-disable @next/next/no-html-link-for-pages */
import React from 'react'
// import { Socials } from '../socials';
import { Link } from './../link';

function Footer() {
    return (
        <>
            <div className="">
                <div className='container'>
                    <h1 className='text-center md:text-left'>Soulful<br /> Solutions</h1>
                </div>
                <footer className="container flex flex-col items-center justify-between py-2 m-auto space-x-4 space-y-3 md:py-12 md:items-start md:flex-row md:space-y-3">


                    <div className="flex flex-col items-center justify-between flex-1 p-5 space-y-3 md:p-0 md-y-0 md:items-start">
                        <ul>
                            <li>Who we are</li>
                            <li>Products & Solutions</li>
                            <li>Clients & Partners</li>
                            <li>News</li>
                            <li>Career</li>
                            <li>Talk to us</li>
                        </ul>

                    </div>
                    <div className="flex flex-col items-center justify-between p-5 space-y-3 md:p-0 sm-y-0 md:items-start">
                        <ul className='text-sm text-textPrimary'>
                            <li>Data Integrated Limited</li>
                            <li>P.O Box 17615-00500</li>
                            <li>Enterprise Road</li>
                            <li>Nairobi, Kenya</li>
                        </ul>


                    </div>

                    <div className="flex flex-col items-center justify-between flex-1 p-5 space-y-3 md:p-0 md-y-0 md:items-start">
                        <ul>
                            <li><a href='/terms' className="text-sm text-textPrimary">Terms & Conditions</a></li>
                            <li><a href='/policies' className="text-sm text-textPrimary">Rights & Policies</a></li>
                            <li><a href='/credits' className="text-sm text-textPrimary">Credits</a></li>

                        </ul>
                    </div>


                    <div className="flex md:items-end">
                        <Link name="Logo" url={"/"} image={"/assets/logo.svg"} />
                    </div>
                </footer>

            </div>
        </>
    )
}

export default Footer
