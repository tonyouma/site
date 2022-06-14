/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @next/next/no-img-element */
import { news2 } from "src/constants/news2";
import Link from "next/link";
import { FooterForm } from "src/components/form";
import Image from "next/image";
import { INews } from "src/models/news";
import { sanityClient, urlFor } from "../../sanity";
import { Title } from "src/components/title";

interface Props {
  news: [INews]
}

const News = ({ news }: Props) => {

  const introTitle = "Making headlines is good when you're truly doing good."
  const description = "We genuinely believe we are creating payment solutions that affect the lives of millions of Africans.Sometimes we like to talk about what we do more openly.Sometimes, others do for us."
  return (
    <>
      <div className="container flex flex-col p-5 md:p-0">
        <Title title={introTitle} description={description}/>

        <div className="grid items-baseline grid-cols-1 gap-x-5 gap-y-8 md:grid-cols-3">
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
        </div>

        <h2 className="text-center text-red-500 md:mt-12">Featured on</h2>

        <div className="grid items-baseline grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 md:pt-12">
          {news2.map((news, index) => (
            <div
              className="px-5 py-6 shadow-md md:py-12 md:h-64 "
              key={index}
            >
              <Image
                src={`${news.image}`}
                className="p-2"
                width="100px"
                height="50px"
                alt=""
              />
              <h4 className="p-1">{news.title}</h4>
              <p className="p-2">{news.body}</p>
            </div>
          ))}
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
