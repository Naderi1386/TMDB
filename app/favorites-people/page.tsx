import { Metadata } from "next";
import FavoritesTitleSection from "../_components/FavoritesTitleSection";

export const metadata: Metadata = {
  title: "Favorites People",
};

const page = () => {
  return (
    <section>
      <FavoritesTitleSection>Favorites People</FavoritesTitleSection>
      
    </section>
  );
};

export default page;
