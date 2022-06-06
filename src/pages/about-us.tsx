/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import FooterForm from 'src/components/form/FooterForm'
import Team from 'src/components/team'


const About: NextPage = () => {
  return (
    <>
      <div className="container max-w-4xl">
        <h1 className='mb-4 text-center'>We connect African streets to high finance.With deep local knowledge and a soulful approach.</h1>

        <p className='max-w-2xl py-8 mx-auto text-center'>
          From smart public transport solutions to retail payments to payroll management, we make products catering to the growing everyday financial needs of African population.
        </p>
      </div>

      <div className="container grid grid-cols-2">
        <div className="bg-[#EE3D4E]">
          <img src="/assets/placeholder.png" alt="" className="mr-5 w-[90%]" />
        </div>
        <div>
          <div className="bg-[#0D3648] bottom-0">
            <h2 className='pr-5 text-right py-14 md:ml-auto text-secondary'> Soulful Solutions
              that connect
              African streets
              to high finance.
            </h2>
          </div>
        </div>
      </div>

      <Team />
      <div className="container">
        <h1 className='mb-4 text-center'>From Africa to the world.</h1>

        <p className='max-w-2xl py-8 mx-auto text-center'>
          Our homebase is in Kenya. Our immediate focus is Africa. At the same time, our solutions are relevant and modifiable to every growth market in the world. And that’s where we are headed too.</p>
        <img src="/assets/placeholder.png" alt="" className="w-full h-96" />

      </div>
      <FooterForm />
    </>
  )
}

export default About
