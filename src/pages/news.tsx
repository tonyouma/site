/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import { news } from "src/constants/news";
import { news2 } from "src/constants/news2";
import Link from "next/link";
import { FooterForm } from "src/components/form";
import Image from "next/image";
import { INews } from "src/models/news";
import { sanityClient, urlFor } from "../../sanity";

interface Props {
  news: [INews]
}

const News = ({ news }: Props) => {

  return (
    <>
      <div className="container flex flex-col p-5 md:p-0">
        <div className='mx-auto md:max-w-2xl md:pt-16'>
          <h1 className='mb-4 text-center'>Making headlines is good when you’re truly doing good.</h1>
          <p className='max-w-2xl py-8 mx-auto text-center'>
            We genuinely believe we are creating payment solutions that
            positively affect the lives of millions of Africans. Sometimes we like
            to talk about what we do more openly. Sometimes, others do for us.
          </p>
        </div>

        <div className="grid items-baseline grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {news.map((item) => (
            <Link key={item._id} href={`/news/${item.slug.current}`} passHref>
              <div className="overflow-hidden cursor-pointer group">
                <img
                  src={urlFor(item.mainImage).url()!}
                  className="object-cover w-full h-48 transition-transform duration-200 ease-in-out group-hover:scale-105"
                  alt={item.title}
                />
                <div className="p-5 bg-white">
                  <p>{item.headline}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="grid items-baseline grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 md:pt-12">
          <div className="md:px-5 md:py-12">
            <h3 className="p-2">Featured On</h3>
            <p className="p-2">
              Autem aut laboriosam distinctio. Modi sunt blanditiis beatae
              consectetur nesciunt alias. Ad distinctio ab quidem voluptas enim
              illo. Quia consequatur voluptas veniam
            </p>
          </div>
          {news2.map((news, index) => (
            <div
              className="px-5 py-6 shadow-md md:py-12 md:h-64 bg-primary"
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

        <h2 className="text-red-500">Featured on</h2>
        <div className="grid grid-cols-3 gap-6 md: py-7">
          <div className="h-32 border-2 border-red-500 "></div>
          <div className="h-32 border-2 border-red-500 "></div>
          <div className="h-32 border-2 border-red-500 "></div>
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
