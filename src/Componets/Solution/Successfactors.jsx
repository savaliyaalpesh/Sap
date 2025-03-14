import React, { useState } from 'react';
import SucessFactor from "../../Assets/Success-Factor.png";
import Sucess from "../../Assets/Success.png";

import vinyl from "../../Icons/vinyl.svg"
import usertie from "../../Icons/user-tie.svg"
import book from "../../Icons/book.svg"
import cogs from "../../Icons/cogs.svg"
import keyboard from "../../Icons/keyboard.svg"
import dollar from "../../Icons/dollar.svg"

const successfactors = () => {

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
        question: 'Can you explain success factor integration?',
        answer:
          'SAP Press issued it. Human capital management software from SAP, SuccessFactors, is available in the cloud and offers solutions focused on employees, such as tools for hiring, managing performance, and developing talent.',
      },
      {
        question: 'Who or what is SAP SuccessFactors?',
        answer:
          'SAP SuccessFactors offers cloud-based software solutions for human resource management, payroll, talent acquisition, analytics (HR), workforce planning, and team member experience.',
      },
      {
        question: 'Are SAP SuccessFactors customer relationship management tools?',
        answer:
          'Regarding candidate relationship management (CRM), SAP SuccessFactors’ Talent Pools are invaluable.',
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
          <h1 className="text-5xl font-bold text-white z-10">SAP Successfactors Integration</h1>
          <p className="text-white z-10 max-w-5xl mt-2 text-left">
            Easily integrate SAP Success Factors, the leading HR solution, to grow. We streamline HR processes, improve employee experiences, and grow businesses with our integration services. SuccessFactors seamlessly integrates with your systems to maximize your workforce’s potential, improving decision-making and strategic alignment. We optimize deployment, data exchange, and ROI with SAP integration expertise. VSD Technologies’ sap successfactors integration powers unified HR solutions and accelerates success.
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
              <h2 className="text-4xl font-bold text-gray-900">Why SAP SuccessFactors?</h2>

              <p className="text-gray-700 mt-4">
                SAP Automation and SAP SuccessFactors seamlessly integrate to transform your business digitally. Our sap successfactors consultant integrates SAP SuccessFactors with your systems, streamlines HR processes, and maximizes workforce efficiency. SAP Automation can help you synchronize data, analyze it in real time, and improve team member experiences. Our custom solutions ensure seamless integration, minimal disruption, and maximum HR ROI—partner with us to maximize SAP SuccessFactors and advance your business in the digital age.
              </p>

              <button className="bg-blue-500 hover:bg-white text-white hover:text-blue-500 font-medium py-1 w-60 border border-transparent hover:border-blue-600 rounded-full transition duration-300 z-10 mt-4">
                Schedule a Free Consultation
              </button>
            </div>

            {/* Image - right side */}
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={SucessFactor}
                alt="Team collaborating on digital transformation"
                className="max-w-full h-[400px]"
              />
            </div>
          </div>

          {/* Benefits section (from original component) */}
          <div className="flex flex-col md:flex-row items-center gap-8 mt-20">
            {/* Text content - left side */}
            <div className="w-full md:w-1/2 flex flex-col gap-4 ">
              <h2 className="text-4xl font-bold text-gray-900">SAP SuccessFactors is an all-round solution that comes with the following:</h2>

              <p className="text-gray-700 mt-4">
                Choose us for SAP SuccessFactors integration that streamlines HR and boosts team member engagement.
              </p>
              <p className="text-gray-700 mt-4">
                For reliable SAP SuccessFactors integration into your HR ecosystem, choose us. Our experience and track record ensure smooth integration that meets your business goals and improves HR efficiency. Our skilled <b> sap successfactors implementation partners</b> minimize risks and protect data during integration. We support and maintain your HR processes to ensure business continuity.
              </p>

              <button className="bg-blue-500 hover:bg-white text-white hover:text-blue-500 font-medium py-1 w-60 border border-transparent hover:border-blue-600 rounded-full transition duration-300 z-10 mt-4">
                Schedule a Free Consultation
              </button>
            </div>

            {/* Image - right side */}
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={Sucess}
                alt="Team collaborating on digital transformation"
                className="max-w-full h-[400px]"
              />
            </div>
          </div>


          {/* Introduction text */}
          <div className="text-center mb-12  mx-auto mt-40">
            <h1 className="text-4xl font-bold text-gray-900 pb-2">Human Resource Management for Your Organization with Ease</h1>
            <p className="text-gray-700 text-left my-3">
              Our SAP SuccessFactors integration expertise and customer focus are unmatched. Our team prioritizes your business needs to integrate SuccessFactors with SAP seamlessly. We create solutions that improve efficiency, employee experience, and HR operations using our HR expertise and technical skills. We aim to deliver exceptional results and empower your organization for success, from consultation to post-implementation support. Consider us your SAP SuccessFactors integration strategic partner for HR transformation
            </p>

            <p className="text-gray-700 text-left my-3">
              At VSD Technologies, we integrate SAP SuccessFactors with HR systems seamlessly. Our skilled consultants create and implement robust integration solutions for your business. We ensure a smooth transition and help you maximize your HR ecosystem with our expertise in SAP SuccessFactors and HR processes. We provide end-to-end support from data mapping and configuration to testing and deployment to improve HR operations and business success.
            </p>

            <p className="text-gray-700 text-left my-3">
              VSD Technologies offers comprehensive SAP SuccessFactors integration solutions designed to streamline HR processes and enhance employee experiences. Our integration solutions cover the following key areas:
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
                    src={vinyl}
                    alt=""
                    className="w-[50px] h-[50px] filter invert hover:invert-0 transition duration-300"
                  />
                </div>
                <h4 className="text-xl font-semibold text-blue-500 mb-2">Recruiting Integration</h4>
                <p className="text-gray-700 text-left my-3">
                  Seamlessly integrate SAP SuccessFactors Recruiting module with your existing HR systems to automate and streamline the recruitment process. Ensure a smooth flow of candidate data, job requisitions, and hiring activities between systems.
                </p>
              </div>

              {/* Box 2 */}
              <div className="border rounded-lg p-6 flex flex-col items-center text-center shadow-lg transition duration-300">
                <div className="bg-blue-500 p-5 rounded-full mb-4">
                  <img
                    src={usertie}
                    alt=""
                    className="w-[50px] h-[50px] filter invert hover:invert-0 transition duration-300"
                  />

                </div>
                <h4 className="text-xl font-semibold text-blue-500 mb-2">Employee Friendly Integration</h4>
                <p className="text-gray-700 text-left my-3">
                  Enhance employee engagement and satisfaction by integrating SAP SuccessFactors with employee-friendly applications and tools. Enable employees to access HR services, submit requests, and access relevant information through intuitive interfaces and self-service portals.
                </p>
              </div>

              {/* Box 3 */}
              <div className="border rounded-lg p-6 flex flex-col items-center text-center shadow-lg transition duration-300">
                <div className="bg-blue-500 p-4 rounded-full mb-4">
                  <img
                    src={book}
                    alt=""
                    className="w-[50px] h-[50px] filter invert hover:invert-0 transition duration-300"
                  />
                </div>
                <h4 className="text-xl font-semibold text-blue-500 mb-2">Learning Integration</h4>
                <p className="text-gray-700 text-left my-3">
                  Integrate SAP SuccessFactors Learning module with learning management systems (LMS) and training platforms to deliver personalized learning experiences. Facilitate the seamless exchange of training content, course enrollments, and learning progress data.
                </p>
              </div>

              {/* Box 4 */}
              <div className="border rounded-lg p-6 flex flex-col items-center text-center shadow-lg transition duration-300">
                <div className="bg-blue-500 p-4 rounded-full mb-4">
                  <img
                    src={cogs}
                    alt=""
                    className="w-[50px] h-[50px] filter invert hover:invert-0 transition duration-300"
                  />
                </div>
                <h4 className="text-xl font-semibold text-blue-500 mb-2">Performance Analysis Integration</h4>
                <p className="text-gray-700 text-left my-3">
                  Connect SAP SuccessFactors Performance Management module with analytics and reporting tools to gain insights into employee performance and organizational effectiveness. Enable real-time monitoring of key performance indicators (KPIs) and actionable insights for continuous improvement.
                </p>
              </div>

              {/* Box 5 */}
              <div className="border rounded-lg p-6 flex flex-col items-center text-center shadow-lg transition duration-300">
                <div className="bg-blue-500 p-4 rounded-full mb-4">
                  <img
                    src={keyboard}
                    alt=""
                    className="w-[50px] h-[50px] filter invert hover:invert-0 transition duration-300"
                  />
                </div>
                <h4 className="text-xl font-semibold text-blue-500 mb-2">Onboarding Integration</h4>
                <p className="text-gray-700 text-left my-3">
                  Automate and streamline the onboarding process by integrating SAP SuccessFactors Onboarding module with HR systems, document management platforms, and collaboration tools. Ensure a smooth transition for new hires with pre-configured onboarding workflows and personalized experiences.
                </p>
              </div>

              {/* Box 6 */}
              <div className="border rounded-lg p-6 flex flex-col items-center text-center shadow-lg transition duration-300">
                <div className="bg-blue-500 p-4 rounded-full mb-4">
                  <img
                    src={dollar}
                    alt=""
                    className="w-[50px] h-[50px] filter invert hover:invert-0 transition duration-300"
                  />
                </div>
                <h4 className="text-xl font-semibold text-blue-500 mb-2">Rewards Integration</h4>
                <p className="text-gray-700 text-left my-3">
                  Integrate SAP SuccessFactors Compensation and Benefits module with payroll systems and reward platforms to manage employee compensation, incentives, and benefits effectively. Enable seamless data exchange to ensure accurate payroll processing and compliance with regulatory requirements.
                </p>
              </div>
            </div>

            {/* Section divider with title */}
            <div className="text-center mt-40">
              <h2 className="text-4xl font-bold text-gray-900 pb-2">SAP SuccessFactors for Human Resource Management.</h2>
              <div className="h-1 max-w-xl bg-blue-500 mx-auto my-8"></div>
            </div>

            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900">SAP SuccessFactors Solution</h3>
              <p className="text-gray-700 max-w-3xl mx-auto mt-2">
                Select us for timely SAP SuccessFactors integration solutions and unparalleled HR efficiency. Our experts seamlessly integrate SuccessFactors modules with your SAP landscape, streamlining HR operations and improving workforce management. Due to our track record of meeting project deadlines, we prioritize your timelines and business goals to minimize disruption.
              </p>

              <p className="text-gray-700 max-w-3xl mx-auto mt-2">
                To simplify HR processes, choose our SAP SuccessFactors integration team. Our experts have years of experience and in-depth knowledge to ensure a smooth integration for your business. Working with your team to understand needs and deliver innovative solutions, we at VSD Technologies value collaboration, transparency, and efficiency. Let us be your digital HR transformation partner.
              </p>
            </div>

          </div>
        </div>
      </div>
      <Faqs />
    </>
  );
};

export default successfactors;
