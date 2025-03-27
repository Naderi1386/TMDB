import FooterImage from "./FooterImage";
import FooterUserName from "./FooterUserName";

const Footer = () => {
  return (
    <footer>
      <div className="bg-blue-950 px-[20rem] pt-11 pb-20">
        <div className="space-y-12">
          <FooterImage />
          <FooterUserName />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
