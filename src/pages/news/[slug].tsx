import { FooterForm } from "src/components/form";
import Image from 'next/image'


const News = () => {
  return (
    <div className="">
      <div className="md:pt-16 ">
        <Image src="/assets/placeholder.png" alt="" width="100%" height={24} layout="responsive" />
      </div>

      <div className="bg-primary">
        <div className="max-w-3xl py-6 mx-auto md:py-24">
          <h3 className="capitalize ">About the role</h3>
          <p className="">We are searching for a JavaScript developer that is also familiar with React.js. The majority of your time will be spent designing user interface components and putting them together using well-known React.js procedures. You&apos;ll make sure that these components, as well as the entire application, are reliable and simple to maintain. You&apos;ll collaborate with the rest of the team on various levels of the infrastructure. To satisfy our company&apos;s demands, you should be able to create and manage functioning and stable web apps.</p>
        </div>
      </div>
      <FooterForm />
    </div>
  )
}

export default News



// export const getServerSideProps = async (pageContext: { query: { slug: string; }; }) => {
//   const pageSlug = pageContext.query.slug;
//   const query = encodeURIComponent(`*[ _type == "career" && slug.current == "${pageSlug}" ]`);
//   return {
//     props: {

//     }
//   }
// };


