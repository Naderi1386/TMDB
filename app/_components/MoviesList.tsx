import { getMoviesByType } from "../_lib/services";
import EmptyContent from "./EmptyContent";
import MoviesItem from "./MoviesItem";
import MoviesPagination from "./MoviesPagination";

interface MoviesListPropsType {
  type: string;
  page: string;
  genre: string;
  totalPages: number;
  lan: string;
}

const MoviesList = async ({
  type,
  page,
  genre,
  totalPages,
  lan,
}: MoviesListPropsType) => {
  const movieItems = await getMoviesByType(type, page);
  const isGenre = genre !== "";
  const isLan = lan !== "";
  const moviesByLanguage = isLan
    ? movieItems.filter((movie) => movie.original_language === lan)
    : movieItems;
  const movies = isGenre
    ? moviesByLanguage.filter((movie) =>
        movie.genre_ids.includes(Number(genre))
      )
    : moviesByLanguage;
  if (movies.length === 0) return <EmptyContent>No Movies ):</EmptyContent>;
  return (
    <>
      <ul className="flex flex-wrap justify-between items-stretch gap-6">
        {movies.map((movie) => (
          <MoviesItem movie={movie} key={movie.id} />
        ))}
      </ul>
      <MoviesPagination totalPages={totalPages} />
    </>
  );
};

export default MoviesList;
