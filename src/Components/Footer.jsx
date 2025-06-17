// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   FaWhatsapp,
//   FaLinkedinIn,
//   FaInstagram,
//   FaFacebookF,
// } from "react-icons/fa";
// import { SiMoleculer } from "react-icons/si";
// import { HashLink } from "react-router-hash-link";

// export default function Footer() {
//   return (
//     <footer className="w-full bg-blue-100 text-gray-800 rounded-t-3xl shadow-inner border-t border-gray-300 ">
//       <div className="container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
//         {/* Logo + About */}
//         <div>
//           <div className="flex items-center gap-2 mb-4">
//             <SiMoleculer className="text-3xl text-blue-500" />
//             <span className="text-xl text-blue-500 font-semibold">
//               Esscore Industries
//             </span>
//           </div>
//           <p className="text-sm text-gray-600 leading-relaxed">
//             Esscore is your trusted partner for globally compliant chemical
//             ingredients, empowering industries with quality, reliability, and
//             regulatory confidence.
//           </p>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h3 className="text-lg  font-semibold text-blue-500 mb-4">
//             Quick Links
//           </h3>
//           <ul className="space-y-2 text-sm text-gray-600">
//             <li>
//               <HashLink
//                 smooth
//                 to="#about"
//                 className="hover:text-blue-600 transition"
//                 scroll={(el) => {
//                   const yOffset = -80; // Adjust to your navbar height
//                   const y =
//                     el.getBoundingClientRect().top +
//                     window.pageYOffset +
//                     yOffset;
//                   window.scrollTo({ top: y, behavior: "smooth" });
//                 }}
//               >
//                 About
//               </HashLink>
//             </li>
//             <li>
//               <HashLink
//                 smooth
//                 to="#products"
//                 className="hover:text-blue-600 transition"
//                 scroll={(el) => {
//                   const yOffset = -80; // Adjust to your navbar height
//                   const y =
//                     el.getBoundingClientRect().top +
//                     window.pageYOffset +
//                     yOffset;
//                   window.scrollTo({ top: y, behavior: "smooth" });
//                 }}
//               >
//                 Products
//               </HashLink>
//             </li>
//             <li>
//               <HashLink
//                 smooth
//                 to="#industries"
//                 className="hover:text-blue-600 transition"
//                 scroll={(el) => {
//                   const yOffset = -80; // Adjust to your navbar height
//                   const y =
//                     el.getBoundingClientRect().top +
//                     window.pageYOffset +
//                     yOffset;
//                   window.scrollTo({ top: y, behavior: "smooth" });
//                 }}
//               >
//                 Industries
//               </HashLink>
//             </li>
//             <li>
//               <HashLink
//                 smooth
//                 to="#certificates"
//                 className="hover:text-blue-600 transition"
//                 scroll={(el) => {
//                   const yOffset = -80; // Adjust to your navbar height
//                   const y =
//                     el.getBoundingClientRect().top +
//                     window.pageYOffset +
//                     yOffset;
//                   window.scrollTo({ top: y, behavior: "smooth" });
//                 }}
//               >
//                 Certifications
//               </HashLink>
//             </li>
//             <li>
//               <HashLink
//                 smooth
//                 to="#contact"
//                 className="hover:text-blue-600 transition"
//                 scroll={(el) => {
//                   const yOffset = -80; // Adjust to your navbar height
//                   const y =
//                     el.getBoundingClientRect().top +
//                     window.pageYOffset +
//                     yOffset;
//                   window.scrollTo({ top: y, behavior: "smooth" });
//                 }}
//               >
//                 Contact
//               </HashLink>
//             </li>
//           </ul>
//         </div>

//         {/* Contact Details */}
//         <div>
//           <h3 className="text-lg font-semibold text-blue-500 mb-4">Contact</h3>
//           <ul className="space-y-2 text-sm text-gray-600">
//             <li>📞 +91 98765 43210</li>
//             <li>📧 contact@esscore.com</li>
//             <li>📍 Mumbai, Maharashtra, India</li>
//           </ul>
//         </div>

//         {/* Social Media */}
//         <div>
//           <h3 className="text-lg font-semibold text-blue-500 mb-4">Connect</h3>
//           <div className="flex items-center gap-3">
//             <a
//               href="#"
//               className="bg-white p-2 rounded-full shadow hover:bg-blue-100 transition"
//             >
//               <FaLinkedinIn size={18} className="text-blue-600" />
//             </a>
//             <a
//               href="#"
//               className="bg-white p-2 rounded-full shadow hover:bg-pink-100 transition"
//             >
//               <FaInstagram size={18} className="text-pink-600" />
//             </a>
//             <a
//               href="#"
//               className="bg-white p-2 rounded-full shadow hover:bg-blue-200 transition"
//             >
//               <FaFacebookF size={18} className="text-blue-700" />
//             </a>
//             <a
//               href="https://wa.me/919876543210"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-green-500 p-2 rounded-full shadow hover:bg-green-600 transition"
//             >
//               <FaWhatsapp size={18} className="text-white" />
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="text-center text-gray-500 text-sm py-6 border-t border-gray-300">
//         &copy; {new Date().getFullYear()} Esscore Industries. Built with ❤️ by
//         Mohammed Ansari
//       </div>
//     </footer>
//   );
// }

import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  // Define M3 Expressive spring transitions for Framer Motion
  const expressiveSpatialTransition = {
    type: "spring",
    stiffness: 200, // For smooth spatial transitions
    damping: 20,
    mass: 1,
    velocity: 0,
  };

  const expressiveEffectsTransition = {
    type: "spring",
    stiffness: 300, // For quicker effects (e.g., button hovers)
    damping: 25,
    mass: 0.8,
    velocity: 0,
  };

  // Variants for overall footer entrance
  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ...expressiveSpatialTransition,
        delay: 0.1,
        staggerChildren: 0.1,
      },
    },
  };

  // Variants for individual sections/items within the footer
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: expressiveEffectsTransition },
  };

  return (
    <motion.footer
      id="footer"
      className="w-full  bg-surface-variant text-on-surface font-roboto rounded-t-xl-inc shadow-inner-xl overflow-hidden" // M3E colors, large rounded top, inner shadow
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} // Animate when 30% of footer is in view
      variants={footerVariants}
    >
      {/* Dynamic Background Shapes (for creative flair) */}
      <div className="absolute inset-0 z-0 opacity-10">
        <svg
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-full"
        >
          <motion.path
            initial={{
              d: "M0,64L48,80C96,96,192,128,288,117.3C384,107,480,53,576,64C672,75,768,150,864,170.7C960,192,1056,155,1152,144C1248,133,1344,149,1392,157.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z",
            }}
            animate={{
              d: "M0,64L48,80C96,96,192,128,288,117.3C384,107,480,53,576,64C672,75,768,150,864,170.7C960,192,1056,155,1152,144C1248,133,1344,149,1392,157.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z",
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "mirror",
            }}
            fill="var(--color-primary-container)" // Use M3 color
            className="absolute top-0"
          />
          <motion.path
            initial={{
              d: "M0,192L48,192C96,192,192,192,288,181.3C384,171,480,149,576,144C672,139,768,149,864,170.7C960,192,1056,224,1152,213.3C1248,203,1344,160,1392,138.7L1440,117L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
            }}
            animate={{
              d: "M0,192L48,192C96,192,192,192,288,181.3C384,171,480,149,576,144C672,139,768,149,864,170.7C960,192,1056,224,1152,213.3C1248,203,1344,160,1392,138.7L1440,117L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "mirror",
              delay: 1,
            }}
            fill="var(--color-secondary-container)" // Use M3 color
            className="absolute bottom-0"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {/* Left Section: Logo, About, Social Icons */}
        <motion.div
          variants={itemVariants}
          className="md:col-span-1 lg:col-span-2"
        >
          {" "}
          {/* Takes more space on desktop */}
          <div className="flex items-center gap-2 mb-4 text-primary">
            {/* Inline SVG for Logo (SiMoleculer equivalent) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-primary"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="3" />
              <path d="M7 12h-2c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h2m0-8h-2c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2h2m10 8h2c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2h-2m0 8h2c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2h-2" />
            </svg>
            <span className="text-display-extra-small font-roboto-medium text-primary">
              {" "}
              {/* Larger logo text */}
              Esscore
            </span>
          </div>
          <p className="text-body-large text-on-surface-variant leading-relaxed max-w-sm mb-6">
            {" "}
            {/* Larger body text */}
            Esscore is your trusted partner for globally compliant chemical
            ingredients, empowering industries with quality, reliability, and
            regulatory confidence.
          </p>
          {/* Social Media Icons */}
          <div className="flex items-center gap-4">
            {" "}
            {/* Increased gap for more breathing room */}
            <motion.a
              href="#"
              className="bg-surface-container-high p-3 rounded-full shadow-md text-on-surface-variant" // Larger icons, more shadow
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 4px 8px rgba(0,0,0,0.15)",
                backgroundColor: "rgba(103, 80, 164, 0.08)",
              }}
              whileTap={{
                scale: 0.9,
                backgroundColor: "rgba(103, 80, 164, 0.12)",
              }}
              transition={expressiveEffectsTransition}
              aria-label="LinkedIn"
            >
              {/* Inline SVG for LinkedIn */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="none"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </motion.a>
            <motion.a
              href="#"
              className="bg-surface-container-high p-3 rounded-full shadow-md text-on-surface-variant"
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 4px 8px rgba(0,0,0,0.15)",
                backgroundColor: "rgba(103, 80, 164, 0.08)",
              }}
              whileTap={{
                scale: 0.9,
                backgroundColor: "rgba(103, 80, 164, 0.12)",
              }}
              transition={expressiveEffectsTransition}
              aria-label="Instagram"
            >
              {/* Inline SVG for Instagram */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
              </svg>
            </motion.a>
            <motion.a
              href="#"
              className="bg-surface-container-high p-3 rounded-full shadow-md text-on-surface-variant"
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 4px 8px rgba(0,0,0,0.15)",
                backgroundColor: "rgba(103, 80, 164, 0.08)",
              }}
              whileTap={{
                scale: 0.9,
                backgroundColor: "rgba(103, 80, 164, 0.12)",
              }}
              transition={expressiveEffectsTransition}
              aria-label="Facebook"
            >
              {/* Inline SVG for Facebook */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="none"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </motion.a>
            <motion.a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-surface-container-high p-3 rounded-full shadow-md text-on-surface-variant"
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 4px 8px rgba(0,0,0,0.15)",
                backgroundColor: "rgba(103, 80, 164, 0.08)",
              }}
              whileTap={{
                scale: 0.9,
                backgroundColor: "rgba(103, 80, 164, 0.12)",
              }}
              transition={expressiveEffectsTransition}
              aria-label="WhatsApp"
            >
              {/* Inline SVG for WhatsApp */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="none"
              >
                <path d="M12.04 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.77.46 3.45 1.34 4.96L2.05 22l5.1-1.32c1.44.75 3.09 1.16 4.89 1.16 5.46 0 9.9-4.44 9.9-9.9S17.5 2 12.04 2zm5.78 14.88c-.14.25-.56.41-.77.45-.19.04-.44.06-.69.02-.19-.03-1.12-.48-1.3-.64-.17-.16-.36-.25-.55-.16-.19.09-.73.45-.9.65-.17.2-.34.22-.63.07-.3-.15-1.25-.46-2.38-1.47-1.13-.99-1.89-2.23-2.11-2.59-.22-.36-.02-.56.12-.7-.13-.26-.26-.4-.39-.63-.12-.23-.03-.43.08-.62.1-.2.23-.28.32-.43.09-.15.04-.28-.02-.4-.06-.12-.6-.24-.86-.3-.26-.06-.5-.04-.77.06-.27.1-.7.25-.97.4-.27.16-.62.33-.85.49-.23.16-.48.24-.72.33-.24.09-.4.18-.55.24-.15.06-.32.12-.49.12-.19 0-.38-.07-.58-.23-.2-.16-.5-.22-1.02-.45-.52-.23-.88-.4-.98-.44-.1-.04-.26-.1-.5-.1-.23 0-.46.06-.69.19-.23.13-.57.29-.68.39-.1.1-.2.2-.28.33-.08.13-.15.28-.15.43-.01.15.15.34.33.58.18.24.4.45.62.66.22.2.46.4.7.6.24.2.46.38.7.53.23.16.48.3.73.44.25.14.48.25.72.37.24.11.45.2.66.28.2.08.4.15.6.21.2.06.4.08.6.08.27 0 .52-.07.72-.15.2-.08.5-.24.58-.33.08-.09.2-.2.3-.3.1-.1.2-.2.28-.27.09-.07.2-.14.27-.14s.18.02.32.09c.14.07.3.17.47.28.17.1.35.2.53.28.18.09.35.15.53.15.23 0 .42-.04.59-.11.17-.07.36-.18.52-.3.16-.12.3-.26.43-.4.13-.14.24-.29.35-.43.11-.14.22-.28.3-.43.09-.15.17-.3.26-.45.09-.16.16-.32.22-.48.06-.16.1-.32.1-.48-.01-.01-.01-.01-.01-.02z" />
              </svg>
            </motion.a>
          </div>
        </motion.div>

        {/* Right Sections: Quick Links, Contact, Vision (separated for visual interest) */}
        <div className="md:col-span-2 lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-10">
          {" "}
          {/* Takes less space, but is also a grid */}
          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-title-large font-roboto-medium text-on-surface mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3 text-body-large text-on-surface-variant">
              {" "}
              {/* Increased spacing and text size */}
              <li>
                <a
                  href="#home"
                  className="hover:text-primary transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-primary transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="hover:text-primary transition-colors"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#industries"
                  className="hover:text-primary transition-colors"
                >
                  Industries
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-primary transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#certificates"
                  className="hover:text-primary transition-colors"
                >
                  Certifications
                </a>
              </li>
            </ul>
          </motion.div>
          {/* Contact Details */}
          <motion.div variants={itemVariants}>
            <h3 className="text-title-large font-roboto-medium text-on-surface mb-4">
              Contact
            </h3>
            <ul className="space-y-3 text-body-large text-on-surface-variant">
              {" "}
              {/* Increased spacing and text size */}
              <li>
                📞{" "}
                <a
                  href="tel:+919876543210"
                  className="hover:text-primary transition-colors"
                >
                  +91 98765 43210
                </a>
              </li>
              <li>
                📧{" "}
                <a
                  href="mailto:contact@esscore.com"
                  className="hover:text-primary transition-colors"
                >
                  contact@esscore.com
                </a>
              </li>
              <li>📍 Mumbai, Maharashtra, India</li>
            </ul>
          </motion.div>
          {/* Our Vision - Now a separate column or row on smaller screens */}
          <motion.div
            variants={itemVariants}
            className="sm:col-span-2 lg:col-span-2"
          >
            {" "}
            {/* Spans full width on sm, and full row on lg */}
            <h3 className="text-title-large font-roboto-medium text-on-surface mb-4">
              Our Vision
            </h3>
            <p className="text-body-large text-on-surface-variant leading-relaxed">
              Committed to innovation and sustainable practices, we envision a
              future where industries thrive with ethical and high-quality raw
              materials, making a positive global impact.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar: Copyright */}
      <div className="bg-primary py-6 px-6 border-t border-outline/20 relative z-10">
        <div className="container mx-auto text-center text-label-medium text-on-primary">
          <motion.p variants={itemVariants}>
            &copy; {new Date().getFullYear()} Esscore Industries. All rights
            reserved.
          </motion.p>
        </div>
      </div>
    </motion.footer>
  );
}
