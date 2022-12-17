import { FC } from "react";
import Heading from "../Heading/Heading";

const SectionExperience: FC = () => {
  return (
    <section
      id="experience_section"
      className="container mx-auto flex flex-col items-center justify-center px-5 py-16"
    >
      <Heading title="experience" />
      <div className="grid grid-cols-1 lg:grid-cols-3 items-start gap-7 mb-4">
        <div className="col-span-1 flex flex-col justify-center items-center">
          <div className="whitespace-nowrap border border-1 border-gray border-opacity-10 text-center rounded-lg p-2 md:p-3 bg-light_blue mb-4">
            09.2022 - Present
          </div>
          <h5 className="text-green text-xl font-bold">Frontend Developer</h5>
          <p className="mb-2 text-white text-lg">Konceptika</p>
          <p className="w-3/4 mb-2 text-gray text-center">
            Work with a variety of different languages, platforms, frameworks,
            and content management systems such as JavaScript, TypeScript,
            React, Next.js, PHP, WordPress, and Vercel.
          </p>
        </div>
        <div className="col-span-1 flex flex-col justify-center items-center">
          <div className="whitespace-nowrap border border-1 border-gray border-opacity-10 text-center rounded-lg p-2 md:p-3 bg-light_blue mb-4">
            02.2022 - 06.2022
          </div>
          <h5 className="text-green text-xl font-bold">Frontend Developer</h5>
          <p className="mb-2 text-white text-lg">ArtGroup</p>
          <p className="w-3/4 mb-2 text-gray text-center">
            Developed and maintained code for in-house and client websites
            primarily using HTML, CSS, Sass, JavaScript, and jQuery.
          </p>
        </div>
        <div className="col-span-1 flex flex-col justify-center items-center">
          <div className="whitespace-nowrap border border-1 border-gray border-opacity-10 text-center rounded-lg p-2 md:p-3 bg-light_blue mb-4">
            10.2021 - 12.2021
          </div>
          <h5 className="text-green text-xl font-bold">Support</h5>
          <p className="mb-2 text-white text-lg">HCL Poland</p>
          <p className="w-3/4 mb-2 text-gray text-center">
            Technical assistance to users, troubleshooting, answering questions
            using the SAP system. Responsible for communicating with clients.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionExperience;
