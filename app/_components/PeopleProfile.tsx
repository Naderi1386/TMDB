import Image from "next/image";

interface PeopleProfilePropsType {
  src: string;
}
const PeopleProfile = ({ src }: PeopleProfilePropsType) => {
  return (
    <div className="relative w-full h-[300px]">
      <Image fill className="object-cover" src={src} alt="Person-Profile" />
    </div>
  );
};

export default PeopleProfile;
