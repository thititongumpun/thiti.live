import React from "react";

type Props = {};

export default function BackgroundSquare({}: Props) {
  return (
    <div className="relative flex justify-center items-center">
      <div className="absolute border border-[#333333] h-[200px] w-[200px] animate-ping mt-52" />
      <div className="border border-[#333333] h-[300px] w-[300px] absolute mt-52" />
      <div className="border border-[#333333] h-[500px] w-[500px] absolute mt-52" />
      <div className="border border-[#333333] h-[620px] w-[620px] absolute opacity-20 animate-pulse mt-52" />
    </div>
  );
}
