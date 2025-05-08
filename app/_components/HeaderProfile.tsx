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
    <>
      <div className="dropdown dropdown-center">
        <div tabIndex={0} role="button" className="btn bg-transparent ">
          <div className=" flex items-center gap-3 mt-[2px] text-white">
            <span className="text-sm font-bold">{session.user?.name}</span>
            <Image
              alt={`Avatar-${session.user?.name}`}
              src={session.user?.image as string}
              width={24}
              height={24}
              className="rounded-full"
            />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu text-black bg-white rounded-sm z-1 w-52 p-0 shadow-md overflow-hidden"
        >
          <li className="p-[2px] transition-all duration-75 hover:bg-stone-300">
            <Link href={"/favorites"}>Favorites ♥️</Link>
          </li>
          <li className="p-[2px] transition-all duration-75 hover:bg-stone-300">
            <Link href={"/people?page=1"}>Popluar People 👤</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default HeaderProfile;
