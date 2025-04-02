"use client";
import { ReactNode, useState } from "react";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
import { FaQuestionCircle } from "react-icons/fa";
import { GenreType } from "../_lib/services";
import GenreItem from "./GenreItem";
import { usePathname } from "next/navigation";

interface FilterPropsType {
  filterItems: GenreType[];
  children: ReactNode;
}
const Filter = ({ filterItems, children }: FilterPropsType) => {
  const [isShowFilter, setIsShowFilter] = useState(true);
  const pathname = usePathname();
  const isShowsPage = pathname === "/tv";
  return (
    <div
      className={`w-full  rounded-md  ${
        !isShowsPage && "border border-stone-300 border-solid"
      } `}
    >
      <div
        className={`flex items-center justify-between ${
          isShowFilter && "border-b border-solid border-stone-300"
        } px-4 py-3 `}
      >
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
        <>
          <div className="px-4 py-3 mt-2">
            <h3 className="font-light mb-4 text-sm">Genres</h3>
            <ul className="flex items-center gap-2 flex-wrap">
              {filterItems.map((genre) => (
                <GenreItem genre={genre} key={genre.id} />
              ))}
            </ul>
          </div>
          <div className="border-t border-solid border-stone-300 py-3 px-4 mt-3">
            <div className="flex items-start gap-3  ">
              <h3 className="font-light mb-4 text-sm">Language</h3>
              <span className="block py-[5px]">
                <FaQuestionCircle size={12} color="gray" />
              </span>
            </div>
            {children}
          </div>
        </>
      )}
    </div>
  );
};

export default Filter;
