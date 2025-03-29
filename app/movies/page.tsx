import { Suspense } from "react";
import MoviesList from "../_components/MoviesList";
import Spinner from "../_components/Spinner";
import MoviePageTitle from "../_components/MoviePageTitle";
import MoviesPagination from "../_components/MoviesPagination";

interface SearchParamsType {
  type: string;
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
  const title = (await props.searchParams).type;

  return (
    <div>
      <div className="px-[10rem] pb-16">
        <MoviePageTitle title={title} />
        <div className="flex gap-10">
          <div className="bg-red-500 basis-[20%]">s</div>
          <div className="basis-[80%]">
            <Suspense fallback={<Spinner />} key={type}>
              <MoviesList type={type} />
              <MoviesPagination />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
