"use client";
import { FaHeart } from "react-icons/fa";
import { PersoneDetailsType } from "../_lib/services";
import { useFavoritesStore } from "../_store/FavoritesStore";

const AddToFavPeople = ({ persone }: { persone: PersoneDetailsType }) => {
  const { favoritesPeople, addFavPeople, removeFavPeople } =
    useFavoritesStore();
  const isAdded = favoritesPeople.find((fav) => fav.id === persone.id);
  return (
    <button
      title={
        isAdded
          ? "Remove from favorites people list"
          : "Add to favorites people list"
      }
      onClick={() => {
        if (!isAdded) addFavPeople(persone);
        else removeFavPeople(String(persone.id));
      }}
      className="w-[2.8rem] h-[2.8rem] flex items-center justify-center rounded-[100%] bg-blue-950 cursor-pointer"
    >
      <FaHeart size={13} color={isAdded ? "red" : "white"} />
    </button>
  );
};

export default AddToFavPeople;
