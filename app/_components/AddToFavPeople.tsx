import { FaHeart } from "react-icons/fa";
import { PersoneDetailsType } from "../_lib/services";

const AddToFavPeople = ({ persone }: { persone: PersoneDetailsType }) => {
    
  return (
    <button className="w-[2.8rem] h-[2.8rem] flex items-center justify-center rounded-[100%] bg-blue-950 cursor-pointer">
      <FaHeart size={13} color={"white"} />
    </button>
  );
};

export default AddToFavPeople;
