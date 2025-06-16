import React, { useState } from "react";
import FSSAI from "../assets/FSSAI.webp";
import ISO from "../assets/ISO.jpg";
import GMP from "../assets/GMP.png";
import { IoArrowRedoOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function Certificates() {
  const [activeTab, setActiveTab] = useState("fssai");

  const certificates = [
    {
      id: "fssai",
      title: "FSSAI Certified",
      image: FSSAI,
      description:
        "Our FSSAI certification signifies strict compliance with India's food safety regulations. This ensures that all food-grade and nutraceutical ingredients we source, store, and supply meet hygiene, purity, and labeling standards as mandated by the Food Safety and Standards Authority of India. Clients working in edible and health-related sectors can trust the integrity and traceability of every batch.",
    },
    {
      id: "iso",
      title: "ISO 9001:2015 Certified",
      image: ISO,
      description:
        "ISO 9001:2015 certification demonstrates that Esscore operates under a robust Quality Management System (QMS). It validates our ability to consistently provide products and services that meet customer and regulatory requirements. This global standard ensures our internal processes are transparent, audited, and continuously improved — empowering clients with confidence in every delivery.",
    },
    {
      id: "gmp",
      title: "GMP Compliant",
      image: GMP,
      description:
        "Our compliance with Good Manufacturing Practices (GMP) ensures that all materials handled by Esscore are sourced, processed, and distributed under controlled environments. This guarantees product safety, identity, strength, quality, and purity. Especially critical for pharmaceutical, cosmetic, and food-related industries, GMP compliance reassures our partners of consistent product integrity across every supply cycle.",
    },
  ];
  const activeCert = certificates.find((cert) => cert.id === activeTab);

  return (
    <section id="certificates" className=" ">
      <div className="container mx-auto p-5 ">
        <div className=" py-10 my-20 rounded-3xl bg-blue-50 shadow-xl text-center">
          <h2 className="text-5xl font-bold text-blue-500 mb-4">
            Certifications
          </h2>
          <p className="text-gray-600 text-lg mb-10">
            Our credentials ensure global compliance, quality, and customer
            confidence.
          </p>

          {/* Tabs */}
          <div className="flex justify-center gap-6 mb-8 flex-wrap">
            {certificates.map((cert) => (
              <button
                key={cert.id}
                onClick={() => setActiveTab(cert.id)}
                className={`px-6 py-2 rounded-full text-sm sm:text-base border font-semibold transition-all duration-200 ${
                  activeTab === cert.id
                    ? "bg-blue-500 text-white border-blue-500"
                    : "bg-white text-blue-500 border-blue-300 hover:bg-blue-100"
                }`}
              >
                {cert.title}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="max-w-5xl mx-auto flex flex-col items-center gap-6 px-4">
            <img
              src={activeCert.image}
              alt={activeCert.title}
              className="w-60 h-96 object-contain"
            />
            <h3 className="text-2xl font-semibold text-blue-700">
              {activeCert.title}
            </h3>
            <p className="text-gray-700 text-md leading-relaxed text-justify">
              {activeCert.description}
            </p>

            <Link
              to="/certificates"
              className="flex group text-xl items-center gap-2 w-fit text-blue-500 font-medium transition-transform duration-150 ease-in-out hover:translate-x-2"
            >
              View All Certificates{" "}
              <IoArrowRedoOutline
                className="inline-block duration-150 ease-in-out group-hover:rotate-180"
                size={18}
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certificates;
