import { GetStaticProps } from "next"
import { ClassAttributes, HTMLAttributes, useState } from "react"
import { sanityClient } from "../../../sanity"
import { ICareer } from "src/models/careers"
import PortableText from "react-portable-text"


interface Props {
    career: ICareer
}
const Career = ({ career }: Props) => {
    const [open, setOpen] = useState(false)
    const openClick = () => {
        setOpen(!open)
    }
    return (
        <div className="">
            <div className="container p-5 pt-12 md:p-0 md:pt-24">
                <div className="pb-5 md:pb-10">
                    <h1 className="pb-5 md:pb-10">{career.title}</h1>
                    <p>Division: {career.division}</p>
                    <p>Experience: {career.yearofexperience} Years </p>
                    <p>Location: {career.location}</p>
                </div>
                <div className="">
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
                    <h3 className="my-6">What we offer</h3>
                    <p>In addition to contributing to the great cause of easing the lives of millions of Afri- cans with world-class financial products, you also get competitive base salaries, social and statuatory benefits, generous holidays, commissions / bonus / profit sharing schemes based on responsibilities and results of different positions.</p>
                </div>

            </div>
            <div className="container p-5 my-5 md:p-0">
                <button className="text-2xl text-secondary" onClick={openClick}>Apply Now</button>
            </div>

            {open &&
                <div className="bg-[#F9DADD]">
                    <div className="container p-5 mb-5 md:p-0 md:my-10">

                        <form
                            onSubmit={(e) => e.preventDefault()}
                            className="max-w-lg pt-6 mt-3">
                            <div>
                                <label htmlFor="name" className="block py-3 text-gray-500">
                                    Your Name*
                                </label>
                                <input
                                    type="text"
                                    placeholder=""
                                    id="name"
                                    className="w-full text-textPrimary outline-none border-b py-2.5 bg-transparent"
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
                                    className="w-full text-textPrimary outline-none border-b bg-transparent py-2.5"
                                />
                            </div>
                            <div className="">
                                <label htmlFor="message" className="block py-3 text-gray-500">Your cover letter</label>
                                <textarea id="message" rows={6} className="block py-2.5 w-full text-sm text-textPrimary bg-transparent border-b border-gray-200 outline-none  dark:bg-gray-700 dark:text-white" placeholder="Your message..."></textarea>
                            </div>
                            <p className="py-6 text-xs">By submitting this form, you agree that we may use the data you provide to contact you with information related to your submission.
                                <br />Your data will be used subject to DIL&apos;s Privacy Policy.</p>
                            <div className="flex items-center justify-between pb-28">
                                <button
                                    className="text-2xl py-2.5 font-SatoshiBold text-secondary"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            }

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
  body
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


