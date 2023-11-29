import React, {useState} from 'react';

import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";

const AccordionItem = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const accordionId = "accordion-collapse-body";
  
    return (
      <div className='not-prose mb-6 rounded-2xl border border-gray-700' x-data="{ expanded: false }">
        <div className='p-4'>
        <h2>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-between w-full text-left text-2xl font-semibold"
            aria-expanded={isOpen}
            aria-controls={accordionId}
          >
            <span>{title}</span>
            {isOpen ? <CiCircleMinus size={45} strokeWidth={.1} /> : <CiCirclePlus size={45} strokeWidth={.1} />}
          </button>
        </h2>
        <div id={accordionId} className={`${isOpen ? '' : 'hidden'}`} aria-labelledby="accordion-collapse-heading">
          <div className="p-5 prose prose-invert lg:prose-lg max-w-none">
            {children}
          </div>
        </div>
        </div>
      </div>
    );
  };

  export default AccordionItem;