import Image from "next/image";

const PersonProfile = () => {
  return (
    <div className="w-full relative h-[380px] rounded-md overflow-hidden">
      <Image
        alt="Person-Profile"
        src={"/images/no-person.png"}
        fill
        className="object-cover"
      />
    </div>
  );
};

export default PersonProfile;
