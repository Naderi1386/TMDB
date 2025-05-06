import { FaStar } from "react-icons/fa6";

interface DetailsScorePropsType {
  vote: number;
}
const DetailsScore = ({ vote }: DetailsScorePropsType) => {
  return (
    <div className="flex items-center gap-2 mt-7">
      <span className="font-bold text-2xl">{vote}</span>
      <span className="pb-[7px]">
        <FaStar color="yellow" size={28} />
      </span>
    </div>
  );
};

export default DetailsScore;
