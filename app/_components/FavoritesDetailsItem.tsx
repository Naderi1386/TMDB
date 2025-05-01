import { ReactNode } from "react";

interface FavoritesDetailsItemPropsType {
  children: ReactNode;
  title: string;
}
const FavoritesDetailsItem = ({
  children,
  title,
}: FavoritesDetailsItemPropsType) => {
  return (
    <div className="flex flex-col gap-1 text-white items-start">
      <span className="text-2xl">{children}</span>
      <span className="text-lg font-bold">{title}</span>
    </div>
  );
};

export default FavoritesDetailsItem;
