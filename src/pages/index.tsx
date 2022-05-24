import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import FooterForm from 'src/components/form/FooterForm'


const Home: NextPage = () => {
  return (
    <>
      <div className="">
        <div className="container py-14">
          <div className='max-w-3xl'>
            <h1 className="mt-12 mb-6 uppercase">
              Soulful solutions that <span className='leading-[120%] text-secondary'>Connect African streets</span> to high finance
            </h1>
            <div className="pb-10 md:max-w-xl">
              <p className='pb-4'>Nobis nisi quaerat et maxime explicabo tenetur omnis. Voluptates animi placeat eum esse alias inventore quo. Quia aperiam vel minima. </p>
              <p>Have any questions? <span className='font-bold'>Contact sales</span> </p>
            </div>
          </div>
          <div className="flex items-center justify-between mb-6">
            <button className='py-3 border-none rounded-full px-9 bg-[#BADDEE] text-slate-900 font-bold focus:outline-none'>Request a Demo</button>
            <div className="flex items-center gap-x-3"><p>Products Demo</p> <button className=" play-button">
              <img src="/assets/play-button.svg" alt="" />
            </button></div>


          </div>
          {/* <div className="flex w-full">
            <div className="w-full h-full">
              <Image
                src="/assets/Illustration1.png"
                alt="VPN Illustrasi"
                quality={100}
                width={612}
                height={383}
                layout="responsive"
              />
            </div>
          </div> */}
        </div>

        <div className="bg-primary">
          <div className="md:ml-[180px] bg-primary">
            <img src="/assets/placeholder.png" alt="" className="w-full h-96" />
          </div>
        </div>

      </div>
      <div className='pt-12 text-center'>
        <p className='font-bold'>TRUSTED PARTNERS</p>
        <div className="container grid grid-cols-2 gap-4 p-5 md:grid-cols-6 lg:grid-cols-6 md:p-5">
          <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
            <img src="/assets/landing/microsoft-logo.svg" alt="" />         </div>

          <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
            <img src="/assets/landing/mastercard-logo.svg" alt="" />        </div>

          <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">

            <img src="/assets/landing/ecobank-logo.svg" alt="" />
          </div>



          <div className="flex items-center justify-center col-span-1 md:col-span-3 lg:col-span-1">
            <img src="/assets/landing/safaricom-logo.svg" alt="" />        </div>

          <div className="flex items-center justify-center col-span-2 md:col-span-3 lg:col-span-1">
            <img src="/assets/landing/aws-logo.svg" alt="" />        </div>
          <div className="flex items-center justify-center col-span-2 md:col-span-3 lg:col-span-1">
            <img src="/assets/landing/interswitch-logo.svg" alt="" />
          </div>
        </div>
      </div>

      <div className='max-w-xl py-12 mx-auto'>
        <h1>Products and Solutions</h1>
        <p>From smart public transport solutions to retail payments to payroll management, our products cater to the growing everyday financial needs of African population.</p>
      </div>

      <section>
        <div className="py-16 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative z-10 lg:py-16">
              <div className="relative h-40 sm:h-80 lg:h-full">
                <img
                  className="absolute inset-0 object-cover w-full h-full"
                  src="/assets/cardholder.png"
                  alt="Indoors house"
                />
              </div>
            </div>

            <div className="relative flex items-center p-5 bg-gray-100">
              <span
                className="hidden lg:inset-y-0 lg:absolute lg:w-16 lg:bg-gray-100 lg:block lg:-left-16"
              ></span>

              <div className="py-8 sm:p-16 md:pr-24 md:py-32 ">
                <h1 className="">
                  We work with you and for you
                </h1>

                <p className="mt-4 text-gray-600">
                  Our solutions are developed to be compatible with public, banking and regulatory platforms as well as people on the ground. We strive to have financial inclusion for all.
                </p>

                <button
                  className="px-5 py-2.5 text-white bg-[#093749] rounded-md duration-150 active:shadow-lg"
                >
                  Get in touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className=''>
        <div className="max-w-2xl pb-12 mx-auto">
          <h1 className='mb-4'>A team with conviction.</h1>
          <p>We started with a conviction that every single one in Africa should have access to great and easy payment solutions. Say hello to a team that works hard on this goal every single day.</p>
        </div>

        <div className="container grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="flex items-center justify-center ">
            <img src="/assets/mary_ceo.png" alt="" className='min-w-[100%]' />
          </div>
          <div className="">
            <img src="/assets/team.png" alt="" className='min-w-[100%]' />
          </div>
          <div className="my-auto "><p>Irene</p>
          </div>
          <div className=""><p>Mary Mwangi</p>
          </div>
          <div className=""><img src="/assets/team3.png" alt="" className='min-w-[100%]' /></div>
          <div className="">
            <img src="/assets/team2.png" alt="" className='min-w-[100%]' />
          </div>
          <div className="">
          </div>
          <div className="">
          </div>
          <div className="">
          </div>
          <div className="">
          </div>
        </div>
      </div>
      <FooterForm />
    </>
  )
}

export default Home
