import { GetStaticProps } from "next";
import { ICareer } from "src/models/career";


interface Props extends ICareer {
  
}
const Career = ({title, location, publishedAt}: Props) => {
    return (
        <div className="">
            <div className="container md:pt-16">
                <h2 className="capitalize">{title}</h2>
                <p>Integrated Limited (DIL)</p>
                <div className="flex items-center justify-between py-10">
                    <p>icons</p>
                    <button
                        className="px-5 py-2.5 text-gray-700 border rounded-md duration-100 hover:border-secondary active:shadow-lg"
                    >
                        Share Posting
                    </button>
                </div>
            </div>

            <div className="bg-primary">

                <div className="container pt-24">
                    <div className="flex flex-wrap">
                        <div className="pr-16 mb-10 md:w-2/3 sm:w-full">
                            <p className="capitalize">About the role</p>
                            <p className="">We are searching for a JavaScript developer that is also familiar with React.js. The majority of your time will be spent designing user interface components and putting them together using well-known React.js procedures. You&apos;ll make sure that these components, as well as the entire application, are reliable and simple to maintain. You&apos;ll collaborate with the rest of the team on various levels of the infrastructure. To satisfy our company&apos;s demands, you should be able to create and manage functioning and stable web apps.</p>
                            <h3 className="">What you will do:</h3>
                            <ul className="list-disc list-inside">
                                <li>Collaborating with engineers, designers, product managers and other stakeholders to actualize new ideas into working consumer features.</li>
                                <li>Improving application performance by profiling components, debugging data integration and testing across a vast array of web-capable devices and browsers.</li>
                                <li>Participate in code reviews and working sessions with other engineers to ensure high coding standards are upheld and best practices are considered when structuring code.</li>
                                <li>Participate in team showcases to showcase the work you and your team have covered and collect feedback.</li>
                            </ul>

                            <h3>What you need to have:</h3>
                            <ul className="list-disc list-inside">
                                <li>Experience building web applications</li>
                                <li>Knowledge of HTML, CSS and SASS preprocessor</li>
                                <li>Knowledge of JS and Typescript</li>
                                <li>Experience with git version control</li>
                                <li>Knowledge of modern authorization mechanisms. </li>
                                <li>Experience with React</li>
                            </ul>
                        </div>
                        <div className="p-5 rounded-md bg-defaultWhite md:w-1/3">
                            <h4>Role Overview</h4>
                            <div className="flex flex-col gap-y-4">
                            <div>
                                <p className="capitalize">location</p>
                                <p>{location}</p>
                            </div>
                            <div>
                                <p className="capitalize">Posted On</p>
                                    <p>{new Date(publishedAt).toISOString()}</p>
                                    {/* <p>{publishedAt}</p> */}
                            </div>
                        </div>
                        </div>
                    </div>

                    <form
                        onSubmit={(e) => e.preventDefault()}
                        className="max-w-lg mt-12">
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
    )
}

export default Career

// export const getServerSideProps = async (pageContext: { query: { slug: any; }; }) => {
//     const pageSlug = pageContext.query.slug;
//     // const query = encodeURIComponent(`*[ _type == "post" && slug.current == "${pageSlug}" ]`);

//     const query = encodeURIComponent(`
//   *[_type == "career"]
// {
//   _id,
//   _createdAt,
//   title,
//   slug,
//   categories
// }`);

//     // const url = `${process.env.NEXT_PUBLIC_SANITY_URL}query=${query}`;
//     const url = `https://2nwbip7f.api.sanity.io/v1/data/query/production?query=${query}`;
//     const result = await fetch(url).then(res => res.json());
//     const post = result.result[0];
//     console.log(post);
//     return {
//         props: {
//             title: post.title,
//         }
//     }
// };

export const getServerSideProps = async (pageContext: { query: { slug: string; }; }) => {
    const pageSlug = pageContext.query.slug;
    const query = encodeURIComponent(`*[ _type == "career" && slug.current == "${pageSlug}" ]`);
    const url = `https://2nwbip7f.api.sanity.io/v1/data/query/production?query=${query}`;
    const result = await fetch(url).then(res => res.json());
    const career = result.result[0];
    console.log(career);
    return {
        props: {
            title: career?.title,
            location: career?.location,
            publishedAt: career?.publishedAt,
        }
    }
};

// export const getStaticPaths = async () => {
//     const query = `*[_type == "career"]{
//   _id,
//   slug,
// }`
//     debugger

//     const url = `https://2nwbip7f.api.sanity.io/v1/data/query/production?query=${query}`;
//     const data = await fetch(url).then(res => res.json());
//     const careers = data.result;
    
//     const paths = careers.map((career: ICareer) => {
//         params: {
//             slug: career?.slug.current
//         }
//     })

//     return {
//         paths,
//         fallback: 'blocking'
//     }

// }

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//     const query = `*[_type == "career" && slug.current == $slug][0]{
//   _id,
//   slug,
//   _createdAt,
//   title
// }`

//     const url = `https://2nwbip7f.api.sanity.io/v1/data/query/production?query=${query}&params.slug=${params?.slug}`;
//     const data = await fetch(url).then(res => res.json());
//     const career = data.result
//     console.log(career)
//     if (!career) {
//         return {
//             notFound: true
//         }
//     }
//     return {
//         props: career
//     }

// }




