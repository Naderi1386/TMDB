import Image from "next/image";

interface PeopleProfilePropsType {
  src: string;
}
const PeopleProfile = ({ src }: PeopleProfilePropsType) => {
  return (
    <div className="relative w-full h-[300px] bg-black rounded-[7px] overflow-hidden cursor-pointer">
      <Image fill className="object-cover" src={src} alt="Person-Profile" />
    </div>
  );
};

export default PeopleProfile;
