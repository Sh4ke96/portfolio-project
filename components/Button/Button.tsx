import { FC } from "react";

interface ButtonProps {
  children?: string;
}

const Button: FC<ButtonProps> = ({ children }) => {
  return (
    <button className="hidden xl:block text-blue bg-green px-4 py-4 uppercase font-semibold rounded-md hover:text-white delay-150">
      {children}
    </button>
  );
};

export default Button;
