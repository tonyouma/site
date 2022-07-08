import { GetStaticProps } from "next";
import { ClassAttributes, HTMLAttributes } from "react";
import PortableText from "react-portable-text";
import { ICareer } from "src/models/careers";
import { sanityClient } from "../../../sanity";

interface Props {
    career: ICareer
}

const Career = ({ career }: Props) => {

    console.log('career :>> ', career);
    async function copyToClip() {
        await navigator.clipboard.writeText(location.href);

    }
    return (
        <div className="">
            <div className="container px-5 md:px-0 md:pt-16">
                <div className="flex items-center justify-between py-10">
                    <h2 className="mb-2 capitalize">{career.title}</h2>
                    <button
                        onClick={copyToClip}
                        className="px-5 py-2.5 text-gray-700 border rounded-md duration-100 hover:border-secondary active:shadow-lg"
                    >
                        Share Posting
                    </button>
                </div>
            </div>

            <div className="bg-primary">

                <div className="container px-5 pt-12 md:px-0 md:pt-24">
                    <div className="flex flex-col md:flex-row">
                        <div className="pr-16 mb-10 md:w-2/3 sm:w-full">
                            <PortableText
                                dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
                                projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                                content={career.body}
                                serializers={{
                                    h3: (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLHeadingElement> & HTMLAttributes<HTMLHeadingElement>) => (
                                        <h1 className="my-6 text-2xl capitalize" {...props} />
                                    ),
                                }}
                            />
                        </div>
                        <div className="p-5 my-6 rounded-md bg-defaultWhite md:w-1/3 h-1/2">
                            <h4>Role Overview</h4>
                            <div className="flex flex-col pt-3 gap-y-4">
                                <div>
                                    <p className="text-lg font-bold capitalize">Function</p>
                                    <p>{career.division}</p>
                                </div>
                                <div>
                                    <p className="text-lg font-bold capitalize">location</p>
                                    <p>{career.location}</p>
                                </div>
                                <div>
                                    <p className="text-lg font-bold capitalize">Posted On</p>
                                    <p>{new Date(career?._createdAt).toLocaleDateString()}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <h3>Apply for this position</h3>
                        <form
                            onSubmit={(e) => e.preventDefault()}
                            className="max-w-lg mt-3">
                            <div>
                                <label htmlFor="name" className="block py-3 text-gray-500">
                                    Your Name*
                                </label>
                                <input
                                    type="text"
                                    placeholder=""
                                    id="name"
                                    className="w-full text-gray-500 outline-none border rounded-md bg-defaultWhite p-2.5"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block py-3 text-gray-500">
                                    Your Email*
                                </label>
                                <input
                                    type="email"
                                    placeholder=""
                                    id="email"
                                    className="w-full text-gray-500 outline-none border rounded-md bg-defaultWhite p-2.5"
                                />
                            </div>
                            <div >
                                <label htmlFor="website-url" className="block py-2 text-gray-500">
                                    LinkedIn Profile URL
                                </label>
                                <div className="flex items-center text-gray-400 border rounded-md">
                                    <div className="px-3 py-2.5 rounded-l-md bg-gray-50 border-r">
                                        https://
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="www.linkedin.com/in/"
                                        id="website-url"
                                        className="w-full p-2.5 pl-2 bg-defaultWhite outline-none rounded-r-md"
                                    />
                                </div>
                            </div>

                            <p className="py-6 text-xs">By submitting this form, you agree that we may use the data you provide to contact you with information related to your submission.
                                <br />Your data will be used subject to DIL&apos;s Privacy Policy.</p>
                            <div className="flex items-center justify-between pb-28">
                                <button
                                    className="px-5 py-2.5 text-white bg-[#093749] rounded-md duration-150 active:shadow-lg"
                                >
                                    Submit Application
                                </button>
                                <p>Required Fields *</p>
                            </div>

                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Career

export const getStaticPaths = async () => {
    const query = `*[_type == "news"]{
    _id,
  slug,
}`

    const career = await sanityClient.fetch(query)
    const paths = career.map((career: ICareer) => ({
        params: {
            slug: career.slug.current
        }
    }))

    return {
        paths,
        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const query = `*[_type == "career" && slug.current == $slug][0]{
    _id,
  _createdAt,
  title,
  "division": division[0]->title,
  yearofexperience,
  location,
  body,
  }`

    const career = await sanityClient.fetch(query, { slug: params?.slug })

    if (!career) {
        return {
            notFound: true
        }
    }
    return {
        props: {
            career
        },
        revalidate: 60
    }
}





// export const getServerSideProps = async (pageContext: { query: { slug: string; }; }) => {
//     const pageSlug = pageContext.query.slug;
//     const query = encodeURIComponent(`*[ _type == "career" && slug.current == "${pageSlug}" ]`);
//     const url = `https://2nwbip7f.api.sanity.io/v1/data/query/production?query=${query}`;
//     const result = await fetch(url).then(res => res.json());
//     const career = result.result[0];
//     return {
//         props: {
//             title: career?.title,
//             location: career?.location,
//             publishedAt: new Date(career?.publishedAt).toLocaleDateString(),
//             employmentType: career?.employmentType,
//             category: career?.categories,
//         }
//     }
// };


