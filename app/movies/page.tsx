import { Suspense } from "react";
import MoviesList from "../_components/MoviesList";
import Spinner from "../_components/Spinner";
import MoviePageTitle from "../_components/MoviePageTitle";
import { getMoviesGenres, getMoviesTotalPages } from "../_lib/services";
import Filter from "../_components/Filter";

interface SearchParamsType {
  type: string;
  page?: string;
  genre?: string;
}
interface PagePropsType {
  searchParams: Promise<SearchParamsType>;
}
export async function generateMetadata(props: PagePropsType) {
  const type = (await props.searchParams).type
    .replace("_", " ")
    .toLocaleUpperCase();
  return {
    title: `${type} Movies`,
  };
}

const page = async (props: PagePropsType) => {
  const type = (await props.searchParams).type;
  const page = (await props.searchParams).page || "1";
  const genre = (await props.searchParams).genre || "";
  const totalPages = await getMoviesTotalPages(type);
  const genres = await getMoviesGenres();
  const key = `${type}&${page}`;
  return (
    <div>
      <div className="px-[10rem] pb-16">
        <MoviePageTitle title={type} topic="Movies" />
        <div className="flex gap-10 items-start">
          <div className=" basis-[20%] ">
            <Filter filterItems={genres} />
          </div>
          <div className="basis-[80%]">
            <Suspense fallback={<Spinner />} key={key}>
              <MoviesList totalPages={totalPages} genre={genre} type={type} page={page} />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
