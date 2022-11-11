import { FC } from "react";
import Button from "../Button/Button";
import Heading from "../Heading/Heading";
import { RiMailLine, RiMapPin2Fill, RiPhoneFill } from "react-icons/ri";

const SectionContact: FC = () => {
  return (
    <section className="container mx-auto flex flex-col items-center justify-center px-5 py-16">
      <Heading title="contact" />
      <div className="grid grid-cols-9 gap-7 mb-16">
        <div className="col-span-9 lg:col-span-4">
          <h4 className="text-white text-xl font-bold mb-4">
            Contact Information
          </h4>
          <p className="text-gray mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A omnis,
            iusto harum possimus non praesentium qui facere.
          </p>
          <span className="inline-block h-1 w-20 rounded-full bg-green bg-opacity-20"></span>
          <div className="contact-blocks mt-5">
            <div className="contact-block flex items-center mb-6 p-4 md:p-5 border border-gray border-opacity-10 rounded-lg bg-light_blue">
              <span className="mr-4 inline-flex h-16 w-16 shrink-0 grow-0 basis-16 items-center justify-center rounded-full bg-green bg-opacity-10 text-3xl">
                <RiPhoneFill className="fill-green" />
              </span>
              <div className="content">
                <h5 className="font-bold text-lg mb-2">Contact on phone</h5>
                <p className="mb-0">506 296 804</p>
              </div>
            </div>
            <div className="contact-block flex items-center mb-6 p-4 md:p-5 border border-gray border-opacity-10 rounded-lg bg-light_blue">
              <span className="mr-4 inline-flex h-16 w-16 shrink-0 grow-0 basis-16 items-center justify-center rounded-full bg-green bg-opacity-10 text-3xl">
                <RiMailLine className="fill-green" />
              </span>
              <div className="content">
                <h5 className="font-bold text-lg mb-2">Contact on mail</h5>
                <p className="mb-0">artur.michalek@o2.pl</p>
              </div>
            </div>
            <div className="contact-block flex items-center p-4 md:p-5 border border-gray border-opacity-10 rounded-lg bg-light_blue">
              <span className="mr-4 inline-flex h-16 w-16 shrink-0 grow-0 basis-16 items-center justify-center rounded-full bg-green bg-opacity-10 text-3xl">
                <RiMapPin2Fill className="fill-green" />
              </span>
              <div className="content">
                <h5 className="font-bold text-lg mb-2">Contact address</h5>
                <p className="mb-0">123 King Street, Katowice, Poland</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-9 lg:col-span-5">
          <form className="border border-gray border-opacity-10 rounded-lg bg-light_blue space-y-4 p-4 md:p-5">
            <div className="inputbox flex flex-col">
              <label className="mb-2 font-bold text-sm" htmlFor="name">
                Name
              </label>
              <input
                className="w-full bg-blue border border-gray rounded-lg border-opacity-10 p-3"
                id="name"
                type="text"
                placeholder="Enter your name..."
                name="name"
              />
            </div>
            <div className="inputbox flex flex-col">
              <label className="mb-2 font-bold text-sm" htmlFor="email">
                Email
              </label>
              <input
                className="w-full bg-blue border border-gray rounded-lg border-opacity-10 p-3"
                id="email"
                type="email"
                placeholder="Enter your email..."
                name="email"
              />
            </div>
            <div className="inputbox flex flex-col">
              <label className="mb-2 font-bold text-sm" htmlFor="subject">
                Subject
              </label>
              <input
                className="w-full bg-blue border border-gray rounded-lg border-opacity-10 p-3"
                id="subject"
                type="text"
                placeholder="Enter subject..."
                name="subject"
              />
            </div>
            <div className="inputbox flex flex-col">
              <label className="mb-2 font-bold text-sm" htmlFor="message">
                Message
              </label>
              <textarea
                className="w-full bg-blue border border-gray rounded-lg border-opacity-10 p-3"
                id="message"
                placeholder="Enter your message..."
                cols={1}
                rows={3}
                name="message"
              />
            </div>
            <Button>send mail</Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SectionContact;
