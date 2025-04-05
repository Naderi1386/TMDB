"use client";
import Link from "next/link";
import { formatDate } from "../_lib/helper";
import { MovieType } from "../_lib/services";
import Image from "next/image";
import { useState } from "react";

interface TrendMovieItemPropsType {
  movie: MovieType;
}
const TrendMovieItem = ({ movie }: TrendMovieItemPropsType) => {
  const { title, poster_path, release_date, vote_average, id } = movie;
  const src = `https://image.tmdb.org/t/p/w500${poster_path}`;
  const [img, setImg] = useState(src);
  const date = formatDate(release_date);
  return (
    <li title={title} className="min-w-[150px]  rounded-md  overflow-hidden ">
      <Link href={`movies/${id}`}>
        <div className="w-full relative h-[250px]    cursor-pointer">
          <Image
            quality={90}
            fill
            className="object-cover rounded-md"
            alt={`Image-${title}`}
            src={img}
            onError={() =>
              setImg("/images/no-image.png")
            }
            unoptimized
          />
        </div>
      </Link>
      <div className="px-3 py-4 ">
        <Link
          href={`movies/${id}`}
          className="text-sm font-bold transition-all duration-150 hover:text-sky-400 cursor-pointer"
        >
          {title}
        </Link>
        <span className="text-sm text-stone-400 block">{date}</span>
        <span className="text-xs font-bold">{vote_average.toFixed(1)} ⭐</span>
      </div>
    </li>
  );
};

export default TrendMovieItem;
