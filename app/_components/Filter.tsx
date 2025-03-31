"use client";
import { useState } from "react";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
import { GenreType } from "../_lib/services";
import GenreItem from "./GenreItem";

interface FilterPropsType {
  filterItems: GenreType[];
}
const Filter = ({ filterItems }: FilterPropsType) => {
  const [isShowFilter, setIsShowFilter] = useState(true);
  return (
    <div className="w-full border border-solid border-stone-300 rounded-md ">
      <div className="flex items-center justify-between border-b border-solid border-stone-300 px-4 py-3 ">
        <h4 className="font-bold">Filters</h4>
        <button
          onClick={() => setIsShowFilter((isShow) => !isShow)}
          className="cursor-pointer"
        >
          {isShowFilter ? (
            <FaAngleDown color="black" size={18} />
          ) : (
            <FaAngleRight color="black" size={18} />
          )}
        </button>
      </div>
      {isShowFilter && (
        <div className="px-4 py-3 mt-8">
          <h3 className="font-light mb-4">Genres</h3>
          <ul className="flex items-center gap-2 flex-wrap">
            {filterItems.map((genre) => (
              <GenreItem genre={genre} key={genre.id} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Filter;
