import Image from "next/image";
import { MovieType } from "../_lib/services"

interface MoviesItemPropsType{
    movie:MovieType
}
const MoviesItem = ({movie}: MoviesItemPropsType) => {
    const {title,poster_path}=movie
    const src = `https://image.tmdb.org/t/p/w500${poster_path}`;
   
  return <li className="basis-[17.5%] rounded-md">
    <div className="w-full relative h-[280px]">
        <Image fill className="object-cover" alt={`Image-${title}`} src={src} unoptimized  />
    </div>
  </li>;
};

export default MoviesItem