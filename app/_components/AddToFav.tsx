import { FaHeart } from "react-icons/fa";
import { MovieDetailsType } from "../_lib/services";

interface AddToFavPropsType{
    item:MovieDetailsType
}
const AddToFav = ({ item }: AddToFavPropsType) => {
  return (
    <button className="w-[2.8rem] h-[2.8rem] flex items-center justify-center rounded-[100%] bg-blue-950 cursor-pointer">
      <FaHeart size={13} color="white" />
    </button>
  );
};

export default AddToFav;
