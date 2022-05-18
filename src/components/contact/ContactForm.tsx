import React from "react";

const Contactform = () => {
  return (
    <div className="p-5 mt-2 rounded-md border shadow-lg w-[480px] md:absolute md:z-10 bg-white">
      <div className="flex flex-col my-2 ">
        <h4 className="font">Reach out to Us</h4>
      </div>
      <div className="flex flex-col ">
        <form className="w-full max-w-lg">
          <div className="flex flex-wrap -mx-3 ">
            <div className="w-full px-3 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-name"
              >
                Name
              </label>
              <input
                className=" block w-full bg-gray-200
       text-gray-700 border rounded 
       py-3 px-4 mb-3 leading-tight focus:outline-none
        focus:bg-white focus:border-gray-500"
                id="grid-name"
                type="text"
                placeholder="Your Name"
              />

              {/* <p className="text-red-500 text-xs italic">
                Please fill out this field.
              </p> */}
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 ">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-email"
              >
                Email
              </label>
              <input
                className=" block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-email"
                type="email"
                placeholder="you@company.com"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 ">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-subject"
              >
                Subject
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="text"
                placeholder="Subject"
              />
              {/* <p className="text-gray-600 text-xs italic">
                Make it as long and as crazy as you`d like
              </p> */}
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full  px-3  md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-content"
              >
                How can we help?
              </label>
              <textarea
                id="grid-content"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Tell us more about your project"
                rows={4}
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-4 px-3 justify-center ">
            <div className="w-full mb-2">
              <p className="text-xs">
                By proceeding, I agree to DIL&apos;s <span className=" underline cursor-pointer"> Terms of Use</span> and acknowledge
                that I have read the <span className="underline cursor-pointer">Privacy Policy</span> .
              </p>
            </div>
            <div className="w-full md:mb-0">
              <p className="text-xs">
                I also agree that DIL or its representatives may contact me by
                email, phone, or SMS (including by automated means) at the email
                address or number I provide, including for marketing purposes.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full px-3  md:mb-0">
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contactform;
