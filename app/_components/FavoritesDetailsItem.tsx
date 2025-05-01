import { ReactNode } from "react";

interface FavoritesDetailsItemPropsType {
  children: ReactNode;
  title: string;
}
const FavoritesDetailsItem = ({
  children,
  title,
}: FavoritesDetailsItemPropsType) => {
  return <div className="flex flex-col gap-3 text-white text-2xl items-start">
    <span>{children}</span>
    <span>{title}</span>
  </div>;
};

export default FavoritesDetailsItem;
