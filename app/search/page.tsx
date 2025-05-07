import SearchList from "../_components/SearchList";
import { searchMulti } from "../_lib/services";

interface SearchParamsType {
  page: string;
  query: string;
}
interface PagePropsType {
  searchParams: Promise<SearchParamsType>;
}

const page = async ({ searchParams }: PagePropsType) => {
  const [page, query] = await Promise.all([
    (await searchParams).page || "1",
    (await searchParams).query,
  ]);
  const data = await searchMulti(query, page);
  

  return <div className="py-8 px-[10rem]">
        <SearchList data={data.results} />
  </div>;
};

export default page;
