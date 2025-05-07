import { SearchItemType } from "../_lib/services";

interface SearchItemsPropsType {
  item: SearchItemType;
}
const SearchItems = ({ item }: SearchItemsPropsType) => {
  return <li>SearchItems</li>;
};

export default SearchItems;
