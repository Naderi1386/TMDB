import { auth } from "@/auth";
import FooterImage from "./FooterImage";
import FooterList from "./FooterList";
import FooterUserName from "./FooterUserName";
import LogoutButton from "./LogoutButton";

const Footer = async () => {
  const session = await auth();
  return (
    <footer>
      <div className="bg-blue-950 px-[20rem] pt-11 pb-20 flex gap-12 ">
        <div className="space-y-12">
          <FooterImage />
          <div className="flex  items-center ">
            <FooterUserName />
          </div>
        </div>
        <div className="flex flex-col">
          <FooterList
            title="The Basics"
            items={[{ text: "About TMDB", href: "/about" }]}
          />
          <div>{session && <LogoutButton />}</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
