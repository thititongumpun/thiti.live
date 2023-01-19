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
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row  pt-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-12 uppercase tracking-widest text-gray-500 text-2xl">
        ContactMe
      </h3>

      <div className="flex flex-col space-y-10 text-gray-400">
        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="h-7 w-7 animate-pulse" />
            <p className="text-2xl">thiti180536@gmail.com</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="h-7 w-7 animate-pulse" />
            <p className="text-2xl">Nonthaburi, TH</p>
          </div>
        </div>
        
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-4 max-w-xl m-auto">
            <div className="col-span-2 lg:col-span-1">
              <input
                type="text"
                className="md:text-xl w-full contactInput"
                placeholder="Name"
                {...register("name")}
              />
            </div>

            <div className="col-span-2 lg:col-span-1">
              <input
                type="text"
                className=" md:text-xl w-full contactInput"
                placeholder="Email Address"
                {...register("email")}
              />
            </div>

            <div className="col-span-2 lg:col-span-2">
              <input
                type="text"
                className=" md:text-xl w-full contactInput"
                placeholder="Subject"
                {...register("subject")}
              />
            </div>

            <div className="col-span-2">
              <textarea
                cols={30}
                rows={8}
                placeholder="Message"
                className="md:text-xl w-full contactInput"
                {...register("message")}
              />
            </div>

            <div className="col-span-2 text-center">
              <button
                className="bg-gray-50 py-5 px-10 rounded-md text-black font-bold text-lg w-full"
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
