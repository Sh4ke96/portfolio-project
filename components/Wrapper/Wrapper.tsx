import { FC } from "react";

interface WrapperProps {
  children?: React.ReactNode;
}

const Wrapper: FC<WrapperProps> = ({ children }) => {
  return (
    <div className="bg-blue lines">
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
      {children}
    </div>
  );
};

export default Wrapper;
