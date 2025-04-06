import PopularContent from "./_components/PopularContent";
import TrendContent from "./_components/TrendContent";
import TrendingList from "./_components/TrendingList";
interface SearchParamsType {
  time: string;
}
interface HomePropsType {
  searchParams: Promise<SearchParamsType>;
}

export default async function Home(props: HomePropsType) {
  const time = (await (await props.searchParams).time) || "day";
  return (
    <div className="py-10 px-[10rem]">
      <div>
        <TrendContent>
          <TrendingList time={time} />
        </TrendContent>
        <PopularContent />
      </div>
    </div>
  );
}
