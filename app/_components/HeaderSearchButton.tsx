"use client";
import { usePathname } from "next/navigation";
import { FaSearch } from "react-icons/fa";

const HeaderSearchButton = () => {
  const pathname = usePathname();
  if (pathname === "/about") return null;
  const handleClick = () => {
    const input = document.querySelector("#Header-Input") as HTMLInputElement;
    input.focus();
  };
  return (
    <button
      onClick={handleClick}
      className="text-sky-500 cursor-pointer mt-[2px]"
    >
      <FaSearch size={22} />
    </button>
  );
};

export default HeaderSearchButton;
