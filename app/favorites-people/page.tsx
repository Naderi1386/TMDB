import { Metadata } from "next";
import FavoritesTitleSection from "../_components/FavoritesTitleSection";
import FavoritesPeopleList from "../_components/FavoritesPeopleList";

export const metadata: Metadata = {
  title: "Favorites People",
};

const page = () => {
  return (
    <section>
      <FavoritesTitleSection>Favorites People</FavoritesTitleSection>
      <FavoritesPeopleList />
    </section>
  );
};

export default page;
