import React from "react";
import founderImg from "../assets/Founder.jpg";
import { Link } from "react-router-dom";
import { IoArrowRedoOutline } from "react-icons/io5";

function Founder() {
  return (
    <section
      style={{ backgroundImage: `url(${founderImg})` }}
      className="h-screen w-screen bg-cover bg-center flex items-center justify-center"
    >
      {/* Overlay */}
      <div className="flex items-center start w-full h-full bg-black/40">
        <div className="container mx-auto p-5">
          <div className="bg-white/10 backdrop-blur-md border border-white/30 shadow-2xl rounded-3xl max-w-4xl w-full p-8 sm:p-12 text-white text-center space-y-6">
            {/* Heading */}
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Founder’s Message
            </h1>

            {/* Quote */}
            <p className="text-lg md:text-xl leading-relaxed font-light relative">
              <span className="text-5xl absolute left-0 -top-4 text-blue-300">
                “
              </span>
              Esscore was born out of a simple yet powerful idea — to make
              quality chemical ingredients more accessible, compliant, and
              dependable for industries that power the world. Every decision we
              make is guided by trust, transparency, and technical excellence.
              <span className="text-5xl absolute right-0 -bottom-4 text-blue-300">
                ”
              </span>
            </p>

            {/* Name + Designation */}
            <div className="mt-4 text-sm sm:text-base font-medium text-gray-200">
              — Mr. Kiran Madhyan, Founder & Director
            </div>

            {/* CTA */}
            <Link
              to="/message"
              className="inline-flex group items-center justify-center text-white hover:text-blue-200 text-lg transition duration-200"
            >
              <span>Read Full Message</span>
              <IoArrowRedoOutline
                size={22}
                className="ml-2 transition-transform duration-150 group-hover:rotate-180"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Founder;
