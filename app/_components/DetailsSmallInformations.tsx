import Link from "next/link";

interface DetailsSmallInformationsPropsType {
  release_date: string;
  genres: [
    {
      id: number;
      name: string;
    },
    {
      id: number;
      name: string;
    }
  ];
  runtime: number;
}

const DetailsSmallInformations = ({
  release_date,
  runtime,
  genres,
}: DetailsSmallInformationsPropsType) => {
  const houre = runtime / 60;
  const minuet = runtime % 60;
  
  const date=release_date.split("-").reverse().join("/")
  return (
    <div className="flex items-center gap-3 text-sm">
      <span className="block">{date}</span>
      <div className="bg-white w-[5px] h-[5px] rounded-[100%]"></div>
      <div className="flex items-center gap-1">
        {genres.map((genre, index) => (
          <Link
            className="transition-all duration-150 hover:opacity-70"
            href={`/movies?genre=${genre.id}`}
            key={genre.id}
          >
            {genre.name}
            {index !== genres.length - 1 && ","}
          </Link>
        ))}
      </div>
      <div className="bg-white w-[5px] h-[5px] rounded-[100%]"></div>
      <div className="flex items-center gap-1">
        <span>{Math.trunc(houre)}h</span>
        <span>{minuet}m</span>
      </div>
    </div>
  );
};

export default DetailsSmallInformations;
