import React from 'react'
import { Link } from './../link';
function Footer() {
    return (
        <>
            <div className='container'>
                <h2 className='text-center md:text-left text-secondary'>Soulful<br /> Solutions</h2>
            </div>
            <footer className="container flex flex-col items-center justify-between py-2 m-auto space-x-4 space-y-3 md:py-12 md:items-start md:flex-row md:space-y-3">
                <div className="flex flex-col items-center justify-between flex-1 p-5 space-y-2 md:p-0 md-y-0 md:items-start">
                    <Link url='/' name='' />
                    <Link url='/about-us' name='Who we are' />
                    <Link url='/products' name='Products & Solutions' />
                    <Link url='/partners' name='Partners' />
                    <Link url='/news' name='News' />
                    <Link url='/careers' name='Careers' />
                    <Link url='/contact' name='Talk to Us' />
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
                    <Link url='/terms' name='Terms & Conditions' />
                    <Link url='/policy' name='Rights & Policies' />
                    <Link url='/credits' name='Credits' />
                </div>

                <div className="flex">
                    <Link name="Logo" url={"/"} image={"/assets/logo.svg"} />
                </div>
            </footer>
        </>
    )
}

export default Footer
