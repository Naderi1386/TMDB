import { getTVShowsByType } from "../_lib/services";
import EmptyContent from "./EmptyContent";
import MoviesPagination from "./MoviesPagination";
import TVShowItems from "./TVShowItems";

interface TVShowsListPropsType {
  page: string;
  type: string;
  genre: string;
  totalPages: number;
}
const TVShowsList = async ({
  page,
  type,
  genre,
  totalPages,
}: TVShowsListPropsType) => {
  const showItems = await getTVShowsByType(type, page);
  const isGenre = genre !== "";
  const shows = isGenre
    ? showItems.filter((show) => show.genre_ids.includes(Number(genre)))
    : showItems;
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
