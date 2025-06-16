// import React from "react";
// import Neutra from "../assets/NeutraCard.jpg";
// import Pharma from "../assets/PharmaCard.png";
// import Food from "../assets/FoodIngCard.jpg";
// import Coating from "../assets/CoatCard.png";
// import Agro from "../assets/AgroCard.jpg";
// import Cosmetic from "../assets/CosmCard.jpg";
// import { Link } from "react-router-dom";
// import { IoArrowRedoOutline } from "react-icons/io5";

// function CoreProducts() {
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
//     <div className="w-full bg-gray-100 py-10">
//       {/* Heading */}
//       <div className="container mx-auto px-4">
//         <h1 className="text-3xl font-bold mb-10 text-center">
//           Core Products Categories
//         </h1>
//       </div>

//       {/* Scrollable Product Cards (aligned with container left) */}
//       <div className="overflow-x-auto no-scrollbar">
//         <div className="container mx-auto px-4">
//           <div className="flex gap-10 w-max">
//             {productCategories.map((item) => (
//               <div
//                 key={item.title}
//                 className="flex-shrink-0 w-[400px] h-[580px] bg-gray-100 border border-blue-400 rounded-3xl overflow-hidden shadow-md flex flex-col"
//               >
//                 <div className="w-[400px] h-[300px] bg-white">
//                   <img
//                     src={item.icon}
//                     alt={item.title}
//                     className="w-full h-full object-fill object-center"
//                   />
//                 </div>

//                 {/* Card Content */}
//                 <div className="flex flex-col justify-between flex-grow p-4">
//                   <div>
//                     <h2 className="text-2xl font-semibold mb-2">
//                       {item.title}
//                     </h2>
//                     <p className="text-gray-700 text-sm">{item.description}</p>
//                   </div>

//                   <div className="pt-4">
//                     <Link
//                       to="/about"
//                       className="flex group text-lg items-center gap-2 w-fit text-blue-500 font-medium transition-transform duration-150 ease-in-out hover:translate-x-2"
//                     >
//                       Learn More{" "}
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
//     </div>
//   );
// }

// export default CoreProducts;

// import React, { useRef } from "react";
// import Neutra from "../assets/NeutraCard.jpg";
// import Pharma from "../assets/PharmaCard.png";
// import Food from "../assets/FoodIngCard.jpg";
// import Coating from "../assets/CoatCard.png";
// import Agro from "../assets/AgroCard.jpg";
// import Cosmetic from "../assets/CosmCard.jpg";
// import { Link } from "react-router-dom";
// import {
//   IoArrowRedoOutline,
//   IoChevronBack,
//   IoChevronForward,
// } from "react-icons/io5";

// function CoreProducts() {
//   const scrollRef = useRef(null);

//   const scrollLeft = () => {
//     scrollRef.current.scrollBy({ left: -400, behavior: "smooth" });
//   };

//   const scrollRight = () => {
//     scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
//   };

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
//     <div className="w-full bg-gray-100 py-18 px-4 ">
//       {/* Heading */}
//       <div className="container mx-auto px-4 flex justify-between">
//         <h1 className="text-6xl text-blue-400 font-bold mb-10 text-center">
//           Core Products Categories
//         </h1>
//         <div className="flex gap-5 w-fit">
//           <button
//             onClick={scrollLeft}
//             className="p-2 w-fit bg-blue-100 text-blue-600 rounded-full shadow hover:bg-blue-200"
//           >
//             <IoChevronBack size={40} />
//           </button>
//           <button
//             onClick={scrollRight}
//             className="p-2 w-fit bg-blue-100 text-blue-600 rounded-full shadow hover:bg-blue-200"
//           >
//             <IoChevronForward size={40} />
//           </button>
//         </div>
//       </div>

//       {/* Buttons */}
//       <div className="container mx-auto px-4 mb-4 flex justify-end gap-2"></div>

//       {/* Scrollable Cards */}
//       <div className="overflow-x-auto scrollbar-hide " ref={scrollRef}>
//         <div className="container mx-auto px-4">
//           <div className="flex gap-10 w-max py-10 pr-20 ">
//             {productCategories.map((item) => (
//               <div
//                 key={item.title}
//                 className="flex-shrink-0 w-[400px] h-[580px] bg-gray-100 border border-blue-400 rounded-3xl overflow-hidden shadow-md flex flex-col transition-transform hover:scale-105 hover:shadow-xl duration-300 ease-in-out"
//               >
//                 <div className="w-[400px] h-[300px] bg-white">
//                   <img
//                     src={item.icon}
//                     alt={item.title}
//                     className="w-full h-full object-fill object-center"
//                   />
//                 </div>

//                 <div className="flex flex-col justify-between flex-grow p-4">
//                   <div>
//                     <h2 className="text-2xl font-semibold mb-2">
//                       {item.title}
//                     </h2>
//                     <p className="text-gray-700 text-sm">{item.description}</p>
//                   </div>

//                   <div className="pt-4">
//                     <Link
//                       to="/about"
//                       className="flex group text-lg items-center gap-2 w-fit text-blue-500 font-medium transition-transform duration-150 ease-in-out hover:translate-x-2"
//                     >
//                       Learn More{" "}
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
//       <div className="flex justify-center items-center mt-10">
//         <Link
//           to="/Products"
//           className=" bg-blue-400 px-5 py-3 flex group text-lg items-center gap-2 w-fit text-white font-medium transition-transform duration-300 ease-in-out hover:scale-105 rounded-xl"
//         >
//           View All Products{" "}
//           <IoArrowRedoOutline
//             className="inline-block transition-all duration-150 ease-in-out group-hover:rotate-180"
//             size={18}
//           />
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default CoreProducts;

// import React, { useRef, useEffect } from "react";
// import Neutra from "../assets/NeutraCard.jpg";
// import Pharma from "../assets/PharmaCard.png";
// import Food from "../assets/FoodIngCard.jpg";
// import Coating from "../assets/CoatCard.png";
// import Agro from "../assets/AgroCard.jpg";
// import Cosmetic from "../assets/CosmCard.jpg";
// import { Link } from "react-router-dom";
// import {
//   IoArrowRedoOutline,
//   IoChevronBack,
//   IoChevronForward,
// } from "react-icons/io5";

// function CoreProducts() {
//   const scrollRef = useRef(null);

//   // 🚫 Block wheel scroll (mouse/touchpad), ✅ allow touch swipe
//   useEffect(() => {
//     const container = scrollRef.current;
//     const disableWheel = (e) => {
//       e.preventDefault();
//     };

//     if (container) {
//       container.addEventListener("wheel", disableWheel, { passive: false });
//     }

//     return () => {
//       if (container) {
//         container.removeEventListener("wheel", disableWheel);
//       }
//     };
//   }, []);

//   const scrollLeft = () => {
//     scrollRef.current.scrollBy({ left: -400, behavior: "smooth" });
//   };

//   const scrollRight = () => {
//     scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
//   };

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
//     <div className="w-full bg-gray-100 py-18 px-4 ">
//       {/* Heading and scroll buttons */}
//       <div className="container mx-auto px-4 flex justify-between items-center">
//         <h1 className="text-6xl text-blue-400 font-bold mb-10">
//           Core Products Categories
//         </h1>
//         <div className="flex gap-5">
//           <button
//             onClick={scrollLeft}
//             className="p-2 bg-blue-100 text-blue-600 rounded-full shadow hover:bg-blue-200"
//           >
//             <IoChevronBack size={40} />
//           </button>
//           <button
//             onClick={scrollRight}
//             className="p-2 bg-blue-100 text-blue-600 rounded-full shadow hover:bg-blue-200"
//           >
//             <IoChevronForward size={40} />
//           </button>
//         </div>
//       </div>

//       {/* Scrollable Cards */}
//       <div
//         ref={scrollRef}
//         className="overflow-x-auto scrollbar-hide scroll-smooth"
//       >
//         <div className="container mx-auto px-4">
//           <div className="flex gap-10 w-max py-10 pr-20">
//             {productCategories.map((item) => (
//               <div
//                 key={item.title}
//                 className="flex-shrink-0 w-[400px] h-[580px] bg-gray-100 border border-blue-400 rounded-3xl overflow-hidden shadow-md flex flex-col transition-transform hover:scale-105 hover:shadow-xl duration-300 ease-in-out"
//               >
//                 <div className="w-[400px] h-[300px] bg-white">
//                   <img
//                     src={item.icon}
//                     alt={item.title}
//                     className="w-full h-full object-fill object-center"
//                   />
//                 </div>

//                 <div className="flex flex-col justify-between flex-grow p-4">
//                   <div>
//                     <h2 className="text-2xl font-semibold mb-2">
//                       {item.title}
//                     </h2>
//                     <p className="text-gray-700 text-sm">{item.description}</p>
//                   </div>

//                   <div className="pt-4">
//                     <Link
//                       to="/about"
//                       className="flex group text-lg items-center gap-2 w-fit text-blue-500 font-medium transition-transform duration-150 ease-in-out hover:translate-x-2"
//                     >
//                       Learn More{" "}
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

//       {/* Bottom Button */}
//       <div className="flex justify-center items-center mt-10">
//         <Link
//           to="/Products"
//           className="bg-blue-400 px-5 py-3 flex group text-lg items-center gap-2 text-white font-medium transition-transform duration-300 ease-in-out hover:scale-105 rounded-xl"
//         >
//           View All Products{" "}
//           <IoArrowRedoOutline
//             className="inline-block transition-all duration-150 ease-in-out group-hover:rotate-180"
//             size={18}
//           />
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default CoreProducts;
//

// import React, { useRef } from "react";
// import Neutra from "../assets/NeutraCard.jpg";
// import Pharma from "../assets/PharmaCard.png";
// import Food from "../assets/FoodIngCard.jpg";
// import Coating from "../assets/CoatCard.png";
// import Agro from "../assets/AgroCard.jpg";
// import Cosmetic from "../assets/CosmCard.jpg";
// import { Link } from "react-router-dom";
// import {
//   IoArrowRedoOutline,
//   IoChevronBack,
//   IoChevronForward,
// } from "react-icons/io5";

// function CoreProducts() {
//   const scrollRef = useRef(null);

//   // Buttons to scroll horizontally
//   const scrollLeft = () => {
//     scrollRef.current?.scrollBy({ left: -400, behavior: "smooth" });
//   };

//   const scrollRight = () => {
//     scrollRef.current?.scrollBy({ left: 400, behavior: "smooth" });
//   };

//   // Product Cards Data
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
//     <div className="w-full bg-gray-200 py-18 px-4">
//       {/* Heading & Scroll Buttons */}
//       <div className="container mx-auto px-4 flex justify-between items-center">
//         <h1 className="text-6xl text-blue-400 font-bold mb-10">
//           Core Products Categories
//         </h1>
//         <div className="flex gap-5">
//           <button
//             onClick={scrollLeft}
//             className="p-2 bg-blue-100 text-blue-600 rounded-full shadow hover:bg-blue-200"
//           >
//             <IoChevronBack size={40} />
//           </button>
//           <button
//             onClick={scrollRight}
//             className="p-2 bg-blue-100 text-blue-600 rounded-full shadow hover:bg-blue-200"
//           >
//             <IoChevronForward size={40} />
//           </button>
//         </div>
//       </div>

//       {/* Scrollable Cards Section */}
//       <div
//         ref={scrollRef}
//         className="overflow-x-auto scrollbar-hide"
//         // 🚫 Disable horizontal scroll by mouse wheel
//         onWheel={(e) => {
//           if (e.deltaX !== 0) e.preventDefault();
//         }}
//         // 🚫 Disable horizontal scroll by touch/swipe
//         onTouchStart={(e) => {
//           const touchStartX = e.touches[0].clientX;
//           const touchStartY = e.touches[0].clientY;

//           const handleTouchMove = (moveEvent) => {
//             const dx = moveEvent.touches[0].clientX - touchStartX;
//             const dy = moveEvent.touches[0].clientY - touchStartY;

//             // if horizontal swipe, block it
//             if (Math.abs(dx) > Math.abs(dy)) {
//               moveEvent.preventDefault();
//             }
//           };

//           const container = scrollRef.current;
//           container.addEventListener("touchmove", handleTouchMove, {
//             passive: false,
//           });

//           container.addEventListener(
//             "touchend",
//             () => {
//               container.removeEventListener("touchmove", handleTouchMove);
//             },
//             { once: true },
//           );
//         }}
//       >
//         <div className="container mx-auto px-4">
//           <div className="flex gap-10 w-max py-10 pr-20">
//             {productCategories.map((item) => (
//               <div
//                 key={item.title}
//                 className="flex-shrink-0 w-[400px] h-[580px] bg-gray-200 border border-white rounded-3xl overflow-hidden shadow-md flex flex-col transition-transform hover:scale-105 hover:shadow-xl duration-300 ease-in-out"
//               >
//                 <div className="w-[400px] h-[300px] bg-white">
//                   <img
//                     src={item.icon}
//                     alt={item.title}
//                     className="w-full h-full object-fill object-center"
//                   />
//                 </div>

//                 <div className="flex flex-col justify-between flex-grow p-4">
//                   <div>
//                     <h2 className="text-2xl font-semibold mb-2">
//                       {item.title}
//                     </h2>
//                     <p className="text-gray-700 text-sm">{item.description}</p>
//                   </div>

//                   <div className="pt-4">
//                     <Link
//                       to="/about"
//                       className="flex group text-lg items-center gap-2 w-fit text-blue-500 font-medium transition-transform duration-150 ease-in-out hover:translate-x-2"
//                     >
//                       View Category{" "}
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

//       {/* View All Products Button */}
//       <div className="flex justify-center items-center mt-10">
//         <Link
//           to="/Products"
//           className="bg-blue-400 px-5 py-3 flex group text-lg items-center gap-2 text-white font-medium transition-transform duration-300 ease-in-out hover:scale-105 rounded-xl"
//         >
//           View All Products{" "}
//           <IoArrowRedoOutline
//             className="inline-block transition-all duration-150 ease-in-out group-hover:rotate-180"
//             size={18}
//           />
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default CoreProducts;

// import React, { useRef, useEffect } from "react";
// import Neutra from "../assets/NeutraCard.jpg";
// import Pharma from "../assets/PharmaCard.png";
// import Food from "../assets/FoodIngCard.jpg";
// import Coating from "../assets/CoatCard.png";
// import Agro from "../assets/AgroCard.jpg";
// import Cosmetic from "../assets/CosmCard.jpg";
// import { Link } from "react-router-dom";
// import {
//   IoArrowRedoOutline,
//   IoChevronBack,
//   IoChevronForward,
// } from "react-icons/io5";

// function CoreProducts() {
//   const scrollRef = useRef(null);

//   // Scroll by button
//   const scrollLeft = () => {
//     scrollRef.current?.scrollBy({ left: -400, behavior: "smooth" });
//   };

//   const scrollRight = () => {
//     scrollRef.current?.scrollBy({ left: 400, behavior: "smooth" });
//   };

//   // 🚫 Prevent horizontal scroll from touch/mouse/trackpad
//   useEffect(() => {
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
//   }, []);

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
//     <section id="products" className="w-full bg-gray-200 py-18 px-4">
//       {/* Heading & Buttons */}
//       <div className="container mx-auto px-4 flex justify-between items-center">
//         <h1 className="text-6xl text-blue-400 font-bold mb-10">
//           Core Products Categories
//         </h1>
//         <div className="flex gap-5">
//           <button
//             onClick={scrollLeft}
//             className="p-2 bg-blue-100 text-blue-600 rounded-full shadow hover:bg-blue-200"
//           >
//             <IoChevronBack size={40} />
//           </button>
//           <button
//             onClick={scrollRight}
//             className="p-2 bg-blue-100 text-blue-600 rounded-full shadow hover:bg-blue-200"
//           >
//             <IoChevronForward size={40} />
//           </button>
//         </div>
//       </div>

//       {/* Scrollable Section */}
//       <div
//         ref={scrollRef}
//         className="overflow-x-auto overflow-y-hidden scrollbar-hide"
//       >
//         <div className="container mx-auto px-4">
//           <div className="flex gap-16 w-max py-10 pr-20">
//             {productCategories.map((item) => (
//               <div
//                 key={item.title}
//                 className="flex-shrink-0 w-[400px] h-[580px] bg-gray-200 border border-blue-400 rounded-3xl overflow-hidden shadow-md flex flex-col transition-transform hover:scale-105 hover:shadow-xl duration-300 ease-in-out"
//               >
//                 <div className="w-[400px] h-[300px] bg-white">
//                   <img
//                     src={item.icon}
//                     alt={item.title}
//                     className="w-full h-full object-fill object-center"
//                   />
//                 </div>

//                 <div className="flex flex-col justify-between flex-grow p-4">
//                   <div>
//                     <h2 className="text-2xl font-semibold mb-2">
//                       {item.title}
//                     </h2>
//                     <p className="text-gray-700 text-sm">{item.description}</p>
//                   </div>

//                   <div className="pt-4">
//                     <Link
//                       to="/about"
//                       className="flex group text-xl items-center gap-2 w-fit text-blue-500 font-medium transition-transform duration-150 ease-in-out hover:translate-x-2"
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
//       <div className="flex justify-center items-center mt-10">
//         <Link
//           to="/Products"
//           className="bg-blue-400 px-5 py-3 flex group text-lg items-center gap-2 text-white font-medium transition-transform duration-300 ease-in-out hover:scale-105 rounded-xl"
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

// import React, { useRef, useEffect } from "react";
// import Neutra from "../assets/NeutraCard.jpg";
// import Pharma from "../assets/PharmaCard.png";
// import Food from "../assets/FoodIngCard.jpg";
// import Coating from "../assets/CoatCard.png";
// import Agro from "../assets/AgroCard.jpg";
// import Cosmetic from "../assets/CosmCard.jpg";
// import { Link } from "react-router-dom";
// import {
//   IoArrowRedoOutline,
//   IoChevronBack,
//   IoChevronForward,
// } from "react-icons/io5";

// function CoreProducts() {
//   const scrollRef = useRef(null);

//   // Scroll by button
//   const scrollLeft = () => {
//     scrollRef.current?.scrollBy({ left: -400, behavior: "smooth" });
//   };

//   const scrollRight = () => {
//     scrollRef.current?.scrollBy({ left: 400, behavior: "smooth" });
//   };

//   // 🚫 Prevent horizontal scroll from touch/mouse/trackpad
//   useEffect(() => {
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
//   }, []);

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
//     <section id="products" className="w-full bg-gray-200 py-8 md:py-18 px-4">
//       {/* Heading & Buttons */}
//       <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
//         <h1 className="text-4xl md:text-6xl text-blue-400 font-bold mb-6 md:mb-10 text-center md:text-left">
//           Core Products Categories
//         </h1>
//         <div className="flex gap-5 mb-6 md:mb-0">
//           <button
//             onClick={scrollLeft}
//             className="p-1 md:p-2 bg-blue-100 text-blue-600 rounded-full shadow hover:bg-blue-200"
//           >
//             <IoChevronBack className="text-3xl md:text-4xl" />
//           </button>
//           <button
//             onClick={scrollRight}
//             className="p-1 md:p-2 bg-blue-100 text-blue-600 rounded-full shadow hover:bg-blue-200"
//           >
//             <IoChevronForward className="text-3xl md:text-4xl" />
//           </button>
//         </div>
//       </div>

//       {/* Scrollable Section */}
//       <div
//         ref={scrollRef}
//         className="overflow-x-auto overflow-y-hidden scrollbar-hide"
//       >
//         <div className="container mx-auto px-4">
//           <div className="flex gap-8 md:gap-16 w-max py-5 md:py-10 pr-4 md:pr-20">
//             {productCategories.map((item) => (
//               <div
//                 key={item.title}
//                 className="flex-shrink-0 w-[85vw] md:w-[400px] h-auto md:h-[580px] bg-gray-200 border border-blue-400 rounded-3xl overflow-hidden shadow-md flex flex-col transition-transform hover:scale-105 hover:shadow-xl duration-300 ease-in-out"
//               >
//                 <div className="w-full h-[40vw] md:h-[300px] bg-white">
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
//                       className="flex group text-base md:text-xl items-center gap-2 w-fit text-blue-500 font-medium transition-transform duration-150 ease-in-out hover:translate-x-2"
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
//           className="bg-blue-400 px-4 py-2 md:px-5 md:py-3 flex group text-base md:text-lg items-center gap-2 text-white font-medium transition-transform duration-300 ease-in-out hover:scale-105 rounded-xl"
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
import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  IoArrowRedoOutline,
  IoChevronBack,
  IoChevronForward,
} from "react-icons/io5";
import Neutra from "../assets/NeutraCard.jpg";
import Pharma from "../assets/PharmaCard.png";
import Food from "../assets/FoodIngCard.jpg";
import Coating from "../assets/CoatCard.png";
import Agro from "../assets/AgroCard.jpg";
import Cosmetic from "../assets/CosmCard.jpg";

// Mock images - replace with your actual imports
function CoreProducts() {
  const scrollRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile devices
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  // Scroll by button
  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -400, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 400, behavior: "smooth" });
  };

  // 🚫 Prevent horizontal scroll from touch/mouse/trackpad on desktop only
  useEffect(() => {
    if (isMobile) return;

    const container = scrollRef.current;
    if (!container) return;

    // Handle touch
    let touchStartX = 0;
    let touchStartY = 0;

    const handleTouchStart = (e) => {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      const dx = e.touches[0].clientX - touchStartX;
      const dy = e.touches[0].clientY - touchStartY;

      // Horizontal swipe => prevent
      if (Math.abs(dx) > Math.abs(dy)) {
        e.preventDefault();
      }
    };

    // Trackpad scroll
    const handleWheel = (e) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        e.preventDefault();
      }
    };

    container.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    });
    container.addEventListener("touchmove", handleTouchMove, {
      passive: false,
    });
    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
      container.removeEventListener("wheel", handleWheel);
    };
  }, [isMobile]);

  const productCategories = [
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
  return (
    <section id="products" className="w-full bg-blue-100 py-8 md:py-18 px-4">
      {/* Heading & Buttons */}
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-3xl md:text-6xl text-blue-500 font-bold mb-6 md:mb-10 text-center md:text-left">
          Core Products Categories
        </h1>
        <div className="flex gap-5 mb-6 md:mb-0">
          <button
            onClick={scrollLeft}
            className="p-2 md:p-3 bg-blue-100 text-blue-600 rounded-full shadow hover:bg-blue-200"
          >
            <IoChevronBack className="text-2xl md:text-4xl" />
          </button>
          <button
            onClick={scrollRight}
            className="p-2 md:p-3 bg-blue-100 text-blue-600 rounded-full shadow hover:bg-blue-200"
          >
            <IoChevronForward className="text-2xl md:text-4xl" />
          </button>
        </div>
      </div>

      {/* Scrollable Section */}
      <div ref={scrollRef} className="overflow-x-auto scrollbar-hide pb-4">
        <div className="container mx-auto px-4">
          <div className="flex gap-6 md:gap-16 w-max py-5 md:py-10 pr-4 md:pr-20">
            {productCategories.map((item) => (
              <div
                key={item.title}
                className="flex-shrink-0 w-[300px] md:w-[400px] h-auto md:h-[580px] bg-blue-100 shadow-xs border border-blue-500 rounded-3xl overflow-hidden  flex flex-col transition-transform hover:scale-105 hover:shadow-xl duration-300 ease-in-out"
              >
                <div className="w-full h-[200px] md:h-[300px] bg-white">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                <div className="flex flex-col justify-between flex-grow p-4">
                  <div>
                    <h2 className="text-xl md:text-2xl font-semibold mb-2">
                      {item.title}
                    </h2>
                    <p className="text-gray-700 text-xs md:text-sm">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4">
                    <Link
                      to="/about"
                      className="flex group text-base md:text-lg items-center gap-2 w-fit text-blue-500 font-medium transition-transform duration-150 ease-in-out hover:translate-x-2"
                    >
                      View Product{" "}
                      <IoArrowRedoOutline
                        className="inline-block duration-150 ease-in-out group-hover:rotate-180"
                        size={18}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* View All Button */}
      <div className="flex justify-center items-center mt-6 md:mt-10">
        <Link
          to="/Products"
          className="bg-blue-500 px-4 py-2 md:px-5 md:py-3 flex group text-base md:text-lg items-center gap-2 text-white font-medium transition-transform duration-300 ease-in-out hover:scale-105 rounded-xl"
        >
          View All Products{" "}
          <IoArrowRedoOutline
            className="inline-block transition-all duration-150 ease-in-out group-hover:rotate-180"
            size={18}
          />
        </Link>
      </div>
    </section>
  );
}

export default CoreProducts;
