import React from 'react'
import type { NextPage } from 'next'
import { investors, partners } from 'src/constants/partners'
import { FooterForm } from 'src/components/form';
import { Hero } from 'src/components/hero';
import { IReview, reviews } from 'src/constants/reviews';

interface IProps {
  review: Partial<IReview>
}

const Testimonial = (props: IProps) => {
  const { name, comment, date, designation } = props.review;
  return (
    <div className="flex flex-col gap-4 p-8 min-w-[490px] m-6 rounded-[9px] shadow-[0_0_10px_10px_rgba(50,50,93,0.05)]">
      <div className="flex items-center justify-between">
        <div className='flex gap-3'>
          <img src="/assets/partners/avatar.svg" alt="avatar" />
          <div className="flex flex-col">
            <h4>{name}</h4>
            <p className='font-bold font-CeraRoundProNormal'>{designation}</p>
          </div>
        </div>
        <img src="assets/partners/quotes.svg" alt="" />
      </div>
      <p>{comment}</p>
      <div className="flex justify-start gap-3 mt-3">
        <img src="assets/partners/calendar.svg" alt="calendar" />
        <p className='font-bold font-CeraRoundProNormal'>{date}</p>
      </div>
    </div>
  )
}

const Partners: NextPage = () => {

  const handleScroll = (item: string, e: any) => {
    const element = document.getElementById("scroll")!;
    if (item === 'forward') {
      element.scrollLeft += 200;
    }
    if (item === 'back') {
      element.scrollLeft -= 200;
    }
  }

  const intro = "Making headlines is good when you’re truly doing good."
  const description = "From government authorities to banks and credit providers, we work with a growing number of partners with a single aim - give African SMEs a competitive edge that no one else can."

  return (
    <>
      <div className='flex flex-col p-5 md:p-0'>
        <div className="container">
          <Hero title={intro} description={description} />
        </div>

        <h3 className='text-center'>Solution Partners</h3>

        <div className='py-5 my-5 bg-primary'>
          <div className="container flex flex-wrap justify-center">
            {partners.map((partner, i) => {
              return (
                <div className='p-6' key={i}>
                  <img src={`${partner.logo}`} alt="logo" />
                </div>
              )
            })}

          </div>
        </div>
        <div className="container">
          <h3 className='text-center'>Client Partners</h3>
          <div className="flex flex-col justify-between py-3 mx-20 my-3 md:mx-0 md:flex-row">
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
                <li className='p-1'>National Transport and Safety Authority (NTSA)</li>
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
        </div>
        <h3 className='text-center'>Investors</h3>
        <div className="container flex flex-wrap justify-center">
          <p className='max-w-2xl p-3 md:p-6'>From government authorities to banks and credit providers, we work with a growing number of partners with a single aim - give African SMEs a competitive edge that no one else can.</p>
          <div className="flex flex-wrap justify-center my-3 md:py-2">
            {investors.map((investor, i) => {
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
      <div className="relative flex flex-col justify-center p-6">
        <div className="flex justify-end items-center flex-col md:flex-row max-w-[1080px] mx-auto md:gap-24">
          <div className="flex w-[100%] justify-center mr-auto">
            <p className='pb-3 md:max-w-lg'>From government authorities to banks and credit providers, we work with a growing number of partners with a single aim - give African SMEs a competitive edge that no one else can.</p>
          </div>
          <div className="items-center justify-center hidden gap-3 p-3 md:flex md:p-0">
            <button
              onClick={(e) => handleScroll("back", e)}
              className="rounded-[50%] h-[35px] w-[35px] border-2 border-textPrimary flex justify-center items-center">
              <img src="/assets/back-arrow.svg" alt="<" />
            </button>

            <button
              onClick={(e) => handleScroll("forward", e)}
              className="rounded-[50%] h-[35px] w-[35px] border-2 border-textPrimary flex justify-center items-center">
              <img src="/assets/forward-arrow.svg" alt=">" />
            </button>
          </div>
        </div>
        {/* Testimonials */}
        <div id='scroll' className="flex justify-start overflow-x-auto md:overflow-hidden">
          {reviews.map((review, i) => (
            <Testimonial review={review} key={i}/>
          ))}

        </div>
      </div>
      {/* Partners footer */}
      <FooterForm />
    </>

  )
}

export default Partners
