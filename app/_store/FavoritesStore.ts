import { create } from "zustand";

export interface FavoriteType {
  title: string;
  rating: number;
  type: "movie" | "tv";
  date: string;
  runtime: number;
  revenue: number;
  id: string;
}
interface StoreType {
  favorites: FavoriteType[];
  addFav: (fav: FavoriteType) => void;
  removeFav: (id: string) => void;
}

export const useFavoritesStore = create<StoreType>((set) => ({
  favorites: [],
  addFav: (fav) => set((state) => ({ favorites: [...state.favorites, fav] })),
  removeFav: (id) =>
    set((state) => ({
      favorites: state.favorites.filter((fav) => fav.id !== id),
    })),
}));
