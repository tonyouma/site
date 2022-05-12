import React from 'react'
import type { NextPage } from 'next'


const News: NextPage =()=> {
  return (
    <div className='container p-5 md:p-0 flex flex-col'>
      <div className="flex flex-col justify-center md:flex-row gap-4 md:gap-8 mb-6">
        <div className='flex-2 flex md:justify-end '>
          <h2  className='pr-3 md:p-6 h-fit border-r-4'>DIL Newsroom</h2>
        </div>
        <div className="flex-3 flex flex-col">
          <h2 className='py-4'>Making headlines is good when you’re truly doing good.</h2>
          <p>We genuinely believe we are creating payment solutions that positively affect the lives of millions of Africans. Sometimes we like to talk about what we do more openly. Sometimes, others do for us.</p>
        </div>
      </div>
      <h3  className='pb-2'>Top News</h3>

      <div className="flex gap-x-12 md:flex-row flex-col">
        <div className='md:w-1/2 w-full'>
          <img src="/assets/news/new1.png" className='mx-auto border rounded-sm' width='700px' height='300px' />
        </div>
        <div className='p-1 md:w-1/2 md:my-auto w-full'>
          <h4>Matatu transport digitalization events by DIL with Toyota Kenya and Mobility 54.</h4>
          <p className='py-3'>Data Integrated Limited (“DIL“) — together with Toyota Kenya and Mobility 54 Investment SAS (“Mobility54“) — organized a series of events throughout Kenya for promoting DIL’s transport management system and its devices along with Toyota Hiace which is the most popular vehicle for Matatu transport services in Kenya. </p>
        </div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 py-8 items-baseline'>
        <div >
          <img src='/assets/news/news2.png' width="320" height="190" className='mx-auto border rounded-xl'></img>
          <h4 className='p-2'>This is blog title 01</h4>
          <p className='p-1'>Sed ut perspiciatis unde omnis istenat error sit voluptatem accusantium doloremque lauda lorem ipsum dolor...</p>
        </div>
        <div>
        <img src='/assets/news/news3.png' className='mx-auto border rounded-xl' width="320" height="190"></img>
        <h4 className='p-2'>This is blog title 01</h4>
        <p className='p-1'>Sed ut perspiciatis unde omnis istenat error sit voluptatem accusantium doloremque lauda lorem ipsum dolor...</p>
        </div>
        <div>
        <img src='/assets/news/news2.png' width="320" height="190" className='mx-auto border rounded-xl'></img>
         <h4 className='p-2'>This is blog title 01</h4>
         <p className='p-1'>Sed ut perspiciatis unde omnis istenat error sit voluptatem accusantium doloremque lauda lorem ipsum dolor...</p>
        </div>
      </div>
    </div>
  )
}

export default News