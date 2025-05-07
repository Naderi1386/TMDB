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
  return <div>page</div>;
};

export default page;
