import Image from "next/image";
import { AboutCommentType } from "./AboutCommentsList";

interface AboutCommentItemsPropsType {
  comment: AboutCommentType;
}

const AboutCommentItems = ({ comment }: AboutCommentItemsPropsType) => {
  const { image, owner, text } = comment;
  const isLong = image === "/images/comment3.png";
  return (
    <div className="flex items-center gap-12">
      <Image alt={`IMAGE-${owner}`} src={image} width={280} height={180} />
      <div className="divide divide-y divide-stone-300">
        <p
          className={`italic pb-4  ${
            isLong ? "text-lg" : "text-2xl"
          } text-justify`}
        >
          {text}
        </p>
        <span className="block pt-4 text-left font-light ">{owner}</span>
      </div>
    </div>
  );
};

export default AboutCommentItems;
