import React from "react";
import Image from "next/image";

type Props = { id: number; title: string; icon: string };

function Features({ id, title, icon }: Props) {
  return (
    <div className="flex m-4" key={id}>
      <Image  src={icon} alt={title} width={18} height={18} />
      <p className="ml-2">{title}</p>
    </div>
  );
}

export default Features;
