import { PeopleType } from "../_lib/services"

interface PeopleItemPropsType{
    peopleItem:PeopleType
}
const PeopleItem = ({peopleItem}: PeopleItemPropsType) => {
  return <li>PeopleItem</li>;
};

export default PeopleItem