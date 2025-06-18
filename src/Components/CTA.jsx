import React from "react";
import { motion } from "framer-motion";

export default function CTA() {
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

  const bannerVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { ...expressiveSpatialTransition, delay: 0.1 },
    },
  };

  const contentStaggerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const itemFadeInVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: expressiveEffectsTransition,
    },
  };

  return (
    <section
      id="contact"
      className="w-full py-16 px-4 font-roboto bg-surface-container-lowest overflow-hidden flex items-center justify-center"
    >
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={bannerVariants}
          className="bg-primary-container rounded-xl-inc shadow-xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Headline and Subtext */}
          <motion.div
            variants={contentStaggerVariants}
            className="text-center md:text-left flex-shrink-0"
          >
            <motion.h1
              variants={itemFadeInVariants}
              className="text-headline-md md:text-display-sm font-roboto-medium text-on-primary-container leading-tight"
            >
              Ready to <span className="text-primary">Elevate</span> Your
              Industry?
            </motion.h1>
            <motion.p
              variants={itemFadeInVariants}
              className="text-body-lg text-on-primary-container/80 mt-1"
            >
              Connect with our experts today.
            </motion.p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={contentStaggerVariants}
            className="flex flex-col sm:flex-row items-center gap-4 flex-shrink-0"
          >
            {/* Primary Button */}
            <motion.a
              variants={itemFadeInVariants}
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-primary text-on-primary rounded-lg-inc text-label-lg font-roboto-medium px-6 py-3 shadow-md focus:outline-none focus-visible:ring-2 ring-on-primary ring-offset-2 ring-offset-primary"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 6px 12px rgba(0,0,0,0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={expressiveEffectsTransition}
            >
              {/* Mail Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Contact Us
            </motion.a>

            {/* Secondary Buttons */}
            <motion.div
              variants={contentStaggerVariants}
              className="flex gap-3"
            >
              {/* Phone */}
              <motion.a
                variants={itemFadeInVariants}
                href="tel:+919999999999"
                aria-label="Call Us"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-surface-container-low text-on-surface-variant border border-outline/30 shadow-sm focus:outline-none focus-visible:ring-2 ring-outline ring-offset-2"
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0px 3px 6px rgba(0,0,0,0.1)",
                }}
                whileTap={{ scale: 0.9 }}
                transition={expressiveEffectsTransition}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-3.7-3.7A19.79 19.79 0 0 1 2.05 4.18c0-1.1.9-2.18 2-2.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </motion.a>

              {/* WhatsApp */}
              <motion.a
                variants={itemFadeInVariants}
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Chat"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-surface-container-low text-on-surface-variant border border-outline/30 shadow-sm focus:outline-none focus-visible:ring-2 ring-outline ring-offset-2"
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0px 3px 6px rgba(0,0,0,0.1)",
                }}
                whileTap={{ scale: 0.9 }}
                transition={expressiveEffectsTransition}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="none"
                >
                  <path d="M12.04 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.77.46 3.45 1.34 4.96L2.05 22l5.1-1.32c1.44.75 3.09 1.16 4.89 1.16 5.46 0 9.9-4.44 9.9-9.9S17.5 2 12.04 2zm5.78 14.88c-.14.25-.56.41-.77.45-.19.04-.44.06-.69.02-.19-.03-1.12-.48-1.3-.64-.17-.16-.36-.25-.55-.16-.19.09-.73.45-.9.65-.17.2-.34.22-.63.07-.3-.15-1.25-.46-2.38-1.47-1.13-.99-1.89-2.23-2.11-2.59-.22-.36-.02-.56.12-.7-.13-.26-.26-.4-.39-.63-.12-.23-.03-.43.08-.62.1-.2.23-.28.32-.43.09-.15.04-.28-.02-.4-.06-.12-.6-.24-.86-.3-.26-.06-.5-.04-.77.06-.27.1-.7.25-.97.4-.27.16-.62.33-.85.49-.23.16-.48.24-.72.33-.24.09-.4.18-.55.24-.15.06-.32.12-.49.12-.19 0-.38-.07-.58-.23-.2-.16-.5-.22-1.02-.45-.52-.23-.88-.4-.98-.44-.1-.04-.26-.1-.5-.1-.23 0-.46.06-.69.19-.23.13-.57.29-.68.39-.1.1-.2.2-.28.33-.08.13-.15.28-.15.43-.01.15.15.34.33.58.18.24.4.45.62.66.22.2.46.4.7.6.24.2.46.38.7.53.23.16.48.3.73.44.25.14.48.25.72.37.24.11.45.2.66.28.2.08.4.15.6.21.2.06.4.08.6.08.27 0 .52-.07.72-.15.2-.08.5-.24.58-.33.08-.09.2-.2.3-.3.1-.1.2-.2.28-.27.09-.07.2-.14.27-.14s.18.02.32.09c.14.07.3.17.47.28.17.1.35.2.53.28.18.09.35.15.53.15.23 0 .42-.04.59-.11.17-.07.36-.18.52-.3.16-.12.3-.26.43-.4.13-.14.24-.29.35-.43.11-.14.22-.28.3-.43.09-.15.17-.3.26-.45.09-.16.16-.32.22-.48.06-.16.1-.32.1-.48-.01-.01-.01-.01-.01-.02z" />
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
