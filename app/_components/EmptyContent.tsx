import { ReactNode } from "react";

interface EmptyContentPropsType {
  children: ReactNode;
}

const EmptyContent = ({ children }: EmptyContentPropsType) => {

  return (
    <div className="text-center font-bold text-blue-950 pt-12">
      <h2 className="text-2xl">{children}</h2>
      
    </div>
  );
};

export default EmptyContent;
