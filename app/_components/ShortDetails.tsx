interface ShortDetailsPropsType {
  status: string;
  original_language: string;
  budget: number;
  revenue:number;
}
const ShortDetails = ({status,original_language,budget,revenue}: ShortDetailsPropsType) => {
  return <div>ShortDetails</div>;
};

export default ShortDetails