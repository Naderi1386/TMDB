import { getPersonDetails } from "@/app/_lib/services";

interface ParamsType {
  peopleId: string;
}
interface PagePropsType {
  params: Promise<ParamsType>;
}
export async function generateMetadata(props:PagePropsType){
    const peopleId=(await props.params).peopleId
    const {name}=await getPersonDetails(peopleId)
    return {
        title:`${name.toLocaleUpperCase()}-Details`
    }

}

const page = ({ params }: PagePropsType) => {
  return <div>page</div>;
};

export default page;
