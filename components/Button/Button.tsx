import { FC } from "react";

interface ButtonProps {
  children?: string;
  type?: "submit" | "reset" | "button";
  hide?: string;
}

const Button: FC<ButtonProps> = ({ children, hide }) => {
  return (
    <button
      className={`${hide} xl:block text-blue bg-green px-4 py-4 uppercase font-semibold rounded-md hover:text-white delay-150`}
    >
      {children}
    </button>
  );
};

export default Button;
