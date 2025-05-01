import MovieDetails from "@/app/_components/MovieDetails";
import PopularContent from "@/app/_components/PopularContent";
import TrendContent from "@/app/_components/TrendContent";
import TrendingList from "@/app/_components/TrendingList";
import { getDetailsMovie } from "@/app/_lib/services";

interface ParamsType {
  movieId: string;
  time?: string;
}
interface PagePropsType {
  params: Promise<ParamsType>;
}

export const generateMetadata = async (props: PagePropsType) => {
  const movieId = (await props.params).movieId;
  const movieDetails = await getDetailsMovie(movieId);
  return {
    title: `Movie ${movieDetails.title}`,
  };
};

const page = async ({ params }: PagePropsType) => {
  const movieId = (await params).movieId;
  const movieDetails = await getDetailsMovie(movieId);
  const time = (await params).time || "day";
  return (
    <div>
      <MovieDetails details={movieDetails} />
      <div className="mt-12 px-[10rem] ">
        <div>
          <TrendContent>
            <TrendingList time={time} />
          </TrendContent>
        </div>
        <div className="mt-12">
          <PopularContent />
        </div>
      </div>
    </div>
  );
};

export default page;
