"use client";

import { useFavoritesStore } from "../_store/FavoritesStore";

interface FavoriteDeleteBtnPropsType {
  id: string;
}
const FavoriteDeleteBtn = ({ id }: FavoriteDeleteBtnPropsType) => {
  const handleDelete = useFavoritesStore((state) => state.removeFav);
  return (
    <button
      onClick={() => handleDelete(id)}
      className="btn btn-sm btn-soft btn-error"
    >
      Delete
    </button>
  );
};

export default FavoriteDeleteBtn;
