import { FC } from "react";
import ScrollButton from "../Button/ScrollButton";
import Button from "../Button/Button";
import Heading from "../Heading/Heading";
import Image from "next/image";
import { motion } from "framer-motion";

const SectionAbout: FC = () => {
  return (
    <section
      id="about_section"
      className="container relative flex flex-col items-center justify-center px-5 py-16 mx-auto"
    >
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ type: "easeIn", duration: 0.25, delay: 0.5 }}
      >
        <Heading title="about me" />
      </motion.div>
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ type: "easeIn", duration: 0.25, delay: 0.75 }}
      >
        <div className="grid items-center grid-cols-2 mb-32 gap-7">
          <div className="col-span-2">
            <div className="flex flex-col items-center justify-center about-content">
              <h3 className="mb-6 text-3xl font-semibold">
                Hi, I am <span className="text-green">Artur Michałek</span>
              </h3>
              <ul className="mb-6 styledList">
                <li className="text-lg text-gray">
                  <strong className="inline-block min-w-[120px] font-medium text-gray">
                    First Name
                  </strong>{" "}
                  : Artur
                </li>
                <li className="text-lg text-gray">
                  <strong className="inline-block min-w-[120px] font-medium text-gray">
                    Last Name
                  </strong>{" "}
                  : Michałek
                </li>
                <li className="text-lg text-gray">
                  <strong className="inline-block min-w-[120px] font-medium text-gray">
                    Age
                  </strong>{" "}
                  : 27 years
                </li>
                <li className="text-lg text-gray">
                  <strong className="inline-block min-w-[120px] font-medium text-gray">
                    Nationality
                  </strong>{" "}
                  : Poland
                </li>
                <li className="text-lg text-gray">
                  <strong className="inline-block min-w-[120px] font-medium text-gray">
                    Languages
                  </strong>{" "}
                  : Polish, English
                </li>
                <li className="text-lg text-gray">
                  <strong className="inline-block min-w-[120px] font-medium text-gray">
                    Address
                  </strong>{" "}
                  : Ruda Śląska
                </li>
              </ul>
              <a href="/download/Artur Michałek - Resume.pdf" download>
                <Button>download resume</Button>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
      <ScrollButton />
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ type: "easeIn", duration: 0.25, delay: 1 }}
      >
        <Heading title="my skills" />
      </motion.div>
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ type: "easeIn", duration: 0.25, delay: 1.25 }}
      >
        <div className="grid items-center grid-cols-4 mb-4 md:grid-cols-6 gap-7">
          <div className="col-span-2 lg:col-span-1 w-36 h-36">
            <div className="flex flex-col items-center justify-center p-2 text-center border rounded-lg border-1 border-gray border-opacity-10 md:p-3 bg-light_blue">
              <Image
                width={0}
                height={0}
                sizes={"100vw"}
                className="w-12 h-12 mb-4"
                src="/images/icons/icon-html.svg"
                alt="html-icon"
              />
              <h5 className="font-bold">HTML</h5>
            </div>
          </div>
          <div className="col-span-2 lg:col-span-1 w-36 h-36">
            <div className="flex flex-col items-center justify-center p-2 text-center border rounded-lg border-1 border-gray border-opacity-10 md:p-3 bg-light_blue">
              <Image
                width={0}
                height={0}
                sizes={"100vw"}
                className="w-12 h-12 mb-4"
                src="/images/icons/icon-css.svg"
                alt="css-icon"
              />
              <h5 className="font-bold">CSS</h5>
            </div>
          </div>
          <div className="col-span-2 lg:col-span-1 w-36 h-36">
            <div className="flex flex-col items-center justify-center p-2 text-center border rounded-lg border-1 border-gray border-opacity-10 md:p-3 bg-light_blue">
              <Image
                width={0}
                height={0}
                sizes={"100vw"}
                className="w-12 h-12 mb-4"
                src="/images/icons/icon-sass.svg"
                alt="sass-icon"
              />
              <h5 className="font-bold">SASS</h5>
            </div>
          </div>
          <div className="col-span-2 lg:col-span-1 w-36 h-36">
            <div className="flex flex-col items-center justify-center p-2 text-center border rounded-lg border-1 border-gray border-opacity-10 md:p-3 bg-light_blue">
              <Image
                width={0}
                height={0}
                sizes={"100vw"}
                className="w-12 h-12 mb-4"
                src="/images/icons/icon-tailwind.svg"
                alt="tailwind-icon"
              />
              <h5 className="font-bold">TAILWIND</h5>
            </div>
          </div>
          <div className="col-span-2 lg:col-span-1 w-36 h-36">
            <div className="flex flex-col items-center justify-center p-2 text-center border rounded-lg border-1 border-gray border-opacity-10 md:p-3 bg-light_blue">
              <Image
                width={0}
                height={0}
                sizes={"100vw"}
                className="w-12 h-12 mb-4"
                src="/images/icons/icon-bootstrap.svg"
                alt="bootstrap-icon"
              />
              <h5 className="font-bold">BOOTSTRAP</h5>
            </div>
          </div>
          <div className="col-span-2 lg:col-span-1 w-36 h-36">
            <div className="flex flex-col items-center justify-center p-2 text-center border rounded-lg border-1 border-gray border-opacity-10 md:p-3 bg-light_blue">
              <Image
                width={0}
                height={0}
                sizes={"100vw"}
                className="w-12 h-12 mb-4"
                src="/images/icons/icon-styled.png"
                alt="styled-icon"
              />
              <h5 className="font-bold">STYLED</h5>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ type: "easeIn", duration: 0.25, delay: 1.5 }}
      >
        <div className="grid items-center grid-cols-4 mb-4 md:grid-cols-6 gap-7">
          <div className="col-span-2 lg:col-span-1 w-36 h-36">
            <div className="flex flex-col items-center justify-center p-2 text-center border rounded-lg border-1 border-gray border-opacity-10 md:p-3 bg-light_blue">
              <Image
                className="w-12 h-12 mb-4"
                width={0}
                height={0}
                sizes={"100vw"}
                src="/images/icons/icon-js.svg"
                alt="javascript-icon"
              />
              <h5 className="font-bold">JAVASCRIPT</h5>
            </div>
          </div>
          <div className="col-span-2 lg:col-span-1 w-36 h-36">
            <div className="flex flex-col items-center justify-center p-2 text-center border rounded-lg border-1 border-gray border-opacity-10 md:p-3 bg-light_blue">
              <Image
                className="w-12 h-12 mb-4"
                width={0}
                height={0}
                sizes={"100vw"}
                src="/images/icons/icon-ts.svg"
                alt="ts-icon"
              />
              <h5 className="font-bold">TYPESCRIPT</h5>
            </div>
          </div>
          <div className="col-span-2 lg:col-span-1 w-36 h-36">
            <div className="flex flex-col items-center justify-center p-2 text-center border rounded-lg border-1 border-gray border-opacity-10 md:p-3 bg-light_blue">
              <Image
                className="w-12 h-12 mb-4"
                width={0}
                height={0}
                sizes={"100vw"}
                src="/images/icons/icon-react.svg"
                alt="react-icon"
              />
              <h5 className="font-bold">REACT</h5>
            </div>
          </div>
          <div className="col-span-2 lg:col-span-1 w-36 h-36">
            <div className="flex flex-col items-center justify-center p-2 text-center border rounded-lg border-1 border-gray border-opacity-10 md:p-3 bg-light_blue">
              <Image
                className="w-12 h-12 mb-4"
                width={0}
                height={0}
                sizes={"100vw"}
                src="/images/icons/icon-redux.svg"
                alt="redux-icon"
              />
              <h5 className="font-bold">REDUX</h5>
            </div>
          </div>
          <div className="col-span-2 lg:col-span-1 w-36 h-36">
            <div className="flex flex-col items-center justify-center p-2 text-center border rounded-lg border-1 border-gray border-opacity-10 md:p-3 bg-light_blue">
              <Image
                className="w-12 h-12 mb-4"
                width={0}
                height={0}
                sizes={"100vw"}
                src="/images/icons/icon-next.svg"
                alt="next-icon"
              />
              <h5 className="font-bold">NEXT</h5>
            </div>
          </div>
          <div className="col-span-2 lg:col-span-1 w-36 h-36">
            <div className="flex flex-col items-center justify-center p-2 text-center border rounded-lg border-1 border-gray border-opacity-10 md:p-3 bg-light_blue">
              <Image
                className="w-12 h-12 mb-4"
                width={0}
                height={0}
                sizes={"100vw"}
                src="/images/icons/icon-vsc.svg"
                alt="vsc-icon"
              />
              <h5 className="font-bold">VSC</h5>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ type: "easeIn", duration: 0.25, delay: 1.75 }}
      >
        <div className="grid items-center grid-cols-4 mb-4 md:grid-cols-6 gap-7">
          <div className="col-span-2 lg:col-span-1 w-36 h-36">
            <div className="flex flex-col items-center justify-center p-2 text-center border rounded-lg border-1 border-gray border-opacity-10 md:p-3 bg-light_blue">
              <Image
                className="w-12 h-12 mb-4"
                width={0}
                height={0}
                sizes={"100vw"}
                src="/images/icons/icon-vite.svg"
                alt="vite-icon"
              />
              <h5 className="font-bold">VITE</h5>
            </div>
          </div>
          <div className="col-span-2 lg:col-span-1 w-36 h-36">
            <div className="flex flex-col items-center justify-center p-2 text-center border rounded-lg border-1 border-gray border-opacity-10 md:p-3 bg-light_blue">
              <Image
                className="w-12 h-12 mb-4"
                width={0}
                height={0}
                sizes={"100vw"}
                src="/images/icons/icon-web.svg"
                alt="webpack-icon"
              />
              <h5 className="font-bold">WEBPACK</h5>
            </div>
          </div>
          <div className="col-span-2 lg:col-span-1 w-36 h-36">
            <div className="flex flex-col items-center justify-center p-2 text-center border rounded-lg border-1 border-gray border-opacity-10 md:p-3 bg-light_blue">
              <Image
                className="w-12 h-12 mb-4"
                width={0}
                height={0}
                sizes={"100vw"}
                src="/images/icons/icon-prettier.svg"
                alt="prettier-icon"
              />
              <h5 className="font-bold">PRETTIER</h5>
            </div>
          </div>
          <div className="col-span-2 lg:col-span-1 w-36 h-36">
            <div className="flex flex-col items-center justify-center p-2 text-center border rounded-lg border-1 border-gray border-opacity-10 md:p-3 bg-light_blue">
              <Image
                className="w-12 h-12 mb-4"
                width={0}
                height={0}
                sizes={"100vw"}
                src="/images/icons/icon-in.svg"
                alt="invision-icon"
              />
              <h5 className="font-bold">INVISION</h5>
            </div>
          </div>
          <div className="col-span-2 lg:col-span-1 w-36 h-36">
            <div className="flex flex-col items-center justify-center p-2 text-center border rounded-lg border-1 border-gray border-opacity-10 md:p-3 bg-light_blue">
              <Image
                className="w-12 h-12 mb-4"
                width={0}
                height={0}
                sizes={"100vw"}
                src="/images/icons/icon-figma.svg"
                alt="figma-icon"
              />
              <h5 className="font-bold">FIGMA</h5>
            </div>
          </div>
          <div className="col-span-2 lg:col-span-1 w-36 h-36">
            <div className="flex flex-col items-center justify-center p-2 text-center border rounded-lg border-1 border-gray border-opacity-10 md:p-3 bg-light_blue">
              <Image
                className="w-12 h-12 mb-4"
                width={0}
                height={0}
                sizes={"100vw"}
                src="/images/icons/icon-xd.svg"
                alt="xd-icon"
              />
              <h5 className="font-bold">XD</h5>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ type: "easeIn", duration: 0.25, delay: 2 }}
      >
        <div className="grid items-center grid-cols-4 md:grid-cols-6 gap-7">
          <div className="col-span-2 lg:col-span-1 w-36 h-36">
            <div className="flex flex-col items-center justify-center p-2 text-center border rounded-lg border-1 border-gray border-opacity-10 md:p-3 bg-light_blue">
              <Image
                className="w-12 h-12 mb-4"
                width={0}
                height={0}
                sizes={"100vw"}
                src="/images/icons/icon-wp.svg"
                alt="wordpress-icon"
              />
              <h5 className="font-bold">WORDPRESS</h5>
            </div>
          </div>
          <div className="col-span-2 lg:col-span-1 w-36 h-36">
            <div className="flex flex-col items-center justify-center p-2 text-center border rounded-lg border-1 border-gray border-opacity-10 md:p-3 bg-light_blue">
              <Image
                className="w-12 h-12 mb-4"
                width={0}
                height={0}
                sizes={"100vw"}
                src="/images/icons/icon-docker.svg"
                alt="docker-icon"
              />
              <h5 className="font-bold">DOCKER</h5>
            </div>
          </div>
          <div className="col-span-2 lg:col-span-1 w-36 h-36">
            <div className="flex flex-col items-center justify-center p-2 text-center border rounded-lg border-1 border-gray border-opacity-10 md:p-3 bg-light_blue">
              <Image
                className="w-12 h-12 mb-4"
                width={0}
                height={0}
                sizes={"100vw"}
                src="/images/icons/icon-git.svg"
                alt="git-icon"
              />
              <h5 className="font-bold">GIT</h5>
            </div>
          </div>
          <div className="col-span-2 lg:col-span-1 w-36 h-36">
            <div className="flex flex-col items-center justify-center p-2 text-center border rounded-lg border-1 border-gray border-opacity-10 md:p-3 bg-light_blue">
              <Image
                className="w-12 h-12 mb-4"
                width={0}
                height={0}
                sizes={"100vw"}
                src="/images/icons/icon-npm.svg"
                alt="npm-icon"
              />
              <h5 className="font-bold">NPM</h5>
            </div>
          </div>
          <div className="col-span-2 lg:col-span-1 w-36 h-36">
            <div className="flex flex-col items-center justify-center p-2 text-center border rounded-lg border-1 border-gray border-opacity-10 md:p-3 bg-light_blue">
              <Image
                className="w-12 h-12 mb-4"
                width={0}
                height={0}
                sizes={"100vw"}
                src="/images/icons/icon-ae.svg"
                alt="ae-icon"
              />
              <h5 className="font-bold">AE</h5>
            </div>
          </div>
          <div className="col-span-2 lg:col-span-1 w-36 h-36">
            <div className="flex flex-col items-center justify-center p-2 text-center border rounded-lg border-1 border-gray border-opacity-10 md:p-3 bg-light_blue">
              <Image
                className="w-12 h-12 mb-4"
                width={0}
                height={0}
                sizes={"100vw"}
                src="/images/icons/icon-ps.svg"
                alt="ps-icon"
              />
              <h5 className="font-bold">PHOTOSHOP</h5>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default SectionAbout;
