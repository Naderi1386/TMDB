import { PeopleType } from "../_lib/services";

interface PeopleItemPropsType {
  peopleItem: PeopleType;
}
const PeopleItem = ({ peopleItem }: PeopleItemPropsType) => {
    const {gender,id,known_for_department,name,original_name,popularity,profile_path}=peopleItem
    const src = `https://media.themoviedb.org/t/p/w470_and_h470_face${profile_path}`;
  return <li>
    
  </li>;
};

export default PeopleItem;
