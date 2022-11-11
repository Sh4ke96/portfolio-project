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
            <li className="flex justify-center items-center border border-gray border-opacity-10 bg-light_blue rounded-lg">
              <a href="https://www.facebook.com/profile.php?id=100002663673602">
                <RiFacebookFill className="text-4xl p-2 fill-gray hover:fill-green delay-100" />
              </a>
            </li>
            <li className="flex justify-center items-center border border-gray border-opacity-10 bg-light_blue rounded-lg">
              <a href="https://github.com/Sh4ke96">
                <RiGithubFill className="text-4xl p-2 fill-gray hover:fill-green delay-100" />
              </a>
            </li>
            <li className="flex justify-center items-center border border-gray border-opacity-10 bg-light_blue rounded-lg">
              <a href="https://www.linkedin.com/in/artur-micha%C5%82ek-69863918b/">
                <RiLinkedinBoxFill className="text-4xl p-2 fill-gray hover:fill-green delay-100" />
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
