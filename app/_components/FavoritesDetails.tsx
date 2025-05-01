"use client";

import { useFavoritesStore } from "../_store/FavoritesStore";
import FavoritesDetailsItem from "./FavoritesDetailsItem";
import Spinner from "./Spinner";

const FavoritesDetails = () => {
  const favorites = useFavoritesStore((state) => state.favorites);
  if (!favorites.length) return (
    <div className="pb-16">
      <Spinner />
    </div>
  );
  const ratings = favorites.map((fav) => fav.rating);
  const sumRatings = Number(ratings.reduce((acc, curr) => acc + curr, 0).toFixed(1));

  return (
    <div className="bg-slate-950 px-[10rem] py-3">
      <div className="flex items-center gap-8">
        <FavoritesDetailsItem title="Item on this list">
          {favorites.length}
        </FavoritesDetailsItem>
        <FavoritesDetailsItem title="Average Rating">
          <span>{sumRatings / favorites.length}/10</span>
        </FavoritesDetailsItem>
      </div>
    </div>
  );
};

export default FavoritesDetails;
