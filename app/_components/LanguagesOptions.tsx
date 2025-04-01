"use client";
import { useState } from "react";
import { LanguageType } from "../_lib/services";

interface LanguagesOptionsPropsType {
  languages: LanguageType[];
}
const LanguagesOptions = ({ languages }: LanguagesOptionsPropsType) => {
  const [language, setLanguage] = useState("");
  const handleClick=()=>{

  }

  return (
    <div>
      <select
        className="cursor-pointer outline-none bg-[#d1d5dc] py-2 px-3 mb-4 text-sm rounded-md transition-all duration-150 hover:bg-[#99a1af]"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
      >
        {languages.map((language) => (
          <option
            className="bg-white"
            key={language.iso_639_1}
            value={language.iso_639_1}
          >
            {language.english_name}
          </option>
        ))}
      </select>
      <div className="flex justify-start items-center">
        <button
          onClick={handleClick}
          className="rounded-md border border-solid border-stone-950 text-black cursor-pointer  px-3 text-[14px] transition-all duration-150 hover:bg-black hover:text-white"
        >
          set
        </button>
      </div>
    </div>
  );
};

export default LanguagesOptions;
