"use client"
const SortOptions = () => {
  return (
    <div>
      <select
        className="cursor-pointer outline-none bg-[#d1d5dc] py-2 px-3 mb-4 text-sm rounded-md transition-all duration-150 hover:bg-[#99a1af]"
        
      >
        {/* {languages.map((language) => (
          <option
            className="bg-white"
            key={language.iso_639_1}
            value={language.iso_639_1}
          >
            {language.english_name}
          </option>
        ))} */}
      </select>
    </div>
  );
}

export default SortOptions