import ShortDetailsText from "./ShortDetailsText";

interface ShortDetailsPropsType {
  status: string;
  original_language: string;
  budget: number;
  revenue: number;
}
const ShortDetails = ({
  status,
  original_language,
  budget,
  revenue,
}: ShortDetailsPropsType) => {
  return (
    <div className="flex items-center justify-center gap-8">
      <ShortDetailsText title="Status" value={status} />
      <ShortDetailsText title="Original Language" value={original_language} />
      <ShortDetailsText title="Budget" value={budget} />
      <ShortDetailsText title="Revenue" value={revenue} />
    </div>
  );
};

export default ShortDetails;
