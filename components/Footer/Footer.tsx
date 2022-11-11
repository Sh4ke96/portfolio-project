import { FC } from "react";
import {
  RiFacebookFill,
  RiGithubFill,
  RiLinkedinBoxFill,
} from "react-icons/ri";

const Footer: FC = () => {
  return (
    <footer className="footer relative z-20 border-t border-white border-opacity-10 bg-grey bg-opacity-95 backdrop-blur backdrop-filter">
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-y-5 gap-x-7 p-5 text-center md:flex-nowrap">
        <div className="w-full md:w-auto">
          <ul className="mb-0 inline-flex list-none flex-wrap gap-3 pl-0 sm:gap-4">
            <li className="border border-gray border-opacity-10 p-4 bg-light_blue rounded-lg inline-block align-middle">
              <a href="/">
                <RiFacebookFill />
              </a>
            </li>
            <li className="border border-gray border-opacity-10 p-4 bg-light_blue rounded-lg inline-block align-middle">
              <a href="/">
                <RiGithubFill />
              </a>
            </li>
            <li className="border border-gray border-opacity-10 p-4 bg-light_blue rounded-lg inline-block align-middle">
              <a href="/">
                <RiLinkedinBoxFill />
              </a>
            </li>
          </ul>
        </div>
        <p className="mb-0 w-full md:w-auto text-gray">
          © 2022, All right reserved{" "}
          <span className="text-white">Artur Michałek</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
