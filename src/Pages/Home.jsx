import React from "react";
import Hero from "../Components/Hero";
import AboutHome from "../Components/AboutHome";
import CoreProducts from "../Components/CoreProducts";
import Industries from "../Components/Industries";
import WhyChoseUs from "../Components/WhyChoseUs";
import Certificates from "../Components/Certificates";
import Founder from "../Components/Founder";
import CTA from "../Components/CTA";

function Home() {
  return (
    <>
      <Hero />
      <AboutHome />
      <CoreProducts />
      <Industries />
      <WhyChoseUs />
      <Certificates />
      <Founder />
      <CTA />
    </>
  );
}

export default Home;
