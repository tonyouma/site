/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import FooterForm from 'src/components/form/FooterForm'
import Team from 'src/components/team'
import { partnersInfo } from 'src/constants/partners'
import { productsItems } from 'src/constants/products'
import { stats } from 'src/constants/stats'
import { IProductProps } from 'src/models/product'
import { formatCount } from 'src/utils/formatCount'

interface IProps {
  product: Partial<IProductProps>
}

const Product = (props: IProps) => {
  const { image, title, description } = props.product
  return (
    <div className="flex flex-col md:p-0">
      <img src={image} alt={title} />
      <div>
        <h3 className='py-3'>{title}</h3>
        <p className='pb-4'>{description}</p>
        <a href="/products" className="text-lg text-secondary">Learn More</a>
      </div>
    </div>
  )
}

const Home: NextPage = () => {
  return (
    <>
      <div className="">
        <div className="container px-5 md:px-0 md:py-14">
          <div className='max-w-3xl'>
            <h1 className="mt-12 mb-6 uppercase">
              Soulful solutions that <span className='leading-[120%] text-secondary'>Connect African streets</span> to high finance
            </h1>
            <div className="pb-10 md:max-w-xl">
              <p className='pb-4'>Our solutions are developed to be compatible with public, banking and regulatory platforms as well as people on the ground. We strive to have financial inclusion for all.</p>
              <p>Have any questions? <span className='font-bold'>Contact sales</span> </p>
            </div>
          </div>
          <div className="flex items-center justify-between mb-6">
            <button className='py-3 border-none rounded-full px-9 bg-[#BADDEE] text-slate-900 font-bold focus:outline-none'>Request a Demo</button>
            <div className="flex items-center gap-x-2"><p>Products Demo</p> <button className=" play-button">
              <img src="/assets/play-button.svg" alt="" />
            </button></div>
          </div>
        </div>

        <div className="relative bg-primary fore-ground">
          <div className="md:ml-[180px] relative">
            <img src="/assets/hero.png" alt="" className="object-cover w-full h-[28rem]" />
          </div>
          <div className="grid grid-cols-1 gap-4 py-12 mx-auto md:grid-cols-3 md:max-w-3xl md:gap-0">
            {stats.map((stat, index) => (
              <div className="text-center md:border-r border-[#d9d9d9] border-solid last:border-r-0" key={index}>
                <h1 className='text-secondary'>{formatCount(stat.count, stat.percentage)}</h1>
                <p className='w-2/3 mx-auto'>{stat.title}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
      <div className='pt-12 text-center'>
        <p className='font-bold'>TRUSTED PARTNERS</p>
        <div className="container grid grid-cols-2 gap-4 p-5 md:grid-cols-6 lg:grid-cols-6 md:p-5">
          {partnersInfo.map((partner, index) => (
            <div className="flex col-span-1 md:justify-center md:items-center md:col-span-2 lg:col-span-1" key={index}>
              <img src={partner.icon} alt={partner.name} />
            </div>
          ))}
        </div>
      </div>

      <div className='container p-5'>
        <div className='max-w-xl py-12 mx-auto'>
          <h1 className='mb-4'>Products and Solutions</h1>
          <p>From smart public transport solutions to retail payments to payroll management, our products cater to the growing everyday financial needs of African population.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {productsItems.slice(0, 3).map((product, index) => {
            return <Product key={index} product={product} />
          })}
        </div>
        {/* <SimpleSlider /> */}

      </div>

      <div className="container flex flex-col px-5 py-8 md:px-0 md:py-16 md:flex-row">
        <div className="w-1/2">
          <div className="px-8 rounded-lg shadow-md py-9">
            <img
              src="/assets/news/logo1.svg"
              className=""
              alt=""
            />
            <h4 className="">PCI-DSS Level 1</h4>
            <p className="pb-4">The Payment Card Industry Data Security Standard (PCI DSS) is a set of security standards designed to ensure that ALL companies that accept, process, store or transmit credit card information maintain a secure environment. Data Integrated Limited is now proudly PCI DSS certified.</p>
            <button className='py-3 border-[#093749] border  rounded px-9 text-slate-900 font-bold focus:outline-none'>Read More on PIC/DSS</button>

          </div>
        </div>
        <div className="w-1/2">
          <img src="/assets/service_provider.png" alt="" className='object-contain w-full h-64' />
        </div>
      </div>


      <div className="py-16 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative z-10 lg:py-16">
            <div className="relative h-40 sm:h-80 lg:h-full">
              <img
                className="absolute inset-0 object-cover w-full h-full"
                src="/assets/limiter_1.webp"
                alt="Card Holder"
              />
            </div>
          </div>

          <div className="relative flex items-center p-5 bg-gray-100">
            <span
              className="hidden lg:inset-y-0 lg:absolute lg:w-16 lg:bg-gray-100 lg:block lg:-left-16"
            ></span>

            <div className="py-8 sm:p-16 md:pr-[180px] md:py-32 ">
              <h1 className="">
                We work with you and for you
              </h1>

              <p className="mt-4 text-gray-600">
                Our solutions are developed to be compatible with public, banking and regulatory platforms as well as people on the ground. We strive to have financial inclusion for all.
              </p>

              <button
                className="px-5 mt-5 py-2.5 text-white bg-[#093749] rounded-md duration-150 active:shadow-lg"
              >
                Get in touch
              </button>
            </div>
          </div>
        </div>
      </div>

      <Team />
      <FooterForm />
    </>
  )
}

export default Home
