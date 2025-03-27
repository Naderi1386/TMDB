import Link from "next/link";

interface FooterListItemsType {
  text: string;
  href: string;
}

interface FooterListPropsType {
  title: string;
  items: FooterListItemsType[];
}

const FooterList = ({ title, items }: FooterListPropsType) => {
  return (
    <div className="text-white grow">
      <h2 className="font-bold mb-1 uppercase">{title}</h2>
      <ul className="space-y-1">
        {items.map((item, index) => (
          <li key={index} className="transition-all duration-150 hover:scale-105">
            <Link href={item.href}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterList;
