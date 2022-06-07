import type { NextPage } from "next";
import { news } from "src/constants/news";
import { news2 } from "src/constants/news2";
import Link from "next/link";
import { FooterForm } from "src/components/form";
import Image from "next/image";

const News: NextPage = () => {

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

        <h3 className="py-2 md:pb-3 md:pt-12">Other news in DIL</h3>

        <div className="grid items-baseline grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
          {news.map((news, index) => (
            <div className="" key={index}>
              <Link href="/news[id]" as={`/news/id`} passHref>
                <img
                  src={`${news.image}`}
                  className="cursor-pointer"
                  width="auto"
                  height="190"
                  alt=""
                />
              </Link>

              <div className="p-5">
                <h4>{news.title}</h4>
                <p className="py-3">{news.body}</p>
                <h5>
                  <span className="">By</span>
                  {news.author}
                </h5>
              </div>
            </div>
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
