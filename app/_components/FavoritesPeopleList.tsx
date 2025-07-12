"use client";

import { useFavoritesStore } from "../_store/FavoritesStore";
import FavoritePeopleItems from "./FavoritePeopleItems";

const FavoritesPeopleList = () => {
  const { favoritesPeople } = useFavoritesStore();
  return (
    <ul className="my-8 px-40 divide-y divide-stone-400">
      {favoritesPeople.map((favorite) => (
        <FavoritePeopleItems key={favorite.id} favorite={favorite} />
      ))}
    </ul>
  );
};

export default FavoritesPeopleList;
