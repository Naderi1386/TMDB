"use client"

import Image from "next/image";
import { useState } from "react";

interface DetailsPosterPropsType{
    src:string
    title:string
}
const DetailsPoster = ({src,title}: DetailsPosterPropsType) => {
    const [img, setImg] = useState("/images/no-image.jpg");
  return (
    <Image
      quality={80}
      fill
      className="object-cover "
      src={img}
      onError={() => setImg("/images/no-image.jpg")}
      onLoadingComplete={() => {
        setImg(src);
      }}
      alt={`${title}-Poster`}
    />
  );
};

export default DetailsPoster