import { TVShowDetailsType } from "../_lib/services";

interface TVDetailsPropsType {
  details: TVShowDetailsType;
}
const TVDetails = ({ details }: TVDetailsPropsType) => {
  const {
    backdrop_path,
    first_air_date,
    genres,
    id,
    name,
    original_language,
    overview,
    status,
    vote_average,
  } = details;
  return <div>TVDetails</div>;
};

export default TVDetails;
