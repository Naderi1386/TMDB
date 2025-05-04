"use client";

import { useFavoritesStore } from "../_store/FavoritesStore";
import FavoritesDetailsItem from "./FavoritesDetailsItem";
import { SplitFromRightRegex } from "./ShortDetailsText";
import Spinner from "./Spinner";

const FavoritesDetails = () => {
  const favorites = useFavoritesStore((state) => state.favorites);
  if (!favorites.length)
    return (
      <div className="pb-16">
        <Spinner />
      </div>
    );
  const ratings = favorites.map((fav) => fav.rating);
  const sumRatings = Number(
    ratings.reduce((acc, curr) => acc + curr, 0).toFixed(1)
  );
  const totalRuntimes = favorites
    .map((fav) => fav.runtime)
    .reduce((acc, curr) => acc + curr, 0);
  const totalRevenue = favorites.map((fav) => fav.revenue).reduce((acc,curr)=>acc+curr,0);
  const splitedRevenue=SplitFromRightRegex(totalRevenue.toString())
  

  return (
    <>
    <div className="bg-slate-950 px-[10rem] py-4">
      <div className="flex items-center gap-8">
        <FavoritesDetailsItem title="Item on this list">
          {favorites.length}
        </FavoritesDetailsItem>
        <FavoritesDetailsItem title="Average Rating">
          <span>{sumRatings / favorites.length}/10</span>
        </FavoritesDetailsItem>
        <FavoritesDetailsItem
          title="Total Runtime
"
        >
          <div className="flex items-center gap-1">
            <span>{(totalRuntimes / 60).toFixed(0)}h</span>
            <span>{totalRuntimes % 60}m</span>
          </div>
        </FavoritesDetailsItem>
        <FavoritesDetailsItem title="Total Revenue">
          <span>${splitedRevenue}M</span>
        </FavoritesDetailsItem>
      </div>
    </div>
    
    </>
  );
};

export default FavoritesDetails;
