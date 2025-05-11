import { calculateAge, formatDate } from "../_lib/helper";
import { PersoneDetailsType } from "../_lib/services";
import PersonalInfoItem from "./PersonalInfoItem";

interface PersonalInfoPropsType {
  details: PersoneDetailsType;
}
const PersonalInfo = ({ details }: PersonalInfoPropsType) => {
  const { known_for_department, gender, birthday, place_of_birth, popularity } =
    details;
  const age = calculateAge(birthday);
  const showAge = age && `${age.years} years old`;
  return (
    <ul className="flex items-center justify-between gap-6">
      <PersonalInfoItem
        title="Known For
"
        text={known_for_department}
      />
      <PersonalInfoItem
        title="Gender
"
        text={gender == 1 ? "Female" : "Male"}
      />
      <PersonalInfoItem
        title="Birthday

"
        text={`${formatDate(birthday)}(${showAge})`}
      />
      <PersonalInfoItem
        title="Place of Birth


"
        text={place_of_birth}
      />
      <PersonalInfoItem
        title="Popularity


"
        text={Math.trunc(popularity)}
      />
    </ul>
  );
};

export default PersonalInfo;
