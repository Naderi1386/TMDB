import { Suspense } from "react";
import MoviePageTitle from "../_components/MoviePageTitle";
import Spinner from "../_components/Spinner";
import TVShowsList from "../_components/TVShowsList";
import { getTVShowsGenres, getTVShowsTotalPages } from "../_lib/services";
import Filter from "../_components/Filter";
import Languages from "../_components/Languages";
import Sort from "../_components/Sort";

// We Don't Need This App Is Dynamic
// export const revalidate = 3600;

interface SearchParamsType {
  type: string;
  page?: string;
  genre?: string;
  lan?: string;
  sort?: string;
}
interface PagePropsType {
  searchParams: Promise<SearchParamsType>;
}
export async function generateMetadata(props: PagePropsType) {
  const type =
    (await props.searchParams).type.replace("_", " ").toLocaleUpperCase() ||
    "popular";
  return {
    title: `${type} TV Shows`,
  };
}
const page = async (props: PagePropsType) => {
  const [type, page, genre, lan, sort, genres] = await Promise.all([
    await(await props.searchParams).type || "popular",
    await(await props.searchParams).page || "1",
    (await props.searchParams).genre || "",
    (await props.searchParams).lan || "",
    (await props.searchParams).sort || "",
    await getTVShowsGenres(),
  ]);
  const totalPages = await getTVShowsTotalPages(type);
  const key = `${type}&${page}`;
  return (
    <div>
      <div className="px-[10rem] pb-16">
        <MoviePageTitle topic="TV Shows" title={type} />
        <div className="flex gap-10 items-start">
          <div className=" basis-[20%] ">
            <Sort />
            <Filter filterItems={genres}>
              <Languages />
            </Filter>
          </div>
          <div className="basis-[80%]">
            <Suspense fallback={<Spinner />} key={key}>
              <TVShowsList
                sort={sort}
                lan={lan}
                totalPages={totalPages}
                genre={genre}
                page={page}
                type={type}
              />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
