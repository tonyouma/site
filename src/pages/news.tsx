import React from "react";
import type { NextPage } from "next";
import { news } from "src/constants/news";
import { news2 } from "src/constants/news2";
import { brotliDecompressSync } from "zlib";
import Link from "next/link";

const News: NextPage = () => {
  return (
    <>
      <div className="container p-5 md:p-0 flex flex-col">
        <div className="flex flex-col justify-center md:flex-row gap-4 md:gap-8 mb-6">
          <div className="flex-2 flex md:justify-end ">
            <h2 className="pr-3 md:p-6 h-fit border-r-4">DIL Newsroom</h2>
          </div>
          <div className="flex-3 flex flex-col">
            <h2 className="py-4">
              Making headlines is good when you’re truly doing good.
            </h2>
            <p>
              We genuinely believe we are creating payment solutions that
              positively affect the lives of millions of Africans. Sometimes we
              like to talk about what we do more openly. Sometimes, others do
              for us.
            </p>
          </div>
        </div>
        <h3 className="pb-2">Top News</h3>

        <div className="flex gap-x-12 md:flex-row flex-col">
          <div className="md:w-1/2 w-full">
            <img
              src="/assets/news/new1.png"
              className="mx-auto border rounded-sm"
              width="700px"
              height="300px"
            />
          </div>
          <div className="p-1 md:w-1/2 md:my-auto w-full">
            <h4>
              Matatu transport digitalization events by DIL with Toyota Kenya
              and Mobility 54.
            </h4>
            <p className="py-3">
              Data Integrated Limited (“DIL“) — together with Toyota Kenya and
              Mobility 54 Investment SAS (“Mobility54“) — organized a series of
              events throughout Kenya for promoting DIL’s transport management
              system and its devices along with Toyota Hiace which is the most
              popular vehicle for Matatu transport services in Kenya.{" "}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 py-10 items-baseline">
          {news.map((news, i) => {
            return (
              <div className="p-1" key={i}>
                <img
                  src={`${news.image}`}
                  className="p-2  rounded-xl"
                  width="320"
                  height="190"
                />
                <h4 className="p-2">{news.title}</h4>
                <p className="p-2">{news.body}</p>
                <h5>
                  <span className="px-1">By</span>
                  {news.author}
                </h5>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center flex-col  md:flex-row gap-6  ">
          {news2.map((news2, i) => {
            return (
              <div className="p-2 shadow-md">
                <img
                  src={`${news2.image}`}
                  className="p-2"
                  width="100px"
                  height="50px"
                ></img>
                <h4 className="p-1">{news2.title}</h4>
                <p className="p-2">{news2.body}</p>

                <a href={`${news2.link}`} className="text-secondary p-2">
                  learn more....
                </a>
              </div>
            );
          })}
        </div>
      </div>
      <div className="bg-fixed">
        <img src= "/assets/news/nairobi.png" alt="" className="object-cover"></img>
      </div>

      <div className="container p-3 flex flex-col">
        <div className=" justify-start p-1">
          <h3 className="">title</h3>
        </div>
        <div className="p-2">
          <p className="">
            Our guidelines lay out and reflect our values and our community.
            Simple yet diverse. Follow these guidelines and use only approved
            brand assets from this site
          </p>
        </div>
        <div className="flex   flex-col md:flex-row  justify-center gap-5 py-5 ">
          <div className="flex ">
          <div className="justify-items-center">
            <img src="/assets/news/dtl.svg" alt="" ></img>
          </div>
          <div>
            <h5 className="p-1">Data Integrated Limited Logos</h5>
            <p className="p-1">Our primary logo is Data Integrated, combination two colors desire and pressian blue. Available in different variants</p>
          </div>
          </div>
          <div >
          <img src="/assets/news/Rectangle.svg" alt="" />
             <h5>Press Kit</h5>
            <p>Official Images</p>
            <a href="http://">download</a>

          </div>
          <div>
            <img src="/assets/news/Rectangle.svg" alt="" />
            <h5>Press Kit</h5>
            <p>Official Images</p>
            <a href="http://">download</a>

          </div>

        </div>
      </div>
    </>
  );
};

export default News;
