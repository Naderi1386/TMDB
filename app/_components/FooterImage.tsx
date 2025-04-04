import Image from "next/image";

const FooterImage = () => {
  return (
    <Image
    width={135}
    height={65}
      alt="FOOTER-IMAGE"
      src={
        "https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
      }
    />
  );
};

export default FooterImage;
