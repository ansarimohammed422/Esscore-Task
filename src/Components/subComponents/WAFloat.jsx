import React from "react";
import { ImWhatsapp } from "react-icons/im";

function WAFloat() {
  return (
    <div className="p-5 bg-green-500/50 backdrop-blur-md rounded-l-full fixed bottom-5 right-0 pr-5  z-[9999] shadow-lg hover:scale-105 transition-transform cursor-pointer">
      <ImWhatsapp size={32} color="#fff" />
    </div>
  );
}

export default WAFloat;
