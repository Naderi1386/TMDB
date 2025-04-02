import { getTVShowsByType } from "../_lib/services";
import EmptyContent from "./EmptyContent";
import MoviesPagination from "./MoviesPagination";
import TVShowItems from "./TVShowItems";

interface TVShowsListPropsType {
  page: string;
  type: string;
  genre: string;
  lan: string;
  totalPages: number;
}
const TVShowsList = async ({
  page,
  type,
  genre,
  totalPages,
  lan,
}: TVShowsListPropsType) => {
  const showItems = await getTVShowsByType(type, page);
  const isGenre = genre !== "";
  const isLan = lan !== "";
  const showsByLanguage = isLan
    ? showItems.filter((show) => show.original_language === lan)
    : showItems;
  const shows = isGenre
    ? showsByLanguage.filter((show) => show.genre_ids.includes(Number(genre)))
    : showsByLanguage;
  if (shows.length === 0) return <EmptyContent>No TV Shows ):</EmptyContent>;
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
