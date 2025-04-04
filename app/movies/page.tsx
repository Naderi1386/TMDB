import { Suspense } from "react";
import MoviesList from "../_components/MoviesList";
import Spinner from "../_components/Spinner";
import MoviePageTitle from "../_components/MoviePageTitle";
import { getMoviesGenres, getMoviesTotalPages } from "../_lib/services";
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
  const type = (await props.searchParams).type
    .replace("_", " ")
    .toLocaleUpperCase();
  return {
    title: `${type} Movies`,
  };
}

const page = async (props: PagePropsType) => {
  const [type, page, genre, lan, sort, genres] = await Promise.all([
    (await props.searchParams).type,
    (await props.searchParams).page || "1",
    (await props.searchParams).genre || "",
    (await props.searchParams).lan || "",
    (await props.searchParams).sort || "",
    await getMoviesGenres(),
  ]);
  const totalPages = await getMoviesTotalPages(type);
  const key = `${type}&${page}`;

  return (
    <div>
      <div className="px-[10rem] pb-16">
        <MoviePageTitle title={type} topic="Movies" />
        <div className="flex gap-10 items-start">
          <div className=" basis-[20%] ">
            <Sort />
            <Filter filterItems={genres}>
              <Languages />
            </Filter>
          </div>
          <div className="basis-[80%]">
            <Suspense fallback={<Spinner />} key={key}>
              <MoviesList
                totalPages={totalPages}
                genre={genre}
                type={type}
                page={page}
                lan={lan}
                sort={sort}
              />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
