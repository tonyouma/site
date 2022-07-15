// import { news } from "src/constants/news";
import Image from "next/image";
import Link from "next/link";
import { FooterForm } from "src/components/form";
import { Hero } from "src/components/hero";
import { news2 } from "src/constants/news2";
import { INews } from "src/models/news";
import { sanityClient, urlFor } from "../../sanity";

interface Props {
  news: [INews]
}

const News = ({ news }: Props) => {

  const downloadAssets = async() =>{
    //To download assets
  }

  const downloadRelease = async() =>{
    //To download press release
  }

  const intro = "Making headlines is good when you’re truly doing good."
  const description = "From government authorities to banks and credit providers, we work with a growing number of partners with a single aim - give African SMEs a competitive edge that no one else can."

  return (
    <>
      <div className="container flex flex-col p-5 md:p-0">

        <Hero title={intro} description={description} />

        <h3 className="pb-2">Top News</h3>

        <div className="flex flex-col gap-x-12 md:flex-row">
          <div className="w-full md:w-1/2">
            <img
              src="/assets/news/new1.png"
              className="mx-auto border rounded-sm"
              width="700px"
              height="auto"
              alt=""
            />
          </div>
          <div className="w-full p-1 md:w-1/2 md:my-auto">
            <h4>
              Matatu transport digitalization events by DIL with Toyota Kenya
              and Mobility 54.
            </h4>
            <p className="py-3">
              Data Integrated Limited (“DIL“) — together with Toyota Kenya and
              Mobility 54 Investment SAS (“Mobility54“) — organized a series of
              events throughout Kenya for promoting DIL’s transport management
              system and its devices along with Toyota Hiace which is the most
              popular vehicle for Matatu transport services in Kenya.{" "}
            </p>
          </div>
        </div>

        <h3 className="py-2 md:pb-3 md:pt-12">Other news in DIL</h3>

        <div className="grid items-baseline grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
          {news.map((item) => (
            <Link key={item._id} href={`/news/${item.slug.current}`} passHref>
              <div className="overflow-hidden cursor-pointer group">
                <img
                  src={urlFor(item.mainImage).url()!}
                  className="object-cover w-full h-48 transition-transform duration-200 ease-in-out group-hover:scale-105"
                  alt={item.title}
                />
                <div className="pt-5 bg-white">
                  <p className="font-bold">{item.headline}</p>
                </div>
              </div>
            </Link>
          ))}
          {/* {news.map((item, index) => (
            <div className="" key={index}>
              <Link href="/news[id]" as={`/news/id`} passHref >
                <img
                  src={urlFor(item.mainImage).url()!}
                  className="object-cover w-full h-48 transition-transform duration-200 ease-in-out group-hover:scale-105"
                  alt={item.title}
                />
              </Link>

              <div className="p-5">
                <h4 >{item.title}</h4>
                <p className="py-3">{item.body}</p>
                <h5>
                  <span className="">By</span>
                  {news.author}
                </h5>
              </div>

            </div>
          )
          )} */}
        </div>


        <div className="grid items-stretch justify-center grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 md:pt-12">
          <div className="md:px-5 flex flex-col h-full justify-center md:py-12">
            <h3 className="pb-4">Featured On</h3>
            <p className="">Recently, Data Integrated Limited got featured in the Business Today segment in one of the major media houses in Kenya, KTN. Have a look: <span><a href="https://www.youtube.com/watch?v=IWOhzDoRkJo" target="_blank" className="text-secondary">Link here</a>
            </span>
            </p>
          </div>
          {news2.map((news, index) => (
            <div className="flex flex-col items-center justify-center px-5 py-6 rounded-lg shadow-md md:py-12 min-h-64 bg-primary" key={index}>
              <Image
                src={`${news.image}`}
                className="p-2"
                width="122px"
                height="100%"
                alt=""
              />
              <h4 className="p-1">{news?.title}</h4>
              <p className="p-2 pb-4">{news?.body}</p>
            </div>
          )
          )}
        </div>
      </div>
      <div className="p-5 md:mt-12 relative w-full h-80 items-center justify-center flex bg-[url('/assets/news/nairobi.png')]">
        <h2 className="text-white md:m-auto md:text-center md:w-1/2">Our Mission is to automate payment services through an integrated, reliable, secure, easy to use platform.</h2>
      </div>

      <div className="container flex flex-col p-3">
        <div className="w-full py-10 md:w-1/2">
          <h3 className="capitalize">media assets</h3>
          <p>
            Our guidelines layout and reflect our values and our community.
            Simple yet diverse. Follow these guidelines and use only approved
            brand assets from this site
          </p>
        </div>

        <div className="flex flex-col pb-10 gap-x-5 gap-y-5 md:flex-row">
          <div className="flex items-center w-full max-h-full gap-4 pr-3 rounded-md shadow-md md:w-1/2">
            <div className="h-full max-h-full px-4 bg-primary rounded-l-md">
              <img src="/assets/news/dtl.svg" alt="" className="h-full md:h-full"></img>
            </div>
            <div>
              <h5 className="font-bold uppercase">Data Integrated Limited Logos</h5>
              <p className="">
                Our primary logo is Data Integrated, combination two colors
                desire and pressian blue. Available in different variants
              </p>
            </div>
          </div>
          <div className="flex w-full md:w-1/2 gap-x-5">
            <div className="w-1/2 p-4 rounded-md shadow-md md:py-6 md:px-9 bg-primary">
              <img src="/assets/news/folder.svg" alt="" />
              <h5 className="pt-3 font-bold uppercase">Image assets</h5>
              <p className="py-1">Official images</p>
              <a href="http://" className="text-secondary">Download</a>
            </div>
            <div className="w-1/2 p-4 rounded-md shadow-md md:py-6 md:px-6 bg-primary">
              <img src="/assets/news/folder.svg" alt="" />
              <h5 className="pt-3 font-bold uppercase">Press Kit</h5>
              <p className="py-1">Official Release</p>
              <a href="http://" className="text-secondary">Download</a>
            </div>
          </div>
        </div>
      </div>

      <FooterForm />

    </>
  );
};

export default News;

export const getServerSideProps = async () => {
  const query = `*[_type == "news"]{
    _id,
  _createdAt,
  title,
  slug,
  mainImage,
  publishedAt,
  body,
  headline
}`;

  const news = await sanityClient.fetch(query)
  return {
    props: {
      news
    }
  }
}
