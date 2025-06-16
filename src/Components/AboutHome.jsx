import React from "react";
import { Link } from "react-router-dom";
// import abtImg from "../assets/AboutImage.webp";
import abtImg from "../assets/AboutImage.jpg";
import { IoArrowRedoOutline } from "react-icons/io5";

import { FaCertificate, FaGlobeAmericas, FaShippingFast } from "react-icons/fa";

function AboutHome() {
  return (
    <section
      id="about"
      className="container mx-auto mb-10 mt-10 px-4 py-8 flex flex-col justify-center items-center gap-16"
    >
      {/* Heading */}
      <div className="text-center text-6xl font-bold text-blue-400">
        About Us
      </div>

      {/* Image with overlay text */}
      <div className="group relative w-full rounded-3xl overflow-hidden shadow-2xl">
        <img
          src={abtImg}
          alt="About Us"
          className="w-full h-[600px] object-cover group-hover:scale-105 transition-transform duration-150 ease-in-out"
        />

        {/* Gradient overlay + text */}
        <div className="absolute top-0 left-0 w-full h-full flex items-end">
          <div className="w-full bg-gradient-to-t from-black/70 to-transparent text-white p-8 backdrop-blur-sm rounded-b-3xl">
            <h1 className="text-4xl md:text-5xl  font-bold mb-4 drop-shadow-lg">
              Your Trusted Ingredient Partner
            </h1>
            <p className="text-base  md:text-lg max-w-4xl  drop-shadow-sm">
              Esscore Ingredients Pvt. Ltd. is a compliance-driven supplier
              connecting global manufacturers with Indian industries. With
              FSSAI, ISO, and GMP certifications, we deliver dependable
              sourcing, logistics, and support.
            </p>
            <Link
              to="/about"
              className="flex flex-nowrap group items-center text-xl gap-2 mt-6 w-fit py-3 pr-3 text-blue-400 hover:text-blue-300 font-semibold transition-transform duration-150 ease-in-out hover:translate-x-2 "
            >
              Learn More{" "}
              <IoArrowRedoOutline
                className="inline-block duration-150 ease-in-out group-hover:rotate-180"
                size={20}
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutHome;
