"use client";
import React from "react";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";

const Hero = () => {
  const words = [
    {
      text: "Welcome",
      className: "text-black dark:text-white",
    },
    {
      text: "To",
      className: "text-black dark:text-white",
    },
    {
      text: "Campus",
      className: "text-black dark:text-white",
    },
    {
      text: "Caravan",
      className: "text-black dark:text-white",
    },
  ];

  const wordssm = [
    {
      text: "Welcome",
      className: "text-black dark:text-white",
    },
    {
      text: "To",
      className: "text-black dark:text-white",
    },
  ];

  const wordssm1 = [
    {
      text: "Campus",
      className: "text-black dark:text-white",
    },
    {
      text: "Caravan",
      className: "text-black dark:text-white",
    },
  ];
  return (
    <div>
      <div className="justify-center shrink-0 w-full hidden sm:flex">
        <TypewriterEffectSmooth
          words={words}
          className="max-[960px]:my-60 my-64 text-7xl w-full justify-center hover:drop-shadow-lg"
        ></TypewriterEffectSmooth>
      </div>
      <div className="flex justify-center shrink-0 w-full sm:hidden">
        <div className="flex flex-col items-center justify-center sm:hidden mx-2 ">
          <p className=""></p>
          <TypewriterEffectSmooth
            words={wordssm}
            className=""
          ></TypewriterEffectSmooth>
          <TypewriterEffectSmooth
            words={wordssm1}
            className=""
          ></TypewriterEffectSmooth>
        </div>
      </div>
    </div>
  );
};

export default Hero;
