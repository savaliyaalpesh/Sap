import React, { useState } from 'react';
import Consulting from "../../Assets/Consulting.png";
import Service from "../../Assets/Consulting_service.png";
import business from "../../Icons/business-time.svg"
import dna from "../../Icons/dna.svg"
import appstore from "../../Icons/App-store.svg"
import Form from "../Form"

const Consultant = () => {

  const FAQItem = ({ question, answer, isOpen, onToggle }) => {
    return (
      <div className="mb-4">
        <div className="flex items-center cursor-pointer" onClick={onToggle}>
          <span className={`mr-2 ${isOpen ? 'text-blue-600' : 'text-gray-900'}`}>
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <path d="m18 15-6-6-6 6" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            )}
          </span>
          <h3 className={`font-medium ${isOpen ? 'text-blue-600' : 'text-gray-900'}`}>
            {question}
          </h3>
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
        question: 'Just what is the role of an SAP FIORI consultant?',
        answer:
          'As an SAP FIORI consultant, you can expect to create, configure, and integrate unique Fiori apps to address companies’ ERP requirements and create original software from the ground up, including UI design and development in languages like JavaScript, HTML5, and CSS.',
      },
      {
        question: 'Do people want SAP FIORI?',
        answer:
          'Developers use these distinct technologies when creating apps for the SAP FIORI ecosystem. Both are highly desirable qualities in a candidate.',
      },
      {
        question: 'When does SAP FIORI go through its development cycle?',
        answer:
          'Data modelling, service construction, and user interface development are the three stages that make up an SAP FIORI application’s lifecycle.',
      }
    ];

    const toggleItem = (index) => {
      setOpenItem((prevOpen) => (prevOpen === index ? null : index));
    };

    return (
      <div className="p-6 max-w-4xl mx-auto min-w-full">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">FAQs</h1>
        <div className="bg-blue-50 rounded-lg p-6 w-full">
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




  return (
    <>
      <div className="min-h-screen bg-white text-black font-sans">
        {/* Hero Section with Background */}
        <div className="w-full h-80 flex flex-col items-center justify-center relative overflow-hidden bg-custom text-center px-auto">
          <div className="absolute inset-0 opacity-70"></div>
          <h1 className="text-5xl font-bold text-white z-10">SAP Fiori Consultant</h1>
          <p className="text-white z-10 max-w-5xl mt-2 text-left">
            Are you stressed about training costs that go into train your team for full-fledged ERP Software? Now, with SAP FIORI easy to use and with a Simple UI, get ready to have deep cuts in those costs. Now get greater participation from all your employees, but with the aid of decreased training time and costs. Standard FIORI apps are free and can boost the return on investment on your SAP products by giving access to your SAP system from any device at any time. We understand that, while these technologies provide several benefits to your company, time is a valuable resource in any expanding and busy firm. That is why VSD Technologies, with our SAP experts’ team, is here to assist you.
          </p>
          <button className="bg-white hover:bg-blue-500 text-blue-500 hover:text-white font-medium py-2 px-8 border border-transparent hover:border-blue-600 rounded-full transition duration-300 z-10 mt-4">
            Schedule a Free Consultation
          </button>
        </div>

        {/* Main content section */}
        <div className="container mx-auto py-16 px-4 md:px-6">


          {/* Original content from the first component */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Text content - left side */}
            <div className="w-full md:w-1/2 flex flex-col gap-4">
              <h2 className="text-4xl font-bold text-gray-900">Why SAP FIORI?</h2>

              <p className="text-gray-700 mt-4">
                Our SAP FIORI consulting services boost your business. Our <b>SAP FIORI consultant</b> helps you maximize your SAP landscape. Our Fiori app design and implementation expertise streamlines processes boost productivity and improves user experience. We’ll help you revamp or implement Fiori applications—partner with us to maximize SAP FIORI and grow your business.
              </p>

              <button className="bg-blue-500 hover:bg-white text-white hover:text-blue-500 font-medium py-1 w-60 border border-transparent hover:border-blue-600 rounded-full transition duration-300 z-10 mt-4">
                Schedule a Free Consultation
              </button>
            </div>

            {/* Image - right side */}
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={Consulting}
                alt="Team collaborating on digital transformation"
                className="max-w-full h-auto"
              />
            </div>
          </div>

          {/* Benefits section (from original component) */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Text content - left side */}
            <div className="w-full md:w-1/2 flex flex-col gap-4">
              <h2 className="text-4xl font-bold text-gray-900">SAP FIORI is a Compact Solution that comes with the following:</h2>

              <p className="text-gray-700 mt-4">
                Our SAP FIORI consultants can help you digitize your business with SAP Automation. Our dedicated team creates intuitive Fiori apps that improve user experience and productivity. We customize Fiori solutions to meet your commercial enterprise goals and power digital transformation with innovation and performance. SAP FIORI streamlines procedures, offers real-time insights, and makes mobile accessibility feasible, assisting your corporation to live beforehand inside the competitive panorama. Let us assist you in maximizing SAP FIORI and developing your commercial enterprise.
              </p>

              <button className="bg-blue-500 hover:bg-white text-white hover:text-blue-500 font-medium py-1 w-60 border border-transparent hover:border-blue-600 rounded-full transition duration-300 z-10 mt-4">
                Schedule a Free Consultation
              </button>
            </div>

            {/* Image - right side */}
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={Service}
                alt="Team collaborating on digital transformation"
                className="max-w-full h-auto"
              />
            </div>
          </div>


          {/* Introduction text */}
          <div className="text-center mb-12  mx-auto mt-40">
            <h1 className="text-4xl font-bold text-gray-900 pb-2">User Experience that Allows You to Run Your Business Digitally Smoothly</h1>
            <p className="text-gray-700 text-left my-3">
              Choose us for <b>SAP FIORI implementation and development</b> for unprecedented efficiency and user experience.
            </p>

            <p className="text-gray-700 text-left my-3">
              VSD Technologies’ SAP FIORI implementation and development services are reliable and customized for your business. We guarantee seamless Fiori application integration to improve user experience and streamline business processes with years of SAP technology experience. Our dependable team follows industry best practices to deliver quality solutions on time and within budget.
            </p>
          </div>

          {/* SAP Solutions Grid */}
          <div className="mb-16">

            {/* box grid layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Box 1 */}

              <div className="border rounded-lg p-6 flex flex-col items-center text-center shadow-lg transition duration-300">
                <div className="bg-blue-500 p-4 rounded-full mb-4">
                  <img
                    src={business}
                    alt=""
                    className="w-[50px] h-[50px] filter invert hover:invert-0 transition duration-300"
                  />
                </div>
                <h4 className="text-xl font-semibold text-blue-500 mb-2">Crush Your Business Goals with SAP FIORI</h4>
                <p className="text-gray-700 text-left my-3">
                  Choose us for SAP FIORI implementation and development because we put customers first. Our dedicated team understands the importance of tailoring SAP FIORI solutions to your business needs and user preferences. Our customer-centric approach ensures seamless integration, intuitive design, and maximum user satisfaction in every implementation step. We deliver solutions that improve user experience, productivity, and business success from consultation to support.
                </p>

              </div>
              {/* Box 2 */}
              <div className="border rounded-lg p-6 flex flex-col items-center text-center shadow-lg transition duration-300">
                <div className="bg-blue-500 p-5 rounded-full mb-4">
                  <img
                    src={dna}
                    alt=""
                    className="w-[50px] h-[50px] filter invert hover:invert-0 transition duration-300"
                  />

                </div>
                <h4 className="text-xl font-semibold text-blue-500 mb-2">Make New Innovative Solutions</h4>
                <p className="text-gray-700 text-left my-3">
                  Hire us for SAP FIORI implementation and development because of our experience and expertise. Our experienced consultants have completed many Fiori projects, providing our clients with intuitive user interfaces and streamlined processes. By understanding Fiori design principles and best practices, we ensure your apps are functional, beautiful, and user-friendly.
                </p>
              </div>



              {/* Box 3 */}
              <div className="border rounded-lg p-6 flex flex-col items-center text-center shadow-lg transition duration-300">
                <div className="bg-blue-500 p-4 rounded-full mb-4">
                  <img
                    src={appstore}
                    alt=""
                    className="w-[50px] h-[50px] filter invert hover:invert-0 transition duration-300"
                  />
                </div>
                <h4 className="text-xl font-semibold text-blue-500 mb-2">Build Apps that are Better & Faster</h4>
                <p className="text-gray-700 text-left my-3">
                  Trust VSD Technologies to deliver SAP FIORI implementation and development on time and within budget. Our skilled team uses the latest tools and technologies to streamline your processes and improve user experience to deliver high-quality solutions that meet your business needs. We’ll help you achieve your SAP FIORI goals on time and professionally.
                </p>
              </div>
            </div>

            {/* Section divider with title */}
            <div className="text-center mt-40">
              <h2 className="text-4xl font-bold text-gray-900 pb-2">SAP FIORI for a Simpler User Experience.</h2>
              <div className="h-1 max-w-xl bg-blue-500 mx-auto my-8"></div>
            </div>

            <div className="text-center mb-8">
              <p className="text-gray-700 max-w-7xl mx-auto mt-10 text-left">
                Choose us for <b> SAP FIORI implementation</b> and development expertise and dedication. Our skilled team has years of experience creating customized Fiori solutions for your business. We collaborate with you from concept to deployment to understand your demands and create intuitive, person-friendly interfaces that enhance commercial enterprise procedures and user productivity.
              </p>
            </div>

          </div>
        </div>
      </div>
      <Faqs />

      {/* Form Title */}
      <div className="text-center  md:mb-8">
        <p className="text-blue-400 text-xl sm:text-2xl md:text-3xl mb-2 tracking-widest">Let's Talk!!</p>
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 px-2">
          How can your business get benefitted from SAP FIORI Solution?
        </h1>
      </div>

      <Form />
    </>
  );
};

export default Consultant;