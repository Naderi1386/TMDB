import { auth } from "@/auth";
import Image from "next/image";
import Link from "next/link";

const HeaderProfile = async () => {
  const session = await auth();
  if (!session)
    return (
      <Link
        href={"/login"}
        className="bg-white text-blue-950 font-bold py-2 px-3 rounded-md transition-all duration-150 hover:px-5 "
      >
        Log In
      </Link>
    );
  return (
    <div className="flex items-center gap-3 mt-2 text-white">
      <span className="text-sm font-bold">{session.user?.name}</span>
      <Image
        alt={`Avatar-${session.user?.name}`}
        src={session.user?.image as string}
        width={24}
        height={24}
        className="rounded-full"
      />
    </div>
  );
};

export default HeaderProfile;
