import { Hero } from "src/components/hero";
import { Link } from "../components/link";


const products = () => {
  const title =
    "Meaningful. Affordable. Easy. Our solutions are of today's Africa";
  const description =
    "We genuinely believe we are creating payment solutions that positively affect the lives of millions of Africans. Sometimes we like to talk about what we do more openly. Sometimes, others do for us.";
  return (
    <div>

      <div className="container pt-8">
        <Hero title={title} description={description} />
      </div>

      <div className="bg-primary">
        <div className="container px-5 md:py-12 md:px-0">
          <div className="flex flex-col items-center gap-x-7 md:flex-row">
            <div className="py-6 md:w-7/12">
              <h4 className="py-2 font-bold">mEpesi Passenger App</h4>
              <p className="md:w-10/12">
                mEpesi is a mobile application for public transportation that enables users to view and access real-time vehicle availability on the route they wish to take, pay for their travels, view and publish real-time traffic updates, and view and reserve available seats in the vehicles.
              </p>

              <h5 className="pt-5 pb-2 text-lg">Product Features</h5>
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="">
                  <ol className="pl-5 list-disc md:pl-5">
                    <li className="">
                      <p>Real-time traffic updates</p>
                    </li>
                    <li className="">
                      <p>Bookings and service ratings</p>
                    </li>
                  </ol>
                </div>
                <div className="pl-5 md:pr-5">
                  <ol className="list-disc">
                    <li className="">
                      <p>In-app payments including MPESA, VISA, and the mobile wallet</p>
                    </li>
                    <li className="">
                      <p>Vehicle movement monitoring together with a map for visual aid.</p>
                    </li>
                  </ol>
                </div>
              </div>
              <div className="flex mt-10">
                <a>
                  <img
                    className="inline w-32 mr-4"
                    src="/assets/appstore.svg"
                    alt=""
                  />
                </a>
                <Link
                  name="Play Store"
                  blank
                  url="#"
                  image={"/assets/playstore.svg"}
                />
              </div>
            </div>
            <div className="md:w-5/12">
              <img
                src="/assets/products/mepesi.svg"
                alt=""
                className="w-full h-96"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container px-5 md:px-0 md:py-12">
        <div className="flex flex-col items-center gap-x-7 md:flex-row">
          <div className="order-2 md:w-5/12 md:order-1">
            <img
              src="/assets/limiter_1.webp"
              alt=""

            />
          </div>

          <div className="order-1 py-6 md:w-7/12 md:order-2">
            <h4 className="py-2 font-bold">Speed Limiters</h4>
            <p className="md:w-10/12">
              It integrates both a speed limiter and a tracking device that is configured to the Mobitil Epesi dashboard where owners can access relevant information including real-time location viewing on map and speed information. The Speed Limiter type is iTracMT2 and is compliant to KEBS standards.
            </p>
            <h5 className="pt-5 pb-2 text-lg">Product Features</h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-3">
              <div className="">
                <ol className="list-disc md:pl-5">
                  <li className="">
                    <p>GPS real time tracking</p>
                  </li>
                  <li className="">
                    <p>Track Playback function</p>
                  </li>
                </ol>
              </div>
              <div className="pl-5 md:pr-5">
                <ol className="list-disc">
                  <li className="">
                    <p>Geo-Fencing function</p>
                  </li>
                  <li className="">
                    <p>SMS function and remote configuration</p>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-primary">
        <div className="container px-5 md:px-0">
          <div className="flex flex-col items-center gap-x-7 md:flex-row">
            <div className="py-7 md:py-14 md:w-7/12">
              <h4 className="py-2 font-bold">MAPATO PAYROLL</h4>
              <p className="md:w-9/12">
                Mapato Payroll system is designed for small businesses. It’s
                simple, convenient, affordable and customizable to your needs.
                From do-it-yourself payroll to human capital management.
              </p>
              <h5 className="pt-5 pb-2 text-lg">Product Features</h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-3">
                <div className="">
                  <ol className="list-disc md:pl-5">
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
              {/* <a href="#" className="text-blue-700 ">
                Learn more about Mapato Payroll ....
              </a> */}
            </div>
            <div className="md:w-5/12">
              <img
                src="/assets/products/mapato.svg"
                alt=""

              />
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="container px-5 md:py-12 md:px-0">
          <div className="flex flex-col items-center gap-x-7 md:flex-row">
            <div className="md:w-5/12">
              <img
                src="/assets/products/mobitill_booking.png"
                alt=""

              />
            </div>

            <div className="py-6 md:w-7/12">
              <h4 className="py-2 font-bold">Mobitill Booking Portal</h4>
              <p className="mb-4 md:mb-8 md:w-10/12">
                Mobitill Epesi Booking is an application for booking and paying for trips by passengers or the SACCO cashiers. The application is a web application with a mobile application version called mEpesi Booking, which can be found on Google Play Store.
              </p>
              <a href="https://booking.mobitill.com" target="_blank" className="text-secondary ">
                Learn more about Mobitill Booking Portal
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container py-5">
        <h5 className="pr-5 font-bold">LOANS AND SAVINGS</h5>
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="">
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
      </div> */}
    </div>
  );
};

export default products;
