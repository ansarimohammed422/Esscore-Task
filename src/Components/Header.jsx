import { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import { SiMoleculer } from "react-icons/si";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hideNav, setHideNav] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  const navLinks = [
    { name: "About Us", path: "#about" },
    { name: "Products", path: "#products" },
    { name: "Industries", path: "#industries" },
    { name: "Services", path: "#services" },
    { name: "Certifications", path: "#certificates" },
    { name: "Contact", path: "#contact" },
  ];

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setIsScrolled(currentScroll > 10);

      if (currentScroll > lastScrollY && currentScroll > 100) {
        setHideNav(true);
      } else {
        setHideNav(false);
      }
      setLastScrollY(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Resize handler
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
      if (window.innerWidth >= 640) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: hideNav ? "-100%" : "0%" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 text-white ${
        isScrolled ? "bg-blue-500 shadow-md " : "bg-white/10 backdrop-blur-md "
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex flex-wrap justify-between items-center">
        {/* Logo */}
        <div className="flex items-center font-extrabold text-2xl md:text-3xl">
          <HashLink smooth to="#">
            <SiMoleculer className="inline-block mr-2" />
            Esscore
          </HashLink>
        </div>

        {/* Mobile Menu Button */}
        {isMobile && (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`text-2xl transition text-white`}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        )}

        {/* Nav Links */}
        <div
          className={`w-full sm:w-auto flex flex-col sm:flex-row text-lg sm:items-center gap-3 sm:gap-8 mt-4 sm:mt-0 ${
            isMobile ? (menuOpen ? "block" : "hidden") : "flex"
          }`}
        >
          {navLinks.map((link) => (
            <HashLink
              smooth
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={
                "block px-3 py-2 text-sm sm:text-base font-semibold transition-all text-white hover:text-blue-300"
              }
            >
              {link.name}
            </HashLink>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
