import { Metadata } from "next";
import FavoritesDetails from "../_components/FavoritesDetails";
import FavoritesTitleSection from "../_components/FavoritesTitleSection";
import FavoritesList from "../_components/FavoritesList";

export const metadata:Metadata={
     title:'Favorites'
}

const page = () => {
  return (
    <section>
      <div>
        <FavoritesTitleSection />
        <FavoritesDetails />
        <FavoritesList />
      </div>
    </section>
  );
};

export default page;
