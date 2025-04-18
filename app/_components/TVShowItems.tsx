"use client"
import Link from "next/link";
import { TVShowType } from "../_lib/services"
import Image from "next/image";
import { formatDate } from "../_lib/helper";
import { useState } from "react";

interface TVShowItemsPropsType{
    show:TVShowType
}
const TVShowItems = ({show}: TVShowItemsPropsType) => {
    const {id,first_air_date,poster_path,name,vote_average}=show
  const src = `https://media.themoviedb.org/t/p/w500${poster_path}`;
  const [img, setImg] = useState("/images/no-image.jpg");
  const date = formatDate(first_air_date);

  return (
    <li
      title={name}
      className="basis-[17.5%] rounded-md border border-solid border-stone-300 overflow-hidden "
    >
      <Link href={`tv/${id}`}>
        <div className="w-full relative h-[250px] border-b border-solid border-stone-300   rounded-t-md cursor-pointer">
          <Image
            quality={80}
            fill
            className="object-cover "
            alt={`Image-${name}`}
            src={img}
            onError={() => setImg("/images/no-image.jpg")}
            onLoadingComplete={() => {
              setImg(src);
            }}
            unoptimized
          />
        </div>
      </Link>
      <div className="px-3 py-4 ">
        <Link
          href={`tv/${id}`}
          className="text-sm font-bold transition-all duration-150 hover:text-sky-400 cursor-pointer"
        >
          {name}
        </Link>
        <span className="text-sm text-stone-400 block">{date}</span>
        <span className="text-xs font-bold">{vote_average.toFixed(1)} ⭐</span>
      </div>
    </li>
  );
};

export default TVShowItems