import Image from 'next/image'
import { Link } from 'src/components/link'


const Team = () => {
    return (
        <div className='md:pb-16'>
            <div className="mx-auto md:max-w-2xl md:pb-12">
                <h1 className='mb-4'>A team with conviction.</h1>
                <p>We started with a conviction that every single one in Africa should have access to great and easy payment solutions. Say hello to a team that works hard on this goal every single day.</p>
            </div>

            <div className="container grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="cursor-pointer grayscale hover:grayscale-0">
                    <Image src="/assets/mary_ceo.png" alt="" width="100%" height="100%" layout="responsive" objectFit="contain" />
                </div>
                <div className="">
                    <Image src="/assets/team2.png" alt="" width="100%" height="100%" layout="responsive" objectFit="contain" />
                </div>
                <div className="my-auto ">
                    <h4 className='text-xl font-bold'>Irene Ngugi</h4>
                    <p className='my-2'>HR and Administration</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos porro dignissimos omnis distinctio dicta accusamus. </p>
                    <div className="flex items-center mt-4 gap-x-4">
                        <Link blank url='https://linked.com' name='LinkedIn' image={'/assets/linkedin.svg'} />
                        <Link blank url='https://linked.com' name='LinkedIn' image={'/assets/twitter.svg'} />
                    </div>
                </div>
                <div className="">
                    <h4 className='text-xl font-bold'>Mary Mwangi</h4>
                    <p className='my-2'>Founder and CEO</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos porro dignissimos omnis distinctio dicta accusamus. </p>
                    <div className="flex items-center mt-4 gap-x-4">
                        <Link blank url='https://linked.com' name='LinkedIn' image={'/assets/linkedin.svg'} />
                        <Link blank url='https://linked.com' name='LinkedIn' image={'/assets/twitter.svg'} />
                    </div>
                </div>
                <div className="">
                    <Image src="/assets/team3.png" alt="" width="100%" height="100%" layout="responsive" objectFit="contain" />
                </div>
                <div className="">
                    <Image src="/assets/team.png" alt="" width="100%" height="100%" layout="responsive" objectFit="contain" />
                </div>
                <div className="">
                </div>
                <div className="">
                    <h4 className='text-xl font-bold'>James Mwangi</h4>
                    <p className='my-2'>Sales & Marketing Lead</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos porro dignissimos omnis distinctio dicta. </p>
                    <div className="flex items-center mt-4 gap-x-4">
                        <Link blank url='https://linked.com' name='LinkedIn' image={'/assets/linkedin.svg'} />
                        <Link blank url='https://linked.com' name='LinkedIn' image={'/assets/twitter.svg'} />
                    </div>
                </div>
                <div className="">
                    <h4 className='text-xl font-bold'>Francis Kiarie</h4>
                    <p className='my-2'>Technology Lead</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos porro dignissimos omnis distinctio dicta accusamus. </p>
                    <div className="flex items-center mt-4 gap-x-4">
                        <Link blank url='https://linked.com' name='LinkedIn' image={'/assets/linkedin.svg'} />
                        <Link blank url='https://linked.com' name='LinkedIn' image={'/assets/twitter.svg'} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Team
