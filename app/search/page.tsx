import SearchList from "../_components/SearchList";
import SearchPagination from "../_components/SearchPagination";
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

  return (
    <div className="py-6 px-[10rem]">
      <SearchList data={data.results} />
      <SearchPagination page={Number(page)} totalPages={data.total_pages} />
    </div>
  );
};

export default page;
