// import { useEffect, useRef, useState } from "react";
// import { motion } from "framer-motion";
// import bg1 from "../assets/bg1.jpg";
// import bg2 from "../assets/bg2.png";
// import bg3 from "../assets/bg3.png";
// import bg4 from "../assets/bg4.jpg";

// const slides = [
//   {
//     image: bg1, // Capsules
//     headline: "Transformative",
//   },
//   {
//     image: bg2, // Beakers
//     headline: "Pharmaceutical",
//   },
//   {
//     image: bg3, // Food powders
//     headline: "Nutritional",
//   },
//   {
//     image: bg4, // Cosmetic ingredients
//     headline: "Innovative",
//   },
// ];

// export default function Hero() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isHeroVisible, setIsHeroVisible] = useState(true);
//   const [isScrolling, setIsScrolling] = useState(false);
//   const [isThumbnailHovered, setIsThumbnailHovered] = useState(false); // 🔥 New state
//   const [height, setHeight] = useState(0);
//   const containerRef = useRef();
//   const scrollTimerRef = useRef(null);

//   // Calculate the height of the viewport
//   useEffect(() => {
//     const updateHeight = () => {
//       setHeight(window.innerHeight);
//     };

//     updateHeight();
//     window.addEventListener("resize", updateHeight);
//     return () => window.removeEventListener("resize", updateHeight);
//   }, []);

//   // Set up scroll listener
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolling(true);
//       if (scrollTimerRef.current) {
//         clearTimeout(scrollTimerRef.current);
//       }
//       scrollTimerRef.current = setTimeout(() => {
//         setIsScrolling(false);
//       }, 700);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       if (scrollTimerRef.current) {
//         clearTimeout(scrollTimerRef.current);
//       }
//     };
//   }, []);

//   const handleImageChange = (index) => {
//     if (index === currentIndex || isScrolling) return;
//     setCurrentIndex(index);
//     setIsThumbnailHovered(false); // 🔥 Resume auto-transition on click
//   };

//   // Auto-rotate background images
//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (!isHeroVisible || isScrolling || isThumbnailHovered) return; // 🔥 Condition updated
//       setCurrentIndex((prev) => (prev + 1) % slides.length);
//     }, 4000);

//     return () => clearInterval(interval);
//   }, [isHeroVisible, isScrolling, isThumbnailHovered]);

//   // Intersection Observer for hero visibility
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setIsHeroVisible(entry.intersectionRatio > 0.7);
//       },
//       { threshold: [0.7] },
//     );

//     if (containerRef.current) {
//       observer.observe(containerRef.current);
//     }

//     return () => {
//       if (containerRef.current) observer.unobserve(containerRef.current);
//     };
//   }, []);

//   return (
//     <section
//       id="#"
//       className="relative h-screen w-full overflow-hidden"
//       ref={containerRef}
//     >
//       {/* Vertical Carousel Container */}
//       <motion.div
//         className="absolute inset-0"
//         animate={{ y: -currentIndex * height }}
//         transition={{
//           type: "spring",
//           damping: 20,
//           stiffness: 300,
//           duration: 1,
//         }}
//       >
//         {slides.map((slide, index) => (
//           <div
//             key={index}
//             className="absolute w-full h-screen bg-cover bg-center"
//             style={{
//               backgroundImage: `url(${slide.image})`,
//               top: `${index * 100}%`,
//             }}
//           />
//         ))}
//       </motion.div>

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/30 z-10 " />

//       {/* Content & Thumbnails */}
//       <div className="relative z-20 container mx-auto flex flex-col lg:flex-row items-center justify-center lg:justify-between h-full px-4 md:px-8 lg:px-16">
//         {/* Hero Text Card */}
//         <div className="p-6 md:p-12 lg:p-20 w-full lg:w-[70%] bg-black/20 backdrop-blur-xl rounded-3xl border border-white/30 text-white shadow-lg mb-8 lg:mb-0">
//           <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
//             Transformative Ingredients, Global Impact
//           </h1>
//           <p className="text-lg text-blue-200 md:text-xl mb-6">
//             Delivering quality, compliance, and custom sourcing for pharma,
//             food, cosmetics, and more.
//           </p>
//           <div className="flex flex-wrap gap-3">
//             <button className="px-4 py-2 md:px-6 md:py-3 bg-white/10 border border-white/30 text-blue-200 rounded-lg hover:bg-white/20 transition focus:outline-none focus:ring-2 focus:ring-white/50">
//               Request a Sample
//             </button>
//             <button className="px-4 py-2 md:px-6 md:py-3 bg-white/10 border border-white/30 text-blue-200 rounded-lg hover:bg-white/20 transition focus:outline-none focus:ring-2 focus:ring-white/50">
//               Get Datasheet
//             </button>
//             <button className="px-4 py-2 md:px-6 md:py-3 bg-green-500/80 hover:bg-green-500 border border-white/30 rounded-lg transition focus:outline-none focus:ring-2 focus:ring-green-300">
//               WhatsApp Now
//             </button>
//           </div>
//         </div>

//         {/* Thumbnails with Headlines */}
//         <div
//           className="flex flex-row lg:flex-col gap-4"
//           onMouseEnter={() => setIsThumbnailHovered(true)} // 🔥 Pause on hover
//           onMouseLeave={() => setIsThumbnailHovered(false)} // 🔥 Resume on leave
//         >
//           {slides.map((item, index) => (
//             <div
//               key={item.headline}
//               className="flex items-center gap-3 group cursor-pointer"
//               onClick={() => handleImageChange(index)}
//             >
//               {/* Headline Text */}
//               <span
//                 className={`hidden lg:block text-white font-medium transition-all duration-300 mr-3 ${
//                   index === currentIndex
//                     ? "opacity-100 scale-105"
//                     : "opacity-70 group-hover:opacity-100"
//                 }`}
//               >
//                 {item.headline}
//               </span>

//               {/* Thumbnail Image */}
//               <div className="relative">
//                 <img
//                   src={item.image}
//                   className={`w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full object-cover border-2 transition-all duration-300 ${
//                     index === currentIndex
//                       ? "border-blue-400 scale-110"
//                       : "border-transparent group-hover:scale-105"
//                   }`}
//                   alt={`${item.headline} industry`}
//                 />
//                 <span className="absolute inset-0 bg-black/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import bg1 from "../assets/bg1.jpg";
import bg2 from "../assets/bg2.png";
import bg3 from "../assets/bg3.png";
import bg4 from "../assets/bg4.jpg";

// Replaced local image imports with placeholder URLs for self-contained code.
// In a real application, you would manage your assets appropriately (e.g., public folder, CDN).
const slides = [
  {
    image: bg1, // Example: Capsules
    headline: "Transformative",
  },
  {
    image: bg2, // Example: Beakers
    headline: "Pharmaceutical",
  },
  {
    image: bg3, // Example: Food powders
    headline: "Nutritional",
  },
  {
    image: bg4, // Example: Cosmetic ingredients
    headline: "Innovative",
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isThumbnailHovered, setIsThumbnailHovered] = useState(false);
  const [height, setHeight] = useState(0);
  const containerRef = useRef(null); // Initialize useRef with null
  const scrollTimerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Define M3 Expressive spring transitions for Framer Motion
  // These parameters are based on "Table 3: Material 3 Expressive Motion Physics Spring Parameters (Web Equivalents)"
  const expressiveSpatialTransition = {
    type: "spring",
    stiffness: 200, // For smooth spatial transitions (e.g., carousel slide)
    damping: 20,
    mass: 1,
    velocity: 0,
  };

  const expressiveEffectsTransition = {
    type: "spring",
    stiffness: 300, // For quicker effects (e.g., button hovers, icon changes)
    damping: 25,
    mass: 1,
    velocity: 0,
  };

  // Calculate the height of the viewport for vertical carousel
  useEffect(() => {
    const updateHeight = () => {
      setHeight(window.innerHeight);
    };

    updateHeight(); // Set initial height
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  // Set up scroll listener to detect active scrolling and pause auto-rotation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
      if (scrollTimerRef.current) {
        clearTimeout(scrollTimerRef.current);
      }
      scrollTimerRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 700); // Debounce scroll event
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimerRef.current) {
        clearTimeout(scrollTimerRef.current);
      }
    };
  }, []);

  // Handle manual image change via thumbnails, and reset thumbnail hover state
  const handleImageChange = (index) => {
    if (index === currentIndex || isScrolling) return; // Prevent change if already current or scrolling
    setCurrentIndex(index);
    setIsThumbnailHovered(false); // Resume auto-transition after manual click
  };

  // Auto-rotate background images with conditions to pause on scroll or thumbnail hover
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHeroVisible || isScrolling || isThumbnailHovered) return; // Pause if not visible, scrolling, or hovering thumbnails
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [isHeroVisible, isScrolling, isThumbnailHovered]);

  // Intersection Observer for hero visibility to optimize animations/intervals
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Set hero visibility based on intersection ratio. Adjust threshold as needed.
        setIsHeroVisible(entry.intersectionRatio > 0.7);
      },
      { threshold: [0.7] } // Trigger when 70% of the element is visible
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
      id="home" // Changed ID for better linking from Navbar
      className="relative h-screen w-full overflow-hidden"
      ref={containerRef}
    >
      {/* Vertical Carousel Container */}
      <motion.div
        className="absolute inset-0"
        animate={{ y: -currentIndex * height }} // Animate vertical slide based on current index
        transition={expressiveSpatialTransition} // Apply M3E spatial spring transition
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="absolute w-full h-screen bg-cover bg-center"
            style={{
              backgroundImage: `url(${slide.image})`,
              top: `${index * 100}%`, // Position slides vertically
            }}
          />
        ))}
      </motion.div>

      {/* Overlay for content readability, using M3 scrim color */}
      <div className="absolute inset-0 bg-scrim/50 z-10" />

      {/* Content & Thumbnails Wrapper */}
      <div className="relative z-20 container mx-auto flex flex-col lg:flex-row items-center justify-center lg:justify-between h-full px-4 md:px-8 lg:px-16">
        {/* Hero Text Card */}
        <motion.div
          initial={{ opacity: 0, x: -50 }} // Initial animation state
          animate={{ opacity: 1, x: 0 }} // Animate to visible state
          transition={{ ...expressiveSpatialTransition, delay: 0.2 }} // M3E spatial spring with a slight delay
          className="p-6 md:p-12 lg:p-20 w-full lg:w-[70%] bg-surface-container-highest/80 backdrop-blur-xl rounded-2xl border border-outline/50 text-on-surface shadow-lg mb-8 lg:mb-0" // M3E colors, shapes, typography
        >
          <AnimatePresence mode="wait">
            <motion.h1
              key={slides[currentIndex].headline + "-title"} // Key for AnimatePresence
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={expressiveEffectsTransition} // M3E effects transition for text
              className="text-display-md font-roboto-medium mb-4" // M3E Typography
            >
              {slides[currentIndex].headline} Ingredients, Global Impact
            </motion.h1>
          </AnimatePresence>

          <p className="text-body-lg text-on-surface mb-6 font-roboto">
            {" "}
            {/* M3E Typography */}
            Delivering quality, compliance, and custom sourcing for pharma,
            food, cosmetics, and more.
          </p>

          <div className="flex flex-wrap gap-3">
            {/* Outlined Button - Request a Sample */}
            <motion.button
              whileHover={{ backgroundColor: "rgba(103, 80, 164, 0.08)" }} // M3 Hover state layer (Primary at 8%)
              whileTap={{ backgroundColor: "rgba(103, 80, 164, 0.12)" }} // M3 Pressed state layer (Primary at 12%)
              transition={expressiveEffectsTransition} // M3E effects transition
              className="px-4 py-2 md:px-6 md:py-3 bg-surface-container border border-outline text-primary rounded-lg font-roboto-medium text-label-lg focus:outline-none focus:ring-2 focus:ring-primary/50" // M3E styling
            >
              Request a Sample
            </motion.button>

            {/* Outlined Button - Get Datasheet */}
            <motion.button
              whileHover={{ backgroundColor: "rgba(103, 80, 164, 0.08)" }}
              whileTap={{ backgroundColor: "rgba(103, 80, 164, 0.12)" }}
              transition={expressiveEffectsTransition}
              className="px-4 py-2 md:px-6 md:py-3 bg-surface-container border border-outline text-primary rounded-lg font-roboto-medium text-label-lg focus:outline-none focus:ring-2 focus:ring-primary/50" // M3E styling
            >
              Get Datasheet
            </motion.button>

            {/* Filled Button - WhatsApp Now */}
            <motion.button
              whileHover={{ backgroundColor: "rgba(103, 80, 164, 0.12)" }} // Primary at 12% for filled button hover
              whileTap={{ backgroundColor: "rgba(103, 80, 164, 0.16)" }} // Primary at 16% for filled button pressed
              transition={expressiveEffectsTransition}
              className="px-4 py-2 md:px-6 md:py-3 bg-primary text-on-primary rounded-lg font-roboto-medium text-label-lg focus:outline-none focus:ring-2 focus:ring-primary-container/50" // M3E styling
            >
              WhatsApp Now
            </motion.button>
          </div>
        </motion.div>

        {/* Thumbnails with Headlines */}
        <div
          className="flex flex-row lg:flex-col gap-4"
          onMouseEnter={() => setIsThumbnailHovered(true)} // Pause auto-transition on hover
          onMouseLeave={() => setIsThumbnailHovered(false)} // Resume auto-transition on leave
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
              }} // Initial state for thumbnail reveal
              animate={{ opacity: 1, x: 0, y: 0 }} // Animate to visible state
              transition={{
                ...expressiveSpatialTransition,
                delay: 0.2 + index * 0.1,
              }} // Staggered entry animation
              whileHover={{ scale: 1.05 }} // Subtle scale on thumbnail hover
              whileTap={{ scale: 0.95 }} // Subtle scale on thumbnail tap
            >
              {/* Headline Text for Thumbnail */}
              <span
                className={`hidden lg:block text-on-surface font-roboto-medium transition-all duration-300 mr-3 ${
                  // M3E Typography
                  index === currentIndex
                    ? "opacity-100 scale-105 text-white" // Active state with primary color
                    : "opacity-70 group-hover:opacity-100 text-white/50" // Inactive state with subtle color
                } text-title-md`} // M3E Typography
              >
                {item.headline}
              </span>

              {/* Thumbnail Image */}
              <div className="relative">
                <img
                  src={item.image}
                  className={`w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full object-cover border-4 transition-all duration-300 ${
                    index === currentIndex
                      ? "border-primary scale-110" // Active thumbnail border
                      : "border-outline group-hover:scale-105" // Inactive thumbnail border
                  }`}
                  alt={`${item.headline} industry`}
                />
                {/* State layer for hover on thumbnail image */}
                <span className="absolute inset-0 bg-primary/8 rounded-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
