import React, { useState } from "react";
import DisplayPicture from "../assets/naveen.jpg";

const Hero = () => {
  return (
    <section id="intro" className="mt-24 mb-6 lg:mb-12">
      <div className="flex flex-wrap items-start">
        <div className="w-full lg:w-7/12 pr-0 md:pr-14 lg:pr-28">
          <h1 className="text-6xl font-bold mb-6">
            <span className="mark">Howdy!</span>
          </h1>
          <p className="text-xl my-5">
            Welcome to my space! I&apos;m Naveen Kharwar.
          </p>
          <p className="text-xl leading-relaxed">
            A versatile individual who excels in coding, storytelling, and
            writing. When not immersed in work, I am often found exploring the
            vast world of literature at bookstores.
          </p>
          <span className="italic hidden lg:block">
            Sr. Technical Support Engineer →{" "}
            <a href="https://brainstormforce.com/" className="text-blue-900">
              Brainstorm Force
            </a>
          </span>
        </div>
        <div className="w-full lg:w-5/12">
          <div className="flex justify-normal lg:justify-end">
            <img
              src={DisplayPicture}
              className="rounded-lg w-10/12 md:w-1/2 lg:w-full"
              alt="Men with Dog"
            />
          </div>
          <span className="italic mt-3 block lg:hidden w-10/12 md:w-1/2 lg:w-full">
            Sr. Technical Support Engineer →{" "}
            <a href="https://brainstormforce.com/" className="text-blue-900">
              Brainstorm Force
            </a>
          </span>
        </div>
      </div>
      <a
        href="#"
        className="inline-block rounded-lg bg-black hover:bg-slate-700 text-white lowercase px-8 py-4 my-10"
      >
        Contact me
      </a>
    </section>
  );
};

export default Hero;
