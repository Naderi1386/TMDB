import { getPopularShows } from "../_lib/services";
import PopularItems from "./PopularItems";

const PopularList = async () => {
  const popularShows = await getPopularShows();

  return (
    <div className="overflow-auto">
      <ul className="flex items-stretch justify-between gap-6">
        {popularShows.map((popularShow) => (
          <PopularItems item={popularShow} key={popularShow.id} />
        ))}
      </ul>
    </div>
  );
};

export default PopularList;
