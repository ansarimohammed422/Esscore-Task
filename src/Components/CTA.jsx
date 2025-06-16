import React from "react";
import { Link } from "react-router-dom";
import {
  FaWhatsapp,
  FaEnvelope,
  FaQuoteRight,
  FaPhoneAlt,
} from "react-icons/fa";

function CTA() {
  return (
    <section id="contact" className="w-screen bg-blue-500 py-16 px-6">
      <div className="container mx-auto bg-blue-600 rounded-3xl shadow-xl p-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Text Section */}
          <div className="max-w-2xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              Powering Industry With Trusted Ingredients
            </h1>
            <p className="mt-4 text-lg text-white/90">
              Discover Esscore’s globally compliant chemical sourcing, tailored
              to your sector’s unique needs. Reliability and regulation — all in
              one place.
            </p>
          </div>

          {/* Button Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-4">
            <Link
              to="/get-quote"
              className="bg-white hover:bg-blue-100 text-blue-600 text-sm sm:text-base px-5 py-3 rounded-full font-medium flex items-center gap-2 shadow"
            >
              <FaQuoteRight /> Get Quotes
            </Link>
            <Link
              to="/contact"
              className="bg-white hover:bg-blue-100 text-blue-600 text-sm sm:text-base px-5 py-3 rounded-full font-medium flex items-center gap-2 shadow"
            >
              <FaEnvelope /> Contact Us
            </Link>
            <Link
              to="/inquiry"
              className="bg-white hover:bg-blue-100 text-blue-600 text-sm sm:text-base px-5 py-3 rounded-full font-medium flex items-center gap-2 shadow"
            >
              <FaPhoneAlt /> Send Inquiry
            </Link>
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-blue-100 text-blue-600 text-sm sm:text-base px-5 py-3 rounded-full font-medium flex items-center gap-2 shadow"
            >
              <FaWhatsapp /> WhatsApp Chat
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
