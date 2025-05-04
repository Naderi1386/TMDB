"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useFavoritesStore } from "../_store/FavoritesStore";
import DeleteSortButton from "./DeleteSortButton";

const FavoritesSort = () => {
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const favorites = useFavoritesStore((state) => state.favorites);
  if (!favorites.length) return null;

  const handleClick = (val: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("sort", val);
    replace(`${pathname}?${params}`);
  };
  return (
    <div className="flex justify-center items-center gap-8 pt-3">
      <div className="dropdown dropdown-center dropdown-hover  ">
        <div
          tabIndex={0}
          role="button"
          className="btn rounded-3xl bg-slate-950"
        >
          Sort By
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-slate-950 rounded-box z-1 w-52 p-2 shadow-sm"
        >
          <li onClick={() => handleClick("rating")}>
            <span>Rating</span>
          </li>
          <li onClick={() => handleClick("title")}>
            <span>Title</span>
          </li>
        </ul>
      </div>
      <DeleteSortButton />
    </div>
  );
};

export default FavoritesSort;
