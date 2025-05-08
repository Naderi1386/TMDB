import { Metadata } from "next";

interface SearchParamsType {
  page: string;
}
interface PagePropsType {
  searchParams: Promise<SearchParamsType>;
}

export const metadata: Metadata = {
  title: "Popluar People",
};

const page = async ({ searchParams }: PagePropsType) => {
  const page = (await searchParams).page || "1";
  return <div>page</div>;
};

export default page;
