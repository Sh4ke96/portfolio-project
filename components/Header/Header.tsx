import { FC } from "react";
import Button from "../Button/Button";

const Header: FC = () => {
  return (
    <header className="container flex justify-between mx-auto p-5">
      <a href="/">
        <h1 className="text-6xl text-green font-bold">
          Michałek<span className="text-white">.</span>
        </h1>
      </a>
      <nav className="flex items-center">
        <ul className="flex">
          <li className="text-white pr-6">
            <a href="/" className="uppercase tracking-wider  font-semibold">
              <span className="text-green pr-1">01.</span>Home
            </a>
          </li>
          <li className="text-white pr-6">
            <a href="/" className="uppercase tracking-wider font-semibold">
              <span className="text-green pr-1">02.</span>About
            </a>
          </li>
          <li className="text-white pr-6">
            <a href="/" className="uppercase tracking-wider font-semibold">
              <span className="text-green pr-1">03.</span>Experience
            </a>
          </li>
          <li className="text-white pr-6">
            <a href="/" className="uppercase tracking-wider font-semibold">
              <span className="text-green pr-1">04.</span>Projects
            </a>
          </li>
          <li className="text-white pr-6">
            <a href="/" className="uppercase tracking-wider font-semibold">
              <span className="text-green pr-1">05.</span>Blog
            </a>
          </li>
          <li className="text-white">
            <a href="/" className="uppercase tracking-wider font-semibold">
              <span className="text-green pr-1">06.</span>Contact
            </a>
          </li>
        </ul>
      </nav>
      <Button>Hire me</Button>
    </header>
  );
};

export default Header;
