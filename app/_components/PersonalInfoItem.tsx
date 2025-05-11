interface PersonalInfoItemPropsType {
  title: string;
  text: string | number;
}
const PersonalInfoItem = ({ title, text }: PersonalInfoItemPropsType) => {
  return (
    <li className="flex flex-col gap-2 text-black">
      <span className="block font-bold">{title}</span>
      <span className="block">{text}</span>
    </li>
  );
};

export default PersonalInfoItem;
