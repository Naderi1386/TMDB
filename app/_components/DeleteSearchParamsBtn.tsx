import Link from "next/link";

interface DeleteSearchParamsBtnPropsType {
  topic: string;
  href: string;
}

const DeleteSearchParamsBtn = ({
  topic,
  href,
}: DeleteSearchParamsBtnPropsType) => {
  return (
    <Link
      href={href}
      className="cursor-pointer underline underline-offset-2 text-blue-950"
    >
      Go back to {topic}
    </Link>
  );
};

export default DeleteSearchParamsBtn;
