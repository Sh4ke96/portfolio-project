import { FC, useRef } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import emailjs from "emailjs-com";

import { RiMailLine, RiMapPin2Fill, RiPhoneFill } from "react-icons/ri";
import Button from "../Button/Button";
import Heading from "../Heading/Heading";

const SectionContact: FC = () => {
  const form = useRef(null);
  const emailRegEx =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  function sendEmail() {
    const currentForm = form.current;
    if (currentForm == null) return;

    emailjs
      .sendForm(
        "service_zjqrdtf",
        "template_wa4n3cb",
        currentForm,
        "MlF1pXPvjA8pfjn7K"
      )
      .then(
        (result) => {
          console.log("Email send successfull");
        },
        (error) => {
          console.log("Email send failed");
        }
      );
  }

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
      formik.resetForm();
      sendEmail();
    },
    validationSchema: yup.object({
      name: yup.string().trim().required("Name is required."),
      email: yup
        .string()
        .trim()
        .required("Email address is required.")
        .matches(emailRegEx, "Email address must be valid."),
      subject: yup.string().trim().required("Subject is required."),
      message: yup
        .string()
        .trim()
        .required("Message is required.")
        .min(10, "Message must have a minimum of 10 characters.")
        .max(300, "Message can have a maximum of 300 characters."),
    }),
  });
  return (
    <section
      id="contact_section"
      className="container mx-auto flex flex-col items-center justify-center px-5 py-16"
    >
      <Heading title="contact" />
      <div className="grid grid-cols-9 gap-7 mb-16 items-center">
        <div className="col-span-9 lg:col-span-4">
          <h4 className="text-white text-xl font-bold mb-4">
            Contact Information
          </h4>
          <p className="text-gray mb-4">
            Interested in working together? Fill out the form below with some
            information. <br />
            Please allow a couple days for me to respond.
          </p>
          <span className="inline-block h-1 w-20 rounded-full bg-green bg-opacity-20"></span>
          <div className="contact-blocks mt-5">
            <div className="contact-block flex items-center mb-6 p-4 md:p-5 border border-gray border-opacity-10 rounded-lg bg-light_blue">
              <span className="mr-4 inline-flex h-16 w-16 shrink-0 grow-0 basis-16 items-center justify-center rounded-full bg-green bg-opacity-10 text-3xl">
                <RiPhoneFill className="fill-green" />
              </span>
              <div className="content">
                <h5 className="font-bold text-lg mb-2">Contact on phone</h5>
                <p className="mb-0 text-gray hover:text-green delay-100">
                  <a href="tel:+48 506 296 804">506 296 804</a>
                </p>
              </div>
            </div>
            <div className="contact-block flex items-center mb-6 p-4 md:p-5 border border-gray border-opacity-10 rounded-lg bg-light_blue">
              <span className="mr-4 inline-flex h-16 w-16 shrink-0 grow-0 basis-16 items-center justify-center rounded-full bg-green bg-opacity-10 text-3xl">
                <RiMailLine className="fill-green" />
              </span>
              <div className="content">
                <h5 className="font-bold text-lg mb-2">Contact on mail</h5>
                <p className="mb-0 text-gray hover:text-green delay-100">
                  <a href="mailto:artuuur.michalek@gmail.com">
                    artuuur.michalek@gmail.com
                  </a>
                </p>
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
          <form
            ref={form}
            onSubmit={formik.handleSubmit}
            className="border border-gray border-opacity-10 rounded-lg bg-light_blue space-y-4 p-4 md:p-5"
          >
            <div className="inputbox flex flex-col">
              <label className="mb-2 font-bold text-sm" htmlFor="name">
                Name
              </label>
              {formik.touched.name && formik.errors.name && (
                <p className="text-xs pb-2 text-red-500">
                  {formik.errors.name}
                </p>
              )}
              <input
                className="w-full bg-blue border border-gray rounded-lg border-opacity-10 p-3"
                id="name"
                type="text"
                placeholder="Enter your name..."
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <div className="inputbox flex flex-col">
              <label className="mb-2 font-bold text-sm" htmlFor="email">
                Email
              </label>
              {formik.touched.email && formik.errors.email && (
                <p className="text-xs pb-2 text-red-500">
                  {formik.errors.email}
                </p>
              )}
              <input
                className="w-full bg-blue border border-gray rounded-lg border-opacity-10 p-3"
                id="email"
                type="email"
                placeholder="Enter your email..."
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <div className="inputbox flex flex-col">
              <label className="mb-2 font-bold text-sm" htmlFor="subject">
                Subject
              </label>
              {formik.touched.subject && formik.errors.subject && (
                <p className="text-xs pb-2 text-red-500">
                  {formik.errors.subject}
                </p>
              )}
              <input
                className="w-full bg-blue border border-gray rounded-lg border-opacity-10 p-3"
                id="subject"
                type="text"
                placeholder="Enter subject..."
                name="subject"
                value={formik.values.subject}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <div className="inputbox flex flex-col">
              <label className="mb-2 font-bold text-sm" htmlFor="message">
                Message
              </label>
              {formik.touched.message && formik.errors.message && (
                <p className="text-xs pb-2 text-red-500">
                  {formik.errors.message}
                </p>
              )}
              <textarea
                className="w-full bg-blue border border-gray rounded-lg border-opacity-10 p-3"
                id="message"
                placeholder="Enter your message..."
                cols={1}
                rows={3}
                name="message"
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <Button type="submit" hide="block">
              send mail
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SectionContact;
