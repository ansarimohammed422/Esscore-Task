// import React from "react";
// import founderImg from "../assets/Founder.jpg";
// import { Link } from "react-router-dom";
// import { IoArrowRedoOutline } from "react-icons/io5";

// function Founder() {
//   return (
//     <section
//       style={{ backgroundImage: `url(${founderImg})` }}
//       className="h-screen w-screen bg-cover bg-center flex items-center justify-center"
//     >
//       {/* Overlay */}
//       <div className="flex items-center start w-full h-full bg-black/40">
//         <div className="container mx-auto p-5">
//           <div className="bg-white/10 backdrop-blur-md border border-white/30 shadow-2xl rounded-3xl max-w-4xl w-full p-8 sm:p-12 text-white text-center space-y-6">
//             {/* Heading */}
//             <h1 className="text-4xl md:text-5xl font-bold text-white">
//               Founder’s Message
//             </h1>

//             {/* Quote */}
//             <p className="text-lg md:text-xl leading-relaxed font-light relative">
//               <span className="text-5xl absolute left-0 -top-4 text-blue-300">
//                 “
//               </span>
//               Esscore was born out of a simple yet powerful idea — to make
//               quality chemical ingredients more accessible, compliant, and
//               dependable for industries that power the world. Every decision we
//               make is guided by trust, transparency, and technical excellence.
//               <span className="text-5xl absolute right-0 -bottom-4 text-blue-300">
//                 ”
//               </span>
//             </p>

//             {/* Name + Designation */}
//             <div className="mt-4 text-sm sm:text-base font-medium text-gray-200">
//               — Mr. Kiran Madhyan, Founder & Director
//             </div>

//             {/* CTA */}
//             <Link
//               to="/message"
//               className="inline-flex group items-center justify-center text-white hover:text-blue-200 text-lg transition duration-200"
//             >
//               <span>Read Full Message</span>
//               <IoArrowRedoOutline
//                 size={22}
//                 className="ml-2 transition-transform duration-150 group-hover:rotate-180"
//               />
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Founder;

import React from "react";
import { motion } from "framer-motion";
import founderImg from "../assets/Founder.jpg";

export default function Founder() {
  // Define M3 Expressive spring transitions for Framer Motion
  // These parameters are based on "Table 3: Material 3 Expressive Motion Physics Spring Parameters (Web Equivalents)"
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

  return (
    <section
      // Background using M3 surface-container-lowest for a clean base
      className="relative w-full py-16 px-4 md:px-8 min-h-screen flex items-center justify-center bg-surface-variant font-roboto overflow-hidden"
    >
      {/* Decorative Blur Circles (subtle motion, layered) */}
      <motion.div
        initial={{ y: -80, x: -80, opacity: 0 }}
        whileInView={{ y: 0, x: 0, opacity: 0.2 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className="absolute top-0 left-0 w-72 h-72 rounded-full bg-primary-container blur-3xl z-0"
      />
      <motion.div
        initial={{ y: 80, x: 80, opacity: 0 }}
        whileInView={{ y: 0, x: 0, opacity: 0.2 }}
        transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-secondary-container blur-3xl z-0"
      />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Founder's Image (prominent) */}
        <motion.div
          initial={{ x: -100, opacity: 0, scale: 0.9 }}
          whileInView={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ ...expressiveSpatialTransition, delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
          className="relative w-full h-[400px] md:h-[550px] rounded-xl-inc overflow-hidden shadow-2xl bg-surface-container-high"
        >
          {/* Dummy image of employees representing the founder's vision/team */}
          <img
            src={founderImg}
            alt="Founder and team working together"
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle gradient overlay on image for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-scrim/30 to-transparent" />
        </motion.div>

        {/* Right Side: Founder's Message Content Card */}
        <motion.div
          initial={{ x: 100, opacity: 0, scale: 0.9 }}
          whileInView={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ ...expressiveSpatialTransition, delay: 0.3 }}
          viewport={{ once: true, amount: 0.5 }}
          className="bg-surface-container-highest p-8 sm:p-12 rounded-xl-inc shadow-xl border border-outline/20 space-y-6 text-center lg:text-left" // M3E colors, shapes, shadow
        >
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ...expressiveEffectsTransition, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-display-sm md:text-display-md font-roboto-medium text-on-background" // M3E Typography and color
          >
            A Message From Our <span className="text-primary">Founder</span>
          </motion.h1>

          {/* Quote */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ...expressiveEffectsTransition, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-body-lg md:text-headline-sm leading-relaxed font-light relative text-on-surface-variant" // M3E Typography and color
          >
            <span className="text-5xl absolute -left-2 -top-4 text-primary opacity-70">
              “
            </span>
            At Esscore Foundation, our journey began with a singular vision: to
            empower industries worldwide with unparalleled access to compliant,
            high-quality chemical ingredients. We are dedicated to fostering
            partnerships built on trust, integrity, and a relentless pursuit of
            innovation.
            <span className="text-5xl absolute -right-2 -bottom-4 text-primary opacity-70">
              ”
            </span>
          </motion.p>

          {/* Name + Designation */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ...expressiveEffectsTransition, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-4 text-title-md font-roboto-medium text-on-surface-variant" // M3E Typography and color
          >
            — Mr. Kiran Madhyan, Founder & Director
          </motion.div>

          {/* CTA Button */}
          <motion.a
            href="/message" // Standard HTML link for navigation
            className="inline-flex group items-center justify-center px-8 py-3 bg-primary text-on-primary rounded-lg-inc text-label-lg font-roboto-medium shadow-md" // M3E styling
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ...expressiveEffectsTransition, delay: 0.7 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)", // M3E elevation
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Read Full Message</span>
            {/* Inline SVG for arrow icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2 transition-transform duration-150 group-hover:translate-x-1" // Subtle arrow animation
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M17.5 12H3M17.5 12L14 8.5M17.5 12L14 15.5" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
