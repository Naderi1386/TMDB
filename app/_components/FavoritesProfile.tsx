import { auth } from "@/auth"
import Image from "next/image";

const FavoritesProfile =async () => {
    const session=await auth();

  return (
    <div className="flex items-center gap-3 mt-8">
      <Image
        alt={`Avatar-${session?.user?.name}`}
        src={session?.user?.image as string}
        width={40}
        height={40}
        className="rounded-full"
      />
      <span className="text-white text-xl font-light ">
        A List By <span className="font-bold">{session?.user?.name}</span>
      </span>
    </div>
  );
}

export default FavoritesProfile