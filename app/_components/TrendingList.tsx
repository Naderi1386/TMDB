import { MovieType } from "../_lib/services";
import TrendMovieItem from "./TrendMovieItem";

interface TrandingListPropsType {
  movies: MovieType[];
}

const TrendingList = ({ movies }: TrandingListPropsType) => {
  return (
    <div>
      <div className="text-xl font-bold mb-5">
        <h2>Trending</h2>
      </div>
      <div className="overflow-auto bg-center bg-no-repeat bg-cover bg-[url(https://www.themoviedb.org/assets/2/v4/misc/trending-bg-39afc2a5f77e31d469b25c187814c0a2efef225494c038098d62317d923f8415.svg)]">
        <ul className="flex items-stretch justify-between gap-6 ">
          {movies.map((movie) => (
            <TrendMovieItem movie={movie} key={movie.id} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TrendingList;
