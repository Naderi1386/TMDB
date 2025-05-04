"use client";

import { useFavoritesStore } from "../_store/FavoritesStore";
import FavoriteItems from "./FavoriteItems";
interface FavoritesListPropsType{
  sort:string
}
const FavoritesList = ({sort}: FavoritesListPropsType) => {
  const favorites = useFavoritesStore((state) => state.favorites);
  const favoritesItems=sort==='title' ? favorites.sort((a,b)=>a.title.localeCompare(b.title)) : favorites
  return (
    <div className="px-[10rem] py-6">
      <ul className="space-y-5">
        {favoritesItems.map((fav, index) => (
          <FavoriteItems index={index} key={fav.id} favorite={fav} />
        ))}
      </ul>
    </div>
  );
};

export default FavoritesList;
