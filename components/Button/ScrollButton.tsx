import { FC, useEffect, useState } from "react";
import { RiArrowUpLine } from "react-icons/ri";

const ScrollButton: FC = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScrollVisibility = () => {
      window.pageYOffset > 800 ? setShowButton(true) : setShowButton(false);
    };
    window.addEventListener("scroll", handleScrollVisibility);
    return () => {
      window.removeEventListener("scroll", handleScrollVisibility);
    };
  }, []);

  return (
    <>
      {showButton && (
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="fixed bottom-12 z-30 right-2 lg:right-8 flex justify-center items-center rounded-full bg-green w-12 h-12"
        >
          <RiArrowUpLine className="text-2xl fill-blue hover:fill-white delay-100" />
        </button>
      )}
    </>
  );
};
export default ScrollButton;
