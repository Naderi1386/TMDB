"use client";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const HeaderInput = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [input, setInput] = useState("");
  if (pathname === "/about") return null;
  const onSubmit = () => {
    if (input) {
      router.push(`/search?query=${input}&page=1`);
      setInput("");
    }
  };
  return (
    <div
      className={`bg-white border-b border-solid sticky top-0 border-stone-300 py-3 px-[10rem] ${
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
          className="outline-none grow text-stone-500 italic"
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
