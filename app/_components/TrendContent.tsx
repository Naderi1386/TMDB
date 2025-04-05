"use client";
import { ReactNode, useState } from "react";

interface TrendContentPropsType {
  children: ReactNode;
}
const TrendContent = ({ children }: TrendContentPropsType) => {
  const [time, setTime] = useState<"day" | "week">("day");
  return (
    <div>
      <div className="text-2xl font-bold mb-5 flex items-center gap-5">
        <h2>Trending</h2>
        <div className="flex text-sm rounded-2xl text-blue-950 border border-solid border-blue-950">
          <button
            onClick={() => {
              if (time === "week") setTime("day");
            }}
            className={`${
              time === "day" ? "bg-blue-950 text-[#00d5be]" : "bg-white "
            } rounded-2xl px-4 py-1 cursor-pointer transition-all duration-150`}
          >
            Today
          </button>
          <button
            onClick={() => {
              if (time === "day") setTime("week");
            }}
            className={`${
              time === "week" ? "bg-blue-950 text-[#00d5be]" : "bg-white "
            } rounded-2xl px-4 py-1 cursor-pointer transition-all duration-150 `}
          >
            This Week
          </button>
        </div>
      </div>
      {children}
    </div>
  );
};

export default TrendContent;
