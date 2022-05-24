import React from "react";
import { FooterForm } from "src/components/form";
import { Hero } from "src/components/hero";

const products = () => {
  const title: string =
    "Meaningful. Affordable. Easy. Our solutions are of today's Africa";
  const description: string =
    "We genuinely believe we are creating payment solutions that positively affect the lives of millions of Africans. Sometimes we like to talk about what we do more openly. Sometimes, others do for us.";
  return (
    <div>
      <div className="container ">
        <div className="grid  md:grid-cols-2">
          <div className="">
            <div className="h-full">
              {" "}
              <h4>
                Meaningful. Affordable. Easy. Our solutions are for today’s
                Africa.
              </h4>
              <p>
                We genuinely believe we are creating payment solutions that
                positively affect the lives of millions of Africans. Sometimes
                we like to talk about what we do more openly. Sometimes, others
                do for us.
              </p>
              {/* <Hero title={title} description={description} /> */}
              <button className=" mt-10 text-center bg-slate-400 rounded-xl h-5 w-40">
                <span className="pt-5"> contact sales </span>
              </button>
            </div>
          </div>
          <div className="grid md:grid-rows-3 gap-10 p-5">
            <div className="mr-5 items-start">
              <img
                src="/assets/products/mobitil_logo.png"
                alt=""
                width="200"
                height="20"
              />
            </div>

            <div className=" ml-10  pl-10 justify-items-end">
              <img
                src="/assets/products/mobitil_logo.png"
                alt=""
                className=""
                width="150"
                height="20"
              />
            </div>

            <div className="mr-5 justify-items-start">
              <img
                src="/assets/products/mobitil_logo.png"
                alt=""
                width="200"
                height="20"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-primary">
        <div className="container ">
          <div className="grid grid-cols-1  md:grid-cols-2  py-5 gap-8">
            <div className="py-6">
              <h4 className="p-2">Mobitill Epesi Booking Portal</h4>
              <p className="p-2">
                MobiTill Epesi is a smart public transport solution developed by
                Data Integrated to address daily operational challenges. Our
                fully customizable solution helps reduce your transport business
                operational costs and improve your services.
              </p>
              <h5 className="pr-5">Product Features</h5>
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className=" ">
                  <ol className="list-disc pl-5 md:pl-5">
                    <li className="">
                      <p>Payment Acceptance</p>
                    </li>
                    <li className="">
                      <p>Receipting</p>
                    </li>
                  </ol>
                </div>
                <div className="pl-5 md:pr-5">
                  <ol className="list-disc">
                    <li className="">
                      <p>Reporting</p>
                    </li>
                    <li className="">
                      <p>Remote Transaction Monitoring</p>
                    </li>
                  </ol>
                </div>
              </div>
              <a href="#" className="p-2 text-blue-700">
                Learn more about Mobitill Epesi Booking portal{" "}
                <span className="focus-visible:">.......</span>
              </a>
            </div>
            <div className="my-10">
              <img
                src="/assets/products/mobitil_logo.png"
                alt=""
                width="200"
                height="20"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <div className="container ">
          <div className="grid grid-cols-1  md:grid-cols-2  py-5 gap-8">
            <div className="my-10">
              <img
                src="/assets/products/mobitil_logo.png"
                alt=""
                width="200"
                height="20"
              />
            </div>

            <div className="py-6">
              <h4 className="p-2">MAPATO PAYROLL</h4>
              <p className="">
                Mapato Payroll system is designed for small businesses. It’s
                simple, convenient, affordable and customizable to your needs.
                From do-it-yourself payroll to human capital management.
              </p>
              <h5 className="pr-5">Product Features</h5>
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className=" ">
                  <ol className="list-disc pl-5 md:pl-5">
                    <li className="">
                      <p>Instant Pay slips accessible on mobile</p>
                    </li>
                    <li className="">
                      <p>Calculate paychecks accurately</p>
                    </li>
                    <li className="">
                      <p>NHIF and NSSF collection</p>
                    </li>
                    <li className="">
                      <p>SMS & email notifications on payments</p>
                    </li>
                  </ol>
                </div>
                <div className="pl-5 md:pr-5">
                  <ol className="list-disc">
                    <li className="">
                      <p>Faster direct deposits processing</p>
                    </li>
                    <li className="">
                      <p>Calculate payroll taxes automatically</p>
                    </li>
                    <li className="">
                      <p>Bank Connections & Reconciliation</p>
                    </li>
                  </ol>
                </div>
              </div>
              <a href="#" className="p-2 text-blue-700">
                Learn more about Mapato Payroll ....
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-primary">
        <div className="container ">
          <div className="grid grid-cols-1  md:grid-cols-2  py-5 gap-8">
            <div className="py-6">
              <h4 className="p-2">Mobitill POS</h4>
              <p className="p-2">
                MobiTill Epesi is a smart public transport solution developed by
                Data Integrated to address daily operational challenges. Our
                fully customizable solution helps reduce your transport business
                operational costs and improve your services.
              </p>
              <h5 className="pr-5">Product Features</h5>
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className=" ">
                  <ol className="list-disc pl-5 md:pl-5">
                    <li className="">
                      <p>Payment Acceptance</p>
                    </li>
                    <li className="">
                      <p>Receipting</p>
                    </li>
                  </ol>
                </div>
                <div className="pl-5 md:pr-5">
                  <ol className="list-disc">
                    <li className="">
                      <p>Reporting</p>
                    </li>
                    <li className="">
                      <p>Remote Transaction Monitoring</p>
                    </li>
                  </ol>
                </div>
              </div>
              <a href="#" className="p-2 text-blue-700">
                Learn more about Mobitill Epesi Booking portal{" "}
                <span className="focus-visible:">.......</span>
              </a>
            </div>
            <div className="my-10">
              <img
                src="/assets/products/mobitil_logo.png"
                alt=""
                width="200"
                height="20"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <h5 className="pr-5 font-bold">LOANS AND SAVINGS</h5>
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className=" ">
            <p className="p-2">
              This is an application that automates Sacco loans and savings
              processes. It helps the Sacco collect, manage and monitor their
              member’s savings and loan applications.
            </p>
            <h6 className="p-2 font-bold">Product Features</h6>
            <ol className="list-inside">
              <li className="">
                <p>Admin Dashboard</p>
              </li>
              <li className="">
                <p>Member Dashboard</p>
              </li>
            </ol>
          </div>

          <div className="pl-5 md:pr-5">
            <h6 className="font-bold">Benfit</h6>
            <ol className="list-disc">
              <li className="">
                <p>Documentation of members savings</p>
              </li>
              <li className="">
                <p>Secured data of loans applied for</p>
              </li>
              <li className="">
                <p>
                  Automated process that is efficient in running the loans and
                  savings process within a Sacco
                </p>
              </li>
              <li className="">
                <p> Frees time spent on manual applications</p>
              </li>
              <li className="">
                <p> Quicker decision making during loan applications</p>
              </li>
              <li className="">
                <p> Automated reports</p>
              </li>
              <li className="">
                <p> Sacco transparency</p>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default products;
