"use client";

import { useState } from "react";

interface PersonTextExpenderPropsType {
  text: string;
}
const PersonTextExpender = ({ text }: PersonTextExpenderPropsType) => {
  const [isShow, setIsShow] = useState(false);
  const shortText=text.split("")
  return <></>;
};

export default PersonTextExpender;
