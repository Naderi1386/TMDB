"use client";

import { useFavoritesStore } from "../_store/FavoritesStore";
import EmptyContent from "./EmptyContent";
import FavoriteItems from "./FavoriteItems";
interface FavoritesListPropsType {
  sort: string;
}
const FavoritesList = ({ sort }: FavoritesListPropsType) => {
  const favorites = useFavoritesStore((state) => state.favorites);
  if (!favorites.length)
    return (
      <EmptyContent href="/" topic="Home">You have no favroites ):</EmptyContent>
    );
  const favoritesItems =
    sort === "title"
      ? favorites.sort((a, b) => a.title.localeCompare(b.title))
      : sort === "rating"
      ? favorites.sort((a, b) => a.rating - b.rating)
      : favorites;
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
