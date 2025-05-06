import PopularContent from "@/app/_components/PopularContent";
import TrendContent from "@/app/_components/TrendContent";
import TrendingList from "@/app/_components/TrendingList";
import { getDetailsTVShow } from "@/app/_lib/services";

interface ParamsType {
  tvId: string;
}
interface SearchParamsType{
    time?:string
}
interface PagePropsType {
  params: Promise<ParamsType>;
  searchParams:Promise<SearchParamsType>
}
export const generateMetadata = async (props: PagePropsType) => {
  const tvId = (await props.params).tvId;
  const tvDetails = await getDetailsTVShow(tvId);
  return {
    title: `TV ${tvDetails.name}`,
  };
};

const page = async (props: PagePropsType) => {
  const tvId = await (await props.params).tvId;
  const tvShowDetails=await getDetailsTVShow(tvId)
  const time=await (await props.searchParams).time || "day"
  return (
    <div>
      <div className="mt-12 px-[10rem] ">
        <div>
          <TrendContent>
            <TrendingList time={time} />
          </TrendContent>
        </div>
        <div className="mt-12">
          <PopularContent />
        </div>
      </div>
    </div>
  );
};

export default page;
