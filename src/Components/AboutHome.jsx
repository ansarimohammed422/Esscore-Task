import React from "react";
import { motion } from "framer-motion";
import { Users, Briefcase, Sparkles } from "lucide-react";
import abtImg from "../assets/AboutImage.jpg";

export default function AboutUsSectionNewLayout() {
  const springConfig = {
    type: "spring",
    stiffness: 150,
    damping: 24,
    mass: 0.9,
    restSpeed: 0.01,
    restDelta: 0.01,
  };

  return (
    <section className="relative w-full py-16 px-4 md:px-8 min-h-screen flex items-center justify-center bg-surface-container-lowest font-roboto overflow-hidden">
      {/* Decorative Blur Circles */}
      <motion.div
        id="about"
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

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:items-start">
        {/* Image Side */}
        <div style={{ perspective: "1200px" }}>
          <motion.div
            initial={{ x: 100, opacity: 0, rotateY: -15 }}
            whileInView={{ x: 0, opacity: 1, rotateY: 0 }}
            transition={{ ...springConfig, delay: 0.2 }}
            viewport={{ once: true, amount: 0.4 }}
            className="relative w-full h-[450px] md:h-[600px] bg-surface-container-high rounded-2xl overflow-hidden shadow-2xl"
          >
            <img
              src={abtImg}
              alt="Esscore Foundation team members collaborating"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl" />
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ ...springConfig, delay: 0.5 }}
              viewport={{ once: true, amount: 0.5 }}
              className="absolute bottom-6 left-6 right-6 p-6 bg-primary-container/90 backdrop-blur-sm rounded-xl-inc text-on-primary-container text-title-md md:text-headline-sm font-roboto-medium shadow-lg"
            >
              "Innovation, Quality, Partnership: The Esscore Promise."
            </motion.div>
          </motion.div>
        </div>

        {/* Text Side */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <motion.h2
            className="text-display-sm md:text-display-md text-on-background mb-4 font-roboto-medium"
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={springConfig}
            viewport={{ once: true, amount: 0.5 }}
          >
            Unveiling <span className="text-primary">Our Journey</span>
          </motion.h2>

          <motion.p
            className="text-headline-md md:text-title-lg text-on-surface-variant mb-8 max-w-xl lg:max-w-none"
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ...springConfig, delay: 0.1 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            At Esscore Foundation, we believe in building bridges, not just
            supply chains. For years, we've dedicated ourselves to providing
            high-quality chemical and material solutions, fostering growth, and
            driving innovation across diverse industries.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 w-full">
            {[
              {
                Icon: Users,
                title: "Expert Team",
                desc: "Our diverse team of experts brings unparalleled knowledge and dedication to every project.",
                delay: 0.3,
                iconColor: "text-primary",
              },
              {
                Icon: Briefcase,
                title: "Global Network",
                desc: "Connecting you to a vast, reliable global network of trusted manufacturers and suppliers.",
                delay: 0.4,
                iconColor: "text-secondary",
              },
              {
                Icon: Sparkles,
                title: "Innovative Approach",
                desc: "Continuously exploring new solutions and technologies to meet tomorrow's demands.",
                delay: 0.5,
                iconColor: "text-tertiary",
              },
            ].map(({ Icon, title, desc, delay, iconColor }) => (
              <motion.div
                key={title}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ ...springConfig, delay }}
                viewport={{ once: true, amount: 0.5 }}
                className="bg-surface-container-high rounded-lg p-6 text-left shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <Icon className={`w-8 h-8 mb-3 ${iconColor}`} />
                <h3 className="text-title-md font-roboto-medium text-on-background mb-2">
                  {title}
                </h3>
                <p className="text-body-md text-on-surface-variant">{desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.button
            className="mt-12 px-8 py-4 flex items-center justify-center gap-2 bg-primary text-on-primary rounded-lg-inc text-label-lg font-roboto-medium shadow-md hover:shadow-lg transition-all duration-300"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ...springConfig, delay: 0.6 }}
            viewport={{ once: true, amount: 0.5 }}
            whileHover={{
              scale: 1.045,
              backgroundColor: "rgba(103, 80, 164, 0.9)",
            }}
            whileTap={{
              scale: 0.97,
              backgroundColor: "rgba(103, 80, 164, 1)",
            }}
          >
            Learn More About Us
          </motion.button>
        </div>
      </div>
    </section>
  );
}
