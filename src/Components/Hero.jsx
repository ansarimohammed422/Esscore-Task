import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import bg1 from "../assets/bg1.jpg";
import bg2 from "../assets/bg2.png";
import bg3 from "../assets/bg3.png";
import bg4 from "../assets/bg4.jpg";

const slides = [
  { image: bg1, headline: "Transformative" },
  { image: bg2, headline: "Pharmaceutical" },
  { image: bg3, headline: "Nutritional" },
  { image: bg4, headline: "Innovative" },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isThumbnailHovered, setIsThumbnailHovered] = useState(false);
  const [height, setHeight] = useState(0);
  const containerRef = useRef(null);
  const scrollTimerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const expressiveSpatialTransition = {
    type: "spring",
    stiffness: 160,
    damping: 22,
    mass: 1,
    velocity: 0,
  };

  const expressiveEffectsTransition = {
    type: "spring",
    stiffness: 240,
    damping: 26,
    mass: 1,
    velocity: 0,
  };

  useEffect(() => {
    const updateHeight = () => setHeight(window.innerHeight);
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimerRef.current);
      scrollTimerRef.current = setTimeout(() => setIsScrolling(false), 700);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimerRef.current);
    };
  }, []);

  const handleImageChange = (index) => {
    if (index !== currentIndex && !isScrolling) {
      setCurrentIndex(index);
      setIsThumbnailHovered(false);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (isHeroVisible && !isScrolling && !isThumbnailHovered) {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [isHeroVisible, isScrolling, isThumbnailHovered]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsHeroVisible(entry.intersectionRatio > 0.7),
      { threshold: [0.7] }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden"
      ref={containerRef}
    >
      <motion.div
        className="absolute inset-0"
        animate={{ y: -currentIndex * height }}
        transition={expressiveSpatialTransition}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="absolute w-full h-screen bg-cover bg-center"
            style={{
              backgroundImage: `url(${slide.image})`,
              top: `${index * 100}%`,
            }}
          />
        ))}
      </motion.div>

      <div className="absolute inset-0 bg-background/70 z-10" />

      <div className="relative z-20 container mx-auto flex flex-col lg:flex-row items-center justify-center lg:justify-between h-full px-4 md:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ...expressiveSpatialTransition, delay: 0.2 }}
          className="p-6 md:p-12 lg:p-20 w-full lg:w-[70%] bg-surface-container-highest/80 backdrop-blur-xl rounded-2xl border border-outline/50 text-on-surface shadow-lg mb-8 lg:mb-0"
        >
          <AnimatePresence mode="wait">
            <motion.h1
              key={slides[currentIndex].headline + "-title"}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={expressiveEffectsTransition}
              className="text-display-md font-roboto-medium mb-4"
            >
              {slides[currentIndex].headline} Ingredients, Global Impact
            </motion.h1>
          </AnimatePresence>

          <p className="text-body-lg text-on-surface mb-6 font-roboto">
            Delivering quality, compliance, and custom sourcing for pharma,
            food, cosmetics, and more.
          </p>

          <div className="flex flex-wrap gap-3">
            <motion.button
              whileHover={{ backgroundColor: "rgba(103, 80, 164, 0.08)" }}
              whileTap={{ backgroundColor: "rgba(103, 80, 164, 0.12)" }}
              transition={expressiveEffectsTransition}
              className="px-4 py-2 md:px-6 md:py-3 bg-surface-container border border-outline text-primary rounded-lg font-roboto-medium text-label-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              Request a Sample
            </motion.button>

            <motion.button
              whileHover={{ backgroundColor: "rgba(103, 80, 164, 0.08)" }}
              whileTap={{ backgroundColor: "rgba(103, 80, 164, 0.12)" }}
              transition={expressiveEffectsTransition}
              className="px-4 py-2 md:px-6 md:py-3 bg-surface-container border border-outline text-primary rounded-lg font-roboto-medium text-label-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              Get Datasheet
            </motion.button>

            <motion.button
              whileHover={{ backgroundColor: "rgba(103, 80, 164, 0.12)" }}
              whileTap={{ backgroundColor: "rgba(103, 80, 164, 0.16)" }}
              transition={expressiveEffectsTransition}
              className="px-4 py-2 md:px-6 md:py-3 bg-primary text-on-primary rounded-lg font-roboto-medium text-label-lg focus:outline-none focus:ring-2 focus:ring-primary-container/50"
            >
              WhatsApp Now
            </motion.button>
          </div>
        </motion.div>

        <div
          className="flex flex-row lg:flex-col gap-4"
          onMouseEnter={() => setIsThumbnailHovered(true)}
          onMouseLeave={() => setIsThumbnailHovered(false)}
        >
          {slides.map((item, index) => (
            <motion.div
              key={item.headline}
              className="flex items-center gap-3 group cursor-pointer"
              onClick={() => handleImageChange(index)}
              initial={{
                opacity: 0,
                x: isMobile ? 0 : 50,
                y: isMobile ? 50 : 0,
              }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{
                ...expressiveSpatialTransition,
                delay: 0.2 + index * 0.1,
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span
                className={`hidden lg:block text-on-surface font-roboto-medium transition-all duration-300 mr-3 ${
                  index === currentIndex
                    ? "opacity-100 scale-105 text-white"
                    : "opacity-70 group-hover:opacity-100 text-white/50"
                } text-title-md`}
              >
                {item.headline}
              </span>

              <div className="relative">
                <img
                  src={item.image}
                  className={`w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full object-cover border-4 transition-all duration-300 ${
                    index === currentIndex
                      ? "border-primary scale-110"
                      : "border-outline group-hover:scale-105"
                  }`}
                  alt={`${item.headline} industry`}
                />
                <span className="absolute inset-0 bg-primary/8 rounded-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
