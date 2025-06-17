import React from "react";
import { motion } from "framer-motion";
import { IoLogoWhatsapp } from "react-icons/io5";
export default function WAFloat() {
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

  return (
    <motion.a
      href="https://wa.me/919999999999" // Example WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp Chat"
      className="fixed bottom-6 right-6 z-[9999] flex items-center justify-center p-4 rounded-full shadow-xl cursor-pointer bg-tertiary text-on-tertiary" // M3E colors, shadow, rounded-full
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
      {/* Inline SVG for WhatsApp icon */}
      <IoLogoWhatsapp size={40} />
    </motion.a>
  );
}
