import React from "react";

type Props = {};

export default function About({}: Props) {
  return (
    <div className="flex relative h-screen text-center md:text-left md:flex-row max-x-7xl justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-widest text-gray-500 text-2xl">
        About
      </h3>
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
          maiores facere suscipit, quaerat et quis voluptas sunt sed cum
          officia, perspiciatis dolores? Porro asperiores atque veniam. Alias
          harum consectetur labore!
        </h4>
      </div>
    </div>
  );
}
