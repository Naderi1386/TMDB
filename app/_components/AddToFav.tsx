"use client";
import { FaHeart } from "react-icons/fa";
import { FavoriteType, useFavoritesStore } from "../_store/FavoritesStore";

interface AddToFavPropsType {
  item: FavoriteType;
}
const AddToFav = ({ item }: AddToFavPropsType) => {
  const { addFav, removeFav, favorites } = useFavoritesStore();

  const isAdded = favorites.map((fav) => fav.id).includes(item.id);
  return (
    <button
      title={isAdded ? "Remove from favorites list" : "Add to favorites list"}
      onClick={() => {
        if (!isAdded) addFav(item);
        else removeFav(item.id);
      }}
      className="w-[2.8rem] h-[2.8rem] flex items-center justify-center rounded-[100%] bg-blue-950 cursor-pointer"
    >
      <FaHeart size={13} color={isAdded ? "red" : "white"} />
    </button>
  );
};

export default AddToFav;
