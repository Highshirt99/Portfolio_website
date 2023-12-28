import React from "react";
import { Link } from "react-scroll";
import image from "../assets/about.svg";

const AboutMe = () => {
  return (
    <div
      id="about"
      className="p-[2rem] lg:p-[6rem] border-b-[2px] border-b-btn tracking-wider bg-background text-base flex flex-col lg:flex-row lg:justify-between"
    >
      <div className=" lg:w-[40%]" data-aos="slide-down">
        <p className="font-[700] text-white text-[25px]  leading-8">
          Hi, I'm
          <span className="text-body text-[25px] font-bold ml-[10px]">
            Aishat{" "}
          </span>
          ,
          <br /> a<span className="ml-2 text-body ">self-taught</span> front-end
          developer.
        </p>

        <div className="flex items-center content-center gap-4 mt-3">
          <div className="w-[50px] h-[4px] bg-body"></div>
          <p className="py-2 font-bold text-white">About me</p>
        </div>
        <p className="py-3 text-gray-300">
          Experienced Front-end Developer, with background in creating custom
          websites, using advanced HTML, CSS and JavaScript. Keeps up to date
          with new technologies to identify opportunities for innovative
          products.
        </p>
        <p className="text-sm text-white">
          Stick around to see some of my work.
        </p>

        <div className="flex gap-5 py-6 text-sm text-white">
          <Link to="projects" smooth className="p-2 cursor-pointer bg-btn rounded-md">
            See my work
          </Link>
          <a
            href="https://docs.google.com/document/d/1bqGGI1nRUfSt1ux_ellMoc-zUyEB32f3MaWpqgFN6Dk/edit#heading=h.yu8wov644s7"
            className="p-2 cursor-pointer bg-light rounded-md"
          >
            Download CV
          </a>
        </div>
      </div>

      <img src={image} alt="" className="lg:w-[40%]" data-aos="slide-right" />
    </div>
  );
};

export default AboutMe;
