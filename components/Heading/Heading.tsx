import { FC } from "react";

interface HeadingProps {
  title?: string;
}

const Heading: FC<HeadingProps> = ({ title }) => {
  return (
    <div className="heading flex flex-col items-center mb-16">
      <h2 className="relative z-10 mb-2 uppercase text-white font-bold text-4xl">
        {title}
      </h2>
      <span className="relative z-10 inline-block mx-auto h-1.5 w-32 overflow-hidden rounded-full bg-green bg-opacity-20">
        <span className="absolute left-0 top-0 inline-block h-full w-1.5 animate-leftToRight rounded-full bg-green"></span>
      </span>
    </div>
  );
};

export default Heading;
