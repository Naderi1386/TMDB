interface ShortDetailsTextPropsType{
    title:string
    value:string | number
}
const ShortDetailsText = ({title,value}: ShortDetailsTextPropsType) => {
  return <div className="flex flex-col gap-2 text-black">
    <span className="text-lg font-bold">{title}</span>
    <span>{value}</span>

  </div>;
};

export default ShortDetailsText