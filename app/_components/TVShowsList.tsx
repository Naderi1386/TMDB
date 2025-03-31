import { getTVShowsByType } from "../_lib/services";
import TVShowItems from "./TVShowItems";

interface TVShowsListPropsType {
  page: string;
  type: string;
  genre: string;
}
const TVShowsList = async ({ page, type, genre }: TVShowsListPropsType) => {
  const showItems = await getTVShowsByType(type, page);
  const isGenre = genre !== "";
  const shows = isGenre
    ? showItems.filter((show) => show.genre_ids.includes(Number(genre)))
    : showItems;
  return (
    <ul className="flex flex-wrap justify-between items-stretch gap-6">
      {shows.map((show) => (
        <TVShowItems show={show} key={show.id} />
      ))}
    </ul>
  );
};

export default TVShowsList;
