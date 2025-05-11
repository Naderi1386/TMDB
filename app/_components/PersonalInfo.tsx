import { PersoneDetailsType } from "../_lib/services";
import PersonalInfoItem from "./PersonalInfoItem";

interface PersonalInfoPropsType {
  details: PersoneDetailsType;
}
const PersonalInfo = ({ details }: PersonalInfoPropsType) => {
  const { known_for_department, gender, birthday, place_of_birth, popularity } =
    details;
  return (
    <ul className="flex items-center justify-center gap-6">
      <PersonalInfoItem
        title="Known For
"
        text={known_for_department}
      />
    </ul>
  );
};

export default PersonalInfo;
