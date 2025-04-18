import { MovieDetailsType } from "../_lib/services";
import AddToFav from "./AddToFav";
import DetailsOverveiw from "./DetailsOverveiw";
import DetailsPoster from "./DetailsPoster";
import DetailsScore from "./DetailsScore";
import DetailsSmallInformations from "./DetailsSmallInformations";

interface MovieDetailsPropsType {
  details: MovieDetailsType;
}
const MovieDetails = ({ details }: MovieDetailsPropsType) => {
  const {
    poster_path,
    title,
    release_date,
    genres,
    runtime,
    vote_average,
    overview,
    tagline
  } = details;

  const src = `https://media.themoviedb.org/t/p/w600_and_h900_bestv2${poster_path}`;
  return (
    <div>
      <div className="bg-neutral-800 px-[10rem] py-8 flex items-start gap-10 ">
        <div className="w-[22.5%] relative h-[400px] border border-solid border-white rounded-md overflow-hidden ">
          <DetailsPoster src={src} title={title} />
        </div>
        <div className="w-[77.5%] text-white">
          <div className="flex items-center gap-2 ">
            <h1 className="font-bold text-3xl transition-all duration-150 hover:opacity-70">
              {title}
            </h1>
            <span className="font-light text-4xl text-gray-200">
              ({release_date.slice(0, 4)})
            </span>
          </div>
          <DetailsSmallInformations
            runtime={runtime}
            genres={genres}
            release_date={release_date}
          />
          <DetailsScore vote={Number(vote_average.toFixed(1))} />
          <div className="mt-4">
            <AddToFav item={details} />
          </div>
          <div className="mt-6">
            <p className="text-[#fff]/60 italic mb-1">{tagline}</p>
            <DetailsOverveiw overview={overview} />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
