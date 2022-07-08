import React from "react";

interface Props {
  id?: number;
  title: string;
  icon: string;
  content: string;
}

function Address({ id, title, icon, content }: Props) {
  return (
    <div className="container flex flex-wrap m-2" key={id}>
      <div className=" mr-2">
        <img className="w-6 h-6" src={icon} alt={title} />
      </div>
      <div className="">
        <h4 className=" font-CeraRoundProNormal font-medium text-[16px]">
          {title}
        </h4>
        <p className=" text-slate-500">{content}</p>
      </div>
    </div>
  );
}

export default Address;
