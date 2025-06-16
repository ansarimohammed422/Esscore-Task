import React from "react";
import PharmaImg from "../assets/Pharmaceuticals.jpg";
import FoodImg from "../assets/Food-Beverages.jpg";
import NutraImg from "../assets/Nutraceuticals.jpg";
import CosmeticImg from "../assets/Cosmetics.jpg";
import AgroImg from "../assets/AgroInd.jpg";
import PaintImg from "../assets/PantInd.jpg";

const industriesWeServe = [
  {
    title: "Pharma",
    image: PharmaImg,
    description:
      "We provide high-purity APIs and excipients that meet strict global standards. Our pharmaceutical ingredients support safe, effective drug formulation and large-scale production.",
  },
  {
    title: "Food & Beverage",
    image: FoodImg,
    description:
      "Our food-grade additives enhance flavor, shelf life, and nutritional value. We cater to the processed food industry with safe, innovative ingredients for better consumer appeal.",
  },
  {
    title: "Nutraceutical",
    image: NutraImg,
    description:
      "We supply bioactive compounds like herbal extracts, amino acids, and antioxidants. These ingredients boost wellness, immunity, and preventive healthcare product efficiency.",
  },
  {
    title: "Cosmetics",
    image: CosmeticImg,
    description:
      "Our cosmetic raw materials include emollients, oils, and actives used in skincare and haircare. We help brands create effective, safe, and high-performance beauty products.",
  },
  {
    title: "Agrochemicals",
    image: AgroImg,
    description:
      "We offer fertilizers, pesticides, and growth enhancers to improve crop health and yield. Our solutions support modern, sustainable farming across diverse agro environments.",
  },
  {
    title: "Paints & Coatings",
    image: PaintImg,
    description:
      "Our chemicals like binders and pigments ensure color quality, surface protection, and adhesion. They are used in automotive, industrial, and architectural applications.",
  },
];

const IndustriesGrid = () => {
  return (
    <section
      id="industries"
      className="py-16 px-4  bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-6xl md:text-5xl text-blue-500 font-bold  mb-4">
            Industries We Serve
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transforming industries with premium ingredients and tailored
            solutions across diverse sectors
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industriesWeServe.map((industry, index) => (
            <div
              key={index}
              className={`
                group relative rounded-2xl overflow-hidden shadow-xl
                ${index === 0 ? "md:col-span-2 lg:row-span-2" : ""}
                ${index === 3 ? "lg:col-span-2" : ""}
                ${index === 5 ? "md:col-span-3 lg:row-span-2" : ""}
                transition-all duration-500 ease-out
                hover:shadow-2xl hover:-translate-y-2
              `}
            >
              {/* Industry Image */}
              <div className="absolute inset-0">
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/80" />
              </div>

              {/* Content */}
              <div className="relative z-10 p-6 h-full flex flex-col justify-end min-h-[300px]">
                <div className="bg-blue-50 backdrop-blur-sm p-4 rounded-xl border  border-blue-500 max-w-md">
                  <h3 className="text-2xl text-blue-500 font-bold  mb-2">
                    {industry.title}
                  </h3>
                  <div className="overflow-hidden max-h-0 group-hover:max-h-96 transition-all duration-700 ease-in-out">
                    <p className="">{industry.description}</p>
                    <button className="mt-4 px-4 py-2 bg-blue-50 border border-blue-500 text- rounded-lg hover:bg-blue-500 hover:text-white transition">
                      Explore Solutions
                    </button>
                  </div>
                </div>
              </div>

              {/* Corner Badge */}
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-medium">
                {index + 1}/6
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesGrid;
