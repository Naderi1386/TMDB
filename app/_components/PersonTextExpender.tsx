"use client";

import { useState } from "react";

interface PersonTextExpenderPropsType {
  text: string;
}
const PersonTextExpender = ({ text }: PersonTextExpenderPropsType) => {
  const [isShow, setIsShow] = useState(false);
  const shortText = text.split(" ").slice(0, 25).join(" ");
  return (
    <>
      {isShow ? text : `${shortText}...`}
      {!isShow && (
        <button
          onClick={() => setIsShow(true)}
          className="btn btn-xs btn-dash btn-info"
        >
          Show all
        </button>
      )}
    </>
  );
};

export default PersonTextExpender;
