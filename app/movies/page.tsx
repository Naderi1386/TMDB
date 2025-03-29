import { Suspense } from "react";
import MoviesList from "../_components/MoviesList";
import Spinner from "../_components/Spinner";
import MoviePageTitle from "../_components/MoviePageTitle";

interface SearchParamsType {
  type: string;
}
interface PagePropsType {
  searchParams: SearchParamsType;
}

const page = async (props: PagePropsType) => {
  const type = props.searchParams.type;
  const title = props.searchParams.type as string;

  return (
    <div>
      <div className="px-[10rem]">
        <MoviePageTitle title={title} />
        <div className="flex gap-16">
          <div className="bg-red-500 basis-[20%]">s</div>
          <div className="basis-[80%]">
            <Suspense fallback={<Spinner />}>
              <MoviesList type={type} />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
