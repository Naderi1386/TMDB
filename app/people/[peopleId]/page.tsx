import PersonProfile from "@/app/_components/PersonProfile";
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
  return (
    <div className="py-10 px-[10rem]">
      <div className="flex items-start gap-5">
        <div className="basis-[25%]">
            <PersonProfile />
        </div>
        <div className="basis-[75%]"></div>
      </div>
    </div>
  );
};

export default page;
