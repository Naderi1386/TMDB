import { ReactNode } from "react";
import FavoritesProfile from "./FavoritesProfile";

const FavoritesTitleSection = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-sky-950 py-6 px-[10rem]">
      <h1 className="font-bold text-2xl text-white">{children}</h1>
      <FavoritesProfile />
    </div>
  );
};

export default FavoritesTitleSection;
