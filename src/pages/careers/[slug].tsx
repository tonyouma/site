
function Career() {
    return (
        <div>
            <p className="capitalize">Frontend developer</p>

            <div className="bg-white pt-24">
                <p className="capitalize">About the role</p>
                <p className="">We are searching for a JavaScript developer that is also familiar with React.js. The majority of your time will be spent designing user interface components and putting them together using well-known React.js procedures. You&apos;ll make sure that these components, as well as the entire application, are reliable and simple to maintain. You&apos;ll collaborate with the rest of the team on various levels of the infrastructure. To satisfy our company&apos;s demands, you should be able to create and manage functioning and stable web apps.</p>
                <p className="">What you will do:</p>
                <ul className="list-disc list-inside">
                    <li>Collaborating with engineers, designers, product managers and other stakeholders to actualize new ideas into working consumer features.</li>
                    <li>Improving application performance by profiling components, debugging data integration and testing across a vast array of web-capable devices and browsers.</li>
                    <li>Participate in code reviews and working sessions with other engineers to ensure high coding standards are upheld and best practices are considered when structuring code.</li>
                    <li>Participate in team showcases to showcase the work you and your team have covered and collect feedback.</li>
                </ul>

                <p>What you need to have:</p>
                <ul className="list-disc list-inside">
                    <li>Experience building web applications</li>
                    <li>Knowledge of HTML, CSS and SASS preprocessor</li>
                    <li>Knowledge of JS and Typescript</li>
                    <li>Experience with git version control</li>
                    <li>Knowledge of modern authorization mechanisms. </li>
                    <li>Experience with React</li>
                </ul>


                <form
                    onSubmit={(e) => e.preventDefault()}
                    className="max-w-lg px-4 mt-12">
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
                </form>

                <p className="text-base">By submitting this form, you agree that we may use the data you provide to contact you with information related to your submission.
                    Your data will be used subject to DIL&apos;s Privacy Policy.</p>
            </div>
        </div>
    )
}

export default Career
