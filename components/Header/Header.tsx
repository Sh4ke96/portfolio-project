import { FC, useState } from "react";
import Button from "../Button/Button";

const Header: FC = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="container flex items-center justify-between mx-auto p-5">
      <a href="/">
        <h1 className="text-2xl sm:text-4xl lg:text-5xl text-green font-bold uppercase">
          Michałek<span className="text-white">.</span>
        </h1>
      </a>
      <div className="header-mobilenav flex lg:hidden">
        {showMenu && (
          <div className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-blue">
            <ul className="sm:text-2xl md:text-3xl">
              <li className="text-white py-3">
                <a
                  href="/"
                  className="uppercase tracking-wider  font-semibold pb-2 hover:border-green hover:border-b-2 delay-100"
                >
                  <span className="text-green pr-1">01.</span>Home
                </a>
              </li>
              <li className="text-white py-3">
                <a
                  href="/"
                  className="uppercase tracking-wider font-semibold pb-2 hover:border-green hover:border-b-2 delay-100"
                >
                  <span className="text-green pr-1">02.</span>About
                </a>
              </li>
              <li className="text-white  py-3">
                <a
                  href="/"
                  className="uppercase tracking-wider font-semibold pb-2 hover:border-green hover:border-b-2 delay-100"
                >
                  <span className="text-green pr-1">03.</span>Experience
                </a>
              </li>
              <li className="text-white  py-3">
                <a
                  href="/"
                  className="uppercase tracking-wider font-semibold pb-2 hover:border-green hover:border-b-2 delay-100"
                >
                  <span className="text-green pr-1">04.</span>
                  Projects
                </a>
              </li>
              <li className="text-white py-3">
                <a
                  href="/"
                  className="uppercase tracking-wider font-semibold pb-2 hover:border-green hover:border-b-2 delay-100"
                >
                  <span className="text-green pr-1">05.</span>Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className="flex justify-center items-center text-green lg:hidden hover:text-white delay-100">
        <button
          className="px-3 text-3xl sm:text-4xl z-50"
          onClick={() => {
            setShowMenu((prev) => !prev);
          }}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"></path>
            </g>
          </svg>
        </button>
      </div>
      <nav className="hidden lg:flex items-center">
        <ul className="flex">
          <li className="text-white pr-6">
            <a
              href="/"
              className="uppercase tracking-wider  font-semibold pb-2 hover:border-green hover:border-b-2 delay-100"
            >
              <span className="text-green pr-1">01.</span>Home
            </a>
          </li>
          <li className="text-white pr-6">
            <a
              href="/"
              className="uppercase tracking-wider font-semibold pb-2 hover:border-green hover:border-b-2 delay-100"
            >
              <span className="text-green pr-1">02.</span>About
            </a>
          </li>
          <li className="text-white pr-6">
            <a
              href="/"
              className="uppercase tracking-wider font-semibold pb-2 hover:border-green hover:border-b-2 delay-100"
            >
              <span className="text-green pr-1">03.</span>Experience
            </a>
          </li>
          <li className="text-white pr-6">
            <a
              href="/"
              className="uppercase tracking-wider font-semibold pb-2 hover:border-green hover:border-b-2 delay-100"
            >
              <span className="text-green pr-1">04.</span>
              Projects
            </a>
          </li>
          <li className="text-white">
            <a
              href="/"
              className="uppercase tracking-wider font-semibold pb-2 hover:border-green hover:border-b-2 delay-100"
            >
              <span className="text-green pr-1">05.</span>Contact
            </a>
          </li>
        </ul>
      </nav>
      <Button>Hire me</Button>
    </header>
  );
};

export default Header;
