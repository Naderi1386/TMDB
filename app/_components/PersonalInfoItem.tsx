interface PersonalInfoItemPropsType {
  title: string;
  text: string | number;
}
const PersonalInfoItem = ({ title, text }: PersonalInfoItemPropsType) => {
  return (
    <li className="flex flex-col gap-1 text-black  text-center">
      <span className="block font-bold">{title}</span>
      <span className="block text-sm">{text}</span>
    </li>
  );
};

export default PersonalInfoItem;
