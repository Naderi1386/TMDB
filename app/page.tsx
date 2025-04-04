import TrendingList from "./_components/TrendingList";
import { getTrendMovies } from "./_lib/services";

export default async function Home() {
  const trendMovies = await getTrendMovies("day");
  return (
    <div className="py-10 px-[10rem]">
      <div>
        <TrendingList movies={trendMovies} />
      </div>
    </div>
  );
}
