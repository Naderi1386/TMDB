import FavoritesDetails from "../_components/FavoritesDetails";
import FavoritesTitleSection from "../_components/FavoritesTitleSection";

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
