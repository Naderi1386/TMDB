export interface AboutItemType {
  text: string;
  number: number;
}
interface AboutListItemsPropsType {
  item: AboutItemType;
}
const AboutListItems = ({ item }: AboutListItemsPropsType) => {
  const { number, text } = item;
  const isFirst = number === 1;
  return (
    <li className="flex items-start gap-10">
      <span className="text-[#d40242] text-6xl font-bold">{number}</span>
      <p className={`text-justify ${isFirst && "pl-3"}`}>{text}</p>
    </li>
  );
};

export default AboutListItems;
