import { FC } from "react";
import Socials from "../Socials/Socials";
import { RiArrowDownLine } from "react-icons/ri";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import Image from "next/image";

const SectionHero: FC = () => {
  return (
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
            delay: 0.5,
          },
        },
      }}
    >
      <section
        id="hero_section"
        className="container relative flex flex-col items-center justify-center h-screen p-5 mx-auto"
      >
        <div className="flex flex-col items-center justify-center w-full min-h-full md:w-2/4">
          <div className="mb-8">
            <Image
              src="/images/avatar.jpg"
              className="border-4 rounded-full border-green"
              alt="Artur Michałek"
              width={128}
              height={128}
            />
          </div>
          <h1 className="mb-5 text-5xl font-bold text-center text-white">
            Hi, I am <span className="text-green">Artur Michałek</span>
          </h1>
          <p className="mb-5 text-lg text-center text-gray lg:mb-8">
            I am a frontend web developer. I can provide clean code and pixel
            perfect design. I also make website more & more interactive with web
            animations.
          </p>
          <Socials />
        </div>
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
                delay: 1.5,
              },
            },
          }}
        >
          <Link smooth={true} duration={1000} offset={-100} to="about_section">
            <div className="absolute left-0 top-auto flex items-center justify-center w-full text-center uppercase bottom-10 text-gray text-md">
              <RiArrowDownLine className="mr-4 cursor-pointer fill-green animate-bounce" />
              <span className="cursor-pointer">Scroll down</span>
            </div>
          </Link>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default SectionHero;
