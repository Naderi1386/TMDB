"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
interface DeleteSearchParamsBtnPropsType{
    topic:string
}

const DeleteSearchParamsBtn = ({topic}: DeleteSearchParamsBtnPropsType) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const type = searchParams.get("type") as string;
  const { replace } = useRouter();

  const handleClick = () => {
    replace(`${pathname}?type=${type}`);
  };
  return (
    <button
      onClick={handleClick}
      className="cursor-pointer underline underline-offset-2 text-blue-950"
    >
      Go back to {topic}
    </button>
  );
};

export default DeleteSearchParamsBtn;
