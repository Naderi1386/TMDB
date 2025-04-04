import { MovieType } from "../_lib/services"

interface TrandingListPropsType{
    movies:MovieType[]
}

const TrendingList = ({movies}: TrandingListPropsType) => {
  return <div>TrandingList</div>;
};

export default TrendingList;