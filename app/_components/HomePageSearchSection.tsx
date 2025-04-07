import HomePageSearchInput from "./HomePageSearchInput";


const HomePageSearchSection = () => {
  return (
    <div className="bg-blue-950 w-full border-t border-solid border-black py-14 px-[10rem]">
      <div className="space-y-1 text-white mb-10">
        <h1 className="text-5xl font-bold">Welcome.</h1>
        <p className="text-3xl font-semibold">
          Millions of movies, TV shows and people to discover. Explore now.
        </p>
      </div>
      <div>
        <HomePageSearchInput />
      </div>
    </div>
  );
}

export default HomePageSearchSection