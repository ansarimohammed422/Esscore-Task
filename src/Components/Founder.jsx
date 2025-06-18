import React from "react";
import { motion } from "framer-motion";
import founderImg from "../assets/Founder.jpg";

export default function Founder() {
  const expressiveSpatialTransition = {
    type: "spring",
    stiffness: 200,
    damping: 20,
    mass: 1,
    velocity: 0,
  };

  const expressiveEffectsTransition = {
    type: "spring",
    stiffness: 300,
    damping: 25,
    mass: 0.8,
    velocity: 0,
  };

  return (
    <section className="relative flex items-center justify-center w-full min-h-screen px-4 py-16 md:px-8 overflow-hidden bg-surface-variant font-roboto">
      {/* Decorative Blur Circles */}
      <motion.div
        initial={{ x: -80, y: -80, opacity: 0 }}
        whileInView={{ x: 0, y: 0, opacity: 0.2 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className="absolute top-0 left-0 z-0 w-72 h-72 bg-primary-container rounded-full blur-3xl"
      />
      <motion.div
        initial={{ x: 80, y: 80, opacity: 0 }}
        whileInView={{ x: 0, y: 0, opacity: 0.2 }}
        transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="absolute bottom-0 right-0 z-0 w-72 h-72 bg-secondary-container rounded-full blur-3xl"
      />

      <div className="relative z-10 grid max-w-7xl grid-cols-1 gap-12 mx-auto items-center lg:grid-cols-2">
        {/* Left: Founder's Image */}
        <motion.div
          initial={{ x: -100, opacity: 0, scale: 0.9 }}
          whileInView={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ ...expressiveSpatialTransition, delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
          className="relative w-full h-[400px] md:h-[550px] overflow-hidden rounded-xl-inc shadow-2xl bg-surface-container-high"
        >
          <img
            src={founderImg}
            alt="Founder and team working together"
            className="object-cover object-center w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-scrim/30 to-transparent" />
        </motion.div>

        {/* Right: Founder's Message */}
        <motion.div
          initial={{ x: 100, opacity: 0, scale: 0.9 }}
          whileInView={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ ...expressiveSpatialTransition, delay: 0.3 }}
          viewport={{ once: true, amount: 0.5 }}
          className="p-8 space-y-6 text-center border rounded-xl-inc shadow-xl bg-surface-container-highest sm:p-12 lg:text-left border-outline/20"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ...expressiveEffectsTransition, delay: 0.4 }}
            viewport={{ once: true }}
            className="font-roboto-medium text-display-sm md:text-display-md text-on-background"
          >
            A Message From Our <span className="text-primary">Founder</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ...expressiveEffectsTransition, delay: 0.5 }}
            viewport={{ once: true }}
            className="relative font-light leading-relaxed text-body-lg md:text-headline-sm text-on-surface-variant"
          >
            <span className="absolute text-5xl text-primary opacity-70 -left-2 -top-4">
              “
            </span>
            At Esscore Foundation, our journey began with a singular vision: to
            empower industries worldwide with unparalleled access to compliant,
            high-quality chemical ingredients. We are dedicated to fostering
            partnerships built on trust, integrity, and a relentless pursuit of
            innovation.
            <span className="absolute text-5xl text-primary opacity-70 -right-2 -bottom-4">
              ”
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ...expressiveEffectsTransition, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-4 font-roboto-medium text-title-md text-on-surface-variant"
          >
            — Mr. Kiran Madhyan, Founder & Director
          </motion.div>

          <motion.a
            href="/message"
            className="inline-flex items-center justify-center px-8 py-3 font-roboto-medium text-label-lg text-on-primary bg-primary rounded-lg-inc shadow-md group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ...expressiveEffectsTransition, delay: 0.7 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Read Full Message</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2 transition-transform duration-150 group-hover:translate-x-1"
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
