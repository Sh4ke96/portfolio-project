import { FC } from "react";
import {
  RiFacebookFill,
  RiGithubFill,
  RiLinkedinBoxFill,
} from "react-icons/ri";

const Socials: FC = () => {
  return (
    <div className="flex gap-x-6">
      <div className="p-3 text-gray border-2 border-green rounded text-xl">
        <RiFacebookFill />
      </div>
      <div className="p-3 text-gray border-2 border-green rounded text-xl">
        <RiGithubFill />
      </div>
      <div className="p-3 text-gray border-2 border-green rounded text-xl">
        <RiLinkedinBoxFill />
      </div>
    </div>
  );
};

export default Socials;
