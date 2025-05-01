import Link from "next/link";
import { FavoriteType } from "../_store/FavoritesStore";

interface FavoriteItemsPropsType {
  favorite: FavoriteType;
  index: number;
}
const FavoriteItems = ({ favorite, index }: FavoriteItemsPropsType) => {
  const { date, id, rating, revenue, runtime, title, type } = favorite;
  return <li className="flex items-center gap-4">
    <span className="text-gray-400">{index + 1}</span>
    <div className="grow border border-solid border-black/8 px-3 py-4 rounded-sm flex items-center justify-between">
        <Link className="text-black text-sm font-bold transition-all duration-150 hover:underline" href={type==="movie" ? `/movies/${id}` : `/tv/${id}`}>{title}</Link>

    </div>

  </li>;
};

export default FavoriteItems;
