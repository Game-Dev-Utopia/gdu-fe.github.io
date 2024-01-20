"use client";
import React, { useState, useEffect } from 'react';
import Form from './Form';

function Accordion({
  children,
  title,
  id,
  img,
  active = false,
  borderColor
}) {
  const [accordionOpen, setAccordionOpen] = useState(false);

  useEffect(() => {
    setAccordionOpen(active);
  }, []);

  return (
    <>

      <div className="rounded-3xl drop-shadow-xl  overflow-hidden px-7 my-3 bg-gray-700  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-2 p-px bg-gradient-to-b from-gray-950 to-transparent" style={{ borderTop: `2.5px solid ${borderColor}`, borderLeft: `1px solid ${borderColor}`, borderRight: `3.5px solid ${borderColor}` }}>


        <h2>
          <div
            className="flex items-center justify-between w-full text-left font-semibold py-2 text-white outline-none "
            onClick={(e) => { e.preventDefault(); setAccordionOpen(!accordionOpen); }}
            aria-expanded={accordionOpen}
            aria-controls={`accordion-text-${id}`}
          >
            <span className="flex items-center font-bold text-xl ">
              <span className="w-20 h-20 rounded-full mr-2">
                <img src={img} alt="Profile" />
              </span>
              {title}
            </span>
            <svg className="fill-red-500 shrink-0 ml-8" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
              <rect y="7" width="16" height="2" rx="1" className={`ttransform origin-center transition duration-200 ease-out ${accordionOpen && '!rotate-180'}`} />
              <rect y="7" width="16" height="2" rx="1" className={`transform origin-center rotate-90 transition duration-200 ease-out ${accordionOpen && '!rotate-180'}`} />
            </svg>
          </div>
        </h2>


        <div
          id={`accordion-text-${id}`}
          role="region"
          aria-labelledby={`accordion-title-${id}`}
          className={`grid text-sm text-white overflow-hidden transition-all duration-300 ease-in-out ${accordionOpen ? 'grid-rows-[1fr] opacity-100  rounded-lg mb-10  overflow-hidden  bg-gray-700  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 ' : 'grid-rows-[0fr] opacity-100 px-7'}`}
        >
          <div className="overflow-hidden">

            <Form heading={title} image={img} />
          </div>
        </div>
      </div>

    </>
  );
}

export default Accordion;
