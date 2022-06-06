
const Career = () => {
    return (
        <div className="">


            <div className="">

                <div className="pt-24">
                    <div className="container flex flex-wrap">
                        <div className="">
                            <h1>Customer Success Manager</h1>
                            <p>Division: Sales & Marketing</p>
                            <p>Experience: 4-7 Years </p>
                            <p>Location: Nairobi, Kenya or Remote</p>
                        </div>
                        <div className="sm:w-full">
                            <h3 className="capitalize">About the role</h3>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril</p>
                            <h3 className="my-10">What you will do:</h3>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril</p>

                            <h3 className="">What you need to have:</h3>
                            <p>Euis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea com- modo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui</p>
                            <h3 className="my-10">What we offer</h3>
                            <p>Euis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea com- modo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui</p>
                        </div>

                    </div>
                    <div className="container py-5">
                        <button className="text-2xl text-secondary">Apply Now</button>
                    </div>
                    <div className="bg-[#F9DADD]">
                        <div className="container md:pt-10">

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
                                <div className="">
                                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                                    <textarea id="message" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
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

                </div>
            </div>
        </div>
    )
}

export default Career



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


