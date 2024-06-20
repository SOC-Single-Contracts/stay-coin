import { useState } from 'react';

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className={`w-full text-left p-4 text-lg font-semibold flex justify-between items-center ${isOpen ? 'rounded-t-lg' : 'rounded-lg'}`}
        aria-controls="content-id"
        id="button-id"
      >
        <div>{title}</div>
        <div>{isOpen ? '-' : '+'}</div>
      </button>
      {isOpen && (
        <div id="content-id" role="region" aria-labelledby="button-id" className="p-4 text-gray-700">
          {content}
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
