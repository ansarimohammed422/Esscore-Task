import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useTransform,
  useScroll,
} from "framer-motion";
import FSSAI from "../assets/FSSAI.webp";
import ISO from "../assets/ISO.jpg";
import GMP from "../assets/GMP.png";
import { IoArrowRedoOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function Certificates() {
  const [activeTab, setActiveTab] = useState("fssai");
  const containerRef = React.useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax effects
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 5]);

  const certificates = [
    {
      id: "fssai",
      title: "FSSAI Certified",
      image: FSSAI,
      description: "Our FSSAI certification signifies...",
      color: "primary",
      iconScale: [1, 1.1, 1],
      iconRotate: [0, -5, 0],
    },
    {
      id: "iso",
      title: "ISO 9001:2015 Certified",
      image: ISO,
      description: "ISO 9001:2015 certification demonstrates...",
      color: "secondary",
      iconScale: [1, 1.2, 1],
      iconRotate: [0, 10, 0],
    },
    {
      id: "gmp",
      title: "GMP Compliant",
      image: GMP,
      description: "Our compliance with Good Manufacturing Practices...",
      color: "tertiary",
      iconScale: [1, 0.9, 1],
      iconRotate: [0, -15, 0],
    },
  ];

  const activeCert = certificates.find((cert) => cert.id === activeTab);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 50, opacity: 0 },
    show: (i = 1) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 50,
        mass: 0.5,
        delay: i * 0.15,
      },
    }),
  };

  const card = {
    enter: {
      y: 100,
      opacity: 0,
      transition: {
        duration: 0.8,
        ease: [0.33, 1, 0.68, 1],
      },
    },
    center: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.33, 1, 0.68, 1],
      },
    },
    exit: {
      y: -100,
      opacity: 0,
      transition: {
        duration: 0.6,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  };

  const floating = {
    float: {
      y: ["0%", "-10%", "0%"],
      transition: {
        duration: 6,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };

  return (
    <section
      id="certificates"
      ref={containerRef}
      className="relative bg-surface-container-lowest py-16 overflow-hidden"
    >
      {/* Background elements */}
      <motion.div
        style={{ y: y1, rotate }}
        className="absolute -left-40 -top-40 w-96 h-96 rounded-full bg-primary/10 blur-3xl"
      />
      <motion.div
        style={{ y: y2, rotate: rotate }}
        className="absolute -right-40 -bottom-40 w-96 h-96 rounded-full bg-secondary/10 blur-3xl"
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="container mx-auto px-4 relative z-10"
      >
        {/* Header */}
        <motion.div variants={item} custom={0} className="text-center mb-20">
          <motion.h2
            className="text-display-md font-roboto-medium text-on-background mb-6"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Our Certifications
          </motion.h2>
          <motion.p
            className="text-body-lg text-on-surface-variant max-w-2xl mx-auto"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            Rigorous standards that build trust across every partnership
          </motion.p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          variants={item}
          custom={1}
          className="flex justify-center gap-6 mb-20 flex-wrap"
        >
          {certificates.map((cert) => (
            <motion.button
              key={cert.id}
              onClick={() => setActiveTab(cert.id)}
              variants={item}
              custom={cert.id === "fssai" ? 1.5 : cert.id === "iso" ? 1.8 : 2.1}
              whileHover={{
                y: -8,
                scale: 1.05,
                backgroundColor: `var(--color-${cert.color})`,
                color: `var(--color-on-${cert.color})`,
              }}
              whileTap={{ scale: 0.9 }}
              className={`px-8 py-4 rounded-full text-title-md font-roboto-medium shadow-lg ${
                activeTab === cert.id
                  ? `bg-${cert.color} text-on-${cert.color}`
                  : "bg-surface-container-high text-on-surface-variant"
              }`}
            >
              {cert.title}
            </motion.button>
          ))}
        </motion.div>

        {/* Content */}
        <div className="max-w-6xl mx-auto min-h-[600px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={card}
              initial="enter"
              animate="center"
              exit="exit"
              className="flex flex-col md:flex-row items-center gap-12"
            >
              <motion.div
                variants={floating}
                animate="float"
                className="w-full md:w-1/2"
              >
                <motion.img
                  src={activeCert.image}
                  alt={activeCert.title}
                  className="w-full max-w-md mx-auto"
                  whileHover={{
                    scale: activeCert.iconScale,
                    rotate: activeCert.iconRotate,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 10,
                  }}
                />
              </motion.div>

              <div className="w-full md:w-1/2">
                <motion.h3
                  className={`text-title-xl font-roboto-medium text-${activeCert.color} mb-6`}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {activeCert.title}
                </motion.h3>
                <motion.p
                  className="text-body-lg text-on-surface-variant mb-8"
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  {activeCert.description}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <Link
                    to="/certificates"
                    className={`flex items-center gap-3 text-label-xl font-roboto-medium text-${activeCert.color} w-fit`}
                  >
                    <motion.span
                      whileHover={{ x: 10 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      Explore All Certifications
                    </motion.span>
                    <motion.span
                      animate={{
                        x: [0, 8, 0],
                        rotate: [0, 45, 0],
                      }}
                      transition={{
                        duration: 2,
                        ease: "easeInOut",
                        repeat: Infinity,
                      }}
                    >
                      <IoArrowRedoOutline size={24} />
                    </motion.span>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}

export default Certificates;
