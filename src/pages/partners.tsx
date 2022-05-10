import type { NextPage } from 'next'


const Partners: NextPage = () => {
  return (
    <div className='container p-5 md:p-0 flex flex-col '>
      <div className="flex flex-col justify-center md:flex-row gap-4 md:gap-8 md:mb-12">
        <div className='md:flex-1 flex md:justify-end '>
          <h2  className='pr-3 md:p-6 h-fit border-r-4 md:ml-12'>Partners</h2>
        </div>
        <div className="md:flex-2 flex flex-col">
          <h2 className='py-4 '>Making headlines is good when you’re truly doing good.</h2>
          <p>From government authorities to banks and credit providers, we work with a growing number of partners with a single aim - give African SMEs a competitive edge that no one else can.</p>
        </div>
      </div>

      <h3>Solution Partners</h3>
      <div className="flex justify-center py-3 md:flex-col"></div>
   
    </div>
  )
}

export default Partners
