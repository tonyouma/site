// import Link from 'next/link'
import Image from 'next/image'
import { Link } from 'src/components/link'
import { ICareer } from 'src/models/careers'
import { sanityClient } from '../../sanity'


interface Props {
  careers: [ICareer]
}

// const TitleItem = (title: string) => {
//   return (
//     <h3 className='py-4 text-center'>{title}</h3>
//   )
// }
const careers = ({ careers }: Props) => {

  console.log(careers)
  return (
    <div className=''>
      <div className='h-[552px] bg-black relative text-center'>
        <img src="/assets/careers.png" alt="" className='object-cover opacity-70' />
        <h1 className='careers-intro'>Careers at DIL</h1>


      </div>
      <div className='container px-5 md:px-40 pt-11'>
        <h3 className='pb-6'>About Data Integrated Limited (DIL)</h3>
        <p>Data Integrated Limited (DIL) is a Kenyan ICT company that offers financial solutions to small and medium scale enterprises (SME’s) in Africa. The company humble beginnings dates back to 2012, armed with a big dream of addressing automation challenges faced by small and medium scale businesses (SME’s) in Africa.
          We believe that SME’s would realize their financial goals sooner by deploying modern technology. The efficiency thus gained would translate to growth and longevity of the businesses.</p>
        <p><span className='my-4 font-bold'>Our motto</span>  says a lot on what we believe in, which is connecting “the street” to “high finance”. </p>
        <p>Over the years, DIL has mastered the African market and offers niche solutions that are customized to the unique African experience. We are committed to giving efficient services, seamless customers experience and user friendly person-to-person payments.<br />
          Our solutions are developed to be compatible with most payments solutions and platforms. DIL strives to have financial inclusion for all, by increasing payment efficiency through liable, secure, fast and easy to use devices at an affordable price.</p>
      </div>
      
      <h1 className='my-5 text-center'>A team with conviction.</h1>

      <div className="container grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className='relative'>
          <div className="cursor-pointer grayscale hover:grayscale-0">
            <Image src="/assets/mary_ceo.png" alt="" width="100%" height="100%" layout="responsive" objectFit="contain" />
          </div>
          <div className="mt-2">
            <h4 className='text-xl font-bold'>Mary Mwangi</h4>
            <p className='my-2'>Founder and CEO</p>
            <p>Mary is the Founder and CEO of Data Integrated Limited. She focuses on delievering value to the customers while soliving challenges faced by small and medium-sized enterprises (SMEs) in Africa. </p>
            <div className="flex items-center mt-4 gap-x-4">
              <Link blank url='https://linked.com' name='LinkedIn' image={'/assets/linkedin.svg'} />
              <Link blank url='https://linked.com' name='LinkedIn' image={'/assets/twitter.svg'} />
            </div>
          </div>
        </div>

        <div className='relative'>
          <div className="cursor-pointer grayscale hover:grayscale-0">
            <Image src="/assets/irene_hr.jpg" alt="" width="100%" height="100%" layout="responsive" objectFit="cover" />
          </div>
          <div className="mt-2">
            <h4 className='text-xl font-bold'>Irene Ngugi</h4>
            <p className='my-2'>HR and Administration</p>
            <p>Irene is the Human Resource Manager at DIL, she leads the team in building highly motivated and engaged teams. </p>
            <div className="flex items-center mt-4 gap-x-4">
              <Link blank url='https://linked.com' name='LinkedIn' image={'/assets/linkedin.svg'} />
              <Link blank url='https://linked.com' name='LinkedIn' image={'/assets/twitter.svg'} />
            </div>
          </div>
        </div>

        <div className='relative'>
          <div className="cursor-pointer grayscale hover:grayscale-0">
            <Image src="/assets/francis-kiarie.jpeg" alt="" width="100%" height="100%" layout="responsive" objectFit="contain" />
          </div>
          <div className="mt-2">
            <h4 className='text-xl font-bold'>Francis Kiarie</h4>
            <p className='my-2'>Technology Lead</p>
            <p>Francis is the Technical lead at DIL. He oversees DIL&apos;s engineering team and sets the technical vision for the company.</p>
            <div className="flex items-center mt-4 gap-x-4">
              <Link blank url='https://linked.com' name='LinkedIn' image={'/assets/linkedin.svg'} />
              <Link blank url='https://linked.com' name='LinkedIn' image={'/assets/twitter.svg'} />
            </div>
          </div>
        </div>

      </div>

      <div className='py-12 my-6 bg-primary'>
        <div className="container px-5 md:px-40">
          <h4 className='text-center'>Currently Open Roles</h4>
          <div className='flex flex-col py-5 gap-y-5'>
            {!careers.length ? <p className='p-5 text-lg text-center rounded-lg bg-defaultWhite'>No careers available at the moment</p> : careers.map(career => (
              <div className='p-5 rounded-lg bg-defaultWhite' key={career._id}>

                <p className='mb-2 font-extrabold uppercase' >{career.division}</p>


                <div className="flex items-center justify-between">
                  <p>{career.title}</p>
                  <a href={`/careers/${career.slug.current}`} ><div className='flex text-[#0645AD] cursor-pointer gap-x-2'>View job<img src="/assets/link.svg" alt="" className="" /></div></a>
                </div>
                <div className="flex">
                  <p>{career?.location}</p>
                </div>
              </div>
            ))}
          </div>
          <div className='text-center'>
            <h4 className='pb-3'>Open Application</h4>
            <p>If you don’t see an available position but think you can still be a valuable addition to our team, please send in your application to <span className='font-bold text-blue-500'>hr@dataintegrated.co.ke</span>  and convince us.</p>
            <h4 className='py-3'>Internships</h4>
            <p>We always welcome interns with high energy, enthusiasm and a keen willingness to learn from day one. Let us know if you are one of them.</p>
          </div>
        </div>
      </div>

      <div className='container px-8 py-8 mx-auto text-center md:px-40'>
        <h4 className=''>Benefits of working for us</h4>
        <p className='pt-6'>In addition to contributing to the great cause of easing the lives of millions of Africans with world-class financial products, you also get competitive base salaries, social and statuatory benefits, generous holidays, commissions / bonus / profit sharing schemes based on responsibilities and results of different positions.</p>
      </div>
    </div>
  )
}

export default careers

export const getServerSideProps = async () => {

  const query = `*[_type == "career"]{
  _id,
  _createdAt,
  title,
  slug,
  location,
  "division": division[0]->title,
  yearofexperience,
}`;




  const careers = await sanityClient.fetch(query)
  return {
    props: {
      careers
    }
  }

}

