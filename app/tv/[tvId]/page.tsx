import { getDetailsTVShow } from "@/app/_lib/services";

interface ParamsType {
  tvId: string;
}
interface PagePropsType {
  params: Promise<ParamsType>;
}
export const generateMetadata = async (props: PagePropsType) => {
  const tvId = (await props.params).tvId;
  const tvDetails = await getDetailsTVShow(tvId);
  return {
    title: `TV ${tvDetails.name}`,
  };
};

const page = async (props: PagePropsType) => {
  const tvId = await (await props.params).tvId;
  return (
    <div>
      
    </div>
  );
};

export default page;
