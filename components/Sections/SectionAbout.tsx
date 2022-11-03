import { FC } from "react";
import Button from "../Button/Button";
import Heading from "../Heading/Heading";

const SectionAbout: FC = () => {
  return (
    <section className="container mx-auto flex flex-col items-center justify-center px-5 py-16 z-20">
      <Heading title="about me" />
      <div className="grid grid-cols-2 items-center gap-7">
        <div className="col-span-2 lg:col-span-1">
          <div className="about-image relative overflow-hidden">
            <div className="border-10 border-green border-opacity-20 rounded-lg">
              <span className="absolute -top-0 left-0 z-10 h-2 w-10 animate-ledgerLeftRight rounded-full bg-green"></span>
              <span className="absolute top-auto left-auto bottom-0 z-10 h-2 w-10 animate-ledgerRightLeft rounded-full bg-green"></span>
              <span className="absolute rotate-90 top-auto bottom-0 -left-4 z-10 h-2 w-10 animate-ledgerBottomTop rounded-full bg-green"></span>
              <span className="absolute rotate-90 top-auto bottom-0 -right-4 z-10 h-2 w-10 animate-ledgerTopBottom rounded-full bg-green"></span>
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
    </section>
  );
};

export default SectionAbout;
