import { ReactNode } from "react";
import DeleteSearchParamsBtn from "./DeleteSearchParamsBtn";

interface EmptyContentPropsType {
  children: ReactNode;
}

const EmptyContent = ({ children }: EmptyContentPropsType) => {

  return (
    <div className="text-center font-bold text-blue-950 pt-12">
      <h2 className="text-2xl mb-6">{children}</h2>
      <DeleteSearchParamsBtn />
      
    </div>
  );
};

export default EmptyContent;
