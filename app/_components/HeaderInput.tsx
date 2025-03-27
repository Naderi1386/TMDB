"use client";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const HeaderInput = () => {
  const [input, setInput] = useState("");
  const onSubmit = () => {
    if (input) {
      setInput("");
    }
  };
  return (
    <div
      className={`bg-white border-b border-solid border-stone-300 py-3 px-[10rem] ${
        input && "flex items-center justify-between"
      }`}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
        className="flex items-center gap-3 grow"
      >
        <span>
          <FaSearch size={16} color="black" />
        </span>
        <input
          id="Header-Input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          className="outline-none grow text-stone-500"
          placeholder="Search for a movie,tv show..."
        />
      </form>
      {input && (
        <span
          role="button"
          className="cursor-pointer"
          onClick={() => setInput("")}
        >
          <IoMdClose color="black" size={22} />
        </span>
      )}
    </div>
  );
};

export default HeaderInput;
