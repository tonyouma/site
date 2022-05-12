import React from "react";
import type { NextPage } from "next";
import { Link } from "../components/link";
import { EpesiFeatures, Features, Review } from "../components/products";
import { featureContent, featureContent2 } from ".././constants/epesiFeatures";

type Feature = {
  id: number;
  title: string;
  icon: string;
  text?: string;
};

const products: NextPage = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="mt-5 md:mt-24 ">
            <h3 className="text-xs font-medium text-slate-500 m-4">
              YOUR ULTIMATE PASSENGER APP
            </h3>
            <h2 className="text-lg font-black m-4">M-EPESI APPLICATION</h2>
            <p className="font-normal text-slate-400 m-4">
              A smartphone application that allows users to view and utilize
              real-time public transit. It simplifies transportation by allowing
              customers to know which vehicles are available for booking,
              calculate the fee, and view traffic conditions on the route.
            </p>
            <div className="flex mt-10 ml-4">
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
          <div className="justify-center hidden md:flex">
            <img src="/assets/products/grouped.svg" className="absolute w-96" />
          </div>
        </div>
      </div>
      <div className="h-full bg-gradient-to-r from-transparent via-primary mt-24">
        <div className="container mx-auto p-5 md:p-20">
          <div className="">
            <h3 className="text-lg font-bold">Why choose M-Epesi?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 m-4">
              {featureContent.map((feature: Feature, index: number) => {
                return (
                  <EpesiFeatures
                    key={index}
                    id={feature.id}
                    title={feature.title}
                    icon={feature.icon}
                    text={feature.text}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-4 grid grid-cols-1 md:grid-cols-2 ">
        <div className="flex justify-center hidden md:block">
          <img
            src="/assets/products/phonemockup.svg"
            className="absolute mt-4 w-72 -z-10  "
          />
        </div>
        <div className=" mt-8 p-5 md:p-0">
          <h3 className="text-lg font-black m-4">Download M-Epesi</h3>
          <p className="font-normal text-slate-600 m-4 max-w-md">
            Join over a thousand users currently using M-Epesi to book their
            rides and also get customised traffic updates to effeciently commute
            in Nairobi
          </p>
          {featureContent2.map((feature: Feature, index: number) => {
            return (
              <Features
                key={index}
                id={feature.id}
                title={feature.title}
                icon={feature.icon}
              />
            );
          })}
          <h3 className="m-4">Happy clients say...</h3>
          <Review />
        </div>
      </div>
    </div>
  );
};
export default products;
