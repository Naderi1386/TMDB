import { getDetailsMovie } from "@/app/_lib/services";

interface ParamsType{
    movieId:string
}
interface PagePropsType{
    params:Promise<ParamsType>
}
const page =async ({params}: PagePropsType) => {
    const movieId=(await params).movieId
    const movieDetails=await getDetailsMovie(movieId)
  return <div>{movieDetails.title}</div>;
};

export default page