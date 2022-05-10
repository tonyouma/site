import React from 'react'
import type { NextPage } from 'next'


const news: NextPage =()=> {
  return (
    <div className='container p-5 md:p-0 flex flex-col'>
      <div className="flex flex-col justify-center md:flex-row gap-4 md:gap-8">
        <div className='flex-1 flex md:justify-end '>
          <h2  className='pr-3 md:p-6 h-fit border-r-4'>DIL Newsroom</h2>
        </div>
        <div className="flex-1 flex flex-col">
          <h2 className='py-4'>Making headlines is good when you’re truly doing good.</h2>
          <p>We genuinely believe we are creating payment solutions that positively affect the lives of millions of Africans. Sometimes we like to talk about what we do more openly. Sometimes, others do for us.</p>
        </div>
      </div>
      <div className="flex justify-center md:flex-col"></div>
   
    </div>
  )
}

export default news