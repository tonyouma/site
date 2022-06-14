/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import FooterForm from 'src/components/form/FooterForm'
import Team from 'src/components/team'
import { Title } from 'src/components/title'
// import { motion } from 'framer-motion'


const About: NextPage = () => {
  const introTitle ="We connect African streets to high finance.With deep local knowledge and a soulful approach."
  const description ="From smart public transport solutions to retail payments to payroll management, we make products catering to the growing everyday financial needs of African population."
  return (
    <>
    <Title title={introTitle} description={description}/>
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
        <h1 className='mb-2 md:text-center'>From Africa to the world.</h1>
        <p className='py-4 mx-auto md:text-center md:py-6 md:max-w-2xl'>
          Our homebase is in Kenya. Our immediate focus is Africa. At the same time, our solutions are relevant and modifiable to every growth market in the world. And that’s where we are headed too.</p>
        <img src="/assets/nairobi.png" alt="" className="object-cover w-full h-48 md:h-96" />

      </div>
      <FooterForm />
    </>
  )
}

export default About
