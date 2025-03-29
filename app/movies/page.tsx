import { Suspense } from "react";
import MoviesList from "../_components/MoviesList";
import Spinner from "../_components/Spinner";
import MoviePageTitle from "../_components/MoviePageTitle";
import MoviesPagination from "../_components/MoviesPagination";
import { getMoviesTotalPages } from "../_lib/services";

interface SearchParamsType {
  type: string;
  page?:string
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
  const page=(await props.searchParams).page || "1"
  const totalPages = await getMoviesTotalPages(type);
  const key=`${type}&${page}`
  return (
    <div>
      <div className="px-[10rem] pb-16">
        <MoviePageTitle title={title} />
        <div className="flex gap-10 items-start">
          <div className=" basis-[20%] border border-solid border-stone-300 rounded-md">side bar</div>
          <div className="basis-[80%]">
            <Suspense fallback={<Spinner />} key={key}>
              <MoviesList type={type} page={page} />
              <MoviesPagination totalPages={totalPages} />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
