import Link from "next/link";
import { SearchItemType } from "../_lib/services";
import { formatDate } from "../_lib/helper";

interface SearchItemsPropsType {
  item: SearchItemType;
  index: number;
}
const SearchItems = ({ item, index }: SearchItemsPropsType) => {
  const {
    first_air_date,
    id,
    vote_average,
    name,
    media_type,
    title,
    release_date,
  } = item;
  console.log(index + 1, item);
  return (
    <li className="flex items-center gap-4">
      <span className="text-gray-400">{index + 1}</span>
      <div className="grow border border-solid border-black/8 px-3 py-4 rounded-sm flex items-center justify-between">
        <Link
          className="text-black text-sm font-bold transition-all duration-150 hover:underline"
          href={media_type === "movie" ? `/movies/${id}` : `/tv/${id}`}
        >
          {name ? name : title}
        </Link>
        <div className="flex items-center justify-end gap-4">
          <span className="text-gray-400 text-[14px]">
            {vote_average.toFixed(1)}⭐
          </span>
          <span className="text-white rounded-3xl text-xs py-[6px] px-3 bg-gradient-to-r from-amber-300 to-rose-500 capitalize">
            {media_type}
          </span>
          <span className="bg-slate-950 text-white text-xs py-[6px] px-3 rounded-3xl">
            {formatDate(first_air_date ? first_air_date : String(release_date))}
          </span>
        </div>
      </div>
    </li>
  );
};

export default SearchItems;
