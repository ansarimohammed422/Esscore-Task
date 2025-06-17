// import React, { useRef, useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   IoArrowRedoOutline,
//   IoChevronBack,
//   IoChevronForward,
// } from "react-icons/io5";
// import Neutra from "../assets/NeutraCard.jpg";
// import Pharma from "../assets/PharmaCard.png";
// import Food from "../assets/FoodIngCard.jpg";
// import Coating from "../assets/CoatCard.png";
// import Agro from "../assets/AgroCard.jpg";
// import Cosmetic from "../assets/CosmCard.jpg";

// // Mock images - replace with your actual imports
// function CoreProducts() {
//   const scrollRef = useRef(null);
//   const [isMobile, setIsMobile] = useState(false);

//   // Detect mobile devices
//   useEffect(() => {
//     const checkIfMobile = () => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     checkIfMobile();
//     window.addEventListener("resize", checkIfMobile);

//     return () => {
//       window.removeEventListener("resize", checkIfMobile);
//     };
//   }, []);

//   // Scroll by button
//   const scrollLeft = () => {
//     scrollRef.current?.scrollBy({ left: -400, behavior: "smooth" });
//   };

//   const scrollRight = () => {
//     scrollRef.current?.scrollBy({ left: 400, behavior: "smooth" });
//   };

//   // 🚫 Prevent horizontal scroll from touch/mouse/trackpad on desktop only
//   useEffect(() => {
//     if (isMobile) return;

//     const container = scrollRef.current;
//     if (!container) return;

//     // Handle touch
//     let touchStartX = 0;
//     let touchStartY = 0;

//     const handleTouchStart = (e) => {
//       touchStartX = e.touches[0].clientX;
//       touchStartY = e.touches[0].clientY;
//     };

//     const handleTouchMove = (e) => {
//       const dx = e.touches[0].clientX - touchStartX;
//       const dy = e.touches[0].clientY - touchStartY;

//       // Horizontal swipe => prevent
//       if (Math.abs(dx) > Math.abs(dy)) {
//         e.preventDefault();
//       }
//     };

//     // Trackpad scroll
//     const handleWheel = (e) => {
//       if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
//         e.preventDefault();
//       }
//     };

//     container.addEventListener("touchstart", handleTouchStart, {
//       passive: true,
//     });
//     container.addEventListener("touchmove", handleTouchMove, {
//       passive: false,
//     });
//     container.addEventListener("wheel", handleWheel, { passive: false });

//     return () => {
//       container.removeEventListener("touchstart", handleTouchStart);
//       container.removeEventListener("touchmove", handleTouchMove);
//       container.removeEventListener("wheel", handleWheel);
//     };
//   }, [isMobile]);

//   const productCategories = [
//     {
//       title: "Neutraceuticals",
//       icon: Neutra,
//       description:
//         "Neutraceuticals are bioactive compounds derived from food sources that provide additional health benefits beyond basic nutrition. These include vitamins, minerals, herbal extracts, amino acids, and dietary supplements that support immune function, reduce inflammation, enhance cognitive performance, and promote overall wellness.",
//     },
//     {
//       title: "Pharmaceuticals",
//       icon: Pharma,
//       description:
//         "Pharmaceutical chemicals consist of high-purity active pharmaceutical ingredients (APIs) and excipients used in the formulation of prescription and over-the-counter medications. They play a critical role in the treatment, prevention, and diagnosis of diseases, adhering to strict regulatory standards for quality, efficacy, and safety.",
//     },
//     {
//       title: "Food Ingredients",
//       icon: Food,
//       description:
//         "Food ingredients encompass a wide range of natural and synthetic substances used in the production of packaged and processed foods. These include flavor enhancers, preservatives, emulsifiers, stabilizers, colorants, and nutritional additives that improve taste, texture, shelf life, and health value of food products.",
//     },
//     {
//       title: "Coating & Paint Chemicals",
//       icon: Coating,
//       description:
//         "Coating and paint chemicals are essential raw materials used in the formulation of protective and decorative finishes. These include resins, binders, pigments, solvents, and additives that provide weather resistance, corrosion protection, UV shielding, and improved surface adhesion across industrial, automotive, and architectural applications.",
//     },
//     {
//       title: "Agrochemicals",
//       icon: Agro,
//       description:
//         "Agrochemicals refer to a broad class of chemical products used to enhance agricultural productivity. This category includes pesticides (insecticides, herbicides, fungicides), fertilizers, plant growth regulators, and soil conditioners that protect crops, improve yields, and ensure sustainable farming practices.",
//     },
//     {
//       title: "Cosmetic Raw Materials",
//       icon: Cosmetic,
//       description:
//         "Cosmetic raw materials are the base components used in the manufacturing of skincare, haircare, personal hygiene, and beauty products. These include emollients, surfactants, humectants, natural extracts, essential oils, and active ingredients like peptides and antioxidants that enhance product performance, safety, and consumer appeal.",
//     },
//   ];
//   return (
//     <section id="products" className="w-full bg-blue-100 py-8 md:py-18 px-4">
//       {/* Heading & Buttons */}
//       <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
//         <h1 className="text-3xl md:text-6xl text-blue-500 font-bold mb-6 md:mb-10 text-center md:text-left">
//           Core Products Categories
//         </h1>
//         <div className="flex gap-5 mb-6 md:mb-0">
//           <button
//             onClick={scrollLeft}
//             className="p-2 md:p-3 bg-blue-100 text-blue-600 rounded-full shadow hover:bg-blue-200"
//           >
//             <IoChevronBack className="text-2xl md:text-4xl" />
//           </button>
//           <button
//             onClick={scrollRight}
//             className="p-2 md:p-3 bg-blue-100 text-blue-600 rounded-full shadow hover:bg-blue-200"
//           >
//             <IoChevronForward className="text-2xl md:text-4xl" />
//           </button>
//         </div>
//       </div>

//       {/* Scrollable Section */}
//       <div ref={scrollRef} className="overflow-x-auto scrollbar-hide pb-4">
//         <div className="container mx-auto px-4">
//           <div className="flex gap-6 md:gap-16 w-max py-5 md:py-10 pr-4 md:pr-20">
//             {productCategories.map((item) => (
//               <div
//                 key={item.title}
//                 className="flex-shrink-0 w-[300px] md:w-[400px] h-auto md:h-[580px] bg-blue-100 shadow-xs border border-blue-500 rounded-3xl overflow-hidden  flex flex-col transition-transform hover:scale-105 hover:shadow-xl duration-300 ease-in-out"
//               >
//                 <div className="w-full h-[200px] md:h-[300px] bg-white">
//                   <img
//                     src={item.icon}
//                     alt={item.title}
//                     className="w-full h-full object-cover object-center"
//                   />
//                 </div>

//                 <div className="flex flex-col justify-between flex-grow p-4">
//                   <div>
//                     <h2 className="text-xl md:text-2xl font-semibold mb-2">
//                       {item.title}
//                     </h2>
//                     <p className="text-gray-700 text-xs md:text-sm">
//                       {item.description}
//                     </p>
//                   </div>

//                   <div className="pt-4">
//                     <Link
//                       to="/about"
//                       className="flex group text-base md:text-lg items-center gap-2 w-fit text-blue-500 font-medium transition-transform duration-150 ease-in-out hover:translate-x-2"
//                     >
//                       View Product{" "}
//                       <IoArrowRedoOutline
//                         className="inline-block duration-150 ease-in-out group-hover:rotate-180"
//                         size={18}
//                       />
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* View All Button */}
//       <div className="flex justify-center items-center mt-6 md:mt-10">
//         <Link
//           to="/Products"
//           className="bg-blue-500 px-4 py-2 md:px-5 md:py-3 flex group text-base md:text-lg items-center gap-2 text-white font-medium transition-transform duration-300 ease-in-out hover:scale-105 rounded-xl"
//         >
//           View All Products{" "}
//           <IoArrowRedoOutline
//             className="inline-block transition-all duration-150 ease-in-out group-hover:rotate-180"
//             size={18}
//           />
//         </Link>
//       </div>
//     </section>
//   );
// }

// export default CoreProducts;
// import React, { useRef, useEffect, useState } from "react";
// import { motion } from "framer-motion";

// // Placeholder images - replaced local imports for self-contained code.
// const Neutra = "https://placehold.co/600x400/EADDFF/21005D?text=Nutraceuticals";
// const Pharma =
//   "https://placehold.co/600x400/E8DEF8/1D192B?text=Pharmaceuticals";
// const Food = "https://placehold.co/600x400/FFD8E4/31111D?text=Food+Ingredients";
// const Coating = "https://placehold.co/600x400/F9DEDC/410E0B?text=Coatings";
// const Agro = "https://placehold.co/600x400/FEF7FF/1D1B20?text=Agrochemicals";
// const Cosmetic = "https://placehold.co/600x400/E7E0EC/49454F?text=Cosmetics";

// function CoreProducts() {
//   const scrollRef = useRef(null);
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

//   // Define M3 Expressive spring transitions for Framer Motion
//   const expressiveSpatialTransition = {
//     type: "spring",
//     stiffness: 200, // For smooth spatial transitions (e.g., element entry)
//     damping: 20,
//     mass: 1,
//     velocity: 0,
//   };

//   const expressiveEffectsTransition = {
//     type: "spring",
//     stiffness: 400, // For quicker effects (e.g., button hovers, card presses)
//     damping: 30,
//     mass: 1,
//     velocity: 0,
//   };

//   // Variants for overall section entry animation
//   const sectionVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { ...expressiveSpatialTransition, delay: 0.2 },
//     },
//   };

//   // Variants for individual product card entry animation
//   const cardVariants = {
//     hidden: { opacity: 0, y: 50, scale: 0.95 },
//     visible: (i) => ({
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       transition: { ...expressiveSpatialTransition, delay: 0.4 + i * 0.1 }, // Staggered entry
//     }),
//     hover: { scale: 1.03, transition: expressiveEffectsTransition }, // Subtle lift on hover
//     tap: { scale: 0.98, transition: expressiveEffectsTransition }, // Gentle press on tap
//   };

//   // Detect mobile devices for responsive behavior
//   useEffect(() => {
//     const checkIfMobile = () => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     checkIfMobile();
//     window.addEventListener("resize", checkIfMobile);

//     return () => {
//       window.removeEventListener("resize", checkIfMobile);
//     };
//   }, []);

//   // Scroll functions for navigation buttons
//   const scrollLeft = () => {
//     scrollRef.current?.scrollBy({ left: -400, behavior: "smooth" });
//   };

//   const scrollRight = () => {
//     scrollRef.current?.scrollBy({ left: 400, behavior: "smooth" });
//   };

//   const productCategories = [
//     {
//       title: "Nutraceuticals",
//       icon: Neutra,
//       description:
//         "Bioactive compounds from food sources provide additional health benefits beyond basic nutrition. These include vitamins, minerals, herbal extracts, amino acids, and dietary supplements that support immune function, reduce inflammation, enhance cognitive performance, and promote overall wellness.",
//     },
//     {
//       title: "Pharmaceuticals",
//       icon: Pharma,
//       description:
//         "High-purity active pharmaceutical ingredients (APIs) and excipients used in the formulation of prescription and over-the-counter medications. They play a critical role in the treatment, prevention, and diagnosis of diseases.",
//     },
//     {
//       title: "Food Ingredients",
//       icon: Food,
//       description:
//         "A wide range of natural and synthetic substances used in the production of packaged and processed foods. These include flavor enhancers, preservatives, emulsifiers, stabilizers, colorants, and nutritional additives.",
//     },
//     {
//       title: "Coating & Paint Chemicals",
//       icon: Coating,
//       description:
//         "Essential raw materials for protective and decorative finishes. These include resins, binders, pigments, solvents, and additives that provide weather resistance, corrosion protection, and UV shielding.",
//     },
//     {
//       title: "Agrochemicals",
//       icon: Agro,
//       description:
//         "A broad class of chemical products used to enhance agricultural productivity. This category includes pesticides, fertilizers, plant growth regulators, and soil conditioners that protect crops and improve yields.",
//     },
//     {
//       title: "Cosmetic Raw Materials",
//       icon: Cosmetic,
//       description:
//         "Base components used in the manufacturing of skincare, haircare, personal hygiene, and beauty products. These include emollients, surfactants, natural extracts, essential oils, and active ingredients.",
//     },
//   ];

//   return (
//     <motion.section
//       id="products"
//       className="w-full bg-surface-container-lowest min-h-screen py-16 md:py-24 px-4 flex flex-col items-center justify-between relative overflow-hidden"
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.3 }}
//       variants={sectionVariants}
//     >
//       <div className="container mx-auto text-center flex-shrink-0 mb-8 md:mb-12">
//         <motion.h1
//           className="text-headline-lg md:text-display-sm text-primary font-roboto-medium mb-4"
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={expressiveSpatialTransition}
//         >
//           Our Core Products
//         </motion.h1>
//         <motion.p
//           className="text-body-lg text-on-surface-variant max-w-3xl mx-auto font-roboto"
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ ...expressiveSpatialTransition, delay: 0.1 }}
//         >
//           Explore a diverse portfolio of high-quality ingredients tailored for
//           various industries worldwide.
//         </motion.p>
//       </div>

//       {/* Scrollable Products Section */}
//       <div className="relative w-full flex-1 flex items-center justify-center mb-8 md:mb-12">
//         {/* Scroll Left Button */}
//         <motion.button
//           onClick={scrollLeft}
//           className="absolute left-0 top-1/2 -translate-y-1/2 p-3 md:p-4 bg-surface-container-low text-primary rounded-full shadow-lg z-10 ml-4 focus:outline-none focus:ring-2 focus:ring-primary/50"
//           whileHover={{
//             backgroundColor: "rgba(103, 80, 164, 0.08)",
//             scale: 1.1,
//           }}
//           whileTap={{
//             backgroundColor: "rgba(103, 80, 164, 0.12)",
//             scale: 0.95,
//           }}
//           transition={expressiveEffectsTransition}
//         >
//           {/* Inline SVG for Chevron Back */}
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="28"
//             height="28"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           >
//             <polyline points="15 18 9 12 15 6" />
//           </svg>
//         </motion.button>

//         {/* The actual scrollable content */}
//         <div
//           ref={scrollRef}
//           className="overflow-x-auto scrollbar-hide w-full h-full flex items-center px-4 md:px-0"
//         >
//           <div className="flex gap-6 md:gap-8 w-max py-5 md:py-10 mx-auto">
//             {productCategories.map((item, index) => (
//               <motion.div
//                 key={item.title}
//                 className="flex-shrink-0 w-[300px] md:w-[400px] bg-surface-container rounded-2xl overflow-hidden shadow-lg flex flex-col"
//                 variants={cardVariants}
//                 custom={index} // Pass index for staggered entry animation
//                 whileHover="hover"
//                 whileTap="tap"
//               >
//                 <div className="w-full h-[200px] md:h-[280px] relative">
//                   <img
//                     src={item.icon}
//                     alt={item.title}
//                     className="w-full h-full object-cover object-center"
//                     onError={(e) => {
//                       e.target.onerror = null;
//                       e.target.src = `https://placehold.co/600x400/BDBDBD/424242?text=Image+Error`;
//                     }}
//                   />
//                   {/* Scrim for title readability */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-scrim/60 to-transparent" />
//                   <div className="absolute bottom-0 left-0 right-0 p-4">
//                     <h2 className="text-title-large font-roboto-medium text-white leading-tight">
//                       {item.title}
//                     </h2>
//                   </div>
//                 </div>

//                 <div className="flex flex-col justify-between flex-grow p-4 md:p-6">
//                   <p className="text-body-medium text-on-surface-variant font-roboto mb-4">
//                     {item.description}
//                   </p>
//                   <a
//                     href="/products" // Adjust this href based on your routing
//                     className="flex group text-label-large items-center gap-2 w-fit text-primary font-roboto-medium mt-auto transition-colors"
//                     // Removed motion variants from <a> tag itself as parent handles hover/tap for whole card
//                   >
//                     View Product {/* Inline SVG for Arrow Redo Outline */}
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="18"
//                       height="18"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       className="inline-block transition-transform duration-150 ease-in-out group-hover:translate-x-1"
//                     >
//                       <path d="M17.5 12H3" />
//                       <path d="M13.5 16L17.5 12L13.5 8" />
//                     </svg>
//                   </a>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         {/* Scroll Right Button */}
//         <motion.button
//           onClick={scrollRight}
//           className="absolute right-0 top-1/2 -translate-y-1/2 p-3 md:p-4 bg-surface-container-low text-primary rounded-full shadow-lg z-10 mr-4 focus:outline-none focus:ring-2 focus:ring-primary/50"
//           whileHover={{
//             backgroundColor: "rgba(103, 80, 164, 0.08)",
//             scale: 1.1,
//           }}
//           whileTap={{
//             backgroundColor: "rgba(103, 80, 164, 0.12)",
//             scale: 0.95,
//           }}
//           transition={expressiveEffectsTransition}
//         >
//           {/* Inline SVG for Chevron Forward */}
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="28"
//             height="28"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           >
//             <polyline points="9 18 15 12 9 6" />
//           </svg>
//         </motion.button>
//       </div>

//       {/* View All Products Button */}
//       <div className="flex justify-center items-center flex-shrink-0 mt-6 md:mt-10">
//         <motion.a
//           href="/products"
//           className="bg-primary text-on-primary px-6 py-3 md:px-8 md:py-4 flex group text-label-large items-center gap-2 font-roboto-medium rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-container/50 shadow-md"
//           whileHover={{
//             backgroundColor: "rgba(103, 80, 164, 0.88)",
//             scale: 1.05,
//           }}
//           whileTap={{
//             backgroundColor: "rgba(103, 80, 164, 0.84)",
//             scale: 0.95,
//           }}
//           transition={expressiveEffectsTransition}
//         >
//           View All Products {/* Inline SVG for Arrow Redo Outline */}
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="18"
//             height="18"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             className="inline-block transition-all duration-150 ease-in-out group-hover:translate-x-1"
//           >
//             <path d="M17.5 12H3" />
//             <path d="M13.5 16L17.5 12L13.5 8" />
//           </svg>
//         </motion.a>
//       </div>
//     </motion.section>
//   );
// }

// export default CoreProducts;
// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const cards = [
//   {
//     title: "Nutraceuticals",
//     image: "https://placehold.co/400x250/6750A4/FFFFFF?text=Nutraceuticals",
//     description:
//       "Bioactive compounds from food that support immune function, reduce inflammation, and enhance cognition.",
//   },
//   {
//     title: "Pharmaceuticals",
//     image: "https://placehold.co/400x250/E8DEF8/1D192B?text=Pharma",
//     description:
//       "High-purity APIs and excipients for medications, essential for disease treatment with strict quality standards.",
//   },
//   {
//     title: "Food Ingredients",
//     image: "https://placehold.co/400x250/FFD8E4/31111D?text=Food",
//     description:
//       "Flavor enhancers, preservatives, and more for packaged foods with a focus on sustainability.",
//   },
//   {
//     title: "Cosmetics",
//     image: "https://placehold.co/400x250/E7E0EC/49454F?text=Cosmetics",
//     description:
//       "Clean beauty ingredients including emollients, surfactants, and active compounds.",
//   },
// ];

// const cardVariants = {
//   enter: (direction) => ({
//     x: direction > 0 ? 300 : -300,
//     opacity: 0,
//     scale: 0.8,
//   }),
//   center: {
//     zIndex: 1,
//     x: 0,
//     opacity: 1,
//     scale: 1,
//     transition: { duration: 0.4 },
//   },
//   exit: (direction) => ({
//     zIndex: 0,
//     x: direction > 0 ? -300 : 300,
//     opacity: 0,
//     scale: 0.8,
//     transition: { duration: 0.4 },
//   }),
// };

// const StackedCardSlider = () => {
//   const [[index, direction], setIndex] = useState([0, 0]);

//   const paginate = (dir) => {
//     const newIndex = (index + dir + cards.length) % cards.length;
//     setIndex([newIndex, dir]);
//   };

//   const currentCard = cards[index];

//   return (
//     <section className="w-full min-h-screen bg-white py-20 flex flex-col items-center justify-center px-4">
//       <h2 className="text-4xl font-bold text-gray-800 mb-4">Core Products</h2>
//       <p className="text-gray-600 mb-10 max-w-xl text-center">
//         Scroll through our key offerings using the arrows below. Each card
//         contains a high-quality product description and call to action.
//       </p>

//       <div className="relative w-full max-w-md h-[400px]">
//         <AnimatePresence initial={false} custom={direction}>
//           <motion.div
//             key={index}
//             custom={direction}
//             variants={cardVariants}
//             initial="enter"
//             animate="center"
//             exit="exit"
//             className="absolute w-full h-full bg-white rounded-xl shadow-xl p-6 flex flex-col items-start justify-between"
//           >
//             <img
//               src={currentCard.image}
//               alt={currentCard.title}
//               className="w-full h-48 object-cover rounded-lg mb-4"
//             />
//             <div>
//               <h3 className="text-xl font-semibold mb-2">
//                 {currentCard.title}
//               </h3>
//               <p className="text-sm text-gray-600 mb-4">
//                 {currentCard.description}
//               </p>
//               <a
//                 href="/products"
//                 className="inline-block bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition"
//               >
//                 Explore Product
//               </a>
//             </div>
//           </motion.div>
//         </AnimatePresence>
//       </div>

//       <div className="mt-8 flex gap-4">
//         <button
//           onClick={() => paginate(-1)}
//           className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition"
//         >
//           ← Prev
//         </button>
//         <button
//           onClick={() => paginate(1)}
//           className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition"
//         >
//           Next →
//         </button>
//       </div>
//     </section>
//   );
// };

// export default StackedCardSlider;

import React, { useState } from "react";
import { motion } from "framer-motion";
import Neutra from "../assets/NeutraCard.jpg";
import Pharma from "../assets/PharmaCard.png";
import Food from "../assets/FoodIngCard.jpg";
import Coating from "../assets/CoatCard.png";
import Agro from "../assets/AgroCard.jpg";
import Cosmetic from "../assets/CosmCard.jpg";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";

const cards = [
  {
    title: "Neutraceuticals",
    icon: Neutra,
    description:
      "Neutraceuticals are bioactive compounds derived from food sources that provide additional health benefits beyond basic nutrition. These include vitamins, minerals, herbal extracts, amino acids, and dietary supplements that support immune function, reduce inflammation, enhance cognitive performance, and promote overall wellness.",
  },
  {
    title: "Pharmaceuticals",
    icon: Pharma,
    description:
      "Pharmaceutical chemicals consist of high-purity active pharmaceutical ingredients (APIs) and excipients used in the formulation of prescription and over-the-counter medications. They play a critical role in the treatment, prevention, and diagnosis of diseases, adhering to strict regulatory standards for quality, efficacy, and safety.",
  },
  {
    title: "Food Ingredients",
    icon: Food,
    description:
      "Food ingredients encompass a wide range of natural and synthetic substances used in the production of packaged and processed foods. These include flavor enhancers, preservatives, emulsifiers, stabilizers, colorants, and nutritional additives that improve taste, texture, shelf life, and health value of food products.",
  },
  {
    title: "Coating & Paint Chemicals",
    icon: Coating,
    description:
      "Coating and paint chemicals are essential raw materials used in the formulation of protective and decorative finishes. These include resins, binders, pigments, solvents, and additives that provide weather resistance, corrosion protection, UV shielding, and improved surface adhesion across industrial, automotive, and architectural applications.",
  },
  {
    title: "Agrochemicals",
    icon: Agro,
    description:
      "Agrochemicals refer to a broad class of chemical products used to enhance agricultural productivity. This category includes pesticides (insecticides, herbicides, fungicides), fertilizers, plant growth regulators, and soil conditioners that protect crops, improve yields, and ensure sustainable farming practices.",
  },
  {
    title: "Cosmetic Raw Materials",
    icon: Cosmetic,
    description:
      "Cosmetic raw materials are the base components used in the manufacturing of skincare, haircare, personal hygiene, and beauty products. These include emollients, surfactants, humectants, natural extracts, essential oils, and active ingredients like peptides and antioxidants that enhance product performance, safety, and consumer appeal.",
  },
];

const StackedCardSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevCard = () => {
    setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const nextCard = () => {
    setActiveIndex((prev) => (prev + 1) % cards.length);
  };

  return (
    <section
      className="w-full min-h-screen bg-surface-variant pt-16 pb-28 px-4 flex flex-col items-center"
      id="product"
    >
      <h2 className="text-4xl font-bold text-primary mb-4">Core Products</h2>
      <p className="text-gray-600 mb-10 max-w-xl text-center">
        Scroll through our key offerings using the arrows below. Each card
        contains a high-quality product description and call to action.
      </p>
      <div className="w-full flex justify-evenly items-center h-auto">
        <button
          onClick={prevCard}
          className="px-4 py-2 h-20 bg-primary-container rounded-full shadow-2xl hover:bg-primary transition"
        >
          <IoArrowBack className="text-2xl" />
        </button>
        <div className="relative w-[400px]  h-[600px]">
          {cards.map((card, i) => {
            const indexFromActive =
              (i - activeIndex + cards.length) % cards.length;
            const zIndex = cards.length - indexFromActive;
            const isActive = i === activeIndex;

            return (
              <motion.div
                key={i}
                className="absolute w-full h-full hover:scale-105 transition-transform duration-150 ease-linear bg-surface rounded-xl shadow-xl p-6 flex flex-col items-start justify-between"
                style={{
                  transformOrigin: "bottom center",
                }}
                animate={{
                  scale: isActive ? 1 : 0.92 - indexFromActive * 0.02,
                  rotate: isActive ? 0 : -4 * indexFromActive,
                  y: isActive ? 0 : indexFromActive * 10,
                  x: isActive ? 0 : 0,
                  zIndex,
                  opacity: indexFromActive > 2 ? 0 : 1,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <img
                  src={card.icon}
                  alt={card.title}
                  className="w-full h-[300px] object-cover rounded-lg mb-4"
                />
                <div>
                  <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {card.description}
                  </p>
                  <a
                    href="/products"
                    className="inline-block bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition"
                  >
                    View Product
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
        <button
          onClick={nextCard}
          className="px-4 py-2 h-20 rounded-full bg-primary-container rounded hover:bg-primary shadow-2xl transition"
        >
          <IoArrowForward className="text-2xl" />
        </button>
      </div>
    </section>
  );
};

export default StackedCardSlider;
