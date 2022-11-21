import { FC, useState, useEffect } from "react";
import Button from "../Button/Button";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Header: FC = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [fixed, setFixed] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setFixed(window.pageYOffset > 300)
      );
    }
  }, []);

  return (
    <header
      className={`header ${
        fixed
          ? "fixed w-full z-50 container-full border-b border-white border-opacity-20 bg-blue bg-opacity-80 backdrop-blur backdrop-filter"
          : "fixed w-full z-50 container-full"
      }`}
    >
      <div className="container flex items-center justify-between mx-auto p-5">
        <Link to="hero_section" smooth={true} duration={500}>
          <h1 className=" cursor-pointer text-2xl sm:text-4xl lg:text-5xl text-green font-bold uppercase">
            Michałek<span className="text-white">.</span>
          </h1>
        </Link>
        <div className="header-mobilenav flex lg:hidden">
          {showMenu && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {
                  opacity: 0,
                },
                visible: {
                  opacity: 1,
                  transition: {
                    delay: 0.2,
                  },
                },
              }}
            >
              <div className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-blue">
                <ul className="sm:text-2xl md:text-3xl">
                  <li className="text-white py-3 cursor-pointer">
                    <Link
                      smooth={true}
                      duration={1000}
                      offset={-100}
                      onClick={() => {
                        setShowMenu((prev) => !prev);
                      }}
                      to="hero_section"
                      className="uppercase tracking-wider  font-semibold pb-2 hover:border-green hover:border-b-2 delay-100"
                    >
                      <span className="text-green pr-1">01.</span>Home
                    </Link>
                  </li>
                  <li className="text-white py-3 cursor-pointer">
                    <Link
                      smooth={true}
                      duration={1000}
                      offset={-100}
                      onClick={() => {
                        setShowMenu((prev) => !prev);
                      }}
                      to="about_section"
                      className="uppercase tracking-wider font-semibold pb-2 hover:border-green hover:border-b-2 delay-100"
                    >
                      <span className="text-green pr-1">02.</span>About
                    </Link>
                  </li>
                  <li className="text-white py-3 cursor-pointer">
                    <Link
                      smooth={true}
                      duration={1000}
                      offset={-100}
                      onClick={() => {
                        setShowMenu((prev) => !prev);
                      }}
                      to="experience_section"
                      className="uppercase tracking-wider font-semibold pb-2 hover:border-green hover:border-b-2 delay-100"
                    >
                      <span className="text-green pr-1">03.</span>Experience
                    </Link>
                  </li>
                  <li className="text-white py-3 cursor-pointer">
                    <Link
                      smooth={true}
                      duration={1000}
                      offset={-100}
                      onClick={() => {
                        setShowMenu((prev) => !prev);
                      }}
                      to="projects_section"
                      className="uppercase tracking-wider font-semibold pb-2 hover:border-green hover:border-b-2 delay-100"
                    >
                      <span className="text-green pr-1">04.</span>
                      Projects
                    </Link>
                  </li>
                  <li className="text-white py-3 cursor-pointer">
                    <Link
                      smooth={true}
                      duration={1000}
                      offset={-100}
                      onClick={() => {
                        setShowMenu((prev) => !prev);
                      }}
                      to="contact_section"
                      className="uppercase tracking-wider font-semibold pb-2 hover:border-green hover:border-b-2 delay-100"
                    >
                      <span className="text-green pr-1">05.</span>Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </motion.div>
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
              className="hover:fill-green delay-100"
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
            <li className="text-white pr-6 cursor-pointer">
              <Link
                smooth={true}
                duration={500}
                offset={-100}
                to="hero_section"
                className="uppercase tracking-wider  font-semibold pb-2 hover:border-green hover:border-b-2 delay-100"
              >
                <span className="text-green pr-1">01.</span>Home
              </Link>
            </li>
            <li className="text-white pr-6 cursor-pointer">
              <Link
                smooth={true}
                duration={500}
                offset={-100}
                to="about_section"
                className="uppercase tracking-wider font-semibold pb-2 hover:border-green hover:border-b-2 delay-100"
              >
                <span className="text-green pr-1">02.</span>About
              </Link>
            </li>
            <li className="text-white pr-6 cursor-pointer">
              <Link
                smooth={true}
                duration={500}
                offset={-100}
                to="experience_section"
                className="uppercase tracking-wider font-semibold pb-2 hover:border-green hover:border-b-2 delay-100"
              >
                <span className="text-green pr-1">03.</span>Experience
              </Link>
            </li>
            <li className="text-white pr-6 cursor-pointer">
              <Link
                smooth={true}
                duration={500}
                offset={-100}
                to="projects_section"
                className="uppercase tracking-wider font-semibold pb-2 hover:border-green hover:border-b-2 delay-100"
              >
                <span className="text-green pr-1">04.</span>
                Projects
              </Link>
            </li>
            <li className="text-white cursor-pointer">
              <Link
                smooth={true}
                duration={500}
                offset={-100}
                to="contact_section"
                className="uppercase tracking-wider font-semibold pb-2 hover:border-green hover:border-b-2 delay-100"
              >
                <span className="text-green pr-1">05.</span>Contact
              </Link>
            </li>
          </ul>
        </nav>
        <Button>Hire me</Button>
      </div>
    </header>
  );
};

export default Header;
