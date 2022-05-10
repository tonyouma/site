import type { NextPage } from 'next'

import CareersCard from 'src/components/careersCard'
const careers: NextPage = () => {
  return (
    <div>
      <div className='md:px-60 px-6 pt-6'>
        <h3>About Data Integrated Limited (DIL)</h3>
        <p>Data Integrated Limited (DIL) is a Kenyan ICT company that offers financial solutions to small and medium scale enterprises (SME’s) in Africa. The company humble beginnings dates back to 2012, armed with a big dream of addressing automation challenges faced by small and medium scale businesses (SME’s) in Africa.
          We believe that SME’s would realize their financial goals sooner by deploying modern technology. The efficiency thus gained would translate to growth and longevity of the businesses.</p>
        <p><span className='font-bold my-4'>Our motto</span>  says a lot on what we believe in, which is connecting “the street” to “high finance”. </p>
        <p>Over the years, DIL has mastered the African market and offers niche solutions that are customized to the unique African experience. We are committed to giving efficient services, seamless customers experience and user friendly person-to-person payments.<br />
          Our solutions are developed to be compatible with most payments solutions and platforms. DIL strives to have financial inclusion for all, by increasing payment efficiency through liable, secure, fast and easy to use devices at an affordable price.</p>
      </div>

      <div className=' my-6 bg-white'>
        <div className="py-12 md:px-60 px-6">
          <p className='text-center'>Currently Open Roles</p>
          <CareersCard />
          <div className='md:w-2/3 mx-auto text-center'>
            <p className=''>Open Application</p>
            <p>If you don’t see an available position but think you can still be a valuable addition to our team, please send in your application to <span className='text-blue-500 font-bold'>hr@dataintegrated.co.ke</span>  and convince us.</p>
            <p className=''>Internships</p>
            <p>We always welcome interns with high energy, enthusiasm and a keen willingness to learn from day one. Let us know if you are one of them.</p>
          </div>
        </div>
      </div>

      <div className='md:px-60 px-8 py-8 mx-auto text-center'>
        <p className=''>Benefits of working for us</p>
        <p className='pt-6'>In addition to contributing to the great cause of easing the lives of millions of Afri- cans with world-class financial products, you also get competitive base salaries, social and statuatory benefits, generous holidays, commissions / bonus / profit sharing schemes based on responsibilities and results of different positions.</p>
      </div>


    </div>
  )
}

export default careers
