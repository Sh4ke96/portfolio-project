import { FC } from "react";
import { motion } from "framer-motion";
import {
  RiFacebookFill,
  RiGithubFill,
  RiLinkedinBoxFill,
  RiFileList3Line,
} from "react-icons/ri";

const Socials: FC = () => {
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
            delay: 1,
          },
        },
      }}
    >
      <div className="flex gap-x-6">
        <ul className="mb-0 inline-flex list-none flex-wrap gap-3 pl-0 sm:gap-4">
          <li className="border-2 border-green rounded-full hover:border-gray delay-100">
            <a href="https://www.facebook.com/profile.php?id=100002663673602">
              <RiFacebookFill className="text-4xl p-2 fill-gray hover:fill-green delay-100" />
            </a>
          </li>
          <li className="border-2 border-green rounded-full hover:border-gray delay-100">
            <a href="https://github.com/Sh4ke96">
              <RiGithubFill className="text-4xl p-2 fill-gray hover:fill-green delay-100" />
            </a>
          </li>
          <li className="border-2 border-green rounded-full hover:border-gray delay-100">
            <a href="https://www.linkedin.com/in/artur-micha%C5%82ek-69863918b/">
              <RiLinkedinBoxFill className="text-4xl p-2 fill-gray hover:fill-green delay-100" />
            </a>
          </li>
          <li className="border-2 border-green rounded-full hover:border-gray delay-100">
            <a href="#">
              <RiFileList3Line className="text-4xl p-2 fill-gray hover:fill-green delay-100" />
            </a>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Socials;
