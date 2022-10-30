import { FC } from "react";
import {
  RiFacebookFill,
  RiGithubFill,
  RiLinkedinBoxFill,
} from "react-icons/ri";

const Socials: FC = () => {
  return (
    <div className="flex gap-x-6">
      <a
        href="/"
        className="p-2 text-gray border-2 border-green rounded-full text-xl hover:border-gray hover:text-green delay-100"
      >
        <RiFacebookFill />
      </a>
      <a
        href="https://github.com/Sh4ke96"
        className="p-2 text-gray border-2 border-green rounded-full text-xl hover:border-gray hover:text-green delay-100"
      >
        <RiGithubFill />
      </a>
      <a
        href="https://www.linkedin.com/in/artur-micha%C5%82ek-69863918b/"
        className="p-2 text-gray border-2 border-green rounded-full text-xl hover:border-gray hover:text-green delay-100"
      >
        <RiLinkedinBoxFill />
      </a>
    </div>
  );
};

export default Socials;
