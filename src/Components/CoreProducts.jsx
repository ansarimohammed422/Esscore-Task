mport React, { useState } from "react";
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
