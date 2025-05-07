import { SearchItemType } from "../_lib/services";
import SearchItems from "./SearchItems";

interface SearchListPropsType {
  data: SearchItemType[];
}

const SearchList = ({ data }: SearchListPropsType) => {
  return (
    <ul>
      {data.map((item) => (
      <SearchItems item={item} key={item.id} />
      ))}
    </ul>
  );
};

export default SearchList;
