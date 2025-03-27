import FooterImage from "./FooterImage";
import FooterList from "./FooterList";
import FooterUserName from "./FooterUserName";

const Footer = () => {
  return (
    <footer>
      <div className="bg-blue-950 px-[20rem] pt-11 pb-20 flex gap-12 ">
        <div className="space-y-12">
          <FooterImage />
          <FooterUserName />
        </div>
        <div>
          <FooterList
            title="The Basics"
            items={[
              { text: "About TMDB", href: "/about" },
              
            ]}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
