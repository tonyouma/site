/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import FooterForm from 'src/components/form/FooterForm'
// import Team from 'src/components/team'
// import { partnersInfo } from 'src/constants/partners'
// import { stats } from 'src/constants/stats'
// import { formatCount } from 'src/utils/formatCount'


const Home: NextPage = () => {
    return (
        <>
            <div className='container md:pt-14'>
                <div className="grid md:grid-cols-2">

                    <div className="bg-[#0D3648]">
                        <h1 className='text-right md:pl-12 py-14 md:w-[80%] md:ml-auto md:pr-10 text-secondary'> Soulful Solutions
                            that connect
                            African streets
                            to high finance.
                        </h1>

                    </div>

                    <div className="bg-[#EE3D4E]">
                        <img src="/assets/placeholder.png" alt="" className="mr-5 w-[90%]" />

                    </div>

                </div>
                <div className='py-16 mx-auto text-center md:max-w-2xl'>
                    <h1>Products and Solutions</h1>
                    <p className='text-[20px] pt-4'>From smart public transport solutions to retail payments to payroll management, our products cater to the growing everyday financial needs of African population.</p>
                </div>


                <div className="grid md:grid-cols-2 gap-x-3">
                    <div className="flex gap-3">
                        <img src="/assets/placeholder.png" alt="" className="w-1/2" />
                        <div>
                            <h4 className='py-3 text-secondary'>Mobitill Transit</h4>
                            <p >Public Transport Solution that offers easy management of busses with a tailor-made ticketing and tracking solu- tion.</p>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <img src="/assets/placeholder.png" alt="" className="w-1/2" />
                        <div>
                            <h4 className='py-3 text-secondary'>Mobitill POS</h4>
                            <p >Public Transport Solution that offers easy management of busses with a tailor-made ticketing and tracking solu- tion.</p>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <img src="/assets/placeholder.png" alt="" className="w-1/2" />
                        <div>
                            <h4 className='py-3 text-secondary'>Mobitill Cards
                            </h4>
                            <p >Public Transport Solution that offers easy management of busses with a tailor-made ticketing and tracking solu- tion.</p>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <img src="/assets/placeholder.png" alt="" className="w-1/2" />
                        <div>
                            <h4 className='py-3 text-secondary'>Mapato Payroll</h4>
                            <p >Public Transport Solution that offers easy management of busses with a tailor-made ticketing and tracking solu- tion.</p>
                        </div>
                    </div>
                </div>

            </div>

            <div className="container mt-6">
                <h1 className='text-center'>From Africa to the world.</h1>

                <p className='max-w-2xl py-8 mx-auto text-center'>
                    Our homebase is in Kenya. Our immediate focus is Africa. At the same time, our solutions are relevant and modifiable to every growth market in the world. And that’s where we are headed too.</p>
                <img src="/assets/placeholder.png" alt="" className="w-full h-96" />
                <div className="bg-[#EE3D4E]">
                    <h1 className='text-center text-white md:pt-14'>We work with you</h1>

                    <p className='pt-6 mx-auto text-center md:max-w-2xl md:pb-12'>
                        Our solutions are developed to be compatible with public, banking and regulatory platforms as well as people on the ground. We strive to have financial inclusion for all.
                    </p>
                </div>
            </div>


            <FooterForm />
        </>
    )
}

export default Home
