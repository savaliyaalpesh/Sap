import React, { useState } from 'react';

const FAQItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="mb-4">
      <div 
        className="flex items-center cursor-pointer" 
        onClick={onToggle}
      >
        <span className={`mr-2 ${isOpen ? 'text-blue-600' : 'text-gray-900'}`}>
          {isOpen ? 
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="m18 15-6-6-6 6"/></svg> : 
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="m6 9 6 6 6-6"/></svg>
          }
        </span>
        <h3 className={`font-medium ${isOpen ? 'text-blue-600' : 'text-gray-900'}`}>{question}</h3>
      </div>
      {isOpen && (
        <div className="pl-7 mt-2 text-gray-700">
          {answer}
        </div>
      )}
    </div>
  );
};

const Faqs = () => {
  const [openItem, setOpenItem] = useState(0);

  const faqs = [
    {
      question: "How does SAP work?",
      answer: "The software consolidates and processes all relevant data on a single platform, from procuring raw materials through production and customer satisfaction."
    },
    {
      question: "How does SAP work?",
      answer: "The software consolidates and processes all relevant data on a single platform, from procuring raw materials through production and customer satisfaction."
    },
    {
      question: "So, what exactly are SAP fundamentals?",
      answer: "SAP fundamentals include core modules like Financial Accounting, Sales & Distribution, Materials Management, and Human Resources that form the backbone of the ERP system."
    }
  ];

  const toggleItem = (index) => {
    setOpenItem(prevOpen => prevOpen === index ? null : index);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">FAQs</h1>
      <div className="bg-blue-50 rounded-lg p-6">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openItem === index}
            onToggle={() => toggleItem(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Faqs;