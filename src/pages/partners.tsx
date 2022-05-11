import type { NextPage } from 'next'
import { investors, partners } from 'src/constants/partners'


const Partners: NextPage = () => {
  return (
    
    <div className='container p-5 md:p-0 flex flex-col '>
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
      <div className="flex flex-col justify-between py-3 my-3 md:flex-row">
        <div className="flex flex-col gap-2">
          <h4>Saccos:</h4>
          <ul>
            <li className='p-1'>City Shuttle Sacco</li>
            <li className='p-1'>Obamana Sacco</li>
            <li className='p-1'>44 owners Sacco</li>
            <li className='p-1'>Globology Limited</li>
            <li className='p-1'>Mwiki Sacco</li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h4>Government Agencies:</h4>
          <ul>
            <li className='p-1'>Kenya Revenue Authority</li>
            <li className='p-1'>Rwanda Revenue Authority</li>
          </ul>
        </div>

        <div className="flex flex-col gap-2">
          <h4>Banks:</h4>
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
        <p className='max-w-2xl p-6'>From government authorities to banks and credit providers, we work with a growing number of partners with a single aim - give African SMEs a competitive edge that no one else can.</p>
        <div className="flex flex-wrap justify-center py-3 my-3">
          {investors.map((investor, i)=>{
            return (
              <div className='p-6' key={i}>
                <img src={`${investor.logo}`} alt="logo" />
              </div>
            )
          })}
            
        </div>
      </div>
   
    </div>
  )
}

export default Partners
