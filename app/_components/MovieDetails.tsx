import { MovieDetailsType } from "../_lib/services"
import DetailsPoster from "./DetailsPoster";
import DetailsSmallInformations from "./DetailsSmallInformations";

interface MovieDetailsPropsType{
    details:MovieDetailsType
}
const MovieDetails = ({details}: MovieDetailsPropsType) => {
    const {poster_path,title,release_date,genres,runtime}=details
    const src = `https://media.themoviedb.org/t/p/w600_and_h900_bestv2${poster_path}`;
  return (
    <div>
      <div className="bg-sky-700 px-[10rem] py-8 flex items-start gap-10 ">
        <div className="w-[22.5%] relative h-[400px] border border-solid border-white rounded-md overflow-hidden ">
          <DetailsPoster src={src} title={title} />
        </div>
        <div className="w-[77.5%] text-white">
            <div className="flex items-center gap-2 ">
                <h1 className="font-bold text-3xl">{title}</h1>
                <span className="font-light text-4xl text-gray-200">({release_date.slice(0,4)})</span>

            </div>
            <DetailsSmallInformations runtime={runtime} genres={genres} release_date={release_date} />
        </div>
      </div>
    </div>
  );
};

export default MovieDetails