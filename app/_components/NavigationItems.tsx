"use client";
import Link from "next/link";
import { useState } from "react";
interface NavigationItemListType {
  text: string;
  href: string;
}
interface NavigationItemsPropsType {
  title: string;
  list: NavigationItemListType[];
}

const NavigationItems = ({ title, list }: NavigationItemsPropsType) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      className="cursor-pointer relative"
    >
      <span className="text-sm font-bold">{title}</span>
      {isOpen && (
        <ul className="bg-white text-black rounded-md  w-[8.5rem] flex flex-col  absolute bottom-[-8rem] border border-solid border-stone-400 overflow-hidden ">
          {list.map((item, index) => (
            <li
              key={index}
              className="text-[13px] font-light px-3 py-[6px]  transition-all duration-150 hover:bg-gray-300"
            >
              <Link href={item.href}>{item.text}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavigationItems;
