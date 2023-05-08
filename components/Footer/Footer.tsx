import { FC } from "react";
import {
  RiFacebookFill,
  RiGithubFill,
  RiLinkedinBoxFill,
} from "react-icons/ri";

const Footer: FC = () => {
  return (
    <footer className="relative border-t border-white footer border-opacity-10 bg-grey bg-opacity-95 backdrop-blur backdrop-filter">
      <div className="container flex flex-wrap items-center justify-between p-5 mx-auto text-center gap-y-5 gap-x-7 md:flex-nowrap">
        <div className="w-full md:w-auto">
          <ul className="inline-flex flex-wrap gap-3 pl-0 mb-0 list-none sm:gap-4">
            <li className="flex items-center justify-center border rounded-lg border-gray border-opacity-10 bg-light_blue">
              <a href="https://www.facebook.com/profile.php?id=100002663673602">
                <RiFacebookFill className="p-2 text-4xl delay-100 fill-gray hover:fill-green" />
              </a>
            </li>
            <li className="flex items-center justify-center border rounded-lg border-gray border-opacity-10 bg-light_blue">
              <a href="https://github.com/Sh4ke96">
                <RiGithubFill className="p-2 text-4xl delay-100 fill-gray hover:fill-green" />
              </a>
            </li>
            <li className="flex items-center justify-center border rounded-lg border-gray border-opacity-10 bg-light_blue">
              <a href="https://www.linkedin.com/in/artur-micha%C5%82ek-69863918b/">
                <RiLinkedinBoxFill className="p-2 text-4xl delay-100 fill-gray hover:fill-green" />
              </a>
            </li>
          </ul>
        </div>
        <p className="w-full mb-0 md:w-auto text-gray">
          © 2023, All right reserved{" "}
          <span className="text-white">Artur Michałek</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
