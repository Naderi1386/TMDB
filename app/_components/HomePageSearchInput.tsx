"use client"

import { useState } from "react";

const HomePageSearchInput = () => {
    const [searchValue,setSearchValue]=useState("")
  
    const onSubmit=()=>{
        setSearchValue("")
    }
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
      className="w-full bg-white rounded-3xl flex"
    >
      <input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        required
        type="text"
        className="grow pl-4 outline-none"
        placeholder="Search for a movie,tv show..."
      />
      <button className="text-white rounded-3xl bg-[#00d5be] px-6 py-3 cursor-pointer transition-all duration-150 hover:text-black">
        Search
      </button>
    </form>
  );
}

export default HomePageSearchInput