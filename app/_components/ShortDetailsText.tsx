function SplitFromRightRegex(val: string) {
  const reversed = val.split("").reverse().join("");
  const parts = reversed.match(/.{1,3}/g);
  const result = parts
    ?.map((val) => val.split("").reverse().join(""))
    .reverse()
    .join(",");
  return result;
}

interface ShortDetailsTextPropsType {
  title: string;
  value: string | number;
}
const ShortDetailsText = ({ title, value }: ShortDetailsTextPropsType) => {
  const isNumber = typeof value === "number";
  const specialVal = SplitFromRightRegex(value.toString());

  return (
    <div className="flex flex-col gap-2 text-black text-center">
      <span className="text-lg font-bold">{title}</span>
      <span className="font-light">{isNumber ? `$${specialVal}` : value}</span>
    </div>
  );
};

export default ShortDetailsText;
