/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import FooterForm from 'src/components/form/FooterForm'
import { productsItems } from 'src/constants/products'
import { IProductProps } from 'src/models/product'

interface IProps {
    product: Partial<IProductProps>
}

const Product = (props: IProps) => {
    const { image, title, description } = props.product
    return (
        <div className="grid grid-cols-1 gap-3 p-5 py-4 md:grid-cols-2 md:p-0">
            <img src={image} alt={title} />
            <div>
                <h4 className='py-3 text-secondary'>{title}</h4>
                <p className='pb-4'>{description}</p>
                <a href="/products" className="text-lg text-secondary">Learn More</a>
            </div>
        </div>
    )
}

const Home: NextPage = () => {
    return (
        <>
            <div className='container md:pt-14'>
                <div className="grid md:grid-cols-2">
                    <div className="">
                        <div className="bg-[#0D3648]">
                            <h1 className='text-right md:pl-12 py-8 p-5 md:py-8 md:w-[80%] md:ml-auto md:pr-10 text-secondary'> Soulful Solutions
                                that connect
                                African streets
                                to high finance.
                            </h1>
                        </div>
                    </div>

                    <div className="bg-[#EE3D4E]">
                        <img src="/assets/cardholder.png" alt="" className="mr-5 w-[90%]" />
                    </div>

                </div>
                <div className='p-5 py-16 mx-auto md:py-16 md:text-center md:max-w-2xl'>
                    <h1>Products and Solutions</h1>
                    <p className='text-[20px] pt-4'>From smart public transport solutions to retail payments to payroll management, our products cater to the growing everyday financial needs of African population.</p>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                    {productsItems.map((product, index) => (
                        <Product key={index} product={product} />
                    ))}
                </div>

            </div>

            <div className="container mt-3 md:mt-6">
                <div className="p-5">
                    <h1 className='md:text-center'>From Africa to the world.</h1>
                    <p className='py-4 mx-auto md:text-center md:py-8 md:max-w-2xl'>
                        Our homebase is in Kenya. Our immediate focus is Africa. At the same time, our solutions are relevant and modifiable to every growth market in the world. And that’s where we are headed too.</p>
                </div>

                <img src="/assets/nairobi.png" alt="" className="object-cover w-full h-96" />
                <div className="bg-[#EE3D4E] p-5">
                    <h1 className='text-white md:text-center md:pt-14'>We work with you and for you</h1>

                    <p className='pt-6 mx-auto text-xl md:text-center md:max-w-2xl md:pb-12'>
                        Our solutions are developed to be compatible with public, banking and regulatory platforms as well as people on the ground. We strive to have financial inclusion for all.
                    </p>
                </div>
            </div>


            <FooterForm />
        </>
    )
}

export default Home
