import { Metadata } from "next";
import FavoritesDetails from "../_components/FavoritesDetails";
import FavoritesTitleSection from "../_components/FavoritesTitleSection";
import FavoritesList from "../_components/FavoritesList";
import FavoritesSort from "../_components/FavoritesSort";

export const metadata:Metadata={
     title:'Favorites'
}

const page = () => {
  return (
    <section>
      <div>
        <FavoritesTitleSection />
        <FavoritesDetails />
        <FavoritesSort />
        <FavoritesList />
      </div>
    </section>
  );
};

export default page;
