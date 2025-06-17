// import React, { useState } from "react";
// import FSSAI from "../assets/FSSAI.webp";
// import ISO from "../assets/ISO.jpg";
// import GMP from "../assets/GMP.png";
// import { IoArrowRedoOutline } from "react-icons/io5";
// import { Link } from "react-router-dom";

// function Certificates() {
//   const [activeTab, setActiveTab] = useState("fssai");

//   const certificates = [
//     {
//       id: "fssai",
//       title: "FSSAI Certified",
//       image: FSSAI,
//       description:
//         "Our FSSAI certification signifies strict compliance with India's food safety regulations. This ensures that all food-grade and nutraceutical ingredients we source, store, and supply meet hygiene, purity, and labeling standards as mandated by the Food Safety and Standards Authority of India. Clients working in edible and health-related sectors can trust the integrity and traceability of every batch.",
//     },
//     {
//       id: "iso",
//       title: "ISO 9001:2015 Certified",
//       image: ISO,
//       description:
//         "ISO 9001:2015 certification demonstrates that Esscore operates under a robust Quality Management System (QMS). It validates our ability to consistently provide products and services that meet customer and regulatory requirements. This global standard ensures our internal processes are transparent, audited, and continuously improved — empowering clients with confidence in every delivery.",
//     },
//     {
//       id: "gmp",
//       title: "GMP Compliant",
//       image: GMP,
//       description:
//         "Our compliance with Good Manufacturing Practices (GMP) ensures that all materials handled by Esscore are sourced, processed, and distributed under controlled environments. This guarantees product safety, identity, strength, quality, and purity. Especially critical for pharmaceutical, cosmetic, and food-related industries, GMP compliance reassures our partners of consistent product integrity across every supply cycle.",
//     },
//   ];
//   const activeCert = certificates.find((cert) => cert.id === activeTab);

//   return (
//     <section id="certificates" className=" ">
//       <div className="container mx-auto p-5 ">
//         <div className=" py-10 my-20 rounded-3xl bg-blue-50 shadow-xl text-center">
//           <h2 className="text-5xl font-bold text-blue-500 mb-4">
//             Certifications
//           </h2>
//           <p className="text-gray-600 text-lg mb-10">
//             Our credentials ensure global compliance, quality, and customer
//             confidence.
//           </p>

//           {/* Tabs */}
//           <div className="flex justify-center gap-6 mb-8 flex-wrap">
//             {certificates.map((cert) => (
//               <button
//                 key={cert.id}
//                 onClick={() => setActiveTab(cert.id)}
//                 className={`px-6 py-2 rounded-full text-sm sm:text-base border font-semibold transition-all duration-200 ${
//                   activeTab === cert.id
//                     ? "bg-blue-500 text-white border-blue-500"
//                     : "bg-white text-blue-500 border-blue-300 hover:bg-blue-100"
//                 }`}
//               >
//                 {cert.title}
//               </button>
//             ))}
//           </div>

//           {/* Content */}
//           <div className="max-w-5xl mx-auto flex flex-col items-center gap-6 px-4">
//             <img
//               src={activeCert.image}
//               alt={activeCert.title}
//               className="w-60 h-96 object-contain"
//             />
//             <h3 className="text-2xl font-semibold text-blue-700">
//               {activeCert.title}
//             </h3>
//             <p className="text-gray-700 text-md leading-relaxed text-justify">
//               {activeCert.description}
//             </p>

//             <Link
//               to="/certificates"
//               className="flex group text-xl items-center gap-2 w-fit text-blue-500 font-medium transition-transform duration-150 ease-in-out hover:translate-x-2"
//             >
//               View All Certificates{" "}
//               <IoArrowRedoOutline
//                 className="inline-block duration-150 ease-in-out group-hover:rotate-180"
//                 size={18}
//               />
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Certificates;

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
