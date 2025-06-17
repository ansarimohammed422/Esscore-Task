// import React from "react";
// import PharmaImg from "../assets/Pharmaceuticals.jpg";
// import FoodImg from "../assets/Food-Beverages.jpg";
// import NutraImg from "../assets/Nutraceuticals.jpg";
// import CosmeticImg from "../assets/Cosmetics.jpg";
// import AgroImg from "../assets/AgroInd.jpg";
// import PaintImg from "../assets/PantInd.jpg";

// const industriesWeServe = [
//   {
//     title: "Pharma",
//     image: PharmaImg,
//     description:
//       "We provide high-purity APIs and excipients that meet strict global standards. Our pharmaceutical ingredients support safe, effective drug formulation and large-scale production.",
//   },
//   {
//     title: "Food & Beverage",
//     image: FoodImg,
//     description:
//       "Our food-grade additives enhance flavor, shelf life, and nutritional value. We cater to the processed food industry with safe, innovative ingredients for better consumer appeal.",
//   },
//   {
//     title: "Nutraceutical",
//     image: NutraImg,
//     description:
//       "We supply bioactive compounds like herbal extracts, amino acids, and antioxidants. These ingredients boost wellness, immunity, and preventive healthcare product efficiency.",
//   },
//   {
//     title: "Cosmetics",
//     image: CosmeticImg,
//     description:
//       "Our cosmetic raw materials include emollients, oils, and actives used in skincare and haircare. We help brands create effective, safe, and high-performance beauty products.",
//   },
//   {
//     title: "Agrochemicals",
//     image: AgroImg,
//     description:
//       "We offer fertilizers, pesticides, and growth enhancers to improve crop health and yield. Our solutions support modern, sustainable farming across diverse agro environments.",
//   },
//   {
//     title: "Paints & Coatings",
//     image: PaintImg,
//     description:
//       "Our chemicals like binders and pigments ensure color quality, surface protection, and adhesion. They are used in automotive, industrial, and architectural applications.",
//   },
// ];

// const IndustriesGrid = () => {
//   return (
//     <section
//       id="industries"
//       className="py-16 px-4  bg-gradient-to-b from-gray-50 to-white"
//     >
//       <div className="container mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="text-6xl md:text-5xl text-blue-500 font-bold  mb-4">
//             Industries We Serve
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Transforming industries with premium ingredients and tailored
//             solutions across diverse sectors
//           </p>
//         </div>

//         {/* Bento Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {industriesWeServe.map((industry, index) => (
//             <div
//               key={index}
//               className={`
//                 group relative rounded-2xl overflow-hidden shadow-xl
//                 ${index === 0 ? "md:col-span-2 lg:row-span-2" : ""}
//                 ${index === 3 ? "lg:col-span-2" : ""}
//                 ${index === 5 ? "md:col-span-3 lg:row-span-2" : ""}
//                 transition-all duration-500 ease-out
//                 hover:shadow-2xl hover:-translate-y-2
//               `}
//             >
//               {/* Industry Image */}
//               <div className="absolute inset-0">
//                 <img
//                   src={industry.image}
//                   alt={industry.title}
//                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/80" />
//               </div>

//               {/* Content */}
//               <div className="relative z-10 p-6 h-full flex flex-col justify-end min-h-[300px]">
//                 <div className="bg-blue-50 backdrop-blur-sm p-4 rounded-xl border  border-blue-500 max-w-md">
//                   <h3 className="text-2xl text-blue-500 font-bold  mb-2">
//                     {industry.title}
//                   </h3>
//                   <div className="overflow-hidden max-h-0 group-hover:max-h-96 transition-all duration-700 ease-in-out">
//                     <p className="">{industry.description}</p>
//                     <button className="mt-4 px-4 py-2 bg-blue-50 border border-blue-500 text- rounded-lg hover:bg-blue-500 hover:text-white transition">
//                       Explore Solutions
//                     </button>
//                   </div>
//                 </div>
//               </div>

//               {/* Corner Badge */}
//               <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-medium">
//                 {index + 1}/6
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default IndustriesGrid;
// import React, { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import PharmaImg from "../assets/Pharmaceuticals.jpg";
// import FoodImg from "../assets/Food-Beverages.jpg";
// import NutraImg from "../assets/Nutraceuticals.jpg";
// import CosmeticImg from "../assets/Cosmetics.jpg";
// import AgroImg from "../assets/AgroInd.jpg";
// import PaintImg from "../assets/PantInd.jpg";

// const industriesData = [
//   {
//     title: "Pharmaceuticals",
//     image: PharmaImg,
//     description:
//       "We provide high-purity APIs and excipients that meet strict global standards. Our pharmaceutical ingredients support safe, effective drug formulation and large-scale production, ensuring quality and compliance. We are committed to fostering innovation and supporting breakthroughs in healthcare.",
//   },
//   {
//     title: "Food & Beverage",
//     image: FoodImg,
//     description:
//       "Our food-grade additives enhance flavor, shelf life, and nutritional value. We cater to the processed food industry with safe, innovative ingredients for better consumer appeal and product longevity, focusing on natural and sustainable options.",
//   },
//   {
//     title: "Nutraceutical",
//     image: NutraImg,
//     description:
//       "We supply bioactive compounds like herbal extracts, amino acids, and antioxidants. These ingredients boost wellness, immunity, and preventive healthcare product efficiency for a healthier lifestyle, from supplements to functional foods.",
//   },
//   {
//     title: "Cosmetics",
//     image: CosmeticImg,
//     description:
//       "Our cosmetic raw materials include emollients, oils, and actives used in skincare and haircare. We help brands create effective, safe, and high-performance beauty products with superior texture and feel, aligning with clean beauty trends.",
//   },
//   {
//     title: "Agrochemicals",
//     image: AgroImg,
//     description:
//       "We offer fertilizers, pesticides, and growth enhancers to improve crop health and yield. Our solutions support modern, sustainable farming across diverse agro environments, boosting agricultural output responsibly and efficiently.",
//   },
//   {
//     title: "Paints & Coatings",
//     image: PaintImg,
//     description:
//       "Our chemicals like binders and pigments ensure color quality, surface protection, and adhesion. They are used in automotive, industrial, and architectural applications, providing durable and aesthetic finishes with environmental considerations.",
//   },
// ];

// const IndustriesGrid = () => {
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

//   // Define M3 Expressive spring transitions for Framer Motion
//   // Using parameters from "Expressive default spatial" for general layout changes and entry
//   const expressiveSpatialTransition = {
//     type: "spring",
//     stiffness: 200,
//     damping: 20,
//     mass: 1,
//     velocity: 0,
//   };

//   // Using parameters from "Expressive fast effects" for quicker, more immediate interactions like text reveal/hide
//   const expressiveEffectsTransition = {
//     type: "spring",
//     stiffness: 400, // Higher stiffness for a snappy feel
//     damping: 30, // Higher damping to reduce excessive bounce
//     mass: 1,
//     velocity: 0,
//   };

//   // Variants for section entry animation
//   const sectionVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { ...expressiveSpatialTransition, delay: 0.2 },
//     },
//   };

//   // Card Variants for initial entry animation (from left/right)
//   const cardVariants = {
//     hidden: (i) => ({
//       opacity: 0,
//       y: 50,
//       x: i % 2 === 0 ? -100 : 100, // Come from left for even, right for odd
//       scale: 0.95,
//     }),
//     visible: (i) => ({
//       opacity: 1,
//       y: 0,
//       x: 0, // Animate to no horizontal offset
//       scale: 1,
//       transition: {
//         ...expressiveSpatialTransition,
//         delay: 0.2 + i * 0.1, // Staggered entry for grid items
//       },
//     }),
//   };

//   // Content reveal variants for description and button within an hovered card
//   // Adjusted spring parameters to ensure a single, smooth expansion/collapse
//   const contentRevealVariants = {
//     collapsed: {
//       height: 0,
//       opacity: 0,
//       y: 10,
//       transition: {
//         type: "spring",
//         stiffness: 450, // Faster and more direct collapse
//         damping: 35,
//         mass: 1,
//         velocity: 0,
//       },
//     },
//     expanded: {
//       height: "auto", // Allow content to determine height
//       opacity: 1,
//       y: 0,
//       transition: {
//         type: "spring",
//         stiffness: 280, // Softer expansion, allows for a bit more "unfolding" feel
//         damping: 22,
//         mass: 1,
//         velocity: 0,
//       },
//     },
//   };

//   // Resize handler for mobile responsiveness
//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768);
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <motion.section
//       id="industries"
//       className="py-16 px-4 bg-surface-container-lowest overflow-hidden" // M3E surface background
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.2 }} // Animate when 20% of section is in view
//       variants={sectionVariants}
//     >
//       <div className="container mx-auto">
//         <div className="text-center mb-12 md:mb-16">
//           <motion.h2
//             className="text-headline-lg md:text-display-sm text-primary font-roboto-medium mb-4" // M3E Typography and Color
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ ...expressiveEffectsTransition, delay: 0.1 }}
//           >
//             Industries We Serve
//           </motion.h2>
//           <motion.p
//             className="text-body-lg text-on-surface-variant max-w-3xl mx-auto font-roboto" // M3E Typography and Color
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ ...expressiveEffectsTransition, delay: 0.2 }}
//           >
//             Discover our tailored solutions and premium ingredients that drive
//             innovation and success across diverse sectors.
//           </motion.p>
//         </div>

//         {/* Dynamic Bento Grid of Industry Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {industriesData.map((industry, index) => {
//             const [isHovered, setIsHovered] = useState(false); // Local state for each card's hover

//             // Determine grid span and height based on original bento layout
//             let colSpanClass = "";
//             let rowSpanClass = "";
//             let heightClass = "min-h-[300px] md:min-h-[350px]"; // Default height for cards

//             if (index === 0) {
//               // Pharmaceuticals - large feature card
//               colSpanClass = "md:col-span-2 lg:col-span-2";
//               rowSpanClass = "lg:row-span-2";
//               heightClass = "min-h-[400px] md:min-h-[500px] lg:min-h-[600px]";
//             } else if (index === 3) {
//               // Cosmetics - spans two columns on large screens
//               colSpanClass = "lg:col-span-2";
//               heightClass = "min-h-[300px] md:min-h-[350px]";
//             } else if (index === 5) {
//               // Paints & Coatings - spans two columns on medium, one on large
//               colSpanClass = "md:col-span-2 lg:col-span-1";
//               heightClass = "min-h-[300px] md:min-h-[350px]";
//             }

//             return (
//               <motion.div
//                 key={industry.title}
//                 className={`
//                   relative rounded-2xl overflow-hidden shadow-lg cursor-pointer
//                   bg-surface-container-high text-on-surface
//                   flex flex-col
//                   ${colSpanClass} ${rowSpanClass} ${heightClass}
//                 `}
//                 custom={index}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true, amount: 0.1 }}
//                 variants={cardVariants}
//                 // Only enable hover effects for desktop
//                 onMouseEnter={() => !isMobile && setIsHovered(true)}
//                 onMouseLeave={() => !isMobile && setIsHovered(false)}
//                 // On mobile, click will toggle the description visibility
//                 onClick={() => isMobile && setIsHovered(!isHovered)}
//                 whileHover={
//                   !isMobile
//                     ? {
//                         scale: 1.02,
//                         z: 5,
//                         transition: expressiveEffectsTransition,
//                       }
//                     : {}
//                 }
//                 whileTap={
//                   !isMobile
//                     ? { scale: 0.98, transition: expressiveEffectsTransition }
//                     : {}
//                 }
//               >
//                 {/* Image and Overlay */}
//                 <div className="relative w-full h-full flex-shrink-0">
//                   <motion.img
//                     src={industry.image}
//                     alt={industry.title}
//                     className="w-full h-full object-cover"
//                     animate={{ scale: isHovered ? 1.05 : 1 }} // Slight scale on image when hovered
//                     transition={expressiveEffectsTransition}
//                     onError={(e) => {
//                       e.target.onerror = null;
//                       e.target.src = `https://placehold.co/1600x900/BDBDBD/424242?text=Image+Error`; // Fallback image
//                     }}
//                   />
//                   {/* Gradient Overlay for Text Readability - stronger on hover */}
//                   <div
//                     className={`absolute inset-0 bg-gradient-to-t from-scrim/80 to-transparent ${
//                       isHovered ? "via-scrim/70" : "via-scrim/40"
//                     }`}
//                   />

//                   {/* Title always visible at the bottom of the image, with light text */}
//                   <div className="absolute bottom-0 left-0 right-0 p-4 bg-scrim/30 backdrop-blur-sm">
//                     <h3 className="text-title-lg font-roboto-medium text-white leading-tight">
//                       {" "}
//                       {/* text-white for visibility */}
//                       {industry.title}
//                     </h3>
//                   </div>
//                 </div>

//                 {/* Expandable Content Area (Description & Button) */}
//                 <AnimatePresence>
//                   {isHovered && (
//                     <motion.div
//                       variants={contentRevealVariants}
//                       initial="collapsed"
//                       animate="expanded"
//                       exit="collapsed"
//                       className="absolute bottom-0 w-full p-6 flex flex-col justify-end bg-surface-container-highest/90 backdrop-blur-md rounded-b-2xl shadow-xl" // Ensure rounded bottom
//                     >
//                       <p className="text-body-md text-on-surface-variant font-roboto mb-6">
//                         {industry.description}
//                       </p>
//                       <motion.button
//                         className="px-6 py-3 bg-primary text-on-primary rounded-lg font-roboto-medium text-label-lg focus:outline-none focus:ring-2 focus:ring-primary-container/50 shadow-md w-fit"
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
//                         Explore Solutions
//                       </motion.button>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </motion.section>
//   );
// };

// export default IndustriesGrid;

// import React, { useEffect, useState } from "react";
// import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
// import PharmaImg from "../assets/Pharmaceuticals.jpg";
// import FoodImg from "../assets/Food-Beverages.jpg";
// import NutraImg from "../assets/Nutraceuticals.jpg";
// import CosmeticImg from "../assets/Cosmetics.jpg";
// import AgroImg from "../assets/AgroInd.jpg";
// import PaintImg from "../assets/PantInd.jpg";

// const industriesData = [
//   {
//     title: "Pharma",
//     image: PharmaImg,
//     description:
//       "We provide high-purity APIs and excipients that meet strict global standards. Our pharmaceutical ingredients support safe, effective drug formulation and large-scale production.",
//   },
//   {
//     title: "Food & Beverage",
//     image: FoodImg,
//     description:
//       "Our food-grade additives enhance flavor, shelf life, and nutritional value. We cater to the processed food industry with safe, innovative ingredients for better consumer appeal.",
//   },
//   {
//     title: "Nutraceutical",
//     image: NutraImg,
//     description:
//       "We supply bioactive compounds like herbal extracts, amino acids, and antioxidants. These ingredients boost wellness, immunity, and preventive healthcare product efficiency.",
//   },
//   {
//     title: "Cosmetics",
//     image: CosmeticImg,
//     description:
//       "Our cosmetic raw materials include emollients, oils, and actives used in skincare and haircare. We help brands create effective, safe, and high-performance beauty products.",
//   },
//   {
//     title: "Agrochemicals",
//     image: AgroImg,
//     description:
//       "We offer fertilizers, pesticides, and growth enhancers to improve crop health and yield. Our solutions support modern, sustainable farming across diverse agro environments.",
//   },
//   {
//     title: "Paints & Coatings",
//     image: PaintImg,
//     description:
//       "Our chemicals like binders and pigments ensure color quality, surface protection, and adhesion. They are used in automotive, industrial, and architectural applications.",
//   },
// ];

// const IndustriesGrid = () => {
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
//   const shouldReduceMotion = useReducedMotion();

//   const expressiveSpatialTransition = shouldReduceMotion
//     ? { duration: 0 }
//     : { type: "spring", stiffness: 200, damping: 20, mass: 1 };

//   const expressiveEffectsTransition = shouldReduceMotion
//     ? { duration: 0 }
//     : { type: "spring", stiffness: 400, damping: 30, mass: 1 };

//   const sectionVariants = {
//     hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { ...expressiveSpatialTransition, delay: 0.2 },
//     },
//   };

//   const cardVariants = {
//     hidden: (i) => ({
//       opacity: 0,
//       y: shouldReduceMotion ? 0 : 50,
//       x: shouldReduceMotion ? 0 : i % 2 === 0 ? -100 : 100,
//       scale: 0.95,
//     }),
//     visible: (i) => ({
//       opacity: 1,
//       y: 0,
//       x: 0,
//       scale: 1,
//       transition: {
//         ...expressiveSpatialTransition,
//         delay: shouldReduceMotion ? 0 : 0.2 + i * 0.1,
//       },
//     }),
//   };

//   const contentRevealVariants = {
//     collapsed: {
//       maxHeight: 0,
//       opacity: 0,
//       y: shouldReduceMotion ? 0 : 10,
//       overflow: "hidden",
//       transition: expressiveSpatialTransition,
//     },
//     expanded: {
//       maxHeight: 500,
//       opacity: 1,
//       y: 0,
//       overflow: "hidden",
//       transition: expressiveSpatialTransition,
//     },
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768);
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <motion.section
//       id="industries"
//       className="py-16 px-4 bg-surface-container-lowest overflow-hidden"
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.2 }}
//       variants={sectionVariants}
//     >
//       <div className="container mx-auto">
//         <div className="text-center mb-12 md:mb-16">
//           <motion.h2
//             className="text-headline-lg md:text-display-sm text-primary font-roboto-medium mb-4"
//             initial={{ opacity: 0, y: shouldReduceMotion ? 0 : -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ ...expressiveEffectsTransition, delay: 0.1 }}
//           >
//             Industries We Serve
//           </motion.h2>
//           <motion.p
//             className="text-body-lg text-on-surface-variant max-w-3xl mx-auto font-roboto"
//             initial={{ opacity: 0, y: shouldReduceMotion ? 0 : -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ ...expressiveEffectsTransition, delay: 0.2 }}
//           >
//             Discover our tailored solutions and premium ingredients that drive
//             innovation and success across diverse sectors.
//           </motion.p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//           {industriesData.map((industry, index) => {
//             const [isHovered, setIsHovered] = useState(false);

//             let colSpanClass = "";
//             let rowSpanClass = "";
//             let heightClass = "min-h-[300px] md:min-h-[350px]";

//             if (index === 0) {
//               colSpanClass = "md:col-span-2 lg:col-span-2";
//               rowSpanClass = "lg:row-span-2";
//               heightClass = "min-h-[400px] md:min-h-[500px] lg:min-h-[600px]";
//             } else if (index === 3) {
//               colSpanClass = "lg:col-span-2";
//               heightClass = "min-h-[300px] md:min-h-[350px]";
//             } else if (index === 5) {
//               colSpanClass = "md:col-span-2 lg:col-span-3 ";
//               heightClass = "min-h-[300px] md:min-h-[350px] ";
//               rowSpanClass = "lg:row-span-1";
//             }

//             return (
//               <motion.div
//                 key={industry.title}
//                 layout
//                 className={`
//                   relative rounded-2xl overflow-hidden shadow-lg cursor-pointer
//                   bg-surface-container-high text-on-surface
//                   flex flex-col
//                   ${colSpanClass} ${rowSpanClass} ${heightClass}
//                 `}
//                 custom={index}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true, amount: 0.1 }}
//                 variants={cardVariants}
//                 onMouseEnter={() => !isMobile && setIsHovered(true)}
//                 onMouseLeave={() => !isMobile && setIsHovered(false)}
//                 onClick={() => isMobile && setIsHovered(!isHovered)}
//                 whileHover={
//                   !isMobile && !shouldReduceMotion
//                     ? {
//                         scale: 1.02,
//                         z: 5,
//                         transition: expressiveEffectsTransition,
//                       }
//                     : {}
//                 }
//                 whileTap={
//                   !isMobile && !shouldReduceMotion
//                     ? { scale: 0.98, transition: expressiveEffectsTransition }
//                     : {}
//                 }
//               >
//                 <div className="relative w-full h-full flex-shrink-0">
//                   <motion.img
//                     src={industry.image}
//                     alt={industry.title}
//                     className="w-full h-full object-cover"
//                     animate={
//                       shouldReduceMotion ? {} : { scale: isHovered ? 1.05 : 1 }
//                     }
//                     transition={expressiveSpatialTransition}
//                     onError={(e) => {
//                       e.target.onerror = null;
//                       e.target.src = `https://placehold.co/1600x900/BDBDBD/424242?text=Image+Error`;
//                     }}
//                   />
//                   <div
//                     className={`absolute inset-0 bg-gradient-to-t from-scrim/80 to-transparent ${
//                       isHovered ? "via-scrim/70" : "via-scrim/40"
//                     }`}
//                   />
//                   <div className="absolute bottom-0 left-0 right-0 p-4 bg-scrim/30 backdrop-blur-sm">
//                     <h3 className="text-title-lg font-roboto-medium text-white leading-tight">
//                       {industry.title}
//                     </h3>
//                   </div>
//                 </div>

//                 <AnimatePresence>
//                   {isHovered && (
//                     <motion.div
//                       layout
//                       variants={contentRevealVariants}
//                       initial="collapsed"
//                       animate="expanded"
//                       exit="collapsed"
//                       className="absolute bottom-0 w-full p-6 flex flex-col justify-end bg-surface-container-highest/90 backdrop-blur-md rounded-b-2xl shadow-xl"
//                     >
//                       <p className="text-body-md text-on-surface-variant font-roboto mb-6">
//                         {industry.description}
//                       </p>
//                       <motion.button
//                         className="px-6 py-3 bg-primary text-on-primary rounded-lg font-roboto-medium text-label-lg focus:outline-none focus:ring-2 focus:ring-primary-container/50 shadow-md w-fit"
//                         whileHover={
//                           shouldReduceMotion
//                             ? {}
//                             : {
//                                 backgroundColor: "rgba(103, 80, 164, 0.88)",
//                                 scale: 1.03,
//                               }
//                         }
//                         whileTap={
//                           shouldReduceMotion
//                             ? {}
//                             : {
//                                 backgroundColor: "rgba(103, 80, 164, 0.84)",
//                                 scale: 0.97,
//                               }
//                         }
//                         transition={expressiveEffectsTransition}
//                       >
//                         Explore Solutions
//                       </motion.button>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </motion.section>
//   );
// };

// export default IndustriesGrid;
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
      x: i % 2 === 0 ? -100 : 100,
      scale: 0.95,
    }),
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  const contentVariants = {
    collapsed: {
      opacity: 0,
      y: 20,
      height: 0,
      transition: { duration: 0.4 },
    },
    expanded: {
      opacity: 1,
      y: 0,
      height: "auto",
      transition: { duration: 0.4 },
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
      viewport={{ once: true, amount: 0.2 }}
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
        <motion.h2 className="text-display text-4xl font-bold text-primary mb-4">
          Industries We Serve
        </motion.h2>
        <motion.p className="text-body text-on-surface max-w-2xl mx-auto">
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
              viewport={{ once: true, amount: 0.2 }}
              className={`relative bg-surface-container-high rounded-3xl overflow-hidden shadow-elevation transition-all cursor-pointer ${cardSize}`}
              onHoverStart={() => !isMobile && setHovered(true)}
              onHoverEnd={() => !isMobile && setHovered(false)}
              onClick={() => isMobile && setTapped((prev) => !prev)}
              whileHover={!isMobile ? { scale: 1.02, zIndex: 10 } : {}}
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

              <AnimatePresence>
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
