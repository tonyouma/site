import Link from 'next/link'
import { Title } from 'src/components/title'
import { ICareer } from 'src/models/careers'
import { sanityClient } from '../../sanity'
interface Props {
  careers: [ICareer]
}

const Careers = ({ careers }: Props) => {
  const titleIntro = "A meaningful challenge to solve. A soulful company to work for."
  const description = "“I never lose. I either win or learn”, says an African proverb. We go all-in when we try to come up with products that make a common man's life easy. And we do that by standing for and supporting each other."
  return (
    <div className='container'>
      <Title title={titleIntro} description={description}/> 

      {/* <div className="p-5 md:pt-16 md:p-0">
        <h1 className='mb-4 text-center'>A meaningful challenge to solve. A <br /> soulful company to work for.</h1>

        <p className='py-8 mx-auto text-center md:max-w-2xl'>
          “I never lose. I either win or learn”, says an African proverb. We go all-in when we try to come up with products that make a common man’s life easy. And we do that by standing for and supporting each other.</p>
      </div> */}

      <div className='py-12 my-6'>
        <div className="container px-5 md:px-40">
          <h1 className='text-center'>Available Positions</h1>
          <div className=''>
            {
              careers.map(career => (
                <div className='p-5 text-2xl text-center' key={career._id}>
                  <Link href="/careers/[id]" as={`/careers/${career.slug.current}`} passHref ><p className='cursor-pointer text-secondary'>{career.title}</p></Link>
                  <div className="text-center">
                    <p className=''>{career.division} | {career?.yearofexperience} years of experience | {career?.location}</p>
                  </div>

                </div>
              ))}
          </div>
          <div className='text-center'>
            <h1 className='pb-3'>Open Application</h1>
            <p>If you don’t see an available position but think you can still be a valuable addition to our team, please send in your application to <span className='font-bold text-blue-500'>hr@dataintegrated.co.ke</span>  and convince us.</p>
            <h1 className='py-3'>Internships</h1>
            <p>We always welcome interns with high energy, enthusiasm and a keen willingness to learn from day one. Let us know if you are one of them.</p>
          </div>
        </div>
      </div>

      <div className='container px-8 py-8 mx-auto md:text-center md:px-40'>
        <h1 className=''>Benefits of working for us</h1>
        <p className='pt-6'>In addition to contributing to the great cause of easing the lives of millions of Africans with world-class financial products, you also get competitive base salaries, social and statuatory benefits, generous holidays, commissions / bonus / profit sharing schemes based on responsibilities and results of different positions.</p>
      </div>
    </div>
  )
}

export default Careers

export const getServerSideProps = async () => {
  const query = `*[_type == "career"]{
  _id,
  _createdAt,
  title,
  slug,
  location,
  "division": division[0]->title,
  yearofexperience
}`;

  const careers = await sanityClient.fetch(query)
  return {
    props: {
      careers
    }
  }
}

