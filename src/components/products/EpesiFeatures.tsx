import React from "react";

type Props = { id: number; title: string; icon: string; text: string };

function EpesiFeatures({ id, title, icon, text }: Props) {
  return (
    <div className="container-sm flex flex-wrap w-xs m-2" key={id}>
      <div className=" mr-2">
        <img src={icon} alt={title} />
      </div>
      <div className="">
        <h3 className="">{title}</h3>
        <p className="max-w-xs">{text}</p>
      </div>
    </div>
  );
}

export default EpesiFeatures;
