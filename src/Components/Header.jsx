// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { SiMoleculer } from "react-icons/si";

// export default function Navbar() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [hideNav, setHideNav] = useState(0); // 0: visible, 1: hidden by scroll
//   const [lastScrollY, setLastScrollY] = useState(0);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
//   const [hoverTop, setHoverTop] = useState(false); // State for global top hover zone
//   const [hoverVisible, setHoverVisible] = useState(false); // State to keep nav visible if triggered by hover

//   const NAV_HEIGHT = 80; // Approximate height of the navbar in pixels

//   const navLinks = [
//     { name: "Home", path: "home" },
//     { name: "About Us", path: "about" },
//     { name: "Products", path: "product" },
//     { name: "Industries", path: "industries" },
//     { name: "Services", path: "services" },
//     { name: "Certifications", path: "certificates" },
//     { name: "Contact", path: "contact" },
//   ];

//   // Material 3 Expressive spring transitions for Framer Motion
//   const springSpatial = {
//     type: "spring",
//     stiffness: 200,
//     damping: 20,
//     mass: 1,
//   };

//   const springEffects = {
//     type: "spring",
//     stiffness: 300,
//     damping: 25,
//     mass: 0.8,
//   };

//   // Custom smooth scroll function to navigate to sections
//   const scrollToSection = (id) => {
//     const el = document.getElementById(id);
//     if (!el) return;
//     // Calculate scroll position, accounting for fixed navbar height
//     const top = el.getBoundingClientRect().top + window.scrollY;
//     window.scrollTo({ top, behavior: "smooth" });
//     setMenuOpen(false); // Close mobile menu after clicking a link
//   };

//   // Scroll handler for hiding/showing navbar and updating lastScrollY
//   useEffect(() => {
//     const onScroll = () => {
//       const y = window.scrollY;
//       setIsScrolled(y > 10); // True if scrolled past 10px

//       // Reset hover-related states if user actively scrolls
//       if (hoverTop) setHoverTop(false);
//       if (hoverVisible) setHoverVisible(false);

//       // Logic for hiding/showing navbar based on scroll direction and threshold
//       // Hide if scrolling down past 100px, otherwise show
//       setHideNav(y > lastScrollY && y > 100 ? 1 : 0);
//       setLastScrollY(y);
//     };

//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, [lastScrollY, hoverTop, hoverVisible]); // Dependencies for useEffect

//   // Effect to manage `hoverVisible` state: keeps nav visible if triggered by hover
//   useEffect(() => {
//     // If navbar is hidden due to scroll (hideNav === 1) and user hovers over top zone,
//     // set hoverVisible to true to force visibility.
//     if (hideNav === 1 && hoverTop) {
//       setHoverVisible(true);
//     }
//     // If navbar is naturally visible (hideNav === 0, i.e., scrolled to top or scrolling up),
//     // reset hoverVisible as it's no longer needed to force visibility.
//     if (hideNav === 0) {
//       setHoverVisible(false);
//     }
//   }, [hideNav, hoverTop]); // Dependencies for useEffect

//   // Resize handler for mobile responsiveness, adjusts `isMobile` state
//   useEffect(() => {
//     const onResize = () => {
//       setIsMobile(window.innerWidth < 640);
//       if (window.innerWidth >= 640) setMenuOpen(false); // Close mobile menu if resized to desktop
//     };
//     onResize(); // Call once on mount to set initial state
//     window.addEventListener("resize", onResize);
//     return () => window.removeEventListener("resize", onResize);
//   }, []); // Empty dependency array means this runs once on mount and clean up on unmount

//   // Variant for mobile menu animation
//   const mobileVariants = {
//     hidden: { opacity: 0, y: -30, transition: springSpatial },
//     visible: { opacity: 1, y: 0, transition: springSpatial },
//     exit: { opacity: 0, y: -30, transition: springSpatial },
//   };

//   // Determine if the navbar should actually be visible
//   // It's visible if:
//   // 1. We are at the top or scrolling up (hideNav === 0)
//   // OR
//   // 2. The navbar was previously made visible by a hover and hasn't been reset yet (hoverVisible === true)
//   const shouldShow = hideNav === 0 || hoverVisible;

//   return (
//     <>
//       {/* Invisible hover zone at the very top of the viewport */}
//       {/* This zone helps to re-show the navbar when the mouse enters the top edge of the screen */}
//       <div
//         className="fixed top-0 left-0 right-0 h-5 z-50" // Match z-index with navbar for proper layering
//         onMouseEnter={() => setHoverTop(true)}
//         onMouseLeave={() => setHoverTop(false)}
//       />

//       <motion.nav
//         // Animate navbar sliding up/down based on the combined visibility logic
//         initial={{ y: 0 }}
//         animate={{ y: shouldShow ? "0%" : "-100%" }}
//         transition={springSpatial}
//         className={`fixed top-0 left-0 w-full z-50 rounded-b-xl-inc overflow-hidden ${
//           // overflow-hidden is crucial for the clean slide-up animation of the main navbar
//           isScrolled
//             ? "bg-primary shadow-md text-on-primary"
//             : "bg-surface-container-low/90 backdrop-blur-md text-on-surface-variant"
//         } transition-colors duration-300 font-roboto`}
//       >
//         <div className="container mx-auto px-4 py-4 flex flex-wrap justify-between items-center relative">
//           {/* Logo */}
//           <motion.div
//             className="flex items-center font-roboto-medium text-headline-sm"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             transition={springEffects}
//           >
//             <a
//               href="#home"
//               onClick={(e) => {
//                 e.preventDefault();
//                 scrollToSection("home");
//               }}
//               className={`flex items-center ${
//                 isScrolled ? "text-on-primary" : "text-primary"
//               }"`}
//             >
//               <SiMoleculer
//                 className={`inline-block mr-2  fill-current
// `}
//               />
//               <div className="font-bold">Esscore</div>
//             </a>
//           </motion.div>

//           {/* Desktop Nav Links */}
//           {!isMobile && (
//             <ul className="flex gap-5 font-roboto-medium">
//               {navLinks.map((link) => (
//                 <motion.li
//                   key={link.path}
//                   // Apply Material 3 state layer effects on hover/tap
//                   whileHover={{
//                     backgroundColor: isScrolled
//                       ? "rgba(255, 255, 255, 0.08)" // on-primary at 8% opacity
//                       : "rgba(103, 80, 164, 0.08)", // primary at 8% opacity
//                     borderRadius: "8px", // M3 'sm' border-radius
//                   }}
//                   whileTap={{
//                     backgroundColor: isScrolled
//                       ? "rgba(255, 255, 255, 0.12)" // on-primary at 12% opacity
//                       : "rgba(103, 80, 164, 0.12)", // primary at 12% opacity
//                     borderRadius: "8px",
//                   }}
//                   transition={springEffects}
//                   className="rounded-sm"
//                 >
//                   <a
//                     href={`#${link.path}`}
//                     onClick={(e) => {
//                       e.preventDefault();
//                       scrollToSection(link.path);
//                     }}
//                     className={`block px-3 py-2 text-label-lg transition-colors ${
//                       isScrolled
//                         ? "text-on-primary hover:text-primary-container"
//                         : "text-on-surface-variant hover:text-primary"
//                     }`}
//                   >
//                     {link.name}
//                   </a>
//                 </motion.li>
//               ))}
//             </ul>
//           )}

//           {/* Mobile Menu Button (Hamburger/Close Icon) */}
//           {isMobile && (
//             <motion.button
//               onClick={() => setMenuOpen((o) => !o)}
//               className={`text-2xl ${
//                 isScrolled ? "text-on-primary" : "text-on-surface-variant"
//               }`}
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               transition={springEffects}
//             >
//               {/* AnimatePresence for icon cross-fade */}
//               <AnimatePresence mode="wait" initial={false}>
//                 {menuOpen ? (
//                   <motion.div
//                     key="closeIcon"
//                     initial={{ rotate: -90, opacity: 0 }}
//                     animate={{ rotate: 0, opacity: 1 }}
//                     exit={{ rotate: 90, opacity: 0 }}
//                     transition={springEffects}
//                   >
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="24"
//                       height="24"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     >
//                       <line x1="18" y1="6" x2="6" y2="18" />
//                       <line x1="6" y1="6" x2="18" y2="18" />
//                     </svg>
//                   </motion.div>
//                 ) : (
//                   <motion.div
//                     key="openIcon"
//                     initial={{ rotate: 90, opacity: 0 }}
//                     animate={{ rotate: 0, opacity: 1 }}
//                     exit={{ rotate: -90, opacity: 0 }}
//                     transition={springEffects}
//                   >
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="24"
//                       height="24"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     >
//                       <line x1="3" y1="12" x2="21" y2="12" />
//                       <line x1="3" y1="6" x2="21" y2="6" />
//                       <line x1="3" y1="18" x2="21" y2="18" />
//                     </svg>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </motion.button>
//           )}
//         </div>
//       </motion.nav>

//       {/* Mobile Nav Links (now positioned outside the main navbar to prevent clipping) */}
//       <AnimatePresence>
//         {isMobile && menuOpen && (
//           <motion.ul
//             variants={mobileVariants}
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//             // Positioned fixed to appear directly below the main navbar
//             className="fixed top-[65px] left-0 w-full bg-surface-container-high p-6 rounded-b-xl-inc shadow-lg space-y-4 font-roboto-medium text-center z-40"
//           >
//             {navLinks.map((link) => (
//               <motion.li
//                 key={link.path}
//                 // Apply M3 state layer effect for mobile links
//                 whileHover={{ backgroundColor: "rgba(103,80,164,0.08)" }} // Primary at 8%
//                 whileTap={{ backgroundColor: "rgba(103,80,164,0.12)" }} // Primary at 12%
//                 transition={springEffects}
//                 className="w-full rounded-2xl" // M3 '2xl' border-radius for larger, more tappable areas
//               >
//                 <a
//                   href={`#${link.path}`}
//                   onClick={(e) => {
//                     e.preventDefault();
//                     scrollToSection(link.path);
//                   }}
//                   className="block py-2 text-label-lg text-on-surface hover:text-primary"
//                 >
//                   {link.name}
//                 </a>
//               </motion.li>
//             ))}
//           </motion.ul>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }

// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { SiMoleculer } from "react-icons/si";

// export default function Navbar() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
//   const [expanded, setExpanded] = useState(false);

//   const NAV_HEIGHT = 64;

//   const navLinks = [
//     { name: "Home", path: "home" },
//     { name: "About Us", path: "about" },
//     { name: "Products", path: "product" },
//     { name: "Industries", path: "industries" },
//     { name: "Services", path: "services" },
//     { name: "Certifications", path: "certificates" },
//     { name: "Contact", path: "contact" },
//   ];

//   const spring = {
//     type: "spring",
//     stiffness: 300,
//     damping: 25,
//     mass: 1,
//   };

//   const scrollToSection = (id) => {
//     const el = document.getElementById(id);
//     if (!el) return;
//     const top = el.getBoundingClientRect().top + window.scrollY;
//     window.scrollTo({ top, behavior: "smooth" });
//     setMenuOpen(false);
//   };

//   useEffect(() => {
//     let lastScrollY = window.scrollY;
//     const onScroll = () => {
//       const currentScrollY = window.scrollY;
//       if (currentScrollY === 0) {
//         setIsScrolled(false);
//       } else if (currentScrollY > lastScrollY && currentScrollY > 10) {
//         setIsScrolled(true);
//         setExpanded(false);
//       } else if (currentScrollY < lastScrollY) {
//         setIsScrolled(false);
//       }
//       lastScrollY = currentScrollY;
//     };
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   useEffect(() => {
//     const onResize = () => {
//       setIsMobile(window.innerWidth < 640);
//       if (window.innerWidth >= 640) setMenuOpen(false);
//     };
//     onResize();
//     window.addEventListener("resize", onResize);
//     return () => window.removeEventListener("resize", onResize);
//   }, []);

//   const collapsedPill = (
//     <motion.div
//       className="fixed top-2 left-1/2 transform -translate-x-1/2 z-50 cursor-pointer"
//       initial={{ width: 120, height: 18, borderRadius: 9999, opacity: 0 }}
//       animate={{ width: 120, height: 18, borderRadius: 9999, opacity: 1 }}
//       whileHover={{ scale: 1.1 }}
//       onClick={() => setExpanded(true)}
//       onMouseEnter={() => setExpanded(true)}
//       style={{ backgroundColor: "rgb(103, 80, 164)" }}
//     />
//   );

//   const fullNavbar = (
//     <motion.nav
//       initial={{ height: 14, width: 100, borderRadius: 9999 }}
//       animate={{ height: NAV_HEIGHT, width: "100%", borderRadius: 0 }}
//       transition={spring}
//       className={`fixed top-0 left-0 z-50 shadow-md px-4 transition-colors duration-300 ${
//         isScrolled ? "bg-primary text-on-primary" : "bg-surface text-primary"
//       }`}
//     >
//       <div className="container mx-auto px-4 py-4 flex flex-wrap justify-between items-center">
//         <motion.div
//           className="flex items-center font-bold text-headline-sm"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           transition={spring}
//         >
//           <a
//             href="#home"
//             onClick={(e) => {
//               e.preventDefault();
//               scrollToSection("home");
//               setExpanded(false);
//             }}
//             className="flex items-center"
//           >
//             <SiMoleculer className="mr-2" />
//             Esscore
//           </a>
//         </motion.div>

//         {!isMobile && (
//           <ul className="flex gap-5 font-medium">
//             {navLinks.map((link) => (
//               <motion.li
//                 key={link.path}
//                 whileHover={{
//                   backgroundColor: "rgba(255, 255, 255, 0.08)",
//                   borderRadius: "8px",
//                 }}
//                 whileTap={{
//                   backgroundColor: "rgba(255, 255, 255, 0.12)",
//                   borderRadius: "8px",
//                 }}
//                 transition={spring}
//                 className="rounded-sm"
//               >
//                 <a
//                   href={`#${link.path}`}
//                   onClick={(e) => {
//                     e.preventDefault();
//                     scrollToSection(link.path);
//                     setExpanded(false);
//                   }}
//                   className="block px-3 py-2 text-label-lg"
//                 >
//                   {link.name}
//                 </a>
//               </motion.li>
//             ))}
//           </ul>
//         )}

//         {isMobile && (
//           <motion.button
//             onClick={() => setMenuOpen((o) => !o)}
//             className="text-2xl"
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//             transition={spring}
//           >
//             {menuOpen ? "✕" : "☰"}
//           </motion.button>
//         )}
//       </div>
//     </motion.nav>
//   );

//   return (
//     <>
//       <AnimatePresence>
//         {!expanded && isScrolled && collapsedPill}
//       </AnimatePresence>
//       <AnimatePresence>
//         {expanded || !isScrolled ? fullNavbar : null}
//       </AnimatePresence>

//       <AnimatePresence>
//         {isMobile && menuOpen && (
//           <motion.ul
//             initial={{ opacity: 0, y: -30 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -30 }}
//             transition={spring}
//             className="fixed top-[64px] left-0 w-full bg-surface-container-high p-6 rounded-b-xl shadow-lg space-y-4 font-medium text-center z-40"
//           >
//             {navLinks.map((link) => (
//               <motion.li
//                 key={link.path}
//                 whileHover={{ backgroundColor: "rgba(103,80,164,0.08)" }}
//                 whileTap={{ backgroundColor: "rgba(103,80,164,0.12)" }}
//                 transition={spring}
//                 className="w-full rounded-2xl"
//               >
//                 <a
//                   href={`#${link.path}`}
//                   onClick={(e) => {
//                     e.preventDefault();
//                     scrollToSection(link.path);
//                     setExpanded(false);
//                     setMenuOpen(false);
//                   }}
//                   className="block py-2 text-label-lg text-on-surface hover:text-primary"
//                 >
//                   {link.name}
//                 </a>
//               </motion.li>
//             ))}
//           </motion.ul>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }

// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { SiMoleculer } from "react-icons/si";

// export default function Navbar() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
//   const [expanded, setExpanded] = useState(false);
//   const [lastScrollY, setLastScrollY] = useState(0);

//   const NAV_HEIGHT = 64;

//   const navLinks = [
//     { name: "Home", path: "home" },
//     { name: "About Us", path: "about" },
//     { name: "Products", path: "product" },
//     { name: "Industries", path: "industries" },
//     { name: "Services", path: "services" },
//     { name: "Certifications", path: "certificates" },
//     { name: "Contact", path: "contact" },
//   ];

//   const spring = {
//     type: "spring",
//     stiffness: 300,
//     damping: 25,
//     mass: 1,
//   };

//   const scrollToSection = (id) => {
//     const el = document.getElementById(id);
//     if (!el) return;
//     const top = el.getBoundingClientRect().top + window.scrollY;
//     window.scrollTo({ top, behavior: "smooth" });
//     setMenuOpen(false);
//   };

//   useEffect(() => {
//     const onScroll = () => {
//       const currentScrollY = window.scrollY;
//       if (currentScrollY === 0) {
//         setIsScrolled(false);
//       } else if (currentScrollY > lastScrollY && currentScrollY > 10) {
//         setIsScrolled(true);
//         setExpanded(false);
//       } else if (currentScrollY < lastScrollY) {
//         setIsScrolled(false);
//       }
//       setLastScrollY(currentScrollY);
//     };
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, [lastScrollY]);

//   useEffect(() => {
//     const onResize = () => {
//       setIsMobile(window.innerWidth < 640);
//       if (window.innerWidth >= 640) setMenuOpen(false);
//     };
//     onResize();
//     window.addEventListener("resize", onResize);
//     return () => window.removeEventListener("resize", onResize);
//   }, []);

//   const collapsedPill = (
//     <motion.div
//       className="fixed top-2 left-1/2 transform -translate-x-1/2 z-50 cursor-pointer bg-primary shadow-2xl"
//       initial={{ width: 140, height: 12, borderRadius: 9999, opacity: 0 }}
//       animate={{ width: 140, height: 12, borderRadius: 9999, opacity: 1 }}
//       whileHover={{ scale: 1.1 }}
//       onClick={() => setExpanded(true)}
//       onMouseEnter={() => setExpanded(true)}
//     />
//   );

//   const fullNavbar = (
//     <motion.nav
//       initial={{ height: 14, width: 100, borderRadius: 9999 }}
//       animate={{ height: NAV_HEIGHT, width: "100%", borderRadius: 0 }}
//       transition={spring}
//       className={`fixed top-0 left-0 z-50 shadow-md px-4 transition-colors duration-300 rounded-b-xl ${
//         isScrolled ? "bg-primary text-on-primary" : "bg-white text-primary"
//       }`}
//     >
//       <div className="container mx-auto px-4 py-4 flex flex-wrap justify-between items-center">
//         <motion.div
//           className="flex items-center font-bold text-headline-sm"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           transition={spring}
//         >
//           <a
//             href="#home"
//             onClick={(e) => {
//               e.preventDefault();
//               scrollToSection("home");
//               setExpanded(false);
//             }}
//             className="flex items-center"
//           >
//             <SiMoleculer className="mr-2" />
//             Esscore
//           </a>
//         </motion.div>

//         {!isMobile && (
//           <ul className="flex gap-5 font-medium">
//             {navLinks.map((link) => (
//               <motion.li
//                 key={link.path}
//                 whileHover={{
//                   backgroundColor: "rgba(255, 255, 255, 0.08)",
//                   borderRadius: "8px",
//                 }}
//                 whileTap={{
//                   backgroundColor: "rgba(255, 255, 255, 0.12)",
//                   borderRadius: "8px",
//                 }}
//                 transition={spring}
//                 className="rounded-sm"
//               >
//                 <a
//                   href={`#${link.path}`}
//                   onClick={(e) => {
//                     e.preventDefault();
//                     scrollToSection(link.path);
//                     setExpanded(false);
//                   }}
//                   className="block px-3 py-2 text-label-lg"
//                 >
//                   {link.name}
//                 </a>
//               </motion.li>
//             ))}
//           </ul>
//         )}

//         {isMobile && (
//           <motion.button
//             onClick={() => setMenuOpen((o) => !o)}
//             className="text-2xl"
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//             transition={spring}
//           >
//             {menuOpen ? "✕" : "☰"}
//           </motion.button>
//         )}
//       </div>
//     </motion.nav>
//   );

//   return (
//     <>
//       <AnimatePresence>
//         {!expanded && isScrolled && collapsedPill}
//       </AnimatePresence>
//       <AnimatePresence>
//         {expanded || !isScrolled ? fullNavbar : null}
//       </AnimatePresence>

//       <AnimatePresence>
//         {isMobile && menuOpen && (
//           <motion.ul
//             initial={{ opacity: 0, y: -30 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -30 }}
//             transition={spring}
//             className="fixed top-[64px] left-0 w-full bg-surface-container-high p-6 rounded-b-xl shadow-lg space-y-4 font-medium text-center z-40"
//           >
//             {navLinks.map((link) => (
//               <motion.li
//                 key={link.path}
//                 whileHover={{ backgroundColor: "rgba(103,80,164,0.08)" }}
//                 whileTap={{ backgroundColor: "rgba(103,80,164,0.12)" }}
//                 transition={spring}
//                 className="w-full rounded-2xl"
//               >
//                 <a
//                   href={`#${link.path}`}
//                   onClick={(e) => {
//                     e.preventDefault();
//                     scrollToSection(link.path);
//                     setExpanded(false);
//                     setMenuOpen(false);
//                   }}
//                   className="block py-2 text-label-lg text-on-surface hover:text-primary"
//                 >
//                   {link.name}
//                 </a>
//               </motion.li>
//             ))}
//           </motion.ul>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }

// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { SiMoleculer } from "react-icons/si";

// export default function Navbar() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
//   const [expanded, setExpanded] = useState(false);
//   const [lastScrollY, setLastScrollY] = useState(0);

//   const NAV_HEIGHT = 64;

//   const navLinks = [
//     { name: "Home", path: "home" },
//     { name: "About Us", path: "about" },
//     { name: "Products", path: "product" },
//     { name: "Industries", path: "industries" },
//     { name: "Services", path: "services" },
//     { name: "Certifications", path: "certificates" },
//     { name: "Contact", path: "contact" },
//   ];

//   const spring = {
//     type: "spring",
//     stiffness: 300,
//     damping: 25,
//     mass: 1,
//   };

//   const scrollToSection = (id) => {
//     const el = document.getElementById(id);
//     if (!el) return;
//     const top = el.getBoundingClientRect().top + window.scrollY;
//     window.scrollTo({ top, behavior: "smooth" });
//     setMenuOpen(false);
//   };

//   useEffect(() => {
//     const onScroll = () => {
//       const currentScrollY = window.scrollY;
//       if (currentScrollY === 0) {
//         setIsScrolled(false);
//       } else if (currentScrollY > lastScrollY && currentScrollY > 10) {
//         setIsScrolled(true);
//         setExpanded(false);
//       } else if (currentScrollY < lastScrollY) {
//         setIsScrolled(false);
//       }
//       setLastScrollY(currentScrollY);
//     };
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, [lastScrollY]);

//   useEffect(() => {
//     const onResize = () => {
//       setIsMobile(window.innerWidth < 640);
//       if (window.innerWidth >= 640) setMenuOpen(false);
//     };
//     onResize();
//     window.addEventListener("resize", onResize);
//     return () => window.removeEventListener("resize", onResize);
//   }, []);

//   const collapsedPill = (
//     <motion.div
//       className="fixed top-2 left-1/2 transform -translate-x-1/2 z-50 cursor-pointer bg-primary"
//       initial={{ width: 160, height: 12, borderRadius: 9999, opacity: 0 }}
//       animate={{ width: 160, height: 12, borderRadius: 9999, opacity: 1 }}
//       whileHover={{ scale: 1.1 }}
//       onClick={() => setExpanded(true)}
//       onMouseEnter={() => setExpanded(true)}
//     />
//   );

//   const fullNavbar = (
//     <motion.nav
//       initial={{ height: 14, width: 100, borderRadius: 9999 }}
//       animate={{
//         height: NAV_HEIGHT,
//         width: "calc(100% - 1rem)",
//         borderRadius: 9999,
//       }}
//       transition={spring}
//       className={`fixed align-middle w-full top-2 left-1/2 transform -translate-x-1/2 z-50 shadow-md px-4 transition-colors duration-300 ${
//         isScrolled ? "bg-primary text-on-primary" : "bg-surface text-primary"
//       }`}
//     >
//       <div className="flex justify-between items-center px-4 py-4">
//         <motion.div
//           className="flex items-center font-bold text-headline-sm"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           transition={spring}
//         >
//           <a
//             href="#home"
//             onClick={(e) => {
//               e.preventDefault();
//               scrollToSection("home");
//               setExpanded(false);
//             }}
//             className="flex items-center"
//           >
//             <SiMoleculer className="mr-2" />
//             Esscore
//           </a>
//         </motion.div>

//         {!isMobile && (
//           <ul className="flex gap-5 font-medium items-center">
//             {navLinks.map((link) => (
//               <motion.li
//                 key={link.path}
//                 whileHover={{
//                   backgroundColor: "rgba(255, 255, 255, 0.08)",
//                   borderRadius: "8px",
//                 }}
//                 whileTap={{
//                   backgroundColor: "rgba(255, 255, 255, 0.12)",
//                   borderRadius: "8px",
//                 }}
//                 transition={spring}
//                 className="rounded-sm"
//               >
//                 <a
//                   href={`#${link.path}`}
//                   onClick={(e) => {
//                     e.preventDefault();
//                     scrollToSection(link.path);
//                     setExpanded(false);
//                   }}
//                   className={`block px-3 py-2 text-label-lg`}
//                 >
//                   {link.name}
//                 </a>
//               </motion.li>
//             ))}
//           </ul>
//         )}

//         {isMobile && (
//           <motion.button
//             onClick={() => setMenuOpen((o) => !o)}
//             className="text-2xl"
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//             transition={spring}
//           >
//             {menuOpen ? "✕" : "☰"}
//           </motion.button>
//         )}
//       </div>
//     </motion.nav>
//   );

//   return (
//     <>
//       <AnimatePresence>
//         {!expanded && isScrolled && collapsedPill}
//       </AnimatePresence>
//       <AnimatePresence>
//         {expanded || !isScrolled ? fullNavbar : null}
//       </AnimatePresence>

//       <AnimatePresence>
//         {isMobile && menuOpen && (
//           <motion.ul
//             initial={{ opacity: 0, y: -30 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -30 }}
//             transition={spring}
//             className="fixed top-[80px] left-1/2 transform -translate-x-1/2 w-[calc(100%-2rem)] bg-surface-container-high p-6 rounded-2xl shadow-lg space-y-4 font-medium text-center z-40"
//           >
//             {navLinks.map((link) => (
//               <motion.li
//                 key={link.path}
//                 whileHover={{ backgroundColor: "rgba(103,80,164,0.08)" }}
//                 whileTap={{ backgroundColor: "rgba(103,80,164,0.12)" }}
//                 transition={spring}
//                 className="w-full rounded-2xl"
//               >
//                 <a
//                   href={`#${link.path}`}
//                   onClick={(e) => {
//                     e.preventDefault();
//                     scrollToSection(link.path);
//                     setExpanded(false);
//                     setMenuOpen(false);
//                   }}
//                   className="block py-2 text-label-lg text-on-surface hover:text-primary"
//                 >
//                   {link.name}
//                 </a>
//               </motion.li>
//             ))}
//           </motion.ul>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SiMoleculer } from "react-icons/si";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
  const [expanded, setExpanded] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const NAV_HEIGHT = 64;

  const navLinks = [
    { name: "Home", path: "home" },
    { name: "About Us", path: "about" },
    { name: "Products", path: "product" },
    { name: "Industries", path: "industries" },
    { name: "Services", path: "services" },
    { name: "Certifications", path: "certificates" },
    { name: "Contact", path: "contact" },
  ];

  const spring = {
    type: "spring",
    stiffness: 220,
    damping: 30,
    mass: 0.9,
    velocity: 2,
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top, behavior: "smooth" });
    setMenuOpen(false);
  };

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY === 0) {
        setIsScrolled(false);
      } else if (currentScrollY > lastScrollY && currentScrollY > 10) {
        setIsScrolled(true);
        setExpanded(false);
      } else if (currentScrollY < lastScrollY) {
        setIsScrolled(false);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const onResize = () => {
      setIsMobile(window.innerWidth < 640);
      if (window.innerWidth >= 640) setMenuOpen(false);
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const collapsedPill = (
    <motion.div
      className="fixed top-2 left-1/2 transform -translate-x-1/2 z-50 cursor-pointer bg-primary shadow-lg"
      initial={{ width: 180, height: 15, borderRadius: 9999, opacity: 0 }}
      animate={{ width: 180, height: 15, borderRadius: 9999, opacity: 1 }}
      whileHover={{ scale: 1.12 }}
      transition={spring}
      onClick={() => setExpanded(true)}
      onMouseEnter={() => setExpanded(true)}
    />
  );

  const fullNavbar = (
    <motion.nav
      initial={{ height: 8, width: 100, borderRadius: 9999, opacity: 0 }}
      animate={{
        height: NAV_HEIGHT,
        width: "calc(100% - 1rem)",
        borderRadius: 9999,
        opacity: 1,
      }}
      exit={{ opacity: 0, y: -20 }}
      transition={spring}
      className={`fixed top-2 left-1/2 transform -translate-x-1/2 z-50 shadow-md px-4 transition-colors duration-300 ${
        isScrolled ? "bg-primary text-on-primary" : "bg-surface text-primary"
      }`}
      style={{ backdropFilter: "blur(10px)" }}
    >
      <div className="flex justify-between items-center px-4 py-4">
        <motion.div
          className="flex items-center font-bold text-headline-sm"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={spring}
        >
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
              setExpanded(false);
            }}
            className="flex items-center"
          >
            <SiMoleculer className="mr-2" />
            Esscore
          </a>
        </motion.div>

        {!isMobile && (
          <ul className="flex gap-5 font-medium">
            {navLinks.map((link) => (
              <motion.li
                key={link.path}
                whileHover={{
                  backgroundColor: isScrolled
                    ? "rgba(255,255,255,0.08)"
                    : "rgba(103,80,164,0.08)",
                  borderRadius: "8px",
                }}
                whileTap={{
                  backgroundColor: isScrolled
                    ? "rgba(255,255,255,0.12)"
                    : "rgba(103,80,164,0.12)",
                  borderRadius: "8px",
                }}
                transition={spring}
                className="rounded-sm"
              >
                <a
                  href={`#${link.path}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.path);
                    setExpanded(false);
                  }}
                  className="block px-3 py-2 text-label-lg "
                >
                  {link.name}
                </a>
              </motion.li>
            ))}
          </ul>
        )}

        {isMobile && (
          <motion.button
            onClick={() => setMenuOpen((o) => !o)}
            className="text-2xl"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={spring}
          >
            {menuOpen ? "✕" : "☰"}
          </motion.button>
        )}
      </div>
    </motion.nav>
  );

  return (
    <>
      <AnimatePresence>
        {!expanded && isScrolled && collapsedPill}
      </AnimatePresence>
      <AnimatePresence>
        {expanded || !isScrolled ? fullNavbar : null}
      </AnimatePresence>

      <AnimatePresence>
        {isMobile && menuOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={spring}
            className="fixed top-[80px] left-1/2 transform -translate-x-1/2 w-[calc(100%-2rem)] bg-surface-container-high p-6 rounded-2xl shadow-lg space-y-4 font-medium text-center z-40"
          >
            {navLinks.map((link) => (
              <motion.li
                key={link.path}
                whileHover={{ backgroundColor: "rgba(103,80,164,0.08)" }}
                whileTap={{ backgroundColor: "rgba(103,80,164,0.12)" }}
                transition={spring}
                className="w-full rounded-2xl"
              >
                <a
                  href={`#${link.path}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.path);
                    setExpanded(false);
                    setMenuOpen(false);
                  }}
                  className="block py-2 text-label-lg text-on-surface hover:text-primary"
                >
                  {link.name}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </>
  );
}
