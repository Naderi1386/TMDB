"use client";
import Image from "next/image";
import { useState } from "react";

interface PeopleProfilePropsType {
  src: string;
}
const PeopleProfile = ({ src }: PeopleProfilePropsType) => {
  const [img, setImg] = useState(src);

  return (
    <div className="relative w-full h-[300px] bg-black/20 rounded-[7px] overflow-hidden cursor-pointer">
      <Image
        onError={() => setImg("/images/no-person.png")}
        fill
        className="object-cover"
        src={img}
        alt="Person-Profile"
      />
    </div>
  );
};

export default PeopleProfile;
