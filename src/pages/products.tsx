import React from "react";
import type { NextPage } from "next";
import { Link } from "../components/link";
import { EpesiFeatures } from "../components/products";
import {featureContent} from ".././constants/epesiFeatures";

type Feature ={
  id: number;
  title: string;
  icon: string;
  text: string;
}

const products: NextPage = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="grid grid-cols-2">
          <div className=" mt-24">
            <h3 className="text-xs font-medium text-slate-500 m-4">
              YOUR ULTIMATE PASSENGER APP
            </h3>
            <h3 className="text-lg font-black m-4">M-EPESI APPLICATION</h3>
            <p className="font-normal text-slate-400 m-4">
              A smartphone application that allows users to view and utilize
              real-time public transit. It simplifies transportation by allowing
              customers to know which vehicles are available for booking,
              calculate the fee, and view traffic conditions on the route.
            </p>
            <div className="flex mt-10 ml-4">
              <a>
                <img
                  className="inline w-32 mr-4 "
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
          <div className="border-solid border-2 border-red-500 flex justify-center">
            <img src="/assets/products/grouped.svg" className="absolute w-96" />
          </div>
        </div>
      </div>
      <div className="h-full bg-gradient-to-r from-transparent via-primary mt-24">
        <div className="container mx-auto p-20">
          <div className="">
            <h3 className="text-lg font-bold">Why choose M-Epesi?</h3>
            <div className="grid grid-cols-3 m-4">
            {featureContent.map((feature:Feature, index:number) => {
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
    </div>
  );
};
export default products;
