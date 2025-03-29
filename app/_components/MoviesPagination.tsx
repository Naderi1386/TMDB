"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

const MoviesPagination = () => {
  const searchParams = useSearchParams();
  const page = searchParams.get("page") || "1";
  const type = searchParams.get("type") as string;
  const { replace } = useRouter();
  const pathname = usePathname();
  const handleNextPage = () => {
    const params = new URLSearchParams(searchParams);
    params.set("page", String(Number(page) + 1));
    replace(`${pathname}?${params.toString()}`, { scroll: false });
  };
  const handlePreviousPage = () => {
    const params = new URLSearchParams(searchParams);
    params.set("page", String(Number(page) - 1));
    replace(`${pathname}?${params.toString()}`, {
      scroll: false,
    });
  };

  return (
    <div className="flex justify-center items-center gap-8 mt-14">
      {page !== "1" && (
        <button className="cursor-pointer" onClick={handlePreviousPage}>
          <GrPrevious size={25} />
        </button>
      )}

      <div className="bg-blue-950 rounded-[100%] text-white text-xl font-bold w-[2rem] h-[2rem] flex justify-center items-center ">
        {page}
      </div>
      <button className="cursor-pointer" onClick={handleNextPage}>
        <GrNext size={25} />
      </button>
    </div>
  );
};

export default MoviesPagination;
