import React, { useState } from 'react';
import Migration from '../../../Assets/SAP consultation services.jpg';
import Technologies from '../../../Assets/SAP_Digital-Transformation.png';
import Unleash from '../../../Assets/sap-migration-reverse.png';
import Operating from '../../../Assets/sap hana implementation.jpg';
import searchengin from '../../../Icons/searchengin.svg';
import filecode from '../../../Icons/file-code.svg';
import chalkboard from '../../../Icons/chalkboard.svg';
import FillCopy from "../../../Icons/Fill-Copy.svg";
import Copy from "../../../Icons/copy.svg";
import Form from "../../Form"

const DBMigration = () => {
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
        question: 'How does OS DB migration work?',
        answer:
          'To ensure a smooth transition for your client when they move their SAP® installation to a new technical platform with a different operating system and database, we offer the SAP OS/DB Migration Service.',
      },
      {
        question: 'In operating systems, what is the meaning of process migration?',
        answer:
          'Process migration involves moving a process from one machine to another while running from the source node to the destination node. The node where the process logically runs is also defined as a host or home node in some architectures.',
      },
      {
        question: 'Why is DB migration necessary?',
        answer:
          'Database migration allows organisations to use the new system\'s advanced features and functionality. Features like enhanced data analytics, built-in support for high availability and disaster recovery, better concurrency control, and support for new data types could be part of this.',
      }
    ];

    const toggleItem = (index) => {
      setOpenItem((prevOpen) => (prevOpen === index ? null : index));
    };

    return (
      <div className="p-4 sm:p-6 mx-auto w-full">
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

  const [selectedStep, setSelectedStep] = useState('Identifying');

  const steps = [
    {
      id: 'Identifying',
      title: 'Identifying and Setting Up the Target System',
      icon: searchengin
    },
    {
      id: 'Implementation',
      title: 'Target System Copy & Export from Source System',
      icon: filecode
    },
    {
      id: 'Monitor and optimization',
      title: 'Importing the Database to Target System',
      icon: chalkboard
    }
  ];

  return (
    <>
      <div className="min-h-screen bg-white text-black font-sans">
        {/* Hero Section with Background */}
        <div className="w-full h-48 sm:h-56 flex flex-col items-center justify-center relative overflow-hidden bg-custom text-center px-4">
          <div className="absolute inset-0 opacity-70"></div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white z-10">SAP MIGRATION</h1>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white z-10">OS/DB Service</h1>
        </div>

        {/* Main content section */}
        <div className="container mx-auto py-8 sm:py-16 px-4 md:px-6">
          {/* First section */}
          <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8">
            {/* Text content - left side */}
            <div className="w-full md:w-1/2 flex flex-col gap-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Follow the Upwards Trajectory in Business Growth with SAP OS/DB Migration Services</h2>

              <p className="text-gray-700 mt-4">
                Use our OS/DB migration expertise to grow your SAP business. Our personalized solutions and proven methods minimise disruption and maximise efficiency during a new operating system or database transition. At VSD Technologies, we help you maximise SAP technology's scalability, reliability, and performance through innovation and agility.
              </p>

              <p className="text-gray-700 mt-4">
                Let us handle migration with precision and care so you can focus on business success. We provide expert guidance, seamless execution, and unmatched SAP OS/DB migration support.
              </p>

              <button className="bg-blue-500 hover:bg-white text-white hover:text-blue-500 font-medium py-1 w-60 border border-transparent hover:border-blue-600 rounded-full transition duration-300 z-10 mt-4">
                Schedule a Free Consultation
              </button>
            </div>

            {/* Image - right side */}
            <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
              <img
                src={Migration}
                alt="Team collaborating on digital transformation"
                className="max-w-full h-auto"
              />
            </div>
          </div>

          {/* Second section */}
          <div className="flex flex-col md:flex-row items-start gap-6 sm:gap-8 px-2 sm:px-4 md:px-16 lg:px-28 py-10 mt-8 sm:mt-12">
            {/* Left side content */}
            <div className="w-full md:w-1/2 flex flex-col gap-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Perks of Associating with VSD Technologies for SAP OS/DB Migration Services:
              </h2>

              <p className="text-gray-700 mt-4">
                SAP Automation's <b>SAP OS/DB migration</b> expertise transforms digital business solutions. Our specialised services optimise performance and efficiency when switching to new operating systems and databases. Through innovation and reliability, VSD Technologies streamline migration to minimise disruptions and maximise productivity. Trust our experts to deliver customised solutions to maximise SAP technology for your business. SAP Automation's OS/DB migration services open doors, streamline operations and advance your business.
              </p>

              <button className="bg-blue-500 hover:bg-white text-white hover:text-blue-500 font-medium py-2 w-64 border border-transparent hover:border-blue-600 rounded-full transition duration-300 z-10 mt-4">
                Schedule a Free Consultation
              </button>
            </div>

            {/* Right side illustration */}
            <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-10">
              <img
                src={Technologies}
                alt="SAP digital transformation illustration"
                className="max-w-full h-auto"
              />
            </div>
          </div>

          {/* Our Process section */}
          <div className="max-w-6xl mx-auto px-2 sm:px-4 py-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">Our Process</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {steps.map((step) => (
                <div
                  key={step.id}
                  className={`border rounded-lg p-4 sm:p-8 flex flex-col items-center cursor-pointer transition duration-300 ${selectedStep === step.id
                    ? 'bg-blue-500 text-white'
                    : 'bg-white hover:text-blue-500'
                    }`}
                  onClick={() => setSelectedStep(step.id)}
                >
                  <div className="mb-4">
                    <img
                      src={step.icon}
                      alt=""
                      className={`w-10 h-10 sm:w-[50px] sm:h-[50px] transition duration-300 ${selectedStep === step.id
                        ? 'filter brightness-0 invert' // White when selected
                        : 'text-blue-500' // Blue by default
                        }`}
                    />
                  </div>
                  <h2 className="text-lg sm:text-xl font-semibold text-center sm:text-left mb-2">{step.title}</h2>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <p className="text-gray-600">
                {steps.find(step => step.id === selectedStep)?.description}
              </p>
            </div>
            <p className="text-gray-600 mt-4">Our dedicated team handles all migration-related issues with excellent customer service and Importing the Database to Target System. Choose us for our expertise, reliability, and unwavering dedication to the best service. We will prioritise your satisfaction and success throughout the migration.</p>
          </div>

          {/* Unleash the power section */}
          <div className="container mx-auto py-10 sm:py-20 px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 mx-2 sm:mx-4 lg:mx-20">
              {/* Text content - left side */}
              <div className="w-full md:w-1/2 flex flex-col gap-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Unleash the Real Power of SAP with OS/DB Migration Services</h2>

                <p className="text-gray-700 mt-4">
                  For a smooth <b>OS DB migration in SAP</b>, hire our expert consultants with experience. Our SAP migration consultants know OS/DB migration processes and best practices from years of experience. We tailor our solutions to your business goals to minimise disruption and maximise ROI. Our consultants use their technical expertise and strategic insights to solve complex migration problems.
                </p>

                <p className="text-gray-700 mt-4">
                  VSD Technologies delivers SAP OS/DB migration on time to keep your project on track and meet deadlines. Our team provides efficient project management, meticulous planning, and effective communication to meet timely milestones.
                </p>

                <button className="bg-blue-500 hover:bg-white text-white hover:text-blue-500 font-medium py-2 w-full sm:w-96 border border-transparent hover:border-blue-600 rounded-full transition duration-300 z-10 mt-4">
                  Schedule a Free Consultation
                </button>
              </div>

              {/* Image - right side */}
              <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
                <img
                  src={Unleash}
                  alt="Team collaborating on digital transformation"
                  className="max-w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* SAP Solutions Grid */}
          <div className="mb-16">
            <div className="py-10 px-2">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-left">SAP MIGRATION – OS/DB SERVICES</h1>
              <p className="text-gray-700 mt-4 text-left">We offer dedicated SAP OS/DB migration teamwork for a smooth transition. Our SAP migration team can handle complex migrations with precision and professionalism thanks to years of experience. We focus on your business goals and tailor our approach to meet your needs, delivering successful solutions.</p>
            </div>

            {/* box grid layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-2">
              {/* Box 1 - Homogeneous System Copy */}
              <div className="border rounded-lg p-4 sm:p-6 flex flex-col items-center text-center shadow-lg transition duration-300">
                <div className="bg-blue-500 p-3 sm:p-4 rounded-full mb-4">
                  <img
                    src={FillCopy}
                    alt=""
                    className="w-10 h-10 sm:w-[50px] sm:h-[50px] filter invert hover:invert-0 transition duration-300"
                  />
                </div>
                <h4 className="text-lg sm:text-xl font-semibold text-blue-500 mb-2">Homogeneous System Copy</h4>
                <p className="text-gray-700 text-left my-3">
                  Homogeneous System Copy refers to the process of copying an SAP system to a target system environment with the same operating system and database platform as the source system. In this method, both the source and target systems have identical hardware, operating systems, and database versions. Homogeneous System Copy is often used for tasks such as system refreshes, system upgrades, or system migrations within the same technical environment.
                </p>
              </div>

              {/* Box 2 - Heterogeneous System Copy */}
              <div className="border rounded-lg p-4 sm:p-6 flex flex-col items-center text-center shadow-lg transition duration-300">
                <div className="bg-blue-500 p-3 sm:p-4 rounded-full mb-4">
                  <img
                    src={Copy}
                    alt=""
                    className="w-10 h-10 sm:w-[50px] sm:h-[50px] filter invert hover:invert-0 transition duration-300"
                  />
                </div>
                <h4 className="text-lg sm:text-xl font-semibold text-blue-500 mb-2">Heterogeneous System Copy:</h4>
                <p className="text-gray-700 text-left my-3">
                  Heterogeneous System Copy involves copying an SAP system to a target environment that differs in terms of operating system or database platform from the source system. This method is employed when organizations need to migrate or upgrade their SAP systems to a different technical environment, such as moving from one database platform to another or changing the operating system.
                </p>

                <p className="text-gray-700 text-left my-3">
                  Operating systems and databases can undergo migration using the SAP OS/DB Migration Check. While this process assures a successful transition with minimal downtime and optimal performance post-migration, it remains time-consuming and costly. Your SAP systems' availability and performance might experience setbacks throughout the project. Therefore, SAP recommends thoroughly evaluating and confirming that all potential alternatives for improving the efficiency of your existing SAP architecture, operating system, and database have been explored before committing to migration.
                </p>
              </div>
            </div>

            {/* Final section */}
            <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 mx-2 sm:mx-4 lg:mx-20 mt-8">
              {/* Text content - left side */}
              <div className="w-full md:w-1/2 flex flex-col gap-4 my-6 sm:my-10">
                <p className="text-gray-700">
                  Operating systems and databases are also capable of migration thanks to the SAP OS/DB Migration Check. SAP OS/DB migration is a time-consuming and money-intensive process, even though the SAP OS/DB Migration Check guarantees a successful move with minimal downtime and maximum performance after the migration. Your SAP systems' availability and performance may suffer during the project. SAP advises you to review and confirm that all alternative options for enhancing the output of your current SAP architecture, OS, and database have been taken into consideration before moving into migration.
                </p>
                <button className="bg-blue-500 hover:bg-white text-white hover:text-blue-500 font-medium py-2 w-full sm:w-96 border border-transparent hover:border-blue-600 rounded-full transition duration-300 z-10 mt-4">
                  Schedule a Free Consultation
                </button>
              </div>

              {/* Image - right side */}
              <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
                <img
                  src={Operating}
                  alt="Team collaborating on digital transformation"
                  className="max-w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Faqs />

      {/* Form Title */}
      <div className="text-center  md:mb-8">
        <p className="text-blue-400 text-xl sm:text-2xl md:text-3xl mb-2 tracking-widest">Let's Talk!!</p>
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 px-2">
          How Your Business can get benefitted from SAP OS/DB Migration Services.
        </h1>
      </div>
      <Form />
    </>
  );
};

export default DBMigration;