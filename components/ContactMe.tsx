import { EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:thiti180536@gmail.com?subject=${formData.subject}&body=Hi, My name is ${formData.name}. ${formData.message} (${formData.email})`;
  };
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-x-7xl pt-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-widest text-gray-500 text-2xl">
        ContactMe
      </h3>

      <div className="flex flex-col space-y-10">
        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="h-7 w-7 animate-pulse" />
            <p className="text-2xl">thiti180536@gmail.com</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="h-7 w-7 animate-pulse" />
            <p className="text-2xl">Bangkok TH</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              type="text"
              className="contactInput"
            />
            <input
              {...register("email")}
              placeholder="Email"
              type="text"
              className="contactInput"
            />
          </div>

          <input
            {...register("subject")}
            placeholder="Subject"
            type="text"
            className="contactInput"
          />

          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />

          <button
            className="bg-gray-50 py-5 px-10 rounded-md text-black font-bold text-lg"
            type="submit"
          >
            submit
          </button>
        </form>
      </div>
    </div>
  );
}
