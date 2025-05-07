import { SearchItemType } from "../_lib/services";

interface SearchListPropsType {
  data: SearchItemType[];
}

const SearchList = ({ data }: SearchListPropsType) => {
  return (
    <ul>
      {data.map((data) => (
        <p key={data.id} className="text-black">{data.name}</p>
      ))}
    </ul>
  );
};

export default SearchList;
