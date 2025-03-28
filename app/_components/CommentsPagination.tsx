"use client";
const arrayRange = (start: number, stop: number, step: number) =>
  Array.from(
    { length: (stop - start) / step + 1 },
    (value, index) => start + index * step
  );

interface CommentsPaginationPropsType {
  index: number;
  setIndex: (num: number) => void;
}

const CommentsPagination = ({
  index,
  setIndex,
}: CommentsPaginationPropsType) => {
  const array = arrayRange(1, 4, 1);
  return (
    <div className="flex items-center gap-2 justify-center">
      {array.map((num) => (
        <div
          onClick={() => setIndex(num - 1)}
          key={num}
          className={`w-[1rem] h-[1rem] ${
            index === num - 1
              ? "bg-[#d40242]"
              : "bg-stone-400 hover:bg-[#d40242]"
          }  rounded-[100%] transition-all duration-150  cursor-pointer`}
        ></div>
      ))}
    </div>
  );
};

export default CommentsPagination;
