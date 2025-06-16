import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import bg1 from "../assets/bg1.jpg";
import bg2 from "../assets/bg2.png";
import bg3 from "../assets/bg3.png";
import bg4 from "../assets/bg4.jpg";

const slides = [
  {
    image: bg1, // Capsules
    headline: "Transformative",
  },
  {
    image: bg2, // Beakers
    headline: "Pharmaceutical",
  },
  {
    image: bg3, // Food powders
    headline: "Nutritional",
  },
  {
    image: bg4, // Cosmetic ingredients
    headline: "Innovative",
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isThumbnailHovered, setIsThumbnailHovered] = useState(false); // 🔥 New state
  const [height, setHeight] = useState(0);
  const containerRef = useRef();
  const scrollTimerRef = useRef(null);

  // Calculate the height of the viewport
  useEffect(() => {
    const updateHeight = () => {
      setHeight(window.innerHeight);
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  // Set up scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
      if (scrollTimerRef.current) {
        clearTimeout(scrollTimerRef.current);
      }
      scrollTimerRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 700);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimerRef.current) {
        clearTimeout(scrollTimerRef.current);
      }
    };
  }, []);

  const handleImageChange = (index) => {
    if (index === currentIndex || isScrolling) return;
    setCurrentIndex(index);
    setIsThumbnailHovered(false); // 🔥 Resume auto-transition on click
  };

  // Auto-rotate background images
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHeroVisible || isScrolling || isThumbnailHovered) return; // 🔥 Condition updated
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isHeroVisible, isScrolling, isThumbnailHovered]);

  // Intersection Observer for hero visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeroVisible(entry.intersectionRatio > 0.7);
      },
      { threshold: [0.7] },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  return (
    <section
      id="#"
      className="relative h-screen w-full overflow-hidden"
      ref={containerRef}
    >
      {/* Vertical Carousel Container */}
      <motion.div
        className="absolute inset-0"
        animate={{ y: -currentIndex * height }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 300,
          duration: 1,
        }}
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

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-10 " />

      {/* Content & Thumbnails */}
      <div className="relative z-20 container mx-auto flex flex-col lg:flex-row items-center justify-center lg:justify-between h-full px-4 md:px-8 lg:px-16">
        {/* Hero Text Card */}
        <div className="p-6 md:p-12 lg:p-20 w-full lg:w-[70%] bg-black/20 backdrop-blur-xl rounded-3xl border border-white/30 text-white shadow-lg mb-8 lg:mb-0">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Transformative Ingredients, Global Impact
          </h1>
          <p className="text-lg text-blue-200 md:text-xl mb-6">
            Delivering quality, compliance, and custom sourcing for pharma,
            food, cosmetics, and more.
          </p>
          <div className="flex flex-wrap gap-3">
            <button className="px-4 py-2 md:px-6 md:py-3 bg-white/10 border border-white/30 text-blue-200 rounded-lg hover:bg-white/20 transition focus:outline-none focus:ring-2 focus:ring-white/50">
              Request a Sample
            </button>
            <button className="px-4 py-2 md:px-6 md:py-3 bg-white/10 border border-white/30 text-blue-200 rounded-lg hover:bg-white/20 transition focus:outline-none focus:ring-2 focus:ring-white/50">
              Get Datasheet
            </button>
            <button className="px-4 py-2 md:px-6 md:py-3 bg-green-500/80 hover:bg-green-500 border border-white/30 rounded-lg transition focus:outline-none focus:ring-2 focus:ring-green-300">
              WhatsApp Now
            </button>
          </div>
        </div>

        {/* Thumbnails with Headlines */}
        <div
          className="flex flex-row lg:flex-col gap-4"
          onMouseEnter={() => setIsThumbnailHovered(true)} // 🔥 Pause on hover
          onMouseLeave={() => setIsThumbnailHovered(false)} // 🔥 Resume on leave
        >
          {slides.map((item, index) => (
            <div
              key={item.headline}
              className="flex items-center gap-3 group cursor-pointer"
              onClick={() => handleImageChange(index)}
            >
              {/* Headline Text */}
              <span
                className={`hidden lg:block text-white font-medium transition-all duration-300 mr-3 ${
                  index === currentIndex
                    ? "opacity-100 scale-105"
                    : "opacity-70 group-hover:opacity-100"
                }`}
              >
                {item.headline}
              </span>

              {/* Thumbnail Image */}
              <div className="relative">
                <img
                  src={item.image}
                  className={`w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full object-cover border-2 transition-all duration-300 ${
                    index === currentIndex
                      ? "border-blue-400 scale-110"
                      : "border-transparent group-hover:scale-105"
                  }`}
                  alt={`${item.headline} industry`}
                />
                <span className="absolute inset-0 bg-black/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
