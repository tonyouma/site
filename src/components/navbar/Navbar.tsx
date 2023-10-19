import { useState } from "react";
import { Socials } from "../socials";
import { Link as LinkComponent } from "./../link";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [showSolutionsMenu, setShowSolutionsMenu] = useState(false);

  const toggleSolutionsMenu = () => {
    setShowSolutionsMenu(!showSolutionsMenu);
  };

  return (
    <>
      <div
        className=""
        style={{
          backgroundImage:
            "linear-gradient(to right, rgb(255, 228, 230), rgb(204, 251, 241))",
        }}
      >
        <div className="container flex items-center gap-12">
          <div className="mt-5 ">
            <Image
              src="/assets/cbk-license.png"
              height="100"
              width="200"
              alt="Info"
              objectFit="cover"
            />
          </div>

          <div className="flex items-center justify-between flex-1 gap-5">
            <div>
              <p className="pb-2 font-bold font-SatoshiBold">
                DATA INTEGRATED LTD BECOMES THE FIRST FEMALE OWNED KENYAN
                FINTECH TO RECEIVE A LICENSE FROM THE CENTRAL BANK OF KENYA TO
                OPERATE AS A PAYMENT SERVICE PROVIDER IN KENYA
              </p>
            </div>
            <Link href="/">
              <a className="px-2 py-3 text-white rounded-lg bg-secondary hover:text-white max-w-[152px] w-full text-center">
                Learn more
              </a>
            </Link>
           
          </div>
        </div>
      </div>
      <div className="z-30 w-full bg-white/80">
        <div className="container flex items-center justify-between mt-5">
          <Socials items="end" />
          <div
            id="navbar_links"
            className="hidden space-x-6 transition-all ease-in delay-200 md:flex"
          >
            <LinkComponent url="/" name="About Us" />
            <div className="relative">
              {/* Our Solutions Link */}
              <button
                className="flex items-center"
                onClick={toggleSolutionsMenu}
                onMouseOver={toggleSolutionsMenu}
                onMouseOut={toggleSolutionsMenu}
              >
                Our Solutions
                <i
                  className={`fas fa-chevron-${
                    showSolutionsMenu ? "up" : "down"
                  } ml-2`}
                />
              </button>
              {/* Dropdown Menu */}
            </div>
            <LinkComponent url="/news" name="Media" />
            <LinkComponent url="/careers" name="Work With Us" />
            <LinkComponent url="/contact" name="Talk to Us" />
          </div>
          <div className="">
            <LinkComponent
              id={"logo"}
              name={"Logo"}
              url={"/"}
              image={"/assets/logo.svg"}
            />
          </div>
        </div>

        {showSolutionsMenu && (
          <div className="absolute left-0 grid w-screen h-full py-5 mt-3 z-[100] bg-white shadow-lg shadow-gray-300/50 border-y max-h-96">
            <div className="container grid grid-cols-2">
              <div className="">
                <p className="pb-3 text-lg font-SatoshiBold">
                  Products and Services
                </p>
                <div className="flex flex-col max-w-md gap-y-5">
                  <div>
                    <p className="pb-2 font-CeraRoundProBold">PSV Solutions</p>
                    <p>
                      Empowering businesses through tailored strategies,
                      unlocking growth potential, and delivering unparalleled
                      success in your journey.
                    </p>
                  </div>
                  <div>
                    <p className="pb-2 font-CeraRoundProBold">MFIs</p>
                    <p>
                      Tailored strategies to bolster microfinance institutions,
                      driving efficiency, inclusion, and financial empowerment
                    </p>
                  </div>
                  <div>
                    <p className="pb-2 font-CeraRoundProBold">
                      Special projects
                    </p>
                    <p>
                      Special Projects, including our successful collaboration
                      with NTSA, exemplify our expertise in tackling complex
                      challenges with innovative solutions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="">
                <p className="pb-3 text-lg font-SatoshiBold">
                  Clients and partners
                </p>
                <div className="flex flex-col max-w-md gap-y-5">
                  <div>
                    <p className="pb-2 font-CeraRoundProBold">Clients</p>
                    <p>Empowering businesses through tailored strategies</p>
                  </div>
                  <div>
                    <p className="pb-2 font-CeraRoundProBold">Partners</p>
                    <p>
                      Tailored strategies to bolster microfinance institutions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
