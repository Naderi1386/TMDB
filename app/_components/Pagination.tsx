"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface SearchPaginationPropsType {
  page: number;
  totalPages: number;
}
const Pagination = ({ page, totalPages }: SearchPaginationPropsType) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const handleClick = (char: "next" | "previous") => {
    const params = new URLSearchParams(searchParams);
    if (char === "next" && page !== totalPages) {
      params.set("page", String(page + 1));
    } else if (char === "previous" && page != 1) {
      params.set("page", String(page - 1));
    }
      replace(`${pathname}?${params}`);

  };
  return (
    <div className="flex justify-center">
      <div className="join mt-16">
        <button
          onClick={() => handleClick("previous")}
          disabled={page === 1}
          className="join-item btn shadow-none bg-blue-950"
        >
          «
        </button>
        <button className="join-item btn shadow-none bg-blue-950">
          Page {page}
        </button>
        <button
          onClick={() => handleClick("next")}
          disabled={page === totalPages}
          className="join-item btn shadow-none bg-blue-950"
        >
          »
        </button>
      </div>
    </div>
  );
};

export default Pagination;
