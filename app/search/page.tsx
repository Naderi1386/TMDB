import SearchList from "../_components/SearchList";
import Pagination from "../_components/Pagination";
import { searchMulti } from "../_lib/services";
import EmptyContent from "../_components/EmptyContent";

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
  if (!data.results.length)
    return (
      <EmptyContent topic="last page">Could not find the content ):</EmptyContent>
    );

  return (
    <div className="py-6 px-[10rem]">
      <SearchList data={data.results} />
      <Pagination page={Number(page)} totalPages={data.total_pages} />
    </div>
  );
};

export default page;
