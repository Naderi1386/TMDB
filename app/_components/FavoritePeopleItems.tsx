import Link from "next/link";
import { PersoneDetailsType } from "../_lib/services";

const FavoritePeopleItems = ({
  favorite,
}: {
  favorite: PersoneDetailsType;
}) => {
  const { gender, popularity, name, id } = favorite;
  return (
    <li className="py-4 text-black">
      <div className="flex items-center gap-6">
        <span className="font-bold">{name}</span>
        <span
          className={`p-2 rounded-lg font-medium text-white text-sm ${
            gender !== 1 ? "bg-blue-950" : "bg-pink-500"
          }`}
        >
          {gender !== 1 ? "male" : "female"}
        </span>
        <span>{popularity.toFixed(2)} ⭐</span>
        <Link
          href={`/people/${id}`}
          className="text-blue-950 underline text-sm"
        >
          See more
        </Link>
      </div>
    </li>
  );
};

export default FavoritePeopleItems;
