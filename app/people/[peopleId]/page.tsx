interface ParamsType {
  peopleId: string;
}
interface PagePropsType {
  params: Promise<ParamsType>;
}

const page = ({ params }: PagePropsType) => {
  return <div>page</div>;
};

export default page;
