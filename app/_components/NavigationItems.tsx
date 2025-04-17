"use client";
import { useState } from "react";
import NavigationList from "./NavigationList";
import { AnimatePresence } from "framer-motion";
export interface NavigationItemListType {
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
        <AnimatePresence mode="wait">
          <NavigationList list={list} handleClose={() => setIsOpen(false)} />
        </AnimatePresence>
      )}
    </div>
  );
};

export default NavigationItems;
