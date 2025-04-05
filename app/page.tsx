import TrendContent from "./_components/TrendContent";
import TrendingList from "./_components/TrendingList";

export default function Home() {
  return (
    <div className="py-10 px-[10rem]">
      <div>
        <TrendContent>
          <TrendingList />
        </TrendContent>
      </div>
    </div>
  );
}
