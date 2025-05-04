import { Metadata } from "next";
import FavoritesDetails from "../_components/FavoritesDetails";
import FavoritesTitleSection from "../_components/FavoritesTitleSection";
import FavoritesList from "../_components/FavoritesList";
import FavoritesSort from "../_components/FavoritesSort";

export const metadata: Metadata = {
  title: "Favorites",
};
interface SearchParamsType {
  sort: string;
}

interface PagePropsType {
  searchParams: Promise<SearchParamsType>;
}

const page = async ({ searchParams }: PagePropsType) => {
  const sort = await (await searchParams).sort || "all";
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
