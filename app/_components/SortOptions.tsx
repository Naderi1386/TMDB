"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

interface SortItemsType {
  text: string;
  value: string;
}
const sortItems: SortItemsType[] = [
  { text: "Title (A,Z)", value: "A_Z" },
  { text: "Title (Z,A)", value: "Z_A" },
];
const SortOptions = () => {
  const [sort, setSort] = useState(sortItems.at(0)?.value as string);
  const searchParams = useSearchParams();
  const sortValue = searchParams.get("sort") as string;
  const pathname = usePathname();
  const { replace } = useRouter();
  const handleClick = () => {
    const params = new URLSearchParams(searchParams);
    params.set("sort", sort);
    replace(`${pathname}?${params.toString()}`, { scroll: true });
  };
  const handleRemoveClick = () => {
    const params = new URLSearchParams(searchParams);
    params.delete("sort");
    replace(`${pathname}?${params.toString()}`, { scroll: true });
  };

  return (
    <div>
      <select
        onChange={(e) => setSort(e.target.value)}
        value={sort}
        className="w-full cursor-pointer outline-none bg-[#d1d5dc] py-2 px-3 mb-4 text-sm rounded-md transition-all duration-150 hover:bg-[#99a1af]"
      >
        {sortItems.map((item) => (
          <option className="bg-white" key={item.value} value={item.value}>
            {item.text}
          </option>
        ))}
      </select>
      <div className="flex items-center justify-start gap-2">
        <button
          onClick={handleClick}
          className="rounded-md bg-white border border-solid border-blue-950 text-black cursor-pointer  px-3 text-[14px] transition-all duration-150 hover:bg-blue-950 hover:text-white"
        >
          set
        </button>
        {sortValue && (
          <button
            onClick={handleRemoveClick}
            className="rounded-md bg-white border border-solid border-blue-950 text-black cursor-pointer  px-3 text-[14px] transition-all duration-150 hover:bg-blue-950 hover:text-white"
          >
            remove
          </button>
        )}
      </div>
    </div>
  );
};

export default SortOptions;
