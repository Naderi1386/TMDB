import Image from "next/image";
import { shrikhand } from "../layout";

const AboutContent = () => {
  return (
    <div className=" h-full bg-slate-900 text-center pt-[5rem] pb-10 text-white">
      <h1 className={`${shrikhand.className} italic font-bold text-[10rem]`}>
        Hi there,
      </h1>
      <div className="flex justify-center mt-[-8.5rem]">
        <Image
          quality={100}
          alt="ABOUT-IMAGE"
          src={"/images/about-img.png"}
          width={830}
          height={60}
        />
      </div>
      <h2 className="font-bold text-6xl mt-14 mb-6">
        Let&apos;s talk about TMDB
      </h2>
      <p className="w-[800px] mx-auto">
        The Movie Database (TMDB) is a{" "}
        <span className="border-b border-solid border-red-500">
          community built
        </span>{" "}
        movie and TV database. Every piece of data has been added by our amazing
        community dating back to 2008. TMDB&apos;s strong{" "}
        <span className="border-b border-solid border-red-500">
          international focus
        </span>{" "}
        and breadth of data is largely unmatched and something we&apos;re
        incredibly proud of. Put simply, we live and breathe community and
        that&apos;s precisely what makes us different.
      </p>
    </div>
  );
};

export default AboutContent;
