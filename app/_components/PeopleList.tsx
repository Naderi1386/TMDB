import { PeopleType } from "../_lib/services"

interface PeopleListPropsType{
    people:PeopleType[]
}
const PeopleList = ({people}: PeopleListPropsType) => {
  return <li>PeopleList</li>;
};

export default PeopleList