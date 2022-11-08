import { FC } from "react";
import Heading from "../Heading/Heading";

const SectionProjects: FC = () => {
  return (
    <section className="container mx-auto flex flex-col items-center justify-center px-5 py-16">
      <Heading title="projects" />
      <div className="grid grid-cols-6 gap-7 mb-8">
        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
          <div className="border border-1 border-gray border-opacity-10 rounded-lg p-4 md:p-5 bg-light_blue">
            <img
              className="mb-2"
              src="/images/portfolio-image-1.jpg"
              alt="coconut oil"
            />
            <h5 className="font-bold text-white text-xl">Lorem Ipsum</h5>
            <p className="text-gray text-lg">Lorem ipsum</p>
          </div>
        </div>
        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
          <div className="border border-1 border-gray border-opacity-10 rounded-lg p-4 md:p-5 bg-light_blue">
            <img
              className="mb-2"
              src="/images/portfolio-image-1.jpg"
              alt="coconut oil"
            />
            <h5 className="font-bold text-white text-xl">Lorem Ipsum</h5>
            <p className="text-gray text-lg">Lorem ipsum</p>
          </div>
        </div>
        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
          <div className="border border-1 border-gray border-opacity-10 rounded-lg p-4 md:p-5 bg-light_blue">
            <img
              className="mb-2"
              src="/images/portfolio-image-1.jpg"
              alt="coconut oil"
            />
            <h5 className="font-bold text-white text-xl">Lorem Ipsum</h5>
            <p className="text-gray text-lg">Lorem ipsum</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-6 gap-7">
        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
          <div className="border border-1 border-gray border-opacity-10 rounded-lg p-4 md:p-5 bg-light_blue">
            <img
              className="mb-2"
              src="/images/portfolio-image-1.jpg"
              alt="coconut oil"
            />
            <h5 className="font-bold text-white text-xl">Lorem Ipsum</h5>
            <p className="text-gray text-lg">Lorem ipsum</p>
          </div>
        </div>
        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
          <div className="border border-1 border-gray border-opacity-10 rounded-lg p-4 md:p-5 bg-light_blue">
            <img
              className="mb-2"
              src="/images/portfolio-image-1.jpg"
              alt="coconut oil"
            />
            <h5 className="font-bold text-white text-xl">Lorem Ipsum</h5>
            <p className="text-gray text-lg">Lorem ipsum</p>
          </div>
        </div>
        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
          <div className="border border-1 border-gray border-opacity-10 rounded-lg p-4 md:p-5 bg-light_blue">
            <img
              className="mb-2"
              src="/images/portfolio-image-1.jpg"
              alt="coconut oil"
            />
            <h5 className="font-bold text-white text-xl">Lorem Ipsum</h5>
            <p className="text-gray text-lg">Lorem ipsum</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionProjects;
