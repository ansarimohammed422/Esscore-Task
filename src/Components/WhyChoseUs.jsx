// import React from "react";

// const trustFeatures = [
//   {
//     title: "Regulatory-first Sourcing",
//     description:
//       "At Esscore, every sourcing decision begins with compliance. We rigorously align with international regulatory bodies like USFDA, FSSAI, and ECHA, ensuring that our materials meet or exceed industry expectations. Full traceability and documentation come standard, giving clients the assurance they need in tightly regulated markets. Our quality assurance teams work closely with suppliers to guarantee consistency, safety, and transparency at every step.",
//   },
//   {
//     title: "Global + Domestic Supplier Network",
//     description:
//       "Our sourcing network spans continents, combining the strengths of leading global manufacturers with trusted domestic producers. This hybrid model allows us to balance quality, cost-efficiency, and supply chain agility. Whether sourcing rare actives or bulk commodities, we ensure competitive pricing and minimal disruption. Our strong vendor relationships give clients access to the latest innovations and market insights from around the world.",
//   },
//   {
//     title: "Strategic Mumbai Logistics",
//     description:
//       "Operating out of Mumbai, India’s premier commercial and logistics hub, allows us to deliver faster, smarter, and more cost-effectively. Our warehousing, documentation, and dispatch systems are optimized for both domestic and international shipments. Proximity to major ports and transportation corridors reduces turnaround time significantly. Clients benefit from real-time coordination, minimal lead times, and smooth customs processing.",
//   },
//   {
//     title: "Bulk & Custom Solutions",
//     description:
//       "We understand that no two clients are alike, which is why we offer both bulk material supply and highly customized formulation services. Whether you're scaling production or launching a niche product, our team collaborates to align supply formats with your technical and commercial goals. Custom packaging, grading, and blends are available on request. This flexibility ensures that your business receives materials that are not just compliant, but also ready-to-integrate.",
//   },
// ];

// export default function HorizontalTimeline() {
//   return (
//     <div className="w-full min-h-screen bg-blue-100 py-10 px-4">
//       {/* Section Title */}
//       <div className="mb-5 md:mb-10">
//         <h2 className="text-4xl md:text-6xl font-bold text-center text-blue-500">
//           Why Choose Us
//         </h2>
//         <p className="text-center text-gray-600 max-w-2xl mx-auto mt-4 text-base md:text-lg">
//           At Esscore, we go beyond just supply — we deliver reliability,
//           regulatory confidence, and tailored solutions that power your business
//           success.
//         </p>
//       </div>

//       {/* Desktop Timeline (original layout) */}
//       <div className="hidden md:block container  relative w-full mx-auto h-[800px]">
//         {/* Timeline Line */}
//         <div className="absolute top-1/2 left-0 w-full h-1 bg-blue-500 z-0" />

//         {/* Cards */}
//         <div className="flex justify-between items-center h-full relative z-10">
//           {trustFeatures.map((item, index) => (
//             <div
//               key={index}
//               className="relative w-2xl flex flex-col items-center"
//             >
//               {/* Card */}
//               <div
//                 className={`bg-blue-200 border border-blue-300 p-6 my-10 rounded-xl shadow-lg w-96 absolute transition-transform hover:scale-105 duration-150 ease-linear ${
//                   index % 2 === 0 ? "bottom-[65%]" : "top-[65%]"
//                 }`}
//               >
//                 <h3 className="text-xl font-semibold text-blue-800 mb-2">
//                   {item.title}
//                 </h3>
//                 <p className="text-sm text-gray-700">{item.description}</p>
//               </div>

//               {/* Dot on the line */}
//               <div className="absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-blue-50 border-4 border-blue-500 shadow-md z-20" />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Mobile Timeline */}
//       <div className="md:hidden relative">
//         {/* Vertical timeline line */}
//         <div className="absolute left-4 top-0 bottom-0 w-1 bg-blue-500 z-0"></div>

//         {/* Cards Container */}
//         <div className="flex flex-col ml-12 gap-16">
//           {trustFeatures.map((item, index) => (
//             <div key={index} className="relative">
//               {/* Dot on the vertical line */}
//               <div className="absolute -left-7 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-blue-50 border-4 border-blue-500 shadow-md z-20"></div>

//               {/* Card */}
//               <div className="bg-blue-200 border border-blue-300 p-4 rounded-xl shadow-lg transition-transform hover:scale-105 duration-150 ease-linear">
//                 <h3 className="text-lg font-semibold text-blue-800 mb-2">
//                   {item.title}
//                 </h3>
//                 <p className="text-sm text-gray-700">{item.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ClipboardCheck, Globe, Truck, PackagePlus } from "lucide-react";

const trustFeatures = [
  {
    title: "Regulatory-first Sourcing",
    description:
      "At Esscore, every sourcing decision begins with compliance...",
    icon: ClipboardCheck,
    color: "primary",
  },
  {
    title: "Global + Domestic Supplier Network",
    description: "Our sourcing network spans continents...",
    icon: Globe,
    color: "secondary",
  },
  {
    title: "Strategic Mumbai Logistics",
    description: "Operating out of Mumbai, India's premier commercial hub...",
    icon: Truck,
    color: "tertiary",
  },
  {
    title: "Bulk & Custom Solutions",
    description: "We understand that no two clients are alike...",
    icon: PackagePlus,
    color: "primary-container",
  },
];

export default function AnimatedTimeline() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  // Animated values for the timeline line
  const lineScale = useTransform(scrollYProgress, [0, 1], [0.1, 1]);
  const lineOpacity = useTransform(scrollYProgress, [0, 0.2, 1], [0, 1, 1]);

  // Calculate card positions to prevent overlap
  const cardPositions = [
    { top: "10%", left: "0%" },
    { top: "30%", left: "50%" },
    { top: "50%", left: "0%" },
    { top: "70%", left: "50%" },
  ];

  return (
    <section
      ref={ref}
      className="relative w-full min-h-[200vh] bg-surface-variant py-16 px-4 overflow-hidden"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-16 text-center max-w-4xl mx-auto"
      >
        <h2 className="text-display-sm font-roboto-medium text-on-background">
          Why Choose Esscore
        </h2>
        <p className="text-body-lg text-on-surface-variant mt-4">
          We deliver reliability, regulatory confidence, and tailored solutions
          that power your business success.
        </p>
      </motion.div>

      {/* Desktop Timeline */}
      <div className="hidden lg:block relative h-[150vh] max-w-6xl mx-auto">
        {/* Animated Timeline Line */}
        <motion.div
          style={{ scaleY: lineScale, opacity: lineOpacity }}
          className="absolute left-1/2 top-0 h-full w-1 bg-primary origin-top"
        />

        {/* Cards Container */}
        <div className="relative h-full">
          {trustFeatures.map((item, index) => {
            const Icon = item.icon;
            const position = cardPositions[index];
            const cardY = useTransform(
              scrollYProgress,
              [index * 0.25, index * 0.25 + 0.25],
              ["30%", "0%"]
            );
            const cardOpacity = useTransform(
              scrollYProgress,
              [index * 0.25 - 0.1, index * 0.25 + 0.1],
              [0, 1]
            );

            return (
              <motion.div
                key={index}
                style={{
                  y: cardY,
                  opacity: cardOpacity,
                  top: position.top,
                  left: position.left,
                }}
                className="absolute w-[45%]"
                transition={{ type: "spring", bounce: 0.3 }}
              >
                <div
                  className={`relative p-8 rounded-2xl bg-surface shadow-lg border border-outline-variant`}
                >
                  {/* Icon Badge */}
                  <div
                    className={`absolute -top-6 ${
                      index % 2 === 0 ? "-right-6" : "-left-12"
                    } w-14 h-14 rounded-full bg-${
                      item.color
                    } flex items-center justify-center shadow-md`}
                  >
                    <Icon className="w-6 h-6 text-on-${item.color}" />
                  </div>

                  <h3
                    className={`text-title-lg font-roboto-medium text-${item.color} mb-3`}
                  >
                    {item.title}
                  </h3>
                  <p className="text-body-md text-on-surface-variant">
                    {item.description}
                  </p>

                  {/* Connector Line */}
                  <div
                    className={`absolute top-1/2 ${
                      index % 2 === 0 ? "-right-16" : "-left-16"
                    } w-16 h-1 bg-outline-variant`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Mobile Timeline */}
      <div className="lg:hidden relative">
        {/* Vertical timeline line */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 1, ease: "backOut" }}
          className="absolute left-6 top-0 bottom-0 w-1 bg-primary-container origin-top"
        />

        {/* Cards Container */}
        <div className="ml-16 space-y-12">
          {trustFeatures.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, type: "spring" }}
                viewport={{ once: true, margin: "-50px" }}
                className="relative"
              >
                {/* Icon Dot */}
                <div
                  className={`absolute -left-11 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-${item.color} flex items-center justify-center shadow-md`}
                >
                  <Icon className="w-4 h-4 text-on-${item.color}" />
                </div>

                {/* Card */}
                <div
                  className={`p-6 rounded-xl bg-surface-container border border-outline-variant shadow-sm`}
                >
                  <h3
                    className={`text-title-md font-roboto-medium text-${item.color} mb-2`}
                  >
                    {item.title}
                  </h3>
                  <p className="text-body-md text-on-surface-variant">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.1 }}
        transition={{ duration: 1 }}
        className="absolute -right-40 -bottom-40 w-80 h-80 rounded-full bg-primary/10 blur-3xl"
      />
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute -left-40 -top-40 w-80 h-80 rounded-full bg-secondary/10 blur-3xl"
      />
    </section>
  );
}
