import type { NextPage } from 'next';
import { FooterForm } from 'src/components/form';
import { Title } from 'src/components/title';
import { investors, partners } from 'src/constants/partners';


const Partners: NextPage = () => {

  // const handleScroll = (item: string, e: any) => {
  //   const element = document.getElementById("scroll")!;
  //   if (item === 'forward') {
  //     element.scrollLeft += 200;
  //   }
  //   if (item === 'back') {
  //     element.scrollLeft -= 200;
  //   }
  // }

  const introTitle = "A growing list of people who believe in us."
  const description = "From government authorities to banks and credit providers, we work with a growing number of partners with a single aim - give African SMEs a competitive edge that no one else can."

  return (
    <>
      <div className='flex flex-col p-5 md:p-0'>
        <Title title={introTitle} description={description} />

        <div className='py-5 my-5 '>
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
          <div className="flex flex-col justify-between py-3 mx-5 my-3 md:mx-0 md:flex-row">
            <div className="flex flex-col gap-2">
              <h4 className='pb-2 text-secondary'>SACCOs:</h4>
              <ul>
                <li className=''>City Shuttle Sacco</li>
                <li className=''>Obamana Sacco</li>
                <li className=''>44 owners Sacco</li>
                <li className=''>Globology Limited</li>
                <li className=''>Mwiki Sacco</li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className='pb-2 text-secondary'>GOVERNMENTS</h4>
              <ul>
                <li className=''>Kenya Revenue Authority</li>
                <li className=''>Rwanda Revenue Authority</li>
              </ul>
            </div>

            <div className="flex flex-col gap-2">
              <h4 className='pb-2 text-secondary'>BANKS:</h4>
              <ul>
                <li className=''>Equity Bank</li>
                <li className=''>Ecobank</li>
                <li className=''>Interswitch</li>
                <li className=''>Spire Bank</li>
                <li className=''>United Bank of Africa</li>
              </ul>
            </div>

          </div>
        </div>
        <h3 className='text-center'>Investors</h3>
        <div className="container flex flex-wrap justify-center">
          <p className='max-w-2xl p-3 md:text-center md:p-6'>From government authorities to banks and credit providers, we work with a growing number of partners with a single aim - give African SMEs a competitive edge that no one else can.</p>
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
            <p className='pb-3 text-center md:max-w-lg'>From government authorities to banks and credit providers, we work with a growing number of partners with a single aim - give African SMEs a competitive edge that no one else can.</p>
          </div>
        </div>

        <div className="container">
          <div className='grid grid-cols-1 md:grid-cols-2'>
            <div className="bg-[#EE3D4E]">
              <img src="/assets/cardholder.png" alt="" className="" />
            </div>
            {/* <div> */}
            <div className="bg-[#0D3648] top-6 md:py-8 py-4 md:pl-5 md:mt-24 p-5">
              <h3 className='pb-3 text-secondary'>
                Data Integrated knows the financial
                complexities of a demanding market
                like Kenya. Their solutions are rele-
                vant, affordable and scalable. This is a
                team that walks the talk.
                Secretary of Transport
              </h3>
              <div className="text-white">
                <p>Secretary of Transport</p>
                <p>National Transport Council, Kenya</p>
              </div>

              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
      {/* Partners footer */}
      <FooterForm />
    </>

  )
}

export default Partners
