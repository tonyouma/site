import React from "react";
import type { NextPage } from "next";
import { news } from "src/constants/news";
import { news2 } from "src/constants/news2";
import Link from "next/link";
import { FooterForm } from "src/components/form";
import { Hero } from "src/components/hero";
import Image from "next/image";

const News: NextPage = () => {

  const intro = "Making headlines is good when you’re truly doing good."
  const description = "From government authorities to banks and credit providers, we work with a growing number of partners with a single aim - give African SMEs a competitive edge that no one else can."

  return (
    <>
      <div className="container flex flex-col p-5 md:p-0">

        <Hero title={intro} description={description} />

        <h3 className="pb-2">Top News</h3>

        <div className="flex flex-col gap-x-12 md:flex-row">
          <div className="w-full md:w-1/2">
            <img
              src="/assets/news/new1.png"
              className="mx-auto border rounded-sm"
              width="700px"
              height="300px"
            />
          </div>
          <div className="w-full p-1 md:w-1/2 md:my-auto">
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
        <div className="grid items-baseline grid-cols-1 gap-3 py-10 sm:grid-cols-2 md:grid-cols-3">
          {news.map((news, i) => {
            return (
              <div className="" key={i}>
                <img
                  src={`${news.image}`}
                  className="rounded-t-xl"
                  width="320"
                  height="190"
                />
                <div className="p-5">
                  <h4 >{news.title}</h4>
                  <p className="">{news.body}</p>
                  <h5>
                    <span className="">By</span>
                    {news.author}
                  </h5>
                </div>

              </div>
            );
          })}
        </div>
        <div className="flex flex-col justify-center gap-6 md:flex-row ">
          <div className="px-5 py-12">
            <h4 className="p-2">Featured On</h4>
            <p className="p-2">Autem aut laboriosam distinctio. Modi sunt blanditiis beatae consectetur nesciunt alias. Ad distinctio ab quidem voluptas enim illo. Quia consequatur voluptas veniam
            </p>
            <a href="#" className="p-2 text-secondary">
              learn more ...
            </a>
          </div>
          {news2.map((news2, i) => {
            return (
              <div className="px-5 py-12 shadow-md" key="i">
                <Image
                  src={`${news2.image}`}
                  className="p-2"
                  width="100px"
                  height="50px"
                  alt=""
                ></Image>
                <h4 className="p-1">{news2.title}</h4>
                <p className="p-2">{news2.body}</p>


              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-12 relative w-full h-80 items-center justify-center flex bg-[url('/assets/news/nairobi.png')]">
        <h2 className="m-auto text-center text-white md:w-1/2">Our Mission is to automate payment services through an integrated, reliable, secure, easy to use platform.</h2>

      </div>

      <div className="container flex flex-col p-3">
        <div className="w-full py-10 md:w-1/2">
          <h3 className="capitalize">media assets</h3>
          <p>
            Our guidelines layout and reflect our values and our community.
            Simple yet diverse. Follow these guidelines and use only approved
            brand assets from this site
          </p>
        </div>

        <div className="flex flex-col pb-10 gap-x-5 gap-y-5 md:flex-row">
          <div className="flex items-center w-full max-h-full gap-4 pr-3 rounded-md shadow-md md:w-1/2">
            <div className="h-full max-h-full px-4 bg-primary rounded-l-md">
              <img src="/assets/news/dtl.svg" alt="" className="h-full md:h-full"></img>
            </div>
            <div>
              <h5 className="">Data Integrated Limited Logos</h5>
              <p className="">
                Our primary logo is Data Integrated, combination two colors
                desire and pressian blue. Available in different variants
              </p>
            </div>
          </div>
          <div className="flex w-full md:w-1/2 gap-x-5">
            <div className="w-1/2 py-6 rounded-md shadow-md px-9 bg-primary">
              <img src="/assets/news/folder.svg" alt="" />
              <h5>Press Kit</h5>
              <p>Official Images</p>
              <a href="http://">download</a>
            </div>
            <div className="w-1/2 px-6 py-6 rounded-md shadow-md bg-primary">
              <img src="/assets/news/folder.svg" alt="" />
              <h5>Press Kit</h5>
              <p>Official Images</p>
              <a href="http://">download</a>
            </div>
          </div>
        </div>
      </div>

      <FooterForm />

    </>
  );
};

export default News;
