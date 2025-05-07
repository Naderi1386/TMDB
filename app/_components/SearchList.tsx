import { SearchItemType } from "../_lib/services";
import SearchItems from "./SearchItems";

interface SearchListPropsType {
  data: SearchItemType[];
}

const SearchList = ({ data }: SearchListPropsType) => {
  return (
    <ul className="space-y-5">
      {data.map((item,index) => (
        <SearchItems index={index} item={item} key={item.id} />
      ))}
    </ul>
  );
};

export default SearchList;
