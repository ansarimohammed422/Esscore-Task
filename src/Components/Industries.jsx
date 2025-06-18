import React, { useEffect, useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import PharmaImg from "../assets/Pharmaceuticals.jpg";
import FoodImg from "../assets/Food-Beverages.jpg";
import NutraImg from "../assets/Nutraceuticals.jpg";
import CosmeticImg from "../assets/Cosmetics.jpg";
import AgroImg from "../assets/AgroInd.jpg";
import PaintImg from "../assets/PantInd.jpg";

const industriesData = [
  {
    title: "Pharma",
    image: PharmaImg,
    description:
      "High-purity APIs and excipients for safe and effective pharmaceuticals.",
    color: "#EADDFF",
    textColor: "#21005D",
  },
  {
    title: "Food & Beverage",
    image: FoodImg,
    description: "Additives that enhance flavor, shelf life, and quality.",
    color: "#E8DEF8",
    textColor: "#1D192B",
  },
  {
    title: "Nutraceutical",
    image: NutraImg,
    description: "Bioactive compounds like vitamins and herbal extracts.",
    color: "#FFD8E4",
    textColor: "#31111D",
  },
  {
    title: "Cosmetics",
    image: CosmeticImg,
    description: "Emollients, surfactants, and actives for beauty products.",
    color: "#6750A4",
    textColor: "#FFFFFF",
  },
  {
    title: "Agrochemicals",
    image: AgroImg,
    description: "Fertilizers and pesticides for improved crop yield.",
    color: "#625B71",
    textColor: "#FFFFFF",
  },
  {
    title: "Paints & Coatings",
    image: PaintImg,
    description: "Binders and pigments for vibrant and durable coatings.",
    color: "#7D5260",
    textColor: "#FFFFFF",
  },
];

const IndustriesGrid = () => {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 2]);

  useEffect(() => {
    const updateMobile = () => setIsMobile(window.innerWidth < 768);
    updateMobile();
    window.addEventListener("resize", updateMobile);
    return () => window.removeEventListener("resize", updateMobile);
  }, []);

  const cardVariants = {
    hidden: (i) => ({
      opacity: 0,
      x: i % 2 === 0 ? -60 : 60,
      scale: 0.95,
      rotate: i % 2 === 0 ? -2 : 2,
    }),
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 18,
        mass: 0.8,
      },
    },
  };

  const contentVariants = {
    collapsed: {
      opacity: 0,
      y: 30,
      scale: 0.95,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    expanded: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const getCardSize = (i) => {
    if (i === 0) return "md:col-span-2";
    if (i === 2) return "md:row-span-2";
    return "";
  };

  return (
    <motion.section
      ref={containerRef}
      className="relative py-16 px-4 bg-surface overflow-hidden"
      initial="hidden"
      whileInView="visible"
      id="industries"
      viewport={{ once: true }}
    >
      <motion.div
        style={{ y: y1, rotate }}
        className="absolute -left-40 -top-40 w-96 h-96 rounded-full bg-secondary/30 blur-3xl"
      />
      <motion.div
        style={{ y: y2, rotate }}
        className="absolute -right-40 -bottom-40 w-96 h-96 rounded-full bg-tertiary/30 blur-3xl"
      />

      <div className="container mx-auto text-center mb-16 relative z-10">
        <motion.h2
          className="text-display text-4xl font-bold text-primary mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Industries We Serve
        </motion.h2>
        <motion.p
          className="text-body text-on-surface max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          Diverse sectors rely on us for quality ingredients and innovation.
        </motion.p>
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 auto-rows-[minmax(250px,auto)] gap-6 relative z-10">
        {industriesData.map((industry, index) => {
          const [hovered, setHovered] = useState(false);
          const [tapped, setTapped] = useState(false);
          const isActive = hovered || (isMobile && tapped);
          const cardSize = getCardSize(index);

          return (
            <motion.div
              key={industry.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`relative bg-surface-container-high rounded-3xl overflow-hidden shadow-elevation transition-all cursor-pointer ${cardSize}`}
              onHoverStart={() => !isMobile && setHovered(true)}
              onHoverEnd={() => !isMobile && setHovered(false)}
              onClick={() => isMobile && setTapped((prev) => !prev)}
              whileHover={!isMobile ? { scale: 1.03, zIndex: 10 } : {}}
              transition={{ layout: { duration: 0.3, ease: "easeInOut" } }}
            >
              <div className="relative h-full w-full">
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                <h3 className="absolute bottom-4 left-6 text-white text-title font-semibold">
                  {industry.title}
                </h3>
              </div>

              <AnimatePresence mode="wait">
                {isActive && (
                  <motion.div
                    className="absolute bottom-0 w-full p-6 bg-surface-container-high/95 backdrop-blur-lg rounded-b-3xl shadow-inner"
                    initial="collapsed"
                    animate="expanded"
                    exit="collapsed"
                    variants={contentVariants}
                  >
                    <p className="text-body text-on-surface mb-4">
                      {industry.description}
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        backgroundColor: industry.color,
                        color: industry.textColor,
                      }}
                      className="px-5 py-2 rounded-xl font-medium shadow-md"
                    >
                      Explore Solutions
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
};

export default IndustriesGrid;
