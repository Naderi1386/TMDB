import PersonalInfo from "@/app/_components/PersonalInfo";
import PersonDeatils from "@/app/_components/PersonDeatils";
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
    title: `${name.toLocaleUpperCase()}`,
  };
}

const page = async ({ params }: PagePropsType) => {
  const peopleId = (await params).peopleId;
  const details = await getPersonDetails(peopleId);

  return (
    <div>
      <div className="py-10 px-[10rem]">
        <div className="flex items-start gap-10">
          <div className="basis-[25%]">
            <PersonProfile />
          </div>
          <div className="basis-[75%]">
            <PersonDeatils details={details} />
          </div>
        </div>
      </div>
      <div className="bg-white px-[10rem] py-10 border-t border-black/12  border-solid">
        <PersonalInfo details={details} />
      </div>
    </div>
  );
};

export default page;
