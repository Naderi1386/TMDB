import { getMoviesByType } from "../_lib/services";

interface MoviesListPropsType {
  type: string;
}

const MoviesList = async ({ type }: MoviesListPropsType) => {
  const movies = await getMoviesByType(type);
  console.log(movies);
  return <div>MoviesList</div>;
};

export default MoviesList;
