// import React from "react";
// import { Link } from "react-router-dom";
// // import abtImg from "../assets/AboutImage.webp";
// import abtImg from "../assets/AboutImage.jpg";
// import { IoArrowRedoOutline } from "react-icons/io5";

// import { FaCertificate, FaGlobeAmericas, FaShippingFast } from "react-icons/fa";

// function AboutHome() {
//   return (
//     <section
//       id="about"
//       className="container mx-auto mb-10 mt-10 px-4 py-8 flex flex-col justify-center items-center gap-16"
//     >
//       {/* Heading */}
//       <div className="text-center text-6xl font-bold text-blue-400">
//         About Us
//       </div>

//       {/* Image with overlay text */}
//       <div className="group relative w-full rounded-3xl overflow-hidden shadow-2xl">
//         <img
//           src={abtImg}
//           alt="About Us"
//           className="w-full h-[600px] object-cover group-hover:scale-105 transition-transform duration-150 ease-in-out"
//         />

//         {/* Gradient overlay + text */}
//         <div className="absolute top-0 left-0 w-full h-full flex items-end">
//           <div className="w-full bg-gradient-to-t from-black/70 to-transparent text-white p-8 backdrop-blur-sm rounded-b-3xl">
//             <h1 className="text-4xl md:text-5xl  font-bold mb-4 drop-shadow-lg">
//               Your Trusted Ingredient Partner
//             </h1>
//             <p className="text-base  md:text-lg max-w-4xl  drop-shadow-sm">
//               Esscore Ingredients Pvt. Ltd. is a compliance-driven supplier
//               connecting global manufacturers with Indian industries. With
//               FSSAI, ISO, and GMP certifications, we deliver dependable
//               sourcing, logistics, and support.
//             </p>
//             <Link
//               to="/about"
//               className="flex flex-nowrap group items-center text-xl gap-2 mt-6 w-fit py-3 pr-3 text-blue-400 hover:text-blue-300 font-semibold transition-transform duration-150 ease-in-out hover:translate-x-2 "
//             >
//               Learn More{" "}
//               <IoArrowRedoOutline
//                 className="inline-block duration-150 ease-in-out group-hover:rotate-180"
//                 size={20}
//               />
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// // export default AboutHome;
// import React, { useRef, useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import abtImg from "../assets/AboutImage.jpg";

// // Placeholder for AboutImage.jpg

// export default function AboutHome() {
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
//   const [hoveredFeatureIndex, setHoveredFeatureIndex] = useState(null); // Track which feature tile is hovered/active

//   // Define M3 Expressive spring transitions for Framer Motion
//   const expressiveSpatialTransition = {
//     type: "spring",
//     stiffness: 200, // For smooth spatial transitions (e.g., element entry, layout changes)
//     damping: 20,
//     mass: 1,
//     velocity: 0,
//   };

//   const expressiveEffectsTransition = {
//     type: "spring",
//     stiffness: 400, // For quicker effects (e.g., button hovers, icon changes, text reveal)
//     damping: 30,
//     mass: 1,
//     velocity: 0,
//   };

//   // Variants for overall section entry
//   const sectionVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { ...expressiveSpatialTransition, delay: 0.1 },
//     },
//   };

//   // Variants for the main text content block (heading, paragraph, button)
//   const mainContentVariants = {
//     hidden: { opacity: 0, y: 50, scale: 0.95 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       transition: { ...expressiveSpatialTransition, delay: 0.4 },
//     },
//   };

//   // Variants for the feature tile content reveal (description and button)
//   const featureContentRevealVariants = {
//     hidden: { opacity: 0, height: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       height: "auto",
//       y: 0,
//       transition: { ...expressiveEffectsTransition, duration: 0.3 },
//     },
//   };

//   // Parallax effect for the background image on mouse move (desktop only)
//   const imageRef = useRef(null);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       if (isMobile || !imageRef.current) return;
//       const { left, top, width, height } =
//         imageRef.current.getBoundingClientRect();
//       const x = (e.clientX - (left + width / 2)) / (width / 2); // -1 to 1
//       const y = (e.clientY - (top + height / 2)) / (height / 2); // -1 to 1
//       setMousePosition({ x, y });
//     };

//     const currentImageRef = imageRef.current;
//     if (currentImageRef && !isMobile) {
//       currentImageRef.addEventListener("mousemove", handleMouseMove);
//       currentImageRef.addEventListener("mouseleave", () =>
//         setMousePosition({ x: 0, y: 0 })
//       ); // Reset on mouse leave
//     }

//     return () => {
//       if (currentImageRef && !isMobile) {
//         currentImageRef.removeEventListener("mousemove", handleMouseMove);
//         currentImageRef.removeEventListener("mouseleave", () =>
//           setMousePosition({ x: 0, y: 0 })
//         );
//       }
//     };
//   }, [isMobile]); // Re-attach listener if mobile state changes

//   const parallaxX = mousePosition.x * (isMobile ? 0 : 15); // Increased parallax for more depth
//   const parallaxY = mousePosition.y * (isMobile ? 0 : 15);

//   // Resize handler for mobile responsiveness
//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768);
//     };
//     handleResize(); // Set initial state
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // Features data
//   const features = [
//     {
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="40"
//           height="40"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         >
//           <path d="M15 5.1L17.5 6l-2.7 2.7c-1.3 1.3-3.1 2-5 2H5l-1.5 1.5 2 2 1.5-1.5V17c0 1.9.7 3.7 2 5h-2.1L9 19.5l-2.7-2.7c-1.3-1.3-2-3.1-2-5V5.1L5.1 3.5h13.8L20 5.1z" />
//         </svg>
//       ),
//       title: "Certified Compliance",
//       description:
//         "Adherence to FSSAI, ISO, and GMP standards ensures the highest quality and safety across all our products and processes. We are committed to maintaining rigorous quality control at every stage.",
//     },
//     {
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="40"
//           height="40"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         >
//           <circle cx="12" cy="12" r="10" />
//           <path d="M12 2a15.3 15.3 0 0 1 4 10c-2.5 0-5.5 0-8 0a15.3 15.3 0 0 1 4-10" />
//           <path d="M12 22a15.3 15.3 0 0 1 4-10c-2.5 0-5.5 0-8 0a15.3 15.3 0 0 1 4 10" />
//           <path d="M2.5 7h19" />
//           <path d="M2.5 17h19" />
//           <path d="M10 2v20" />
//           <path d="M14 2v20" />
//         </svg>
//       ),
//       title: "Global Sourcing",
//       description:
//         "Connecting Indian industries with a vast, trusted network of international manufacturers. We ensure access to the best raw materials and ingredients from around the world.",
//     },
//     {
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="40"
//           height="40"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         >
//           <path d="M17 18a2 2 0 1 0 0 4a2 2 0 0 0 0-4z" />
//           <path d="M3 18a2 2 0 1 0 0 4a2 2 0 0 0 0-4z" />
//           <path d="M19 17h-1.63a1 1 0 0 1-.77-.36L14 12H5V5a2 2 0 0 0-2-2h-1a1 1 0 0 0 1 1v3a1 1 0 0 0 1 1h2.23" />
//           <path d="M11 12H9" />
//           <path d="M15 12h-2" />
//         </svg>
//       ),
//       title: "Efficient Logistics",
//       description:
//         "Streamlined supply chain management and timely delivery ensures your operations run smoothly and efficiently. We optimize every step from procurement to final distribution.",
//     },
//   ];

//   return (
//     <motion.section
//       id="about"
//       className="w-full bg-surface-container-lowest min-h-screen py-16 md:py-24 px-4 flex flex-col items-center justify-start relative overflow-hidden" // Changed justify-content
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.2 }}
//       variants={sectionVariants}
//     >
//       {/* Background Image Layer with Parallax and Subtle Zoom */}
//       <motion.div className="absolute inset-0 z-0" ref={imageRef}>
//         <motion.img
//           src={abtImg}
//           alt="About Us Background"
//           className="w-full h-full object-cover object-center"
//           animate={{ x: parallaxX, y: parallaxY, scale: 1.05 }} // Subtle zoom for a living background
//           transition={{
//             duration: 8,
//             repeat: Infinity,
//             repeatType: "reverse",
//             ease: "easeInOut",
//           }} // Long, looping animation
//           onError={(e) => {
//             e.target.onerror = null;
//             e.target.src = `https://placehold.co/1920x1080/BDBDBD/424242?text=Image+Error`;
//           }}
//         />
//         {/* Stronger scrim over background image for text readability */}
//         <div className="absolute inset-0 bg-scrim/80" />
//       </motion.div>

//       {/* Content Overlay - This div manages the layout of all foreground elements */}
//       <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center flex-grow">
//         {" "}
//         {/* flex-grow to take available space */}
//         {/* Main Heading for the section */}
//         <div className="text-center flex-shrink-0 pt-4 md:pt-8 mb-12 md:mb-16">
//           <motion.h1
//             className="text-headline-lg md:text-display-small text-white font-roboto-medium mb-4 drop-shadow-lg" // Text-white for readability on dark scrim
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={expressiveSpatialTransition}
//           >
//             About Us
//           </motion.h1>
//           <motion.p
//             className="text-body-large md:text-headline-small text-white font-roboto max-w-3xl mx-auto drop-shadow-md"
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ ...expressiveSpatialTransition, delay: 0.2 }}
//           >
//             Your Trusted Ingredient Partner
//           </motion.p>
//         </div>
//         {/* Dynamic Feature Tiles */}
//         <motion.div
//           layout // Enable layout animations for flexible grid items
//           className="flex flex-col md:flex-row gap-6 w-full max-w-6xl justify-center flex-grow" // Flex-grow to center vertically
//         >
//           {features.map((feature, index) => {
//             const isActive = hoveredFeatureIndex === index;
//             // Define width based on active state for desktop
//             const widthClass =
//               !isMobile && isActive
//                 ? "w-full md:w-[45%]"
//                 : isMobile
//                 ? "w-full"
//                 : "w-[30%]";
//             // Define height based on active state for desktop/mobile
//             const heightClass =
//               !isMobile && isActive
//                 ? "h-[450px]"
//                 : isMobile && isActive
//                 ? "h-[350px]"
//                 : "h-[250px]";
//             const baseHeightClass = isMobile
//               ? "min-h-[200px]"
//               : "min-h-[250px]"; // Base height when not active

//             return (
//               <motion.div
//                 layout
//                 key={index}
//                 className={`
//                   relative rounded-2xl overflow-hidden shadow-xl cursor-pointer
//                   bg-surface-container-high/95 backdrop-blur-sm
//                   flex flex-col items-center justify-start text-center
//                   ${widthClass} ${isActive ? heightClass : baseHeightClass}
//                   transition-all duration-300 ease-out
//                   ${
//                     isMobile && isActive ? "z-20" : ""
//                   } // Bring active card to front on mobile tap
//                 `}
//                 custom={index}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true, amount: 0.1 }}
//                 variants={{
//                   hidden: { opacity: 0, scale: 0.9, y: 50 },
//                   visible: (i) => ({
//                     opacity: 1,
//                     scale: 1,
//                     y: 0,
//                     transition: {
//                       ...expressiveSpatialTransition,
//                       delay: 0.8 + i * 0.1,
//                     },
//                   }),
//                 }}
//                 onMouseEnter={() => !isMobile && setHoveredFeatureIndex(index)}
//                 onMouseLeave={() => !isMobile && setHoveredFeatureIndex(null)}
//                 onClick={() =>
//                   isMobile && setHoveredFeatureIndex(isActive ? null : index)
//                 } // Toggle on mobile tap
//                 whileHover={
//                   !isMobile && {
//                     scale: 1.02,
//                     z: 10,
//                     transition: expressiveEffectsTransition,
//                   }
//                 }
//                 whileTap={
//                   !isMobile && {
//                     scale: 0.98,
//                     transition: expressiveEffectsTransition,
//                   }
//                 }
//               >
//                 {/* Feature Icon and Title */}
//                 <div className="relative w-full h-full flex flex-col items-center justify-center p-6 text-primary">
//                   <motion.div
//                     className="mb-4"
//                     animate={{
//                       rotate: isActive ? 10 : 0,
//                       scale: isActive ? 1.1 : 1,
//                     }}
//                     transition={expressiveEffectsTransition}
//                   >
//                     {feature.icon}
//                   </motion.div>
//                   <h3 className="text-title-large md:text-headline-small font-roboto-medium text-on-surface leading-tight">
//                     {feature.title}
//                   </h3>
//                 </div>

//                 {/* Detailed Description and Button (Animated Overlay) */}
//                 <AnimatePresence>
//                   {isActive && (
//                     <motion.div
//                       variants={featureContentRevealVariants}
//                       initial="hidden"
//                       animate="visible"
//                       exit="hidden"
//                       className="absolute bottom-0 w-full p-6 bg-surface-container-highest rounded-b-2xl shadow-inner flex flex-col justify-between"
//                     >
//                       <p className="text-body-medium text-on-surface-variant font-roboto mb-4">
//                         {feature.description}
//                       </p>
//                       <motion.a
//                         href="/about" // Adjust this href based on your routing
//                         className="inline-flex items-center text-label-large md:text-title-small gap-2 px-4 py-2 bg-primary text-on-primary rounded-lg font-roboto-medium focus:outline-none focus:ring-2 focus:ring-primary-container/50 shadow-md w-fit self-end"
//                         whileHover={{
//                           backgroundColor: "rgba(103, 80, 164, 0.88)",
//                           scale: 1.03,
//                         }}
//                         whileTap={{
//                           backgroundColor: "rgba(103, 80, 164, 0.84)",
//                           scale: 0.97,
//                         }}
//                         transition={expressiveEffectsTransition}
//                       >
//                         Learn More
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           width="20"
//                           height="20"
//                           viewBox="0 0 24 24"
//                           fill="none"
//                           stroke="currentColor"
//                           strokeWidth="2"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           className="inline-block transition-transform duration-150 ease-in-out group-hover:translate-x-1"
//                         >
//                           <path d="M17.5 12H3" />
//                           <path d="M13.5 16L17.5 12L13.5 8" />
//                         </svg>
//                       </motion.a>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </motion.div>
//             );
//           })}
//         </motion.div>
//       </div>
//     </motion.section>
//   );
// }
import React from "react";
import { motion } from "framer-motion";
import { Users, Briefcase, Sparkles } from "lucide-react"; // Icons for featured points
import abtImg from "../assets/AboutImage.jpg";

export default function AboutUsSectionNewLayout() {
  // Define a consistent spring animation configuration for M3 Expressive motion
  const springConfig = {
    type: "spring",
    stiffness: 220, // Slightly higher stiffness for a crisp feel
    damping: 22, // Good damping to control overshoot
    mass: 0.8, // Medium mass
  };

  return (
    <section
      // Using background from tailwind.config.js (surface-container-lowest for a light, clean base)
      className="relative w-full py-16 px-4  md:px-8 min-h-screen flex items-center justify-center bg-surface-container-lowest font-roboto overflow-hidden"
    >
      {/* Decorative Blur Circles (subtle motion, layered) */}
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
        {/* Left Side: Dynamic Image Section */}
        <motion.div
          initial={{ x: -100, opacity: 0, rotateY: 15 }}
          whileInView={{ x: 0, opacity: 1, rotateY: 0 }}
          transition={{ ...springConfig, delay: 0.2 }}
          viewport={{ once: true, amount: 0.4 }}
          className="relative w-full h-[450px] md:h-[600px] bg-surface-container-high rounded-2xl overflow-hidden shadow-2xl"
          // Using a placeholder image for employees
        >
          <img
            src={abtImg}
            alt="Esscore Foundation team members collaborating"
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle overlay/gradient for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl" />

          {/* Featured Quote/Callout on the image */}
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

        {/* Right Side: Text Content and Key Points */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Heading */}
          <motion.h2
            className="text-display-sm md:text-display-md text-on-background mb-4 font-roboto-medium"
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={springConfig}
            viewport={{ once: true, amount: 0.5 }}
          >
            Unveiling <span className="text-primary">Our Journey</span>
          </motion.h2>

          {/* Main Introductory Paragraph */}
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

          {/* Key Highlighted Points */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 w-full">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ ...springConfig, delay: 0.3 }}
              viewport={{ once: true, amount: 0.5 }}
              className="bg-surface-container-high rounded-lg p-6 text-left shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <Users className="w-8 h-8 text-primary mb-3" />
              <h3 className="text-title-md font-roboto-medium text-on-background mb-2">
                Expert Team
              </h3>
              <p className="text-body-md text-on-surface-variant">
                Our diverse team of experts brings unparalleled knowledge and
                dedication to every project.
              </p>
            </motion.div>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ ...springConfig, delay: 0.4 }}
              viewport={{ once: true, amount: 0.5 }}
              className="bg-surface-container-high rounded-lg p-6 text-left shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <Briefcase className="w-8 h-8 text-secondary mb-3" />
              <h3 className="text-title-md font-roboto-medium text-on-background mb-2">
                Global Network
              </h3>
              <p className="text-body-md text-on-surface-variant">
                Connecting you to a vast, reliable global network of trusted
                manufacturers and suppliers.
              </p>
            </motion.div>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ ...springConfig, delay: 0.5 }}
              viewport={{ once: true, amount: 0.5 }}
              className="bg-surface-container-high rounded-lg p-6 text-left shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <Sparkles className="w-8 h-8 text-tertiary mb-3" />
              <h3 className="text-title-md font-roboto-medium text-on-background mb-2">
                Innovative Approach
              </h3>
              <p className="text-body-md text-on-surface-variant">
                Continuously exploring new solutions and technologies to meet
                tomorrow's demands.
              </p>
            </motion.div>
          </div>

          {/* Call to Action Button */}
          <motion.button
            className="mt-12 px-8 py-4 flex items-center justify-center gap-2 bg-primary text-on-primary rounded-lg-inc text-label-lg font-roboto-medium shadow-md hover:shadow-lg transition-all duration-300"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ...springConfig, delay: 0.6 }}
            viewport={{ once: true, amount: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More About Us
          </motion.button>
        </div>
      </div>
    </section>
  );
}
