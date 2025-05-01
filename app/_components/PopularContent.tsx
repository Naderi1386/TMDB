import PopularList from "./PopularList";

const PopularContent = () => {
  return (
    <div>
      <div className="my-24 ">
        <div className="flex items-center gap-5 text-2xl font-bold mb-5">
          <h2 className="text-black">What&apos;s Popular</h2>
        </div>
        <PopularList />
      </div>
    </div>
  );
};

export default PopularContent;
