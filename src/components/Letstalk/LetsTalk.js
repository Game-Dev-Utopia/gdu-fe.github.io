import React, { useState } from "react";
import Accordion from "./Accordion";

export default function LetsTalk({ data }) {
  const [openAccordionIndex, setOpenAccordionIndex] = useState(-1);

  const handleAccordionClick = (index) => {
    setOpenAccordionIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <main className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-no-repeat bg-cover backdrop-saturate-100 bg-hero">
      <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
        <h1 className="text-2xl font-bold text-white-900 mb-4">CONTACT US</h1>
        <div>
          {data.map((tile, index) => (
            <Accordion
              key={index}
              title={tile.title}
              img={tile.img}
              id={index}
              active={tile.active}
              borderColor={tile.borderColor}
              stepsData={tile.stepsData}
              isOpen={index === openAccordionIndex}
              onClick={() => handleAccordionClick(index)}
            />
          ))}
        </div>
      </div>
    </main>
  );
}