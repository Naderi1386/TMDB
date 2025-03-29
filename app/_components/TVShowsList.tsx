import { getTVShowsByType } from "../_lib/services";
import TVShowItems from "./TVShowItems";

interface TVShowsListPropsType {
  page: string;
  type: string;
}
const TVShowsList = async ({ page, type }: TVShowsListPropsType) => {
  const shows = await getTVShowsByType(type, page);
  return (
    <ul className="flex flex-wrap justify-between items-stretch gap-6">
      {shows.map((show) => (
        <TVShowItems show={show} key={show.id} />
      ))}
    </ul>
  );
};

export default TVShowsList;
