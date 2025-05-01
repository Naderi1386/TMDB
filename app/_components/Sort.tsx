"use client";

import { useState } from "react";
import { FaAngleDown, FaAngleRight } from "react-icons/fa6";
import SortOptions from "./SortOptions";

const Sort = () => {
  const [isShowSort, setIsShowSort] = useState(false);
 
  return (
    <div
      style={{ boxShadow: "0 2px 8px rgba(0, 0, 0, .1)" }}
      className="w-full  rounded-md border border-stone-200 border-solid mb-4"
    >
      <div
        className={`flex items-center justify-between 
          ${isShowSort && " border-b border-solid border-stone-200"}
         px-4 py-3`}
      >
        <h4 className="font-bold text-black">Sort</h4>
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
            <h3 className="font-light mb-4 text-sm text-black">Sort Results By</h3>
            <SortOptions />
          </div>
        </div>
      )}
    </div>
  );
};

export default Sort;
