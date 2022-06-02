import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'

// import CareersCard from 'src/components/careersCard'
import { ICareer } from 'src/models/careers'

interface Props {
  careers: [ICareer]
}

// const TitleItem = (title: string) => {
//   return (
//     <h3 className='py-4 text-center'>{title}</h3>
//   )
// }
const careers = ({ careers }: Props) => {

  return (
    <div className=''>
      <div className='h-[552px] bg-black relative text-center'>
        <img src="/assets/careers.png" alt=""  className='object-cover opacity-70'/>
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

      <div className='py-12 my-6 bg-primary'>
        <div className="container px-5 md:px-40">
          <h4 className='text-center'>Currently Open Roles</h4>
          <div className='flex flex-col py-5 gap-y-5'>
            {!careers  || careers.length === 0 ? (<div className='p-4 bg-white rounded'><p>No roles available at the moment</p></div>) :(
             careers.map(career => (
              <div className='p-5 rounded-lg bg-defaultWhite' key={career._id}>
                {career.categories && (
                  <ul>
                    {career.categories.map(category => <p className='mb-2 font-extrabold uppercase' key={category}>{category}</p>)}
                  </ul>
                )}

                <div className="flex items-center justify-between">
                  <p>{career.title}</p>
                  <Link href="/careers/[id]" as={`/careers/${career.slug.current}`} passHref ><div className='flex text-[#0645AD] cursor-pointer gap-x-2'>View job<img src="/assets/link.svg" alt="" className="" /></div></Link>
                </div>
                <div className="flex">
                  <p>{career?.location}</p>
                  <p>{career?.employmentType}</p>
                </div>
              </div>
            )))}
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
  const query = encodeURIComponent(`*[_type == "career"]{
  _id,
  _createdAt,
  title,
  slug,
  location,
  "categories": categories[]->title,
}`);


  const url = `process.env.NEXT_PUBLIC_SANITY_URL?query=${query}`;
  try {
    const data = await fetch(url).then((res) => res.json());
    const careers = data.result

    return {
      props: {
        careers
      }
    }
  } catch (error) {
    return {
      props: {}
    }
  }

}

