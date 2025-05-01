"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const FavoritesSort = () => {
    const pathname=usePathname()
    const {replace}=useRouter()
    const searchParams=useSearchParams()

    const handleClick=(val:string)=>{
        const params=new URLSearchParams(searchParams)
        params.set("sort",val)
        replace(`${pathname}?${params}`)

    }
  return (
    <div className="flex justify-center">
      <div className="dropdown dropdown-center dropdown-hover mt-2 ">
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
    </div>
  );
}

export default FavoritesSort