import AboutContent from "../_components/AboutContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

const page = () => {
  return (
    <div className="h-full">
      <AboutContent />
    </div>
  );
};

export default page;
