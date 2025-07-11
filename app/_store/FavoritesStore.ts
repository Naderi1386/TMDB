import { create } from "zustand";
import { persist } from "zustand/middleware";
import { PeopleType } from "../_lib/services";

export interface FavoriteType {
  title: string;
  rating: number;
  type: "movie" | "tv";
  date: string;
  runtime?: number;
  revenue?: number;
  img: string;
  id: string;
}

interface StoreType {
  favorites: FavoriteType[];
  addFav: (fav: FavoriteType) => void;
  removeFav: (id: string) => void;
  favoritesPeople: PeopleType[];
  addFavPeople: (people: PeopleType) => void;
  removeFavPeople: (id: string) => void;
}

export const useFavoritesStore = create(
  persist<StoreType>(
    (set, get) => ({
      favorites: [],
      addFav: (fav) => set({ favorites: [...get().favorites, fav] }),
      removeFav: (id) =>
        set({ favorites: get().favorites.filter((fav) => fav.id !== id) }),
      favoritesPeople: [],
      addFavPeople: (people) =>
        set({ favoritesPeople: [...get().favoritesPeople, people] }),
      removeFavPeople: (id) =>
        set({
          favoritesPeople: get().favoritesPeople.filter(
            (favPeople) => String(favPeople.id) !== id
          ),
        }),
    }),
    {
      name: "favorites-storage",
    }
  )
);
