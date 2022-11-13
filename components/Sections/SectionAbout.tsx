import { FC } from "react";
import Button from "../Button/Button";
import Heading from "../Heading/Heading";

const SectionAbout: FC = () => {
  return (
    <section
      id="about_section"
      className="container mx-auto flex flex-col items-center justify-center px-5 py-16"
    >
      <Heading title="about me" />
      <div className="grid grid-cols-2 items-center gap-7 mb-16">
        <div className="col-span-2 lg:col-span-1">
          <div className="about-image relative overflow-hidden">
            <div className="border-10 border-green border-opacity-20 rounded-lg">
              <span className="absolute -top-0 left-0 z-10 h-2 w-10 animate-ledgerLeftRight rounded-full bg-gradient-to-r from-transparent to-green"></span>
              <span className="absolute top-auto left-auto bottom-0 z-10 h-2 w-10 animate-ledgerRightLeft rounded-full  bg-gradient-to-l from-transparent to-green"></span>
              <span className="absolute rotate-90 top-auto bottom-0 -left-4 z-10 h-2 w-10 animate-ledgerBottomTop rounded-full  bg-gradient-to-l from-transparent to-green"></span>
              <span className="absolute rotate-90 top-auto bottom-0 -right-4 z-10 h-2 w-10 animate-ledgerTopBottom rounded-full  bg-gradient-to-r from-transparent to-green"></span>
              <img src="/images/about-image.jpg" alt="" />
            </div>
          </div>
        </div>
        <div className="col-span-2 lg:col-span-1">
          <div className="about-content">
            <h3 className="font-semibold text-3xl mb-6">
              Hi, I am <span className="text-green">Artur Michałek</span>
            </h3>
            <ul className="styledList mb-6">
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
                : 26 years
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
            <Button>download resume</Button>
          </div>
        </div>
      </div>
      <Heading title="my skills" />
      <div className="grid grid-cols-4 md:grid-cols-6 items-center gap-7 mb-4">
        <div className="col-span-2 lg:col-span-1 w-36 h-36">
          <div className="flex justify-center items-center flex-col border border-1 border-gray border-opacity-10 text-center rounded-lg p-2 md:p-3 bg-light_blue">
            <img
              className="w-12 h-12 mb-4"
              src="images/icons/icon-html.svg"
              alt="html-icon"
            />
            <h5 className="font-bold">HTML</h5>
          </div>
        </div>
        <div className="col-span-2 lg:col-span-1 w-36 h-36">
          <div className="flex justify-center items-center flex-col border border-1 border-gray border-opacity-10 text-center rounded-lg p-2 md:p-3 bg-light_blue">
            <img
              className="w-12 h-12 mb-4"
              src="images/icons/icon-css.svg"
              alt="css-icon"
            />
            <h5 className="font-bold">CSS</h5>
          </div>
        </div>
        <div className="col-span-2 lg:col-span-1 w-36 h-36">
          <div className="flex justify-center items-center flex-col border border-1 border-gray border-opacity-10 text-center rounded-lg p-2 md:p-3 bg-light_blue">
            <img
              className="w-12 h-12 mb-4"
              src="images/icons/icon-sass.svg"
              alt="sass-icon"
            />
            <h5 className="font-bold">SASS</h5>
          </div>
        </div>
        <div className="col-span-2 lg:col-span-1 w-36 h-36">
          <div className="flex justify-center items-center flex-col border border-1 border-gray border-opacity-10 text-center rounded-lg p-2 md:p-3 bg-light_blue">
            <img
              className="w-12 h-12 mb-4"
              src="images/icons/icon-tailwind.svg"
              alt="tailwind-icon"
            />
            <h5 className="font-bold">TAILWIND</h5>
          </div>
        </div>
        <div className="col-span-2 lg:col-span-1 w-36 h-36">
          <div className="flex justify-center items-center flex-col border border-1 border-gray border-opacity-10 text-center rounded-lg p-2 md:p-3 bg-light_blue">
            <img
              className="w-12 h-12 mb-4"
              src="images/icons/icon-bootstrap.svg"
              alt="bootstrap-icon"
            />
            <h5 className="font-bold">BOOTSTRAP</h5>
          </div>
        </div>
        <div className="col-span-2 lg:col-span-1 w-36 h-36">
          <div className="flex justify-center items-center flex-col border border-1 border-gray border-opacity-10 text-center rounded-lg p-2 md:p-3 bg-light_blue">
            <img
              className="w-12 h-12 mb-4"
              src="images/icons/icon-styled.png"
              alt="styled-icon"
            />
            <h5 className="font-bold">STYLED</h5>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 md:grid-cols-6 items-center gap-7 mb-4">
        <div className="col-span-2 lg:col-span-1 w-36 h-36">
          <div className="flex justify-center items-center flex-col border border-1 border-gray border-opacity-10 text-center rounded-lg p-2 md:p-3 bg-light_blue">
            <img
              className="w-12 h-12 mb-4"
              src="images/icons/icon-js.svg"
              alt="javascript-icon"
            />
            <h5 className="font-bold">JAVASCRIPT</h5>
          </div>
        </div>
        <div className="col-span-2 lg:col-span-1 w-36 h-36">
          <div className="flex justify-center items-center flex-col border border-1 border-gray border-opacity-10 text-center rounded-lg p-2 md:p-3 bg-light_blue">
            <img
              className="w-12 h-12 mb-4"
              src="images/icons/icon-ts.svg"
              alt="ts-icon"
            />
            <h5 className="font-bold">TYPESCRIPT</h5>
          </div>
        </div>
        <div className="col-span-2 lg:col-span-1 w-36 h-36">
          <div className="flex justify-center items-center flex-col border border-1 border-gray border-opacity-10 text-center rounded-lg p-2 md:p-3 bg-light_blue">
            <img
              className="w-12 h-12 mb-4"
              src="images/icons/icon-react.svg"
              alt="react-icon"
            />
            <h5 className="font-bold">REACT</h5>
          </div>
        </div>
        <div className="col-span-2 lg:col-span-1 w-36 h-36">
          <div className="flex justify-center items-center flex-col border border-1 border-gray border-opacity-10 text-center rounded-lg p-2 md:p-3 bg-light_blue">
            <img
              className="w-12 h-12 mb-4"
              src="images/icons/icon-redux.svg"
              alt="redux-icon"
            />
            <h5 className="font-bold">REDUX</h5>
          </div>
        </div>
        <div className="col-span-2 lg:col-span-1 w-36 h-36">
          <div className="flex justify-center items-center flex-col border border-1 border-gray border-opacity-10 text-center rounded-lg p-2 md:p-3 bg-light_blue">
            <img
              className="w-12 h-12 mb-4"
              src="images/icons/icon-next.svg"
              alt="next-icon"
            />
            <h5 className="font-bold">NEXT</h5>
          </div>
        </div>
        <div className="col-span-2 lg:col-span-1 w-36 h-36">
          <div className="flex justify-center items-center flex-col border border-1 border-gray border-opacity-10 text-center rounded-lg p-2 md:p-3 bg-light_blue">
            <img
              className="w-12 h-12 mb-4"
              src="images/icons/icon-vsc.svg"
              alt="vsc-icon"
            />
            <h5 className="font-bold">VSC</h5>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 md:grid-cols-6 items-center gap-7 mb-4">
        <div className="col-span-2 lg:col-span-1 w-36 h-36">
          <div className="flex justify-center items-center flex-col border border-1 border-gray border-opacity-10 text-center rounded-lg p-2 md:p-3 bg-light_blue">
            <img
              className="w-12 h-12 mb-4"
              src="images/icons/icon-vite.svg"
              alt="vite-icon"
            />
            <h5 className="font-bold">VITE</h5>
          </div>
        </div>
        <div className="col-span-2 lg:col-span-1 w-36 h-36">
          <div className="flex justify-center items-center flex-col border border-1 border-gray border-opacity-10 text-center rounded-lg p-2 md:p-3 bg-light_blue">
            <img
              className="w-12 h-12 mb-4"
              src="images/icons/icon-web.svg"
              alt="webpack-icon"
            />
            <h5 className="font-bold">WEBPACK</h5>
          </div>
        </div>
        <div className="col-span-2 lg:col-span-1 w-36 h-36">
          <div className="flex justify-center items-center flex-col border border-1 border-gray border-opacity-10 text-center rounded-lg p-2 md:p-3 bg-light_blue">
            <img
              className="w-12 h-12 mb-4"
              src="images/icons/icon-prettier.svg"
              alt="prettier-icon"
            />
            <h5 className="font-bold">PRETTIER</h5>
          </div>
        </div>
        <div className="col-span-2 lg:col-span-1 w-36 h-36">
          <div className="flex justify-center items-center flex-col border border-1 border-gray border-opacity-10 text-center rounded-lg p-2 md:p-3 bg-light_blue">
            <img
              className="w-12 h-12 mb-4"
              src="images/icons/icon-in.svg"
              alt="invision-icon"
            />
            <h5 className="font-bold">INVISION</h5>
          </div>
        </div>
        <div className="col-span-2 lg:col-span-1 w-36 h-36">
          <div className="flex justify-center items-center flex-col border border-1 border-gray border-opacity-10 text-center rounded-lg p-2 md:p-3 bg-light_blue">
            <img
              className="w-12 h-12 mb-4"
              src="images/icons/icon-figma.svg"
              alt="figma-icon"
            />
            <h5 className="font-bold">FIGMA</h5>
          </div>
        </div>
        <div className="col-span-2 lg:col-span-1 w-36 h-36">
          <div className="flex justify-center items-center flex-col border border-1 border-gray border-opacity-10 text-center rounded-lg p-2 md:p-3 bg-light_blue">
            <img
              className="w-12 h-12 mb-4"
              src="images/icons/icon-xd.svg"
              alt="xd-icon"
            />
            <h5 className="font-bold">XD</h5>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 md:grid-cols-6 items-center gap-7">
        <div className="col-span-2 lg:col-span-1 w-36 h-36">
          <div className="flex justify-center items-center flex-col border border-1 border-gray border-opacity-10 text-center rounded-lg p-2 md:p-3 bg-light_blue">
            <img
              className="w-12 h-12 mb-4"
              src="images/icons/icon-wp.svg"
              alt="wordpress-icon"
            />
            <h5 className="font-bold">WORDPRESS</h5>
          </div>
        </div>
        <div className="col-span-2 lg:col-span-1 w-36 h-36">
          <div className="flex justify-center items-center flex-col border border-1 border-gray border-opacity-10 text-center rounded-lg p-2 md:p-3 bg-light_blue">
            <img
              className="w-12 h-12 mb-4"
              src="images/icons/icon-docker.svg"
              alt="docker-icon"
            />
            <h5 className="font-bold">DOCKER</h5>
          </div>
        </div>
        <div className="col-span-2 lg:col-span-1 w-36 h-36">
          <div className="flex justify-center items-center flex-col border border-1 border-gray border-opacity-10 text-center rounded-lg p-2 md:p-3 bg-light_blue">
            <img
              className="w-12 h-12 mb-4"
              src="images/icons/icon-git.svg"
              alt="git-icon"
            />
            <h5 className="font-bold">GIT</h5>
          </div>
        </div>
        <div className="col-span-2 lg:col-span-1 w-36 h-36">
          <div className="flex justify-center items-center flex-col border border-1 border-gray border-opacity-10 text-center rounded-lg p-2 md:p-3 bg-light_blue">
            <img
              className="w-12 h-12 mb-4"
              src="images/icons/icon-npm.svg"
              alt="npm-icon"
            />
            <h5 className="font-bold">NPM</h5>
          </div>
        </div>
        <div className="col-span-2 lg:col-span-1 w-36 h-36">
          <div className="flex justify-center items-center flex-col border border-1 border-gray border-opacity-10 text-center rounded-lg p-2 md:p-3 bg-light_blue">
            <img
              className="w-12 h-12 mb-4"
              src="images/icons/icon-ae.svg"
              alt="ae-icon"
            />
            <h5 className="font-bold">AE</h5>
          </div>
        </div>
        <div className="col-span-2 lg:col-span-1 w-36 h-36">
          <div className="flex justify-center items-center flex-col border border-1 border-gray border-opacity-10 text-center rounded-lg p-2 md:p-3 bg-light_blue">
            <img
              className="w-12 h-12 mb-4"
              src="images/icons/icon-ps.svg"
              alt="ps-icon"
            />
            <h5 className="font-bold">PHOTOSHOP</h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionAbout;
