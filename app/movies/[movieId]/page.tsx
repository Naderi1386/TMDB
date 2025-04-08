import { getDetailsMovie } from "@/app/_lib/services";

interface ParamsType{
    movieId:string
}
interface PagePropsType{
    params:Promise<ParamsType>
}

export const generateMetadata=async (props:PagePropsType)=>{
    const movieId=(await props.params).movieId
    const movieDeatils=await getDetailsMovie(movieId)
    return {
        title:`Movie ${movieDeatils.title}`
    }

}

const page =async ({params}: PagePropsType) => {
    const movieId=(await params).movieId
    const movieDetails=await getDetailsMovie(movieId)
  return <div>{movieDetails.title}</div>;
};

export default page