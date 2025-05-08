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
    <div className="py-6 px-[10rem]">
      <h2 className="text-black mb-8 font-bold text-2xl">Popular People</h2>

      <PeopleList people={data.results} />
      
    </div>
  );
};

export default page;
