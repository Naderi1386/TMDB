import Link from "next/link";
import { GenreType } from "../_lib/services";

interface DetailsSmallInformationsPropsType {
  release_date: string;
  genres: GenreType[];
  runtime?: number;
}

const DetailsSmallInformations = ({
  release_date,
  runtime,
  genres,
}: DetailsSmallInformationsPropsType) => {
  const houre =runtime && runtime / 60;
  const minuet =runtime && runtime % 60;
  
  const date=release_date.split("-").reverse().join("/")
  return (
    <div className="flex items-center gap-3 text-sm">
      <span className="block">{date}</span>
      <div className="bg-white w-[5px] h-[5px] rounded-[100%]"></div>
      <div className="flex items-center gap-1">
        {genres.map((genre, index) => (
          <Link
            className="transition-all duration-150 hover:opacity-70"
            href={
              runtime
                ? `/movies?type=popular&genre=${genre.id}`
                : `/tv?type=popular&genre=${genre.id}`
            }
            key={genre.id}
          >
            {genre.name}
            {index !== genres.length - 1 && ","}
          </Link>
        ))}
      </div>
      <div className="bg-white w-[5px] h-[5px] rounded-[100%]"></div>
      {runtime && (
        <div className="flex items-center gap-1">
          <span>{Math.trunc(houre as number)}h</span>
          <span>{minuet}m</span>
        </div>
      )}
    </div>
  );
};

export default DetailsSmallInformations;
