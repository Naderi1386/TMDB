import PersonTextExpender from "./PersonTextExpender";

interface PersonDeatilsPropsType {
  name: string;
  biography: string;
}
const PersonDeatils = ({ name, biography }: PersonDeatilsPropsType) => {
  const isLong = biography.split(" ").length > 25;
  

  return (
    <div>
      <h1 className="text-black font-bold text-3xl mb-8">{name}</h1>
      <span className="text-black font-semibold text-lg mb-2 block">
        Biography
      </span>
      <p className="text-black text-sm font-light">
        {isLong ? <PersonTextExpender text={biography} /> : biography}
      </p>
    </div>
  );
};

export default PersonDeatils;
