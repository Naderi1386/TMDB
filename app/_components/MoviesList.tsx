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
  sort: string;
}

const MoviesList = async ({
  type,
  page,
  genre,
  totalPages,
  lan,
  sort,
}: MoviesListPropsType) => {
  const movieItems = await getMoviesByType(type, page);

  const moviesByLanguage = lan
    ? movieItems.filter((movie) => movie.original_language === lan)
    : movieItems;
  const moviesByGenre = genre
    ? moviesByLanguage.filter((movie) =>
        movie.genre_ids.includes(Number(genre))
      )
    : moviesByLanguage;
  const movies = sort
    ? sort === "A_Z"
      ? moviesByGenre.sort((a, b) => a.title.localeCompare(b.title))
      : sort === "Z_A"
      ? moviesByGenre.sort((a, b) => a.title.localeCompare(b.title)).reverse()
      : sort === "Rating-asc"
      ? moviesByGenre.sort((a, b) => a.vote_average - b.vote_average)
      : sort === "Rating-desc"
      ? moviesByGenre.sort((a, b) => a.vote_average - b.vote_average).reverse()
      : moviesByGenre
    : moviesByGenre;
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
