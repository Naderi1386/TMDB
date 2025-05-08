import Link from "next/link";
import { PeopleType } from "../_lib/services";
import PeopleProfile from "./PeopleProfile";

interface PeopleItemPropsType {
  peopleItem: PeopleType;
}
const PeopleItem = ({ peopleItem }: PeopleItemPropsType) => {
  const { original_name, profile_path, known_for,id } = peopleItem;
  const src = `https://media.themoviedb.org/t/p/w470_and_h470_face${profile_path}`;
  return (
    <li className="w-[25%]">
      <PeopleProfile src={src} />
      <div className="bg-white shadow-xl p-3">
        <Link href={`/people/${id}`} className="text-black font-bold transition-all duration-150 hover:text-blue-500">{original_name}</Link>
        <ul className="flex items-center flex-wrap">
          {known_for.map((item, index) => (
            <li key={index}>
              <span className="font-light text-black text-[13px]">
                {item.title ? item.title : item.name}
                {index !== known_for.length - 1 && ","}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

export default PeopleItem;
