import React from "react";
import { Link } from "react-router-dom";
import {
  FaWhatsapp,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";
import { SiMoleculer } from "react-icons/si";
import { HashLink } from "react-router-hash-link";

export default function Footer() {
  return (
    <footer className="w-full bg-blue-100 text-gray-800 rounded-t-3xl shadow-inner border-t border-gray-300 ">
      <div className="container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo + About */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <SiMoleculer className="text-3xl text-blue-500" />
            <span className="text-xl text-blue-500 font-semibold">
              Esscore Industries
            </span>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            Esscore is your trusted partner for globally compliant chemical
            ingredients, empowering industries with quality, reliability, and
            regulatory confidence.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg  font-semibold text-blue-500 mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <HashLink
                smooth
                to="#about"
                className="hover:text-blue-600 transition"
                scroll={(el) => {
                  const yOffset = -80; // Adjust to your navbar height
                  const y =
                    el.getBoundingClientRect().top +
                    window.pageYOffset +
                    yOffset;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }}
              >
                About
              </HashLink>
            </li>
            <li>
              <HashLink
                smooth
                to="#products"
                className="hover:text-blue-600 transition"
                scroll={(el) => {
                  const yOffset = -80; // Adjust to your navbar height
                  const y =
                    el.getBoundingClientRect().top +
                    window.pageYOffset +
                    yOffset;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }}
              >
                Products
              </HashLink>
            </li>
            <li>
              <HashLink
                smooth
                to="#industries"
                className="hover:text-blue-600 transition"
                scroll={(el) => {
                  const yOffset = -80; // Adjust to your navbar height
                  const y =
                    el.getBoundingClientRect().top +
                    window.pageYOffset +
                    yOffset;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }}
              >
                Industries
              </HashLink>
            </li>
            <li>
              <HashLink
                smooth
                to="#certificates"
                className="hover:text-blue-600 transition"
                scroll={(el) => {
                  const yOffset = -80; // Adjust to your navbar height
                  const y =
                    el.getBoundingClientRect().top +
                    window.pageYOffset +
                    yOffset;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }}
              >
                Certifications
              </HashLink>
            </li>
            <li>
              <HashLink
                smooth
                to="#contact"
                className="hover:text-blue-600 transition"
                scroll={(el) => {
                  const yOffset = -80; // Adjust to your navbar height
                  const y =
                    el.getBoundingClientRect().top +
                    window.pageYOffset +
                    yOffset;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }}
              >
                Contact
              </HashLink>
            </li>
          </ul>
        </div>

        {/* Contact Details */}
        <div>
          <h3 className="text-lg font-semibold text-blue-500 mb-4">Contact</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>📞 +91 98765 43210</li>
            <li>📧 contact@esscore.com</li>
            <li>📍 Mumbai, Maharashtra, India</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-blue-500 mb-4">Connect</h3>
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="bg-white p-2 rounded-full shadow hover:bg-blue-100 transition"
            >
              <FaLinkedinIn size={18} className="text-blue-600" />
            </a>
            <a
              href="#"
              className="bg-white p-2 rounded-full shadow hover:bg-pink-100 transition"
            >
              <FaInstagram size={18} className="text-pink-600" />
            </a>
            <a
              href="#"
              className="bg-white p-2 rounded-full shadow hover:bg-blue-200 transition"
            >
              <FaFacebookF size={18} className="text-blue-700" />
            </a>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 p-2 rounded-full shadow hover:bg-green-600 transition"
            >
              <FaWhatsapp size={18} className="text-white" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-gray-500 text-sm py-6 border-t border-gray-300">
        &copy; {new Date().getFullYear()} Esscore Industries. Built with ❤️ by
        Mohammed Ansari
      </div>
    </footer>
  );
}
