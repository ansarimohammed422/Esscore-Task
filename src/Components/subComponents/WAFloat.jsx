// import React from "react";
// import { motion } from "framer-motion";
// import { IoLogoWhatsapp } from "react-icons/io5";
// export default function WAFloat() {
//   // Define M3 Expressive spring transitions for Framer Motion
//   const expressiveSpatialTransition = {
//     type: "spring",
//     stiffness: 200, // For smooth spatial transitions
//     damping: 20,
//     mass: 1,
//     velocity: 0,
//   };

//   const expressiveEffectsTransition = {
//     type: "spring",
//     stiffness: 300, // For quicker effects (e.g., button hovers)
//     damping: 25,
//     mass: 0.8,
//     velocity: 0,
//   };

//   return (
//     <motion.a
//       href="https://wa.me/919999999999" // Example WhatsApp number
//       target="_blank"
//       rel="noopener noreferrer"
//       aria-label="WhatsApp Chat"
//       className="fixed bottom-3 right-3 z-[9999] flex items-center justify-center p-4 rounded-full shadow-xl cursor-pointer bg-tertiary text-on-tertiary" // M3E colors, shadow, rounded-full
//       initial={{ opacity: 0, y: 100 }} // Starts off-screen below
//       animate={{ opacity: 1, y: 0 }} // Slides up into view
//       transition={{ ...expressiveSpatialTransition, delay: 0.8 }} // Delayed entrance
//       whileHover={{
//         scale: 1.1, // Scale up more prominently
//         boxShadow: "0px 10px 20px rgba(0,0,0,0.3)", // Higher elevation shadow
//         y: -5, // Slight lift on hover
//       }}
//       whileTap={{ scale: 0.9 }} // Shrink on tap
//     >
//       {/* Inline SVG for WhatsApp icon */}
//       <IoLogoWhatsapp size={24} />
//     </motion.a>
//   );
// }

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import AnimatePresence
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaArrowUp } from "react-icons/fa"; // Import a scroll-to-top icon

export default function WAFloat() {
  // State to manage the visibility of the scroll-to-top button
  const [showScrollToTop, setShowScrollToTop] = useState(false);

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

  // --- Scroll-to-Top Logic ---
  useEffect(() => {
    const handleScroll = () => {
      // Show button if scrolled down more than 300px
      if (window.scrollY > 300) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array means this runs once on mount and cleans up on unmount

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling animation
    });
  };

  return (
    <>
      {/* WhatsApp Floating Button */}
      <motion.a
        href="https://wa.me/919999999999" // Example WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Chat"
        className="fixed bottom-3 right-3 z-[9999] flex items-center justify-center p-4 rounded-full shadow-xl cursor-pointer bg-tertiary text-on-tertiary" // M3E colors, shadow, rounded-full
        initial={{ opacity: 0, y: 100 }} // Starts off-screen below
        animate={{ opacity: 1, y: 0 }} // Slides up into view
        transition={{ ...expressiveSpatialTransition, delay: 0.8 }} // Delayed entrance
        whileHover={{
          scale: 1.1, // Scale up more prominently
          boxShadow: "0px 10px 20px rgba(0,0,0,0.3)", // Higher elevation shadow
          y: -5, // Slight lift on hover
        }}
        whileTap={{ scale: 0.9 }} // Shrink on tap
      >
        <IoLogoWhatsapp size={24} />
      </motion.a>

      {/* --- Scroll-to-Top Floating Button --- */}
      <AnimatePresence>
        {showScrollToTop && (
          <motion.button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="fixed bottom-[80px] right-3 z-[9998] flex items-center justify-center p-4 rounded-full shadow-xl cursor-pointer bg-primary text-on-primary" // M3E colors, shadow, rounded-full, slightly higher z-index than WhatsApp for layering
            initial={{ opacity: 0, y: 100 }} // Starts off-screen below
            animate={{ opacity: 1, y: 0 }} // Slides up into view
            exit={{ opacity: 0, y: 100 }} // Slides down off-screen when hidden
            transition={{ ...expressiveSpatialTransition }} // Immediate entrance (no delay)
            whileHover={{
              scale: 1.1, // Scale up more prominently
              boxShadow: "0px 10px 20px rgba(0,0,0,0.3)", // Higher elevation shadow
              y: -5, // Slight lift on hover
            }}
            whileTap={{ scale: 0.9 }} // Shrink on tap
          >
            <FaArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
