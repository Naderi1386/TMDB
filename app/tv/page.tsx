import { Suspense } from "react";
import MoviePageTitle from "../_components/MoviePageTitle";
import Spinner from "../_components/Spinner";

interface SearchParamsType {
  type: string;
  page?: string;
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
  const key = `${type}&${page}`;
  return (
    <div>
      <div className="px-[10rem] pb-16">
        <MoviePageTitle title={type} />
        <div className="flex gap-10 items-start">
          <div className=" basis-[20%] border border-solid border-stone-300 rounded-md">
            side bar
          </div>
          <div className="basis-[80%]">
            <Suspense fallback={<Spinner />} key={key}></Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
