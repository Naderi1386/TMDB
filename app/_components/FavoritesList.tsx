"use client";

import { useFavoritesStore } from "../_store/FavoritesStore";
import FavoriteItems from "./FavoriteItems";

const FavoritesList = () => {
  const favorites = useFavoritesStore((state) => state.favorites);
  return (
    <div className="px-[10rem] py-6">
      <ul className="space-y-5">
        {favorites.map((fav, index) => (
          <FavoriteItems index={index} key={fav.id} favorite={fav} />
        ))}
      </ul>
    </div>
  );
};

export default FavoritesList;
