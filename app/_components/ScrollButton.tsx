"use client";
import { useState } from "react";
import { FaChevronUp } from "react-icons/fa";
const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 350) {
      setVisible(true);
    } else if (scrolled <= 350) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", toggleVisible);
  }
  if (!visible) return null;
  return (
    <div
      onClick={scrollToTop}
      className="w-[52px] h-[52px] z-[1000] border border-solid border-black fixed cursor-pointer left-4 bottom-20 bg-white flex justify-center items-center rounded-[100%]"
    >
      <FaChevronUp fill="black" size={22} />
    </div>
  );
};

export default ScrollButton;
