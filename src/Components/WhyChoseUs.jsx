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
//     <div className="w-screen  min-h-screen bg-gray-200 py-10 px-4">
//       {/* Section Title */}
//       <div className="mb-5">
//         <h2 className="text-6xl font-bold text-center text-blue-500">
//           Why Choose Us
//         </h2>
//         <p className="text-center text-gray-600 max-w-2xl mx-auto mt-4 text-lg">
//           At Esscore, we go beyond just supply — we deliver reliability,
//           regulatory confidence, and tailored solutions that power your business
//           success.
//         </p>
//       </div>

//       {/* Timeline Container */}
//       <div className="relative container w-full mx-auto h-[800px] ">
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
//                 className={`bg-blue-50 border border-blue-300 p-6 my-10 rounded-xl shadow-lg  absolute transition-transform hover:scale-105 duration-150 ease-linear ${
//                   index % 2 === 0 ? "bottom-[65%]" : "top-[65%]"
//                 }`}
//               >
//                 <h3 className="text-xl font-semibold text-blue-800 mb-2 ">
//                   {item.title}
//                 </h3>
//                 <p className="text-sm text-gray-700 ">{item.description}</p>
//               </div>

//               {/* Dot on the line */}
//               <div className="absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-blue-50 border-4 border-blue-500 shadow-md z-20" />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
//
import React from "react";

const trustFeatures = [
  {
    title: "Regulatory-first Sourcing",
    description:
      "At Esscore, every sourcing decision begins with compliance. We rigorously align with international regulatory bodies like USFDA, FSSAI, and ECHA, ensuring that our materials meet or exceed industry expectations. Full traceability and documentation come standard, giving clients the assurance they need in tightly regulated markets. Our quality assurance teams work closely with suppliers to guarantee consistency, safety, and transparency at every step.",
  },
  {
    title: "Global + Domestic Supplier Network",
    description:
      "Our sourcing network spans continents, combining the strengths of leading global manufacturers with trusted domestic producers. This hybrid model allows us to balance quality, cost-efficiency, and supply chain agility. Whether sourcing rare actives or bulk commodities, we ensure competitive pricing and minimal disruption. Our strong vendor relationships give clients access to the latest innovations and market insights from around the world.",
  },
  {
    title: "Strategic Mumbai Logistics",
    description:
      "Operating out of Mumbai, India’s premier commercial and logistics hub, allows us to deliver faster, smarter, and more cost-effectively. Our warehousing, documentation, and dispatch systems are optimized for both domestic and international shipments. Proximity to major ports and transportation corridors reduces turnaround time significantly. Clients benefit from real-time coordination, minimal lead times, and smooth customs processing.",
  },
  {
    title: "Bulk & Custom Solutions",
    description:
      "We understand that no two clients are alike, which is why we offer both bulk material supply and highly customized formulation services. Whether you're scaling production or launching a niche product, our team collaborates to align supply formats with your technical and commercial goals. Custom packaging, grading, and blends are available on request. This flexibility ensures that your business receives materials that are not just compliant, but also ready-to-integrate.",
  },
];

export default function HorizontalTimeline() {
  return (
    <div className="w-full min-h-screen bg-blue-100 py-10 px-4">
      {/* Section Title */}
      <div className="mb-5 md:mb-10">
        <h2 className="text-4xl md:text-6xl font-bold text-center text-blue-500">
          Why Choose Us
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mt-4 text-base md:text-lg">
          At Esscore, we go beyond just supply — we deliver reliability,
          regulatory confidence, and tailored solutions that power your business
          success.
        </p>
      </div>

      {/* Desktop Timeline (original layout) */}
      <div className="hidden md:block container  relative w-full mx-auto h-[800px]">
        {/* Timeline Line */}
        <div className="absolute top-1/2 left-0 w-full h-1 bg-blue-500 z-0" />

        {/* Cards */}
        <div className="flex justify-between items-center h-full relative z-10">
          {trustFeatures.map((item, index) => (
            <div
              key={index}
              className="relative w-2xl flex flex-col items-center"
            >
              {/* Card */}
              <div
                className={`bg-blue-200 border border-blue-300 p-6 my-10 rounded-xl shadow-lg w-96 absolute transition-transform hover:scale-105 duration-150 ease-linear ${
                  index % 2 === 0 ? "bottom-[65%]" : "top-[65%]"
                }`}
              >
                <h3 className="text-xl font-semibold text-blue-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-700">{item.description}</p>
              </div>

              {/* Dot on the line */}
              <div className="absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-blue-50 border-4 border-blue-500 shadow-md z-20" />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Timeline */}
      <div className="md:hidden relative">
        {/* Vertical timeline line */}
        <div className="absolute left-4 top-0 bottom-0 w-1 bg-blue-500 z-0"></div>

        {/* Cards Container */}
        <div className="flex flex-col ml-12 gap-16">
          {trustFeatures.map((item, index) => (
            <div key={index} className="relative">
              {/* Dot on the vertical line */}
              <div className="absolute -left-7 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-blue-50 border-4 border-blue-500 shadow-md z-20"></div>

              {/* Card */}
              <div className="bg-blue-200 border border-blue-300 p-4 rounded-xl shadow-lg transition-transform hover:scale-105 duration-150 ease-linear">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-700">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
