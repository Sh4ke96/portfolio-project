import { FC } from "react";

interface ButtonProps {
  children?: string;
  type?: "submit" | "reset";
  hide?: string;
}

const Button: FC<ButtonProps> = ({ children, hide, type }) => {
  return (
    <button
      type={type}
      className={`${hide} xl:block text-blue bg-green px-4 py-4 uppercase font-semibold rounded-md hover:text-white delay-150`}
    >
      {children}
    </button>
  );
};

export default Button;
