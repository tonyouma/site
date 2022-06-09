/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import FooterForm from 'src/components/form/FooterForm'
import Team from 'src/components/team'
// import { motion } from 'framer-motion'


const About: NextPage = () => {
  return (
    <>
      <div className="container py-8 mx-auto md:max-w-3xl md:py-16">
        <h1 className='mb-2 md:mb-4 md:text-center'>We connect African streets to high finance.With deep local knowledge and a soulful approach.</h1>

        <p className='md:text-center'>
          From smart public transport solutions to retail payments to payroll management, we make products catering to the growing everyday financial needs of African population.
        </p>
      </div>

      <div className="container grid items-end grid-cols-1 md:grid-cols-2 ">
        <div className="bg-[#EE3D4E]">
          <img src="/assets/cardholder.png" alt="" className="mr-5 w-[90%]" />
        </div>
        <div>
          <div className="bg-[#0D3648] bottom-0 md:py-8 py-4 md:pl-5 md:p-0 p-5">
            <h2 className='pb-3 text-secondary'>
              &quot;Rorem ipsum dolor sit Lorem ipsum dolor sit.&quot;
            </h2>
            <div className="text-white">
              <p>Secretary of Transport</p>
              <p>National Transport Council, Kenya</p>
            </div>

          </div>
        </div>
      </div>

      <Team />
      <div className="container p-5">
        <h1 className='text-center md:mb-4'>From Africa to the world.</h1>

        <p className='py-4 mx-auto md:text-center md:py-8 md:max-w-2xl'>
          Our homebase is in Kenya. Our immediate focus is Africa. At the same time, our solutions are relevant and modifiable to every growth market in the world. And that’s where we are headed too.</p>
        <img src="/assets/nairobi.png" alt="" className="w-full h-96" />

      </div>
      <FooterForm />
    </>
  )
}

export default About
