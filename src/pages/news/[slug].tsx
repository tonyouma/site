/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @next/next/no-img-element */
import { FooterForm } from "src/components/form";
import { sanityClient, urlFor } from "../../../sanity";
import { INews } from "src/models/news";
import { GetStaticProps } from "next";
import PortableText from "react-portable-text"
import { ClassAttributes, HTMLAttributes } from "react";

interface Props {
  news: INews
}

const News = ({ news }: Props) => {
  return (
    <div className="container">
      <div className="md:pt-16 ">

        <img src={urlFor(news.mainImage).url()!} alt={news.title} className="object-cover w-full h-60" />
        <article className="p-5 mx-auto">
          <h3 className="mt-10 mb-3 text-secondary">{news.title}</h3>
          <h4>{news.headline}</h4>

          <div className="mt-6">
            <PortableText
              dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
              projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
              content={news.body}
              serializers={{
                h1: (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLHeadingElement> & HTMLAttributes<HTMLHeadingElement>) => (
                  <h1 className="my-5 text-2xl font-bold" {...props} />
                ),
                h2: (props: any) => (
                  <h1 className="my-5 text-xl font-bold" {...props} />
                ),
                list: ({ children }: any) => (
                  <li className="ml-4 list-disc">{children}</li>
                ),
                link: ({ href, children }: any) => (
                  <a href={href} className="text-blue-500 hover:underline">
                    {children}
                  </a>
                ),
                img: (props: { src: string; alt: string }) => (
                  <img src={props.src} className="w-full pt-5" alt={props.alt} />
                ),
                p: (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLParagraphElement> & HTMLAttributes<HTMLParagraphElement>) => <p className="py-5" {...props} />,
                figure: (children: any) => (
                  <figure className="mt-5">
                    {children}
                  </figure>
                )
              }}

            />
          </div>
        </article>
      </div>
      <FooterForm />
    </div>
  )
}

export default News

export const getStaticPaths = async () => {
  const query = `*[_type == "news"]{
    _id,
  slug,
}`

  const news = await sanityClient.fetch(query)
  const paths = news.map((news: INews) => ({
    params: {
      slug: news.slug.current
    }
  }))

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `*[_type == "news" && slug.current == $slug][0]{
    _id,
  _createdAt,
  title,
  slug,
  mainImage,
  publishedAt,
  body,
  headline
  }`

  const news = await sanityClient.fetch(query, { slug: params?.slug })

  if (!news) {
    return {
      notFound: true
    }
  }
  return {
    props: {
      news
    },
    // enable ISR[Instant Server Rendering] for this page
    revalidate: 60
  }
}
