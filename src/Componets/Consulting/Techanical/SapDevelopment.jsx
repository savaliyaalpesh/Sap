import React, { useState } from 'react';
import Support from "../../../Assets/sap_abap_support.png"
import Interview from "../../../Assets/Interview.png"
import Digital_Transformation from "../../../Assets/Digital_Transformation.png"
import Abap_technical from "../../../Assets/abap_technical.png"
import searchengin from '../../../Icons/searchengin.svg'
import filecode from '../../../Icons/file-code.svg'
import chalkboard from '../../../Icons/chalkboard.svg'
import Form from "../../Form"

const SapDevelopment = () => {

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
        question: 'Will SAP ABAP be around in the future?',
        answer:
          'ABAP will be around for a while. The future is bright for ABAP. In developing its products, SAP relies heavily on it and is actively working to improve it. ',
      },
      {
        question: 'What does an SAP technical consultant do?',
        answer:
          'Technical SAP consultants install, customize, and integrate S/4HANA solutions. ',
      },
      {
        question: "Is SAP technical consulting a good career?",
        answer: 'SAP consulting is a popular technology career with many opportunities.',
      }
    ];

    const toggleItem = (index) => {
      setOpenItem((prevOpen) => (prevOpen === index ? null : index));
    };

    return (
      <div className="p-4 sm:p-6 max-w-4xl  w-full">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-8 text-gray-900">FAQ</h1>
        <div className="bg-blue-50 rounded-lg p-4 sm:p-6 w-full">
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


  const [selectedStep, setSelectedStep] = useState('Planning and Assessment');


  const steps = [
    {
      id: 'Planning and Assessment',
      title: 'Planning and Assessment',
      icon: searchengin,
      description: 'Examine business procedures and essential needs. In order to achieve organization-wide business process clarity, and schedules, make sure that collaboration and communication are constant.'
    },
    {
      id: 'Implementation',
      title: 'Implementation',
      icon: filecode,
      description: 'Examine business procedures and essential needs. In order to achieve organization-wide business process clarity, and schedules, make sure that collaboration and communication are constant.'
    },
    {
      id: 'Monitor and optimization',
      title: 'Monitor and optimization',
      icon: chalkboard,
      description: 'Examine business procedures and essential needs. In order to achieve organization-wide business process clarity, and schedules, make sure that collaboration and communication are constant.'
    }
  ];

  return (
    <>
      <div className="min-h-screen bg-white text-black font-sans">
        {/* Hero Section with Background */}
        <div className="w-full h-40 flex flex-col items-center justify-center relative overflow-hidden bg-custom text-center px-4">
          <div className="absolute inset-0 opacity-70"></div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white z-10">SAP Abap Development</h1>
        </div>

        {/* Main content section */}
        <div className="container mx-auto py-8 sm:py-12 md:py-16 px-4 md:px-6">
          {/* Original content from the first component */}
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            {/* Text content - left side */}
            <div className="w-full md:w-1/2 flex flex-col gap-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Customized Solutions to Suit Your Business Needs</h2>

              <p className="text-gray-700 mt-4">
                India's top <b>SAP ABAP technical consultant</b> firm, VSD Technologies, can boost your business. Our SAP experts provide invaluable knowledge and innovative solutions to streamline processes, boost productivity, and drive growth. We help businesses reach their digital potential with a track record of excellence. Let us optimize your SAP environment and boost your business. We provide the best services for <b>SAP ABAP development.</b>
              </p>

              <button className="bg-blue-500 hover:bg-white text-white hover:text-blue-500 font-medium py-2 w-full sm:w-96 border border-transparent hover:border-blue-600 rounded-full transition duration-300 z-10 mt-4">
                Schedule a Free Consultation
              </button>
            </div>

            {/* Image - right side */}
            <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
              <img
                src={Support}
                alt="Team collaborating on digital transformation"
                className="max-w-full h-auto"
              />
            </div>
          </div>

          {/* Benefits section (from original component) */}
          <div className="flex flex-col md:flex-row items-start gap-8 px-4 md:px-16 lg:px-28 py-8 sm:py-10 mt-8 md:mt-12">
            {/* Left side content */}
            <div className="w-full md:w-1/2 flex flex-col gap-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Perks of Associating with VSD Technologies for SAP Implementation & Rollout:
              </h2>

              <p className="text-gray-700 mt-4">
                Business efficiency and innovation are unmatched with SAP automation solutions. Our cutting-edge technology and expertise help organizations streamline processes, boost productivity, and grow in the digital age. We, VSD Technologies, customize SAP automation to automate repetitive tasks and optimize workflows for seamless integration and maximum ROI. Stay ahead of the competition with our proven SAP automation solutions and embrace business transformation.
              </p>

              <button className="bg-blue-500 hover:bg-white text-white hover:text-blue-500 font-medium py-2 w-full sm:w-64 border border-transparent hover:border-blue-600 rounded-full transition duration-300 z-10 mt-4">
                Schedule a Free Consultation
              </button>
            </div>

            {/* Right side illustration */}
            <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-10">
              <img
                src={Interview}
                alt="SAP digital transformation illustration"
                className="max-w-full h-auto"
              />
            </div>
          </div>

          <div className="max-w-6xl mx-auto px-4 py-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">Our Process</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {steps.map((step) => (
                <div
                  key={step.id}
                  className={`border rounded-lg p-6 sm:p-8 flex flex-col items-center cursor-pointer transition duration-300 ${selectedStep === step.id
                    ? 'bg-blue-500 text-white'
                    : 'bg-white hover:text-blue-500'
                    }`}
                  onClick={() => setSelectedStep(step.id)}
                >
                  <div className="mb-4">
                    <img
                      src={step.icon}
                      alt=""
                      className={`w-[40px] sm:w-[50px] h-[40px] sm:h-[50px] transition duration-300 ${selectedStep === step.id
                        ? 'filter brightness-0 invert' // White when selected
                        : 'text-blue-500' // Blue by default
                        }`}
                    />
                  </div>
                  <h2 className="text-lg sm:text-xl font-semibold text-center mb-2">{step.title}</h2>
                </div>
              ))}
            </div>

            <div className="mt-6 sm:mt-8">
              <p className="text-gray-600">
                {steps.find(step => step.id === selectedStep)?.description}
              </p>
            </div>
            <p className="text-gray-600 mt-4">We collaborate with clients to find optimization and innovation opportunities to maximize SAP investment value.</p>
          </div>

          {/* Main content section */}
          <div className="container mx-auto py-8 sm:py-12 md:py-20 px-4 md:px-6">
            {/* Original content from the first component */}
            <div className="flex flex-col md:flex-row items-center gap-8 mx-4 sm:mx-8 md:mx-16 lg:mx-20">
              {/* Text content - left side */}
              <div className="w-full md:w-1/2 flex flex-col gap-4">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Let Your Business Flourish through Our Customized SAP ABAP Solutions</h2>

                <p className="text-gray-700 mt-4">
                  Choose us for unmatched SAP ABAP consultant reliability in India. With a history of providing excellent solutions to clients across industries, we prioritize reliability in all aspects of our service. Our experienced ABAP experts ensure project execution, timely delivery, and unwavering support, ensuring SAP project success. You can count on us to drive digital transformation and business excellence.
                </p>

                <p className="text-gray-700 mt-4">
                  Customer Focus is India's top <b>SAP certified ABAP consultant</b> company for expertise, dedication, and customer service. We at VSD Technologies focus on understanding your business needs and providing customized SAP solutions that exceed expectations with years of experience and a team of experts. We maximize your SAP investment and help you achieve your business goals through custom development and system optimization. Partner with Customer Focus for SAP ABAP consulting excellence and see the difference.
                </p>

                <p className="text-gray-700 mt-4">
                  We, VSD Technologies, are India's top SAP ABAP consultant company due to our expertise and success. Experienced SAP ABAP experts and industry experts make up our team. We prioritize customer satisfaction by providing customized solutions that solve your business problems and produce results. Our consultants can exceed your expectations with customization, integration, or development. Let us improve your SAP ABAP projects.
                </p>

                <button className="bg-blue-500 hover:bg-white text-white hover:text-blue-500 font-medium py-2 w-full sm:w-96 border border-transparent hover:border-blue-600 rounded-full transition duration-300 z-10 mt-4">
                  Schedule a Free Consultation
                </button>
              </div>

              {/* Image - right side */}
              <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
                <img
                  src={Digital_Transformation}
                  alt="Team collaborating on digital transformation"
                  className="max-w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Introduction text */}
          <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
            {/* Image - left side */}
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={Abap_technical}
                alt="Team collaborating on digital transformation"
                className="max-w-full h-auto"
              />
            </div>

            {/* Text content - right side */}
            <div className="w-full md:w-1/2 flex flex-col gap-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">SAP ABAP Development Services</h2>

              <p className="text-gray-700 mt-4">
                Our top priority is customer satisfaction, so choose us for fast delivery. India's leading <b>SAP certified ABAP consultant</b> company knows the importance of quickly meeting deadlines and delivering results. Our expert team delivers high-quality solutions on time to minimize business disruption. Our agile and efficient project management methods ensure timely delivery without compromising quality.
              </p>

              <p className="text-gray-700 mt-4">
                Select India's leading SAP ABAP consultant company for unmatched expertise and teamwork. Expert SAP ABAP developers create custom solutions for your business. Our client-centric approach emphasizes project communication, transparency, and collaboration.
              </p>

              <p className="text-gray-700 mt-4">
                Excellence and exceeding expectations are our goals, from requirement analysis to implementation and support. We can transform your SAP landscape with innovative solutions, reliable support, and a dedicated team dedicated to your success.
              </p>

              <p className="text-gray-700 mt-4">
                Contact us, the leading <b>SAP ABAP technical consultant</b> firm in India, VSD Technologies, today to experience our expertise. We provide comprehensive ABAP consulting services that boost efficiency, innovation, and growth for businesses in various industries.
              </p>

              <button className="bg-blue-500 hover:bg-white text-white hover:text-blue-500 font-medium py-2 w-full sm:w-96 border border-transparent hover:border-blue-600 rounded-full transition duration-300 z-10 mt-4">
                Schedule a Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
      <Faqs />

      {/* Form Title */}
      <div className="text-center  md:mb-8">
        <p className="text-blue-400 text-xl sm:text-2xl md:text-3xl mb-2 tracking-widest">Let's Talk!!</p>
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 px-2">
          How Your Business can get benefitted from SAP ABAP Development Services.
        </h1>
      </div>

      <Form />
    </>
  );
};

export default SapDevelopment;