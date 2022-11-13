import { FC } from "react";
import Socials from "../Socials/Socials";
import { RiArrowDownLine } from "react-icons/ri";
import { Link } from "react-scroll";

const SectionHero: FC = () => {
  return (
    <section
      id="hero_section"
      className="container mx-auto flex flex-col items-center justify-center h-screen p-5"
    >
      <div className="w-full min-h-full flex flex-col items-center justify-center md:w-2/4">
        <div className="border-4 rounded-full border-green w-32 h-32 mb-8"></div>
        <h1 className="text-white text-5xl font-bold mb-5 text-center">
          Hi, I am <span className="text-green">Artur Michałek</span>
        </h1>
        <p className="text-gray text-center text-lg mb-5 lg:mb-8">
          I am a frontend web developer. I can provide clean code and pixel
          perfect design. I also make website more & more interactive with web
          animations.
        </p>
        <Socials />
      </div>
      <Link smooth={true} duration={1000} offset={-100} to="about_section">
        <div className="absolute flex left-0 top-auto bottom-10 w-full text-center justify-center items-center text-gray text-md uppercase">
          <RiArrowDownLine className="cursor-pointer fill-green mr-4 animate-bounce" />
          <span className="cursor-pointer">Scroll down</span>
        </div>
      </Link>
    </section>
  );
};

export default SectionHero;
