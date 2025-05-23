"use client";
import { useState } from "react";
import { TVShowType } from "../_lib/services";
import { formatDate } from "../_lib/helper";
import Link from "next/link";
import Image from "next/image";

interface PopularItemsPropsType {
  item: TVShowType;
}
const PopularItems = ({ item }: PopularItemsPropsType) => {
  const { id, first_air_date, poster_path, name, vote_average } = item;
  const src = `https://media.themoviedb.org/t/p/w500${poster_path}`;
  const [img, setImg] = useState(src);
  const date = formatDate(first_air_date);
  return (
    <li title={name} className="min-w-[150px]  rounded-md  overflow-hidden ">
      <Link href={`tv/${id}`}>
        <div className="w-full relative h-[250px] bg-black/20    rounded-t-md cursor-pointer">
          <Image
            quality={80}
            fill
            className="object-cover "
            alt={`Image-${name}`}
            src={img}
            onError={() => setImg("/images/no-image.jpg")}
        
            unoptimized
          />
        </div>
      </Link>
      <div className="px-3 py-4 ">
        <Link
          href={`tv/${id}`}
          className="text-sm font-bold transition-all duration-150 text-black hover:text-sky-400 cursor-pointer"
        >
          {name}
        </Link>
        <span className="text-sm text-stone-400 block">{date}</span>
        <span className="text-xs font-bold text-black">{vote_average.toFixed(1)} ⭐</span>
      </div>
    </li>
  );
};

export default PopularItems;
