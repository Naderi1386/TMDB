import { TVShowDetailsType } from "../_lib/services";
import AddToFav from "./AddToFav";
import DetailsOverveiw from "./DetailsOverveiw";
import DetailsPoster from "./DetailsPoster";
import DetailsScore from "./DetailsScore";
import DetailsSmallInformations from "./DetailsSmallInformations";
import ShortDetails from "./ShortDetails";

interface TVDetailsPropsType {
  details: TVShowDetailsType;
}
const TVDetails = ({ details }: TVDetailsPropsType) => {
  const {
    backdrop_path,
    first_air_date,
    genres,
    id,
    name,
    original_language,
    overview,
    status,
    vote_average,
  } = details;
  const src = `https://media.themoviedb.org/t/p/w600_and_h900_bestv2${backdrop_path}`;

  return (
    <div>
      <div className="bg-neutral-800 px-[10rem] py-8 flex items-start gap-10 ">
        <div className="w-[22.5%] relative h-[400px] border border-solid border-white rounded-md overflow-hidden ">
          <DetailsPoster src={src} title={name} />
        </div>
        <div className="w-[77.5%] text-white">
          <div className="flex items-center gap-2 ">
            <h1 className="font-bold text-3xl transition-all duration-150 hover:opacity-70">
              {name}
            </h1>
            <span className="font-light text-4xl text-gray-200">
              ({first_air_date.slice(0, 4)})
            </span>
          </div>
          <DetailsSmallInformations
            genres={genres}
            release_date={first_air_date}
          />
          <DetailsScore vote={Number(vote_average.toFixed(1))} />
          <div className="mt-4">
            <AddToFav
              item={{
                id: String(id),
                date: first_air_date,
                img: src,
                rating: Number(vote_average.toFixed(1)),
                title: name,
                type: "tv",
              }}
            />
          </div>
          <div className="mt-6">
            <DetailsOverveiw overview={overview} />
          </div>
        </div>
      </div>
      <div className="bg-white px-[10rem] py-6 border-b border-solid border-stone-700/30 mb-2">
        <ShortDetails status={status} original_language={original_language} />
      </div>
    </div>
  );
};

export default TVDetails;
