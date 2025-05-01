"use client"

import { useFavoritesStore } from "../_store/FavoritesStore"

const FavoritesDetails = () => {
    const favorites=useFavoritesStore((state)=>state.favorites)
  return (
    <div className="bg-slate-950 px-[10rem] py-3">
        {favorites.length}
    </div>
  )
}

export default FavoritesDetails