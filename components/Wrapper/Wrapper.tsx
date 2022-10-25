import { FC } from "react";

interface WrapperProps {
  children?: React.ReactNode;
}

const Wrapper: FC<WrapperProps> = ({ children }) => {
  return <div className="bg-blue">{children}</div>;
};

export default Wrapper;
