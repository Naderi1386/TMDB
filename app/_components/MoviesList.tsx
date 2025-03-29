import { getMoviesByType } from "../_lib/services";
import MoviesItem from "./MoviesItem";

interface MoviesListPropsType {
  type: string;
}

const MoviesList = async ({ type }: MoviesListPropsType) => {
  const movies = await getMoviesByType(type,"1");
  return <ul className="flex flex-wrap justify-between items-stretch gap-6">
    {movies.map((movie)=><MoviesItem movie={movie} key={movie.id} />)}
  </ul>;
};

export default MoviesList;
