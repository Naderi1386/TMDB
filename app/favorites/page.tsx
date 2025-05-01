import { Metadata } from "next";
import FavoritesDetails from "../_components/FavoritesDetails";
import FavoritesTitleSection from "../_components/FavoritesTitleSection";

export const metadata:Metadata={
     title:'Favorites'
}

const page = () => {
  return (
    <section>
      <div>
        <FavoritesTitleSection />
        <FavoritesDetails />
      </div>
    </section>
  );
};

export default page;
