import type { NextPage } from "next";

// type Contacts = {
//   id: number;
//   title: string;
//   icon: string;
//   content: string;
// };

const Contact: NextPage = () => {
  return (
    <div className="">
      <div className="md:mx-auto md:max-w-4xl">
        <div className='mb-4 text-center md:max-w-md md:mx-auto'>
          <h1 className=''>Always within reach. Always with a smile.</h1>
        </div>

        <p className='max-w-2xl py-8 mx-auto text-center'>
          Whether it’s about learning about our growth plans or a technical glitch that you need to solve immediately or co-develop an idea that you think is brilliant for Africa, please do reach out to us. Our doors are always open.  </p>    </div>
      <div className="container py-5">
        <button className="text-2xl text-secondary">Reach Out</button>
      </div>
      <div className="bg-[#F9DADD]">
        <div className="container p-5 md:pt-10 md:p-0">

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
  );
};

export default Contact;
