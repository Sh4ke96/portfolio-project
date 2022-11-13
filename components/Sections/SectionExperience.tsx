import { FC } from "react";
import Heading from "../Heading/Heading";

const SectionExperience: FC = () => {
  return (
    <section
      id="experience_section"
      className="container mx-auto flex flex-col items-center justify-center px-5 py-16"
    >
      <Heading title="experience" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-7 mb-4">
        <div className="col-span-1 flex flex-col justify-center items-center">
          <div className="w-1/3 border border-1 border-gray border-opacity-10 text-center rounded-lg p-2 md:p-3 bg-light_blue mb-4">
            09.2022 - Present
          </div>
          <h5 className="text-green text-xl font-bold">Frontend Developer</h5>
          <p className="mb-2 text-white text-lg">Konceptika</p>
          <p className="w-3/4 mb-2 text-gray text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            consectetur donec gravida ullamcorper cum id. Sit viverra donec in
            ornare euismod.
          </p>
        </div>
        <div className="col-span-1 flex flex-col justify-center items-center">
          <div className="w-1/3 border border-1 border-gray border-opacity-10 text-center rounded-lg p-2 md:p-3 bg-light_blue mb-4">
            02.2022 - 06.2022
          </div>
          <h5 className="text-green text-xl font-bold">Frontend Developer</h5>
          <p className="mb-2 text-white text-lg">ArtGroup</p>
          <p className="w-3/4 mb-2 text-gray text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            consectetur donec gravida ullamcorper cum id. Sit viverra donec in
            ornare euismod.
          </p>
        </div>
        <div className="col-span-1 flex flex-col justify-center items-center">
          <div className="w-1/3 border border-1 border-gray border-opacity-10 text-center rounded-lg p-2 md:p-3 bg-light_blue mb-4">
            10.2021 - 12.2021
          </div>
          <h5 className="text-green text-xl font-bold">Support</h5>
          <p className="mb-2 text-white text-lg">HCL Poland</p>
          <p className="w-3/4 mb-2 text-gray text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            consectetur donec gravida ullamcorper cum id. Sit viverra donec in
            ornare euismod.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionExperience;
