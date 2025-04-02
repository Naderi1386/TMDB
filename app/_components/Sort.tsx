"use client";

import { useState } from "react";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import SortOptions from "./SortOptions";

const Sort = () => {
  const [isShowSort, setIsShowSort] = useState(false);
  return (
    <div className="w-full  rounded-md border border-stone-300 border-solid mb-4">
      <div
        className={`flex items-center justify-between 
          ${isShowSort && " border-b border-solid border-stone-300"}
         px-4 py-3`}
      >
        <h4 className="font-bold">Sort</h4>
        <button
          onClick={() => setIsShowSort((isShow) => !isShow)}
          className="cursor-pointer"
        >
          {isShowSort ? (
            <FaAngleDown color="black" size={18} />
          ) : (
            <FaAngleRight color="black" size={18} />
          )}
        </button>
      </div>
      {isShowSort && (
        <div>
          <div className="px-4 py-3 mt-2">
            <h3 className="font-light mb-4 text-sm">Sort Results By</h3>
            <SortOptions />
          </div>
        </div>
      )}
    </div>
  );
};

export default Sort;
