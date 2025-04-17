import Link from "next/link";
import { NavigationItemListType } from "./NavigationItems";
import {motion} from "framer-motion"
interface NavigationListPropsType {
  list: NavigationItemListType[];
  handleClose: () => void;
}
const NavigationList = ({ list, handleClose }: NavigationListPropsType) => {
  return (
    <motion.ul className="bg-white text-black rounded-md  w-[8.5rem] flex flex-col  absolute bottom-[-8rem] border border-solid border-stone-400 overflow-hidden z-[1000] ">
      {list.map((item, index) => (
        <li
          onClick={handleClose}
          key={index}
          className="text-[13px] font-light px-3 py-[6px]  transition-all duration-150 hover:bg-gray-300"
        >
          <Link href={item.href}>{item.text}</Link>
        </li>
      ))}
    </motion.ul>
  );
};

export default NavigationList;
