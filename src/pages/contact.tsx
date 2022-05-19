import type { NextPage } from "next";
import { ContactForm } from ".././components/contact";
import { contacts } from "src/constants/contact";
import { Address } from "../components/contact";
import { Link } from "../components/link";
import { Socials } from "src/components/socials";

type Contacts = {
  id: number;
  title: string;
  icon: string;
  content: string;
};

const Contact: NextPage = () => {
  return (
    <>
      <div className="m-5 p-5  sm:container sm:mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-2">
          <div className="md:pt-20 md:pr-5">
            <h2 className="mb-5">Always within reach. Always with a smile.</h2>
            <p className="mb-5">
              Whether it&apos;s about learning about our growth plans or a
              technical glitch that you need to solve immediately or co-develop
              an idea that you think is brilliant for Africa, please do reach
              out to us. Our doors are always open.
            </p>
            <div className=" mb-5">
              <img src="/assets/contactus/enquiry.svg" alt="" />
              <h4>Partnership Inquiries</h4>
            </div>
            <p>
              For partnership related inquiries with Data Integrated Limited,
              please email{" "}
              <span className="text-blue-500">info@dataintegrated.co.ke</span>
            </p>
          </div>
          <div className="flex justify-center">
            <ContactForm />
          </div>
        </div>
      </div>

      <div className="min-w-full mb-5 md:mt-32">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7977.565822130652!2d36.830210427383534!3d-1.3053485430429546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f11928f70ae4f%3A0xb6bc8a5c0ae76740!2sData%20Integrated%20Limited!5e0!3m2!1sen!2ske!4v1652443479893!5m2!1sen!2ske"
          className="w-full h-full"
          style={{ border: 0, height: 300 }}
          //allowfullscreen=""
          loading="lazy"
          //referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="container mx-auto">
        <div className="">
          <div className="p-5">
            <h4 className="text-center">
              Questions? We&apos;ve got answers. Please don&apos;t hesitate to
              reach out.
            </h4>
          </div>
          <div className="md:flex p-5">
            {contacts.map((contact: Contacts, index: number) => {
              return (
                <Address
                  key={index}
                  id={contact.id}
                  title={contact.title}
                  icon={contact.icon}
                  content={contact.content}
                />
              );
            })}
          </div>
          <div className="text-center mb-5">
            <h4>Socials</h4>
            <Socials items="center" justify="justify-center" margin="mt-3" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
