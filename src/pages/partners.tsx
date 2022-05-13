import React from 'react'
import type { NextPage } from 'next'
import { investors, partners } from 'src/constants/partners'


const Partners: NextPage = () => {

  const [scroll, setScroll] = React.useState(false)
  const [forward, setForward] = React.useState(false)
  const [back, setBack] = React.useState(false)
  const [email, setEmail] = React.useState('');

  const handleScroll =(item: string, e: any)=>{
    console.log(e)
  }

  const requestDemo =()=>{
    console.log("Email: ",email)
  }
  

  return (
    <>
      <div className='container p-5 md:p-0 flex flex-col'>
        <div className="flex flex-col justify-center md:flex-row gap-4 md:gap-8 md:mb-12 my-3">
          <div className='md:flex-1 flex md:justify-end '>
            <h2  className='pr-3 md:p-6 h-fit border-r-4 md:ml-12'>Partners</h2>
          </div>
          <div className="md:flex-2 flex flex-col">
            <h2 className='py-4 '>Making headlines is good when you’re truly doing good.</h2>
            <p>From government authorities to banks and credit providers, we work with a growing number of partners with a single aim - give African SMEs a competitive edge that no one else can.</p>
          </div>
        </div>

        <h3>Solution Partners</h3>
        <div className="flex flex-wrap justify-center py-3 my-3">
          {partners.map((partner, i)=>{
            return (
              <div className='p-6' key={i}>
                <img src={`${partner.logo}`} alt="logo" />
              </div>
            )
          })}
            
        </div>

        <h3>Client Partners</h3>
        <div className="flex flex-col mx-20 justify-between py-3 my-3 md:mx-0 md:flex-row">
          <div className="flex flex-col gap-2">
            <h4 className='pb-2'>Saccos:</h4>
            <ul>
              <li className='p-1'>City Shuttle Sacco</li>
              <li className='p-1'>Obamana Sacco</li>
              <li className='p-1'>44 owners Sacco</li>
              <li className='p-1'>Globology Limited</li>
              <li className='p-1'>Mwiki Sacco</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className='pb-2'>Government Agencies:</h4>
            <ul>
              <li className='p-1'>Kenya Revenue Authority</li>
              <li className='p-1'>Rwanda Revenue Authority</li>
            </ul>
          </div>

          <div className="flex flex-col gap-2">
            <h4 className='pb-2'>Banks:</h4>
            <ul>
              <li className='p-1'>Equity Bank</li>
              <li className='p-1'>Ecobank</li>
              <li className='p-1'>Interswitch</li>
              <li className='p-1'>Spire Bank</li>
              <li className='p-1'>United Bank of Africa</li>
            </ul>
          </div>
          
        </div>

        <h3>Investors</h3>
        <div className="flex flex-wrap justify-start">
          <p className='max-w-2xl p-3 md:p-6'>From government authorities to banks and credit providers, we work with a growing number of partners with a single aim - give African SMEs a competitive edge that no one else can.</p>
          <div className="flex flex-wrap justify-center md:py-3 my-3">
            {investors.map((investor, i)=>{
              return (
                <div className='p-3 md:p-6' key={i}>
                  <img src={`${investor.logo}`} alt="logo" />
                </div>
              )
            })}
              
          </div>
        </div>
      </div>
      <h3 className='text-center'>Our work. Their words.</h3>
      <div className="flex relative flex-col justify-center p-6">
          <div className="flex justify-end items-center flex-col md:flex-row max-w-[1080px] mx-auto md:gap-24">
            <div className="flex w-[100%] justify-center mr-auto">
              <p className='md:max-w-lg pb-3'>From government authorities to banks and credit providers, we work with a growing number of partners with a single aim - give African SMEs a competitive edge that no one else can.</p>
            </div>
            <div className="hidden md:flex gap-3 justify-center items-center p-3 md:p-0">
              <button 
                onClick={(e)=> handleScroll("back", e)}
                className="rounded-[50%] h-[35px] w-[35px] border-2 border-textSecondary flex justify-center items-center">
                <img src="/assets/back-arrow.svg" alt="<" />
              </button>

              <button 
                onClick={(e)=> handleScroll("forward", e)}
                className="rounded-[50%] h-[35px] w-[35px] border-2 border-textPrimary flex justify-center items-center">
                <img src="/assets/forward-arrow.svg" alt=">" />
              </button>
            </div>
          </div>
          {/* Testimonials */}
          <div className="flex  justify-start overflow-x-auto md:overflow-hidden">

            <div className="flex flex-col gap-4 p-8 min-w-[490px] m-6 rounded-[9px] shadow-[0_0_10px_10px_rgba(50,50,93,0.05)]">
              <div className="flex justify-between items-center">
                <div className='flex gap-3'>
                  <img src="/assets/partners/avatar.svg" alt="avatar" />
                  <div className="flex flex-col">
                    <h4>Sean Runolfsson</h4>
                    <p className='font-CeraRoundProNormal font-bold'>General Electric</p>
                  </div>
                </div>
                <img  src="assets/partners/quotes.svg" alt="" />
              </div>
              <p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.</p>
              <div className="flex justify-start mt-3 gap-3">
                <img src="assets/partners/calendar.svg" alt="calendar" />
                <p className='font-CeraRoundProNormal font-bold'>Oct 23, 2021 </p>
              </div>
            </div>

            <div className="flex flex-col gap-4 p-8 min-w-[490px] m-6 rounded-[9px] shadow-[0_0_10px_10px_rgba(50,50,93,0.05)]">
              <div className="flex justify-between items-center">
                <div className='flex gap-3'>
                  <img src="/assets/partners/avatar.svg" alt="avatar" />
                  <div className="flex flex-col">
                    <h4>Sean Runolfsson</h4>
                    <p className='font-CeraRoundProNormal font-bold'>General Electric</p>
                  </div>
                </div>
                <img  src="assets/partners/quotes.svg" alt="" />
              </div>
              <p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.</p>
              <div className="flex justify-start mt-3 gap-3">
                <img src="assets/partners/calendar.svg" alt="calendar" />
                <p className='font-CeraRoundProNormal font-bold'>Oct 23, 2021 </p>
              </div>
            </div>

            <div className="flex flex-col gap-4 p-8 min-w-[490px] m-6 rounded-[9px] shadow-[0_0_10px_10px_rgba(50,50,93,0.05)]">
              <div className="flex justify-between items-center">
                <div className='flex gap-3'>
                  <img src="/assets/partners/avatar.svg" alt="avatar" />
                  <div className="flex flex-col">
                    <h4>Sean Runolfsson</h4>
                    <p className='font-CeraRoundProNormal font-bold'>General Electric</p>
                  </div>
                </div>
                <img  src="assets/partners/quotes.svg" alt="" />
              </div>
              <p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.</p>
              <div className="flex justify-start mt-3 gap-3">
                <img src="assets/partners/calendar.svg" alt="calendar" />
                <p className='font-CeraRoundProNormal font-bold'>Oct 23, 2021 </p>
              </div>
            </div>

          </div>
      </div>
      {/* Partners footer */}
      <div className='bg-[rgba(9,55,73,0.3)] min-h-[400px] flex flex-col justify-center items-center p-6 md:p-12 gap-6 md:gap-12'>
        <h1>Become a partner in growth. Request a demo</h1>
        <h4>Seeing is believing. Reach out to us if you are interested to see our products in action. No obligations.</h4>
        <div className="mt-3 md:mt-6">
          <form>
            <input 
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Enter you email address'
                className='md:min-w-[300px]  h-[50px] p-3 rounded-tl-lg rounded-bl-lg text-textPrimary outline-none' 
                name="email"/>
            <button
                onClick={requestDemo}
                className='md:w-[70px] h-[50px] p-3 rounded-tr-lg rounded-br-lg bg-textPrimary text-white ' >
              Send
            </button>
          </form>
        </div>
      </div>
    </>

  )
}

export default Partners
