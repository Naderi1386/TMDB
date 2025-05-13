import { getTVShowsByType } from "../_lib/services";
import EmptyContent from "./EmptyContent";
import MoviesPagination from "./MoviesPagination";
import TVShowItems from "./TVShowItems";

interface TVShowsListPropsType {
  page: string;
  type: string;
  genre: string;
  lan: string;
  sort: string;
  totalPages: number;
}
const TVShowsList = async ({
  page,
  type,
  genre,
  totalPages,
  lan,
  sort,
}: TVShowsListPropsType) => {
  const showItems = await getTVShowsByType(type, page);

  const showsByLanguage = lan
    ? showItems.filter((show) => show.original_language === lan)
    : showItems;
  const showsByGenre = genre
    ? showsByLanguage.filter((show) => show.genre_ids.includes(Number(genre)))
    : showsByLanguage;
  const shows = sort
    ? sort === "A_Z"
      ? showsByGenre.sort((a, b) => a.name.localeCompare(b.name))
      : sort === "Z_A"
      ? showsByGenre.sort((a, b) => a.name.localeCompare(b.name)).reverse()
      : sort === "Rating-asc"
      ? showsByGenre.sort((a, b) => a.vote_average - b.vote_average)
      : sort === "Rating-desc"
      ? showsByGenre.sort((a, b) => a.vote_average - b.vote_average).reverse()
      : showsByGenre
    : showsByGenre;
  if (shows.length === 0)
    return (
      <EmptyContent href={`/tv?type=${type}`} topic="Shows">
        No TV Shows ):
      </EmptyContent>
    );
  return (
    <>
      <ul className="flex flex-wrap justify-between items-stretch gap-6">
        {shows.map((show) => (
          <TVShowItems show={show} key={show.id} />
        ))}
      </ul>
      <MoviesPagination totalPages={totalPages} />
    </>
  );
};

export default TVShowsList;
