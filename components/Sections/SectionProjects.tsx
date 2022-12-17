import { FC } from "react";
import Image from "next/image";
import Heading from "../Heading/Heading";
import { RiShareBoxFill, RiGithubFill } from "react-icons/ri";

const SectionProjects: FC = () => {
  return (
    <section
      id="projects_section"
      className="container mx-auto flex flex-col items-center justify-center px-5 py-16"
    >
      <Heading title="projects" />
      <div className="grid grid-cols-4 gap-7 mb-8">
        <div className="col-span-4 lg:col-span-2">
          <div className="border border-1 border-gray border-opacity-10 rounded-lg p-4 md:p-5 bg-light_blue">
            <Image
              width={450}
              height={315}
              className="mb-2"
              src="/images/portfolio-image-1.jpg"
              alt="coconut oil"
            />
            <div className="flex items-center justify-between pt-4">
              <div>
                <h5 className="font-bold text-white text-xl">Lorem Ipsum</h5>
                <p className="text-gray text-lg">Lorem ipsum</p>
              </div>
              <div className="flex">
                <a href="#">
                  <RiShareBoxFill className="text-6xl p-2 fill-gray hover:fill-green delay-100" />
                </a>
                <a href="#">
                  <RiGithubFill className="text-6xl p-2 fill-gray hover:fill-green delay-100" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-4 lg:col-span-2">
          <div className="border border-1 border-gray border-opacity-10 rounded-lg p-4 md:p-5 bg-light_blue">
            <Image
              width={450}
              height={315}
              className="mb-2"
              src="/images/portfolio-image-1.jpg"
              alt="coconut oil"
            />
            <div className="flex items-center justify-between pt-4">
              <div>
                <h5 className="font-bold text-white text-xl">Lorem Ipsum</h5>
                <p className="text-gray text-lg">Lorem ipsum</p>
              </div>
              <div className="flex">
                <a href="#">
                  <RiShareBoxFill className="text-6xl p-2 fill-gray hover:fill-green delay-100" />
                </a>
                <a href="#">
                  <RiGithubFill className="text-6xl p-2 fill-gray hover:fill-green delay-100" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-7">
        <div className="col-span-4 lg:col-span-2">
          <div className="border border-1 border-gray border-opacity-10 rounded-lg p-4 md:p-5 bg-light_blue">
            <Image
              width={450}
              height={315}
              className="mb-2"
              src="/images/portfolio-image-1.jpg"
              alt="coconut oil"
            />
            <div className="flex items-center justify-between pt-4">
              <div>
                <h5 className="font-bold text-white text-xl">Lorem Ipsum</h5>
                <p className="text-gray text-lg">Lorem ipsum</p>
              </div>
              <div className="flex">
                <a href="#">
                  <RiShareBoxFill className="text-6xl p-2 fill-gray hover:fill-green delay-100" />
                </a>
                <a href="#">
                  <RiGithubFill className="text-6xl p-2 fill-gray hover:fill-green delay-100" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-4 lg:col-span-2">
          <div className="border border-1 border-gray border-opacity-10 rounded-lg p-4 md:p-5 bg-light_blue">
            <Image
              width={450}
              height={315}
              className="mb-2"
              src="/images/portfolio-image-1.jpg"
              alt="coconut oil"
            />
            <div className="flex items-center justify-between pt-4">
              <div>
                <h5 className="font-bold text-white text-xl">Lorem Ipsum</h5>
                <p className="text-gray text-lg">Lorem ipsum</p>
              </div>
              <div className="flex">
                <a href="#">
                  <RiShareBoxFill className="text-6xl p-2 fill-gray hover:fill-green delay-100" />
                </a>
                <a href="#">
                  <RiGithubFill className="text-6xl p-2 fill-gray hover:fill-green delay-100" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionProjects;
