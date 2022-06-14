import type { NextPage } from "next";
import { useState } from "react";
import { Title } from "src/components/title";

// type Contacts = {
//   id: number;
//   title: string;
//   icon: string;
//   content: string;
// };

const titleIntro = "Always within reach. Always with a smile."
const description = "Whether it’s about learning about our growth plans or a technical glitch that you need to solve immediately or co-develop an idea that you think is brilliant for Africa, please do reach out to us. Our doors are always open. "

const Contact: NextPage = () => {

  const [open, setOpen] = useState(false);
  const openClick = () => {
    setOpen(!open);
  }
  return (
    <div className="">

      <Title title={titleIntro} description={description} className="max-w-md md:text-center md:mx-auto" />
      <div className="container p-5 py-5 md:p-0 md:py-5">
        <button className="text-2xl text-secondary" onClick={openClick}>Reach Out</button>
      </div>
      {open &&
        <div className="bg-[#F9DADD]">
          <div className="container p-5 mb-5 md:pt-10 md:p-0">

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
      }
    </div>
  );
};

export default Contact;
