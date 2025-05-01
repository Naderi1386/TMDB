import Link from "next/link";
import { FavoriteType } from "../_store/FavoritesStore";
import { formatDate } from "../_lib/helper";
import FavoriteDeleteBtn from "./FavoriteDeleteBtn";

interface FavoriteItemsPropsType {
  favorite: FavoriteType;
  index: number;
}
const FavoriteItems = ({ favorite, index }: FavoriteItemsPropsType) => {
  const { date, id, rating, revenue, runtime, title, type } = favorite;
  const revenueVal=String(revenue).slice(0,3)
  return (
    <li className="flex items-center gap-4">
      <span className="text-gray-400">{index + 1}</span>
      <div className="grow border border-solid border-black/8 px-3 py-4 rounded-sm flex items-center justify-between">
        <Link
          className="text-black text-sm font-bold transition-all duration-150 hover:underline"
          href={type === "movie" ? `/movies/${id}` : `/tv/${id}`}
        >
          {title}
        </Link>
        <div className="flex items-center justify-end gap-4">
          <span className="text-gray-400 text-[14px]">{rating }⭐</span>
          <span className="text-white rounded-3xl text-xs py-[6px] px-3 bg-gradient-to-r from-amber-300 to-rose-500 capitalize">
            {type}
          </span>
          <span className="bg-slate-950 text-white text-xs py-[6px] px-3 rounded-3xl">
            {formatDate(date)}
          </span>
          <div className="flex items-center gap-[1px] text-gray-400 text-xs">
            <span>{(runtime/60).toFixed(0)}h</span>
            <span>{runtime%60}m</span>

          </div>
          <span className="text-xs text-gray-400">
            ${revenueVal}M

          </span>
          <FavoriteDeleteBtn id={id} />
        </div>
      </div>
    </li>
  );
};

export default FavoriteItems;
