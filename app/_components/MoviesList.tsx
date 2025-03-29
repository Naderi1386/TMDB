import { getMoviesByType } from "../_lib/services";
import MoviesItem from "./MoviesItem";

interface MoviesListPropsType {
  type: string;
  page:string
}

const MoviesList = async ({ type,page }: MoviesListPropsType) => {
  const movies = await getMoviesByType(type,page);
  return <ul className="flex flex-wrap justify-between items-stretch gap-6">
    {movies.map((movie)=><MoviesItem movie={movie} key={movie.id} />)}
  </ul>;
};

export default MoviesList;
