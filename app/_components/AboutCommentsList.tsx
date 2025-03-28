"use client";

import { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import AboutCommentItems from "./AboutCommentItems";

export interface AboutCommentType {
  text: string;
  owner: string;
  image: string;
}
const comments: AboutCommentType[] = [
  {
    text: "The TMDB product, service, attitude and support are truly top notch. We love how they support their community and the passion with which they have built an amazing asset that our users can enjoy!",
    image: "/images/comment1.png",
    owner: "Scott Olechowski, Chief Product Officer & Co-founder of Plex, Inc.",
  },
  {
    text: "Our experience working with TMDB has been positively fantastic! The powerful API coupled with its excellent availability and uptime is simply a great combo. I can't imagine ever using anything else!",
    image: "/images/comment2.png",
    owner: "James Abeler, Founder & Director of Firecore, LLC",
  },
  {
    text: "We love it. From day one we've found the API to be pragmatic, reliable, well structured and well documented. In any engineering project, it's immensely satisfying when you can just plug and play, and that's been the case all the way along. I can't recall a single outage in over five years of use, and we also enjoy having a voice when it comes to the design of new approaches.",
    image: "/images/comment3.png",
    owner: "Matthew Buchanan, Co-founder of Letterboxd",
  },
  {
    text: "The API has been amazing and of course, we love the localization of data. It's awesome to be able to add and edit movie information on our own.",
    image: "/images/comment4.png",
    owner: "Hosam Hassan, Co-founder of Taphive GmbH",
  },
];

const AboutCommentsList = () => {
  const [index, setIndex] = useState(0);
  const handleNext = () => {
    if (index < comments.length - 1) {
      setIndex((index) => index + 1);
    }
  };
  const handlePrevious = () => {
    if (index > 0) {
      setIndex((index) => index - 1);
    }
  };
  console.log(index);
  return (
    <div className="w-[1100px] mx-auto flex gap-10">
      <button className="cursor-pointer" onClick={handlePrevious}>
        <FaChevronLeft size={28} />{" "}
      </button>
      <div className="grow">
        <AboutCommentItems comment={comments.at(index) as AboutCommentType} />
      </div>
      <button className="cursor-pointer" onClick={handleNext}>
        <FaChevronRight size={28} />{" "}
      </button>
    </div>
  );
};

export default AboutCommentsList;
