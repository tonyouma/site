import React from 'react'

function FooterForm ({ setShowModal } : any) {
  return (

    <div className='bg-[rgba(9,55,73,0.3)] min-h-[300px] flex flex-col justify-center items-center gap-y-4 p-5'>
      <h2 className='text-center'>Become a partner in growth.Request a demo</h2>
      <p className='md:text-center md:w-1/3'>Seeing is believing. Reach out to us if you are interested to see our products in action. No obligations.</p>
      <div className="mt-3 md:mt-6">
        <button
          onClick={()=>setShowModal(true)}
          className="font-SatoshiNormal text-md py-3 px-6 rounded-md text-lg bg-textPrimary text-white">
          Request a Demo
        </button>
      </div>
    </div>
  )
}

export default FooterForm

