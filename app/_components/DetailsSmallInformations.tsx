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
    <div className="flex items-center gap-3">
      <span className="block">{date}</span>
      <div className="bg-white w-[5px] h-[5px] rounded-[100%]"></div>
      <div className="flex items-center gap-1">
        {genres.map((genre, index) => (
          <span key={genre.id}>
            {genre.name}
            {index !== genres.length - 1 && ","}
          </span>
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
