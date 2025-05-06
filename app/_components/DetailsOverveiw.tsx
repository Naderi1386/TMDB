"use client";

import { useState } from "react";

interface DetailsOverveiwPropsType {
  overview: string[] | string;
}
const DetailsOverveiw = ({ overview }: DetailsOverveiwPropsType) => {
  const [isShow, setIsShow] = useState(false);
  const shortOverview = String(overview).split(" ").slice(0, 20).join(" ");
  const finallOverview = isShow ? overview : shortOverview;
  return (
    <div>
      <h3 className="text-xl font-bold mb-2">Overview</h3>
      <p className="text-[15px] font-light">
        {finallOverview}
        {!isShow && (
          <span
            onClick={() => setIsShow((show) => !show)}
            role="button"
            className="text-white text-lg font-bold underline ml-1 cursor-pointer"
          >
            show all
          </span>
        )}
      </p>
    </div>
  );
};

export default DetailsOverveiw;
