import React from 'react'
import { ContactForm } from "src/components/contact"

interface Props {
    setShowModal: any,
    showModal: boolean
}

const data = {
    message: 'I would like to have a demo on your products and solutions',
    subject: 'DEMO REQUEST'
}


const index = ( props: Props) => {
  const { showModal, setShowModal } = props
  return (
    <div className={`${showModal? 'fixed': 'hidden'} transition-all delay-200 h-full w-full top-0 left-0 z-50 overflow-auto`}>
        <div className='relative w-full h-full overflow-hidden'>
            <div className="absolute h-full w-full top-0 left-0 bg-primary opacity-70 overflow-hidden"></div>
            <div className="relative h-full w-full flex items-center justify-center overflow-hidden ">
                <ContactForm
                  cancel
                  data={data}
                  setShowModal={setShowModal}
                />
            </div>
        </div>
    </div>
  )
}

export default index