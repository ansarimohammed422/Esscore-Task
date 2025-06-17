// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// // Removed: import { HashLink } from "react-router-hash-link"; // This package is not supported

// export default function Navbar() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [hideNav, setHideNav] = useState(0); // Using 0/1 for better transition control
//   const [lastScrollY, setLastScrollY] = useState(0);
//   const [menuOpen, setMenuOpen] = useState(false);
//   // Using Tailwind's 'sm' breakpoint (640px)
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

//   // Define a fixed height for the navbar to use for scroll offset
//   // Adjust this value if your navbar height changes
//   const NAVBAR_HEIGHT = 80; // Approximate height of the navbar in pixels

//   const navLinks = [
//     { name: "Home", path: "home" }, // Changed path to ID without '#'
//     { name: "About Us", path: "about" },
//     { name: "Products", path: "product" },
//     { name: "Industries", path: "industries" },
//     { name: "Services", path: "services" },
//     { name: "Certifications", path: "certificates" },
//     { name: "Contact", path: "contact" },
//   ];

//   // Define M3 Expressive spring transitions for Framer Motion
//   const expressiveSpatialTransition = {
//     type: "spring",
//     stiffness: 200,
//     damping: 20,
//     mass: 1,
//     velocity: 0,
//   };

//   const expressiveEffectsTransition = {
//     type: "spring",
//     stiffness: 300,
//     damping: 25,
//     mass: 0.8,
//     velocity: 0,
//   };

//   // Custom smooth scroll function
//   const scrollToSection = (id) => {
//     const section = document.getElementById(id);
//     if (section) {
//       // Calculate scroll position, accounting for fixed navbar height
//       const offsetTop = section.getBoundingClientRect().top + window.scrollY;
//       window.scrollTo({
//         top: offsetTop,
//         behavior: "smooth",
//       });
//       setMenuOpen(false); // Close mobile menu after clicking a link
//     }
//   };

//   // Scroll handler for hiding/showing navbar and applying scrolled styles
//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScroll = window.scrollY;
//       setIsScrolled(currentScroll > 10);

//       if (currentScroll > lastScrollY && currentScroll > 100) {
//         setHideNav(1);
//       } else {
//         setHideNav(0);
//       }
//       setLastScrollY(currentScroll);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [lastScrollY]);

//   // Resize handler for mobile responsiveness
//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 640);
//       if (window.innerWidth >= 640) setMenuOpen(false);
//     };
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // Variant for mobile menu animation
//   const menuVariants = {
//     hidden: { opacity: 0, y: -20, transition: expressiveSpatialTransition },
//     visible: { opacity: 1, y: 0, transition: expressiveSpatialTransition },
//     exit: { opacity: 0, y: -20, transition: expressiveSpatialTransition },
//   };

//   return (
//     <motion.nav
//       initial={{ y: 0 }}
//       animate={{ y: hideNav ? "-100%" : "0%" }}
//       transition={expressiveSpatialTransition}
//       className={`fixed top-0 left-0 w-full z-50 rounded-b-lg ${
//         isScrolled
//           ? "bg-primary shadow-md text-on-primary"
//           : "bg-surface-container-lowest/90 backdrop-blur-md text-on-surface"
//       } transition-colors duration-300 font-roboto`}
//     >
//       <div className="container mx-auto px-4 py-4 flex flex-wrap justify-between items-center">
//         {/* Logo */}
//         <motion.div
//           className="flex items-center font-roboto-medium text-headline-sm"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           transition={expressiveEffectsTransition}
//         >
//           {/* Using <a> with onClick for smooth scroll */}
//           <a
//             href="#home"
//             onClick={() => scrollToSection("home")}
//             className="flex items-center"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="inline-block mr-2"
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             >
//               <circle cx="12" cy="12" r="3" />
//               <path d="M7 12h-2c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h2m0-8h-2c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2h2m10 8h2c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2h-2m0 8h2c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2h-2" />
//             </svg>
//             Esscore
//           </a>
//         </motion.div>

//         {/* Mobile Menu Button */}
//         {isMobile && (
//           <motion.button
//             onClick={() => setMenuOpen(!menuOpen)}
//             className={`text-2xl ${
//               isScrolled ? "text-on-primary" : "text-on-surface"
//             }`}
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//             transition={expressiveEffectsTransition}
//           >
//             <AnimatePresence mode="wait" initial={false}>
//               {menuOpen ? (
//                 <motion.div
//                   key="closeIcon"
//                   initial={{ rotate: -90, opacity: 0 }}
//                   animate={{ rotate: 0, opacity: 1 }}
//                   exit={{ rotate: 90, opacity: 0 }}
//                   transition={expressiveEffectsTransition}
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   >
//                     <line x1="18" y1="6" x2="6" y2="18" />
//                     <line x1="6" y1="6" x2="18" y2="18" />
//                   </svg>
//                 </motion.div>
//               ) : (
//                 <motion.div
//                   key="openIcon"
//                   initial={{ rotate: 90, opacity: 0 }}
//                   animate={{ rotate: 0, opacity: 1 }}
//                   exit={{ rotate: -90, opacity: 0 }}
//                   transition={expressiveEffectsTransition}
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   >
//                     <line x1="3" y1="12" x2="21" y2="12" />
//                     <line x1="3" y1="6" x2="21" y2="6" />
//                     <line x1="3" y1="18" x2="21" y2="18" />
//                   </svg>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </motion.button>
//         )}

//         {/* Nav Links (Desktop and Mobile) */}
//         <AnimatePresence>
//           {(isMobile ? menuOpen : true) && (
//             <motion.div
//               variants={menuVariants}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               className={`w-full sm:w-auto flex flex-col sm:flex-row text-label-lg sm:items-center gap-3 sm:gap-8 mt-4 sm:mt-0 ${
//                 isMobile && menuOpen
//                   ? "bg-surface-container-low p-4 rounded-lg shadow-lg"
//                   : ""
//               }`}
//             >
//               {navLinks.map((link) => (
//                 <motion.div
//                   key={link.path}
//                   whileHover={{
//                     backgroundColor: isScrolled
//                       ? "rgba(255, 255, 255, 0.08)"
//                       : "rgba(103, 80, 164, 0.08)",
//                     borderRadius: "8px",
//                   }}
//                   whileTap={{
//                     backgroundColor: isScrolled
//                       ? "rgba(255, 255, 255, 0.12)"
//                       : "rgba(103, 80, 164, 0.12)",
//                     borderRadius: "8px",
//                   }}
//                   transition={expressiveEffectsTransition}
//                   className="rounded-sm"
//                 >
//                   {/* Using <a> with onClick for smooth scroll */}
//                   <a
//                     href={`#${link.path}`} // Keep href for accessibility and fallback
//                     onClick={(e) => {
//                       e.preventDefault(); // Prevent default anchor jump
//                       scrollToSection(link.path);
//                     }}
//                     className={`block px-3 py-2 font-roboto-medium text-label-lg transition-colors ${
//                       isScrolled
//                         ? "text-on-primary hover:text-primary-container"
//                         : "text-on-surface hover:text-primary"
//                     }`}
//                   >
//                     {link.name}
//                   </a>
//                 </motion.div>
//               ))}
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </motion.nav>
//   );
// }
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hideNav, setHideNav] = useState(0); // 0: visible, 1: hidden by scroll
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
  const [isHoveredAtTop, setIsHoveredAtTop] = useState(false); // State for global top hover
  // New state: Tracks if navbar was made visible by hover and hasn't been reset by scrolling up
  const [wasHoverTriggeredVisible, setWasHoverTriggeredVisible] =
    useState(false);

  // Define a fixed height for the navbar to use for scroll offset
  const NAVBAR_HEIGHT = 80; // Approximate height of the navbar in pixels

  const navLinks = [
    { name: "Home", path: "home" },
    { name: "About Us", path: "about" },
    { name: "Products", path: "products" },
    { name: "Industries", path: "industries" },
    { name: "Services", path: "services" },
    { name: "Certifications", path: "certificates" },
    { name: "Contact", path: "contact" },
  ];

  // Define M3 Expressive spring transitions for Framer Motion
  const expressiveSpatialTransition = {
    type: "spring",
    stiffness: 200,
    damping: 20,
    mass: 1,
    velocity: 0,
  };

  const expressiveEffectsTransition = {
    type: "spring",
    stiffness: 300,
    damping: 25,
    mass: 0.8,
    velocity: 0,
  };

  // Custom smooth scroll function
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      // Calculate scroll position, accounting for fixed navbar height
      const offsetTop =
        section.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
      setMenuOpen(false); // Close mobile menu after clicking a link
    }
  };

  // Scroll handler for hiding/showing navbar and updating lastScrollY
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setIsScrolled(currentScroll > 10); // True if scrolled past 10px

      // Logic for hiding/showing navbar based on scroll direction and threshold
      if (currentScroll > lastScrollY && currentScroll > 100) {
        setHideNav(1); // Set to hide if scrolling down past 100px
      } else {
        setHideNav(0); // Set to visible if scrolling up or near top
      }
      setLastScrollY(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Effect to manage `wasHoverTriggeredVisible` state
  useEffect(() => {
    // If the navbar is currently hidden due to scroll, but the user hovers over the top,
    // set the flag to keep it visible.
    if (hideNav === 1 && isHoveredAtTop) {
      setWasHoverTriggeredVisible(true);
    }
    // If the user scrolls back to the top or scrolls up, reset the flag
    // because the navbar is now naturally visible (hideNav is 0).
    if (hideNav === 0) {
      setWasHoverTriggeredVisible(false);
    }
  }, [hideNav, isHoveredAtTop]); // Depend on hideNav and isHoveredAtTop changes

  // Resize handler for mobile responsiveness
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
      if (window.innerWidth >= 640) setMenuOpen(false);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Variant for mobile menu animation
  const menuVariants = {
    hidden: { opacity: 0, y: -20, transition: expressiveSpatialTransition },
    visible: { opacity: 1, y: 0, transition: expressiveSpatialTransition },
    exit: { opacity: 0, y: -20, transition: expressiveSpatialTransition },
  };

  // Determine if the navbar should be visible based on all conditions
  // It's visible if:
  // 1. We are at the top or scrolling up (hideNav === 0)
  // OR
  // 2. The mouse is currently hovering over the top zone (isHoveredAtTop === true)
  // OR
  // 3. The navbar was previously made visible by a hover and hasn't been reset yet (wasHoverTriggeredVisible === true)
  const isNavbarActuallyVisible =
    hideNav === 0 || isHoveredAtTop || wasHoverTriggeredVisible;

  return (
    <>
      {/* Invisible hover zone at the very top of the viewport */}
      <div
        className="fixed top-0 left-0 right-0 h-5 z-[100]" // Increased height to match NAVBAR_HEIGHT
        onMouseEnter={() => setIsHoveredAtTop(true)}
        onMouseLeave={() => setIsHoveredAtTop(false)}
      />
      <motion.nav
        // Animate navbar sliding up/down based on the combined visibility logic
        initial={{ y: 0 }}
        animate={{ y: isNavbarActuallyVisible ? "0%" : "-100%" }}
        transition={expressiveSpatialTransition}
        className={`fixed top-0 left-0 w-full z-50 rounded-b-lg ${
          isScrolled
            ? "bg-primary shadow-md text-on-primary"
            : "bg-surface-container-lowest/90 backdrop-blur-md text-on-surface"
        } transition-colors duration-300 font-roboto`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-wrap justify-between items-center">
          {/* Logo */}
          <motion.div
            className="flex items-center font-roboto-medium text-headline-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={expressiveEffectsTransition}
          >
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("home");
              }}
              className="flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="inline-block mr-2"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="3" />
                <path d="M7 12h-2c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h2m0-8h-2c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2h2m10 8h2c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2h-2m0 8h2c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2h-2" />
              </svg>
              Esscore
            </a>
          </motion.div>

          {/* Mobile Menu Button */}
          {isMobile && (
            <motion.button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`text-2xl ${
                isScrolled ? "text-on-primary" : "text-on-surface"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={expressiveEffectsTransition}
            >
              <AnimatePresence mode="wait" initial={false}>
                {menuOpen ? (
                  <motion.div
                    key="closeIcon"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={expressiveEffectsTransition}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </motion.div>
                ) : (
                  <motion.div
                    key="openIcon"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={expressiveEffectsTransition}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="3" y1="12" x2="21" y2="12" />
                      <line x1="3" y1="6" x2="21" y2="6" />
                      <line x1="3" y1="18" x2="21" y2="18" />
                    </svg>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          )}

          {/* Nav Links (Desktop and Mobile) */}
          <AnimatePresence>
            {(isMobile ? menuOpen : true) && (
              <motion.div
                variants={menuVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className={`w-full sm:w-auto flex flex-col sm:flex-row text-label-lg sm:items-center gap-3 sm:gap-8 mt-4 sm:mt-0 ${
                  isMobile && menuOpen
                    ? "bg-surface-container-low p-4 rounded-lg shadow-lg"
                    : ""
                }`}
              >
                {navLinks.map((link) => (
                  <motion.div
                    key={link.path}
                    whileHover={{
                      backgroundColor: isScrolled
                        ? "rgba(255, 255, 255, 0.08)"
                        : "rgba(103, 80, 164, 0.08)",
                      borderRadius: "8px",
                    }}
                    whileTap={{
                      backgroundColor: isScrolled
                        ? "rgba(255, 255, 255, 0.12)"
                        : "rgba(103, 80, 164, 0.12)",
                      borderRadius: "8px",
                    }}
                    transition={expressiveEffectsTransition}
                    className="rounded-sm"
                  >
                    <a
                      href={`#${link.path}`}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.path);
                      }}
                      className={`block px-3 py-2 font-roboto-medium text-label-lg transition-colors ${
                        isScrolled
                          ? "text-on-primary hover:text-primary-container"
                          : "text-on-surface hover:text-primary"
                      }`}
                    >
                      {link.name}
                    </a>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </>
  );
}
