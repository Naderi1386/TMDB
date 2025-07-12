import { PersoneDetailsType } from "../_lib/services";
import AddToFavPeople from "./AddToFavPeople";
import PersonTextExpender from "./PersonTextExpender";

const PersonDeatils = ({ details }: { details: PersoneDetailsType }) => {
  const { biography, name } = details;
  const isLong = biography.split(" ").length > 25;

  return (
    <div>
      <h1 className="text-black font-bold text-3xl mb-8">{name}</h1>
      <span className="text-black font-semibold text-lg mb-2 block">
        Biography
      </span>
      <p className="text-black text-sm font-light mb-10">
        {isLong ? <PersonTextExpender text={biography} /> : biography}
      </p>
      <AddToFavPeople persone={details} />
    </div>
  );
};

export default PersonDeatils;
