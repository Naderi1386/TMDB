import Image from "next/image";
import { MovieType } from "../_lib/services";
import { formatDate } from "../_lib/helper";
import Link from "next/link";

interface MoviesItemPropsType {
  movie: MovieType;
}
const MoviesItem = ({ movie }: MoviesItemPropsType) => {
  const { title, poster_path, release_date, vote_average, id } = movie;
  const src = `https://image.tmdb.org/t/p/w500${poster_path}`;
  const date = formatDate(release_date);

  return (
    <li
      title={title}
      className="basis-[17.5%] rounded-md border border-solid border-stone-300 overflow-hidden "
    >
      <Link href={`movies/${id}`}>
        <div className="w-full relative h-[250px] border-b border-solid border-stone-300   rounded-t-md cursor-pointer">
          <Image
            quality={80}
            fill
            className="object-cover "
            alt={`Image-${title}`}
            src={src}
            unoptimized
          />
        </div>
      </Link>
      <div className="px-3 py-4 ">
        <Link
          href={`movies/${id}`}
          className="text-sm font-bold transition-all duration-150 hover:text-sky-400 cursor-pointer"
        >
          {title}
        </Link>
        <span className="text-sm text-stone-400 block">{date}</span>
        <span className="text-xs font-bold">{vote_average.toFixed(1)} ⭐</span>
      </div>
    </li>
  );
};

export default MoviesItem;
