import Image from "next/image";
import React from "react";
import DemoModal from "src/components/DemoModal";
import { FooterForm } from "src/components/form";
import { Hero } from "src/components/hero";

const products = () => {
  const [show, setShow] = React.useState<boolean>(false);
  const title =
    "Meaningful. Affordable. Easy. Our solutions are of today's Africa";
  const description =
    "We genuinely believe we are creating payment solutions that positively affect the lives of millions of Africans. Sometimes we like to talk about what we do more openly. Sometimes, others do for us.";

  const products = [
    {
      title: "Accounting system",
      description:
        "Accounting system developed to compliment Mobitill Epesi application. This is to enable transaction posted in the dashboard have flexibility to have a financial approach through an accounting and book keeping for SMEs",
      features: ["Delivers chart of accounts"],
      image: "/assets/products/accounting.png",
    },
    {
      title: "Loans & Savings",
      description:
        "This is an application that automates Sacco loans and savings processes. It helps the Sacco collect, manage and monitor their member’s savings and loan applications.",
      features: [
        " Documentation of members savings",
        "Secured data of loans applied for",
        "Automated process that is efficient in running the loans and savings process within a Sacco",
        "Frees time spent on manual applications ",
        "Quicker decision making during loan applications",
        "Automated reports",
        " Sacco transparency",
      ],
      image: "/assets/products/passenger.png",
    },
    {
      title: "Mepesi",
      description:
        "mEpesi is a mobile based application for the public transport sector that allows passengers to: -view and access in real time the availability of vehicles on the road on which they intend to travel -view and book the available seats on the vehicles -pay for their trips -view and post real-time traffic updates.",
      features: [
        "Offering payment options such as MPESA, VISA, or mobile wallet",
        "Enabling you to share and view traffic updates and service ratings with other users",
        "Allowing you to travel within or across cities",
        "Showing you routes, vehicles, fares, and maps",
      ],
      image: "/assets/products/passenger_app.png",
    },
    {
      title: "Mapato Payroll",
      description:
        "A simple, convenient, affordable and customizable payroll system for small businesses. It covers employee information, hours, time off, salaries, wedges, overtime, deductions, taxes, and net and gross pay.",
      features: [
        "Mobile pay slips",
        "Accurate paychecks",
        "Automatic payroll taxes",
        "Fast direct deposits",
        "NHIF and NSSF collection",
        "Bank connections and reconciliation",
        "Tax penalty protection",
        "SMS and email alerts",
      ],
      image: "/assets/products/passenger.png",
    },
    {
      title: "Trip Scheduling/Planner",
      description:
        "Fleet Scheduling system basically ques the vehicles and helps develop the schedules of the vehicles operating within a Sacco or the bus stop. Scheduling system has a geofencing feature which tracks the vehicle movement and automatically schedules the vehicles according to the time at which the vehicle enters the desired boundary.",
      features: [
        "Real-time insights on stage operations",
        "Prior planning for orderly stage activities",
        "Custom reports for efficient operations",
        "Traffic control in bus stops",
        "Streamlined vehicle and pedestrian interaction",
        "Predictive analytics for mobility planning",
      ],
      image: "/assets/products/passenger.png",
    },
    {
      title: "Speed Limiters",
      description:
        "MobiTill Speed Limiter is a product by Data Integrated Limited that controls the speed of buses/matatus and sends data to NTSA. It follows the KS 2295-2018 standards and reduces compliance risks.",
      features: [
        "GPS real time tracking",
        "Track Playback function",
        "Geo- Fencing function",
        "Data printing function",
        "SMS function and remote configuration",
      ],
      image: "/assets/products/passenger.png",
    },
  ];
  return (
    <div>
      <div className="container pt-8">
        <Hero title={title} description={description} />
      </div>

      <div className="flex flex-col">
        {products.map((item, index) => (
          <div
            key={index}
            className={`relative ${
              index % 2 === 0 ? "bg-primary" : "bg-transparent"
            }`}
          >
            <div className="container flex py-6 mx-auto">
              <div
                className={`p-4 w-1/2 ${
                  index % 2 === 0
                    ? "order-2 rounded-r-lg"
                    : "order-1 rounded-l-lg"
                }`}
              >
                <h4 className="py-2 font-bold">{item.title}</h4>
                <p className="">{item.description}</p>
                <h5 className="pt-5 pb-2 text-lg">Product Features</h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-3">
                  <div className="">
                    <ol className="list-disc md:pl-5">
                      {item.features.map((feature, index) => (
                        <li className="" key={index}>
                          <p>{feature}</p>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
              <div
                className={`p-4 w-1/2 ${
                  index % 2 === 0
                    ? "order-1 rounded-l-lg"
                    : "order-2 rounded-r-lg"
                }`}
              >
                <Image
                  src={item.image}
                  alt="Product Item"
                  width={600}
                  height={600}
                  className="object-cover"
                />
                {/* Content of the second column */}
              </div>
            </div>
          </div>
        ))}
      </div>
      <DemoModal setShowModal={setShow} showModal={show} />
      <FooterForm setShowModal={setShow} />
    </div>
  );
};

export default products;
