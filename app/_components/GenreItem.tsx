"use client";

import { GenreType } from "../_lib/services";

interface GenreItemPropsType {
  genre: GenreType;
}
const GenreItem = ({ genre }: GenreItemPropsType) => {
  const { name } = genre;
  return (
    <li className="rounded-4xl border border-solid border-stone-400 bg-white text-black text-[13px] py-1 px-2 cursor-pointer transition-all duration-150 hover:bg-sky-300 hover:text-white hover:border-white">
      <span className="block">{name}</span>
    </li>
  );
};

export default GenreItem;
