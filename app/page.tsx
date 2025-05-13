import HomePageSearchSection from "./_components/HomePageSearchSection";
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
    <div>
      <div>
        <HomePageSearchSection />
      </div>
      <div className="py-8 px-[10rem]">
        <TrendContent>
          <TrendingList time={time} />
        </TrendContent>
        <PopularContent />
      
      </div>
    </div>
  );
}
