import { Metadata } from "next";
import { getPopularPeoples } from "../_lib/services";
import PeopleList from "../_components/PeopleList";

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
  const data = await getPopularPeoples(page);
  return (
    <ul className="py-6 px-[10rem]">
      <PeopleList people={data.results} />
    </ul>
  );
};

export default page;
