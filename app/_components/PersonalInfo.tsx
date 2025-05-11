import { formatDate } from "../_lib/helper";
import { PersoneDetailsType } from "../_lib/services";
import PersonalInfoItem from "./PersonalInfoItem";

interface PersonalInfoPropsType {
  details: PersoneDetailsType;
}
const PersonalInfo = ({ details }: PersonalInfoPropsType) => {
  const { known_for_department, gender, birthday, place_of_birth, popularity } =
    details;
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
        text={formatDate(birthday)}
      />
      <PersonalInfoItem
        title="Place of Birth


"
        text={place_of_birth}
      />
    </ul>
  );
};

export default PersonalInfo;
