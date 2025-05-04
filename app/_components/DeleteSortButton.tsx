"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const DeleteSortButton = () => {
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  if (!searchParams.get("sort")) return null;
  const handleClick = () => {
    const params = new URLSearchParams(searchParams);
    params.delete("sort");
    replace(`${pathname}/${params}`);
  };
  return <button className="btn rounded-3xl bg-slate-950" onClick={handleClick}>Delete Sort</button>;
};

export default DeleteSortButton;
