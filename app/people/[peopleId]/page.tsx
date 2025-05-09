import { getPersonDetails } from "@/app/_lib/services";

interface ParamsType {
  peopleId: string;
}
interface PagePropsType {
  params: Promise<ParamsType>;
}
export async function generateMetadata(props: PagePropsType) {
  const peopleId = (await props.params).peopleId;
  const { name } = await getPersonDetails(peopleId);
  return {
    title: `${name.toLocaleUpperCase()}-Details`,
  };
}

const page = async ({ params }: PagePropsType) => {
  const peopleId = (await params).peopleId;
  const details = await getPersonDetails(peopleId);
  return <div>
    
  </div>;
};

export default page;
