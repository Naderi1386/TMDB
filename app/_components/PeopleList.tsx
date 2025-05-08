import { PeopleType } from "../_lib/services";
import PeopleItem from "./PeopleItem";

interface PeopleListPropsType {
  people: PeopleType[];
}
const PeopleList = ({ people }: PeopleListPropsType) => {
  return (
    <ul className="flex items-start justify-between gap-5 flex-wrap">
      {people.map((people) => (
        <PeopleItem key={people.id} peopleItem={people} />
      ))}
    </ul>
  );
};

export default PeopleList;
