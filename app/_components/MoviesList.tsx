import { getMoviesByType } from "../_lib/services";
import MoviesItem from "./MoviesItem";

interface MoviesListPropsType {
  type: string;
  page: string;
  genre: string;
}

const MoviesList = async ({ type, page, genre }: MoviesListPropsType) => {
  const movieItems = await getMoviesByType(type, page);
  const isGenre = genre !== "";
  const movies = isGenre
    ? movieItems.filter((movie) => movie.genre_ids.includes(Number(genre)))
    : movieItems;
  return (
    <ul className="flex flex-wrap justify-between items-stretch gap-6">
      {movies.map((movie) => (
        <MoviesItem movie={movie} key={movie.id} />
      ))}
    </ul>
  );
};

export default MoviesList;
