import { Suspense } from "react";
import MoviePageTitle from "../_components/MoviePageTitle";
import Spinner from "../_components/Spinner";
import TVShowsList from "../_components/TVShowsList";
import MoviesPagination from "../_components/MoviesPagination";
import { getTVShowsGenres, getTVShowsTotalPages } from "../_lib/services";
import Filter from "../_components/Filter";

interface SearchParamsType {
  type: string;
  page?: string;
  genre?:string
}
interface PagePropsType {
  searchParams: Promise<SearchParamsType>;
}
export async function generateMetadata(props: PagePropsType) {
  const type = (await props.searchParams).type
    .replace("_", " ")
    .toLocaleUpperCase();
  return {
    title: `${type} TV Shows`,
  };
}
const page = async (props: PagePropsType) => {
  const type = await (await props.searchParams).type;
  const page = (await (await props.searchParams).page) || "1";
  const genre=(await props.searchParams).genre || "" 
  const totalPages = await getTVShowsTotalPages(type);
  const genres = await getTVShowsGenres();
  const key = `${type}&${page}`;
  return (
    <div>
      <div className="px-[10rem] pb-16">
        <MoviePageTitle topic="TV Shows" title={type} />
        <div className="flex gap-10 items-start">
          <div className=" basis-[20%] border border-solid border-stone-300 rounded-md">
            <Filter filterItems={genres} />
          </div>
          <div className="basis-[80%]">
            <Suspense fallback={<Spinner />} key={key}>
              <TVShowsList genre={genre} page={page} type={type} />
              <MoviesPagination totalPages={totalPages} />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
