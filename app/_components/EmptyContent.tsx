import { ReactNode } from "react";
import DeleteSearchParamsBtn from "./DeleteSearchParamsBtn";

interface EmptyContentPropsType {
  children: ReactNode;
  topic:string
}

const EmptyContent = ({ children,topic }: EmptyContentPropsType) => {

  return (
    <div className="text-center font-bold text-blue-950 py-12">
      <h2 className="text-2xl mb-6">{children}</h2>
      <DeleteSearchParamsBtn topic={topic} />
    </div>
  );
};

export default EmptyContent;
