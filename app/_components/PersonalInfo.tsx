import { PersoneDetailsType } from "../_lib/services";

interface PersonalInfoPropsType {
  details: PersoneDetailsType;
}
const PersonalInfo = ({ details }: PersonalInfoPropsType) => {
  return <ul className="flex items-center justify-center gap-6"></ul>;
};

export default PersonalInfo;
