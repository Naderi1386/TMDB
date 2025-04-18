"use client";
import { FaHeart } from "react-icons/fa";
import { FavoriteType, useFavoritesStore } from "../_store/FavoritesStore";

interface AddToFavPropsType {
  item: FavoriteType;
}
const AddToFav = ({ item }: AddToFavPropsType) => {
  const {  addFav } = useFavoritesStore();
  return (
    <button
      onClick={() => addFav(item)}
      className="w-[2.8rem] h-[2.8rem] flex items-center justify-center rounded-[100%] bg-blue-950 cursor-pointer"
    >
      <FaHeart size={13} color="white" />
    </button>
  );
};

export default AddToFav;
