"use client";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const HeaderInput = () => {
  const [input, setInput] = useState("");
  const onSubmit = () => {};
  return (
    <div className="bg-white border-b border-solid border-stone-300 py-3 px-[10rem]">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
        className="flex items-center gap-3"
      >
        <span>
          <FaSearch size={16} color="black" />
        </span>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          className="outline-none grow"
          placeholder="Search for a movie,tv show..."
        />
      </form>
    </div>
  );
};

export default HeaderInput;
