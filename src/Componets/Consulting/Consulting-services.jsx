import React, { useState } from 'react';
import Services from "../../Assets/sap consulting services.png"
import Interview from "../../Assets/Interview.png"
import Sapconsultant from "../../Assets/sap_consultant.png"
import searchengin from '../../Icons/searchengin.svg'
import filecode from '../../Icons/file-code.svg'
import chalkboard from '../../Icons/chalkboard.svg'
import tv from "../../Icons/tv.svg"
import americansign from "../../Icons/american-sign.svg"
import star from "../../Icons/star.svg"
import usercogs from "../../Icons/users-cog.svg"

const Consulting = () => {

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
        question: 'How much time can SAP ERP be taken for implementation?',
        answer:
          'It entirely depends on whether you’re looking for an on premise or cloud-based solution. Depending on your company’s demands, the cloud-based solution can be implemented in as short as 2 to 8 months. In contrast, an on-premises solution can take a while. With VSD Technologies as your partner, you can adopt SAP ERP more quickly while ensuring zero risk and less downtime across the whole implementation cycle.',
      },
      {
        question: 'What benefits can one expect after the implementation of SAP ERP?',
        answer:
          'Implementing SAP ERP has apparent advantages. In addition to automating business processes, it also simplifies supply chain operations controls, sales orders, manage bills of materials, and optimizes stock movements. This ERP is jam-packed with all the features you may need for your enterprise.',
      },
      {
        question: "How do my business staff get used to SAP ERP?",
        answer: 'Once you get associated with VSD Technologies for SAP Implementation and Rollout Services, it is our responsibility to train your staff regarding the SAP features and get them used to the SAP ERP Software. A team of experts from VSD Technologies will be at your disposal, who will consistently support your team about SAP as and when required.',
      }
    ];

    const toggleItem = (index) => {
      setOpenItem((prevOpen) => (prevOpen === index ? null : index));
    };

    return (
      <div className="p-6 max-w-4xl mx-auto min-w-full">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">FAQ</h1>
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


  const [selectedStep, setSelectedStep] = useState('Analyze');


  const steps = [
    {
      id: 'Analyze',
      title: 'Analyze',
      icon: searchengin,
      description: 'Examine business procedures and essential needs. In order to achieve organization-wide business process clarity, and schedules, make sure that collaboration and communication are constant.'
    },
    {
      id: 'Assemble',
      title: 'Assemble & Deploy',
      icon: filecode,
      description: 'Examine business procedures and essential needs. In order to achieve organization-wide business process clarity, and schedules, make sure that collaboration and communication are constant.'
    },
    {
      id: 'Transition',
      title: 'Easy Transition and Apt Support',
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
          <h1 className="text-5xl font-bold text-white z-10">SAP Consulting Services</h1>
        </div>

        {/* Main content section */}
        <div className="container mx-auto py-16 px-4 md:px-6">


          {/* Original content from the first component */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Text content - left side */}
            <div className="w-full md:w-1/2 flex flex-col gap-4">
              <h2 className="text-4xl font-bold text-gray-900">March Ahead of Your Competition by Enabling Business Automation for Challenges of Tomorrow</h2>

              <p className="text-gray-700 mt-4">
                At VSD Technologies, we can produce results that are comparable because of our strong industry understanding, delivery skills, and technical expertise. In order to provide value to the customer, we assist businesses in using the advantages of SAP intelligent enterprise across all business operations and in areas like ERP, analytics, cloud, and mobility. VSD Technologies has assisted clients with successful end-to-end SAP S/4 HANA Implementation, Company code and plant rollouts. With our in-depth understanding of business processes, demonstrated implementation experience across all SAP modules, and technologies to meet clients’ specific business objectives, VSD Technologies is in a unique position to assist our valuable customers in getting more value from their SAP investments.
              </p>

              <button className="bg-blue-500 hover:bg-white text-white hover:text-blue-500 font-medium py-2 w-96 border border-transparent hover:border-blue-600 rounded-full transition duration-300 z-10 mt-4">
                Schedule a Free Consultation
              </button>
            </div>

            {/* Image - right side */}
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={Services}
                alt="Team collaborating on digital transformation"
                className="max-w-full h-auto"
              />
            </div>
          </div>

          {/* Benefits section (from original component) */}
          <div className="flex flex-col md:flex-row items-start gap-8 px-4 md:px-28 py-10 mt-12">
            {/* Left side content */}
            <div className="w-full md:w-1/2 flex flex-col gap-4">

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Rise with SAP Implementation. Soar High with VSD.
              </h2>

              <p className="text-gray-700">Perks of Associating with VSD Technologies for SAP Implementation & Rollout:</p>

              <div className="flex flex-col space-y-4">
                <div className="flex items-start">
                  <div className="mt-1 mr-2 flex-shrink-0">
                    <div className="w-5 h-5 bg-blue-500 flex items-center justify-center rounded">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-gray-700">Project Managers with Abundant Experience</p>
                </div>

                <div className="flex items-start">
                  <div className="mt-1 mr-2 flex-shrink-0">
                    <div className="w-5 h-5 bg-blue-500 flex items-center justify-center rounded">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-gray-700">Extensive Roadmap for Implementation</p>
                </div>

                <div className="flex items-start">
                  <div className="mt-1 mr-2 flex-shrink-0">
                    <div className="w-5 h-5 bg-blue-500 flex items-center justify-center rounded">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-gray-700">Implementation according to your Business Goals</p>
                </div>

                <div className="flex items-start">
                  <div className="mt-1 mr-2 flex-shrink-0">
                    <div className="w-5 h-5 bg-blue-500 flex items-center justify-center rounded">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-gray-700">Turnaround time Faster than Expected</p>
                </div>

                <div className="flex items-start">
                  <div className="mt-1 mr-2 flex-shrink-0">
                    <div className="w-5 h-5 bg-blue-500 flex items-center justify-center rounded">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-gray-700">Continuity in Optimization to achieve Perfection</p>
                </div>

                <div className="flex items-start">
                  <div className="mt-1 mr-2 flex-shrink-0">
                    <div className="w-5 h-5 bg-blue-500 flex items-center justify-center rounded">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-gray-700">Great Returns on SAP Investments</p>
                </div>
              </div>

              <button className="bg-blue-500 hover:bg-white text-white hover:text-blue-500 font-medium py-2 w-64 border border-transparent hover:border-blue-600 rounded-full transition duration-300 z-10 mt-4">
                Schedule a Free Consultation
              </button>
            </div>

            {/* Right side illustration */}
            <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-10">
              <img
                src={Interview}
                alt="SAP digital transformation illustration"
                className="max-w-full h-auto"
              />
            </div>
          </div>


          <div className="max-w-6xl mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-center mb-12">Our Process</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {steps.map((step) => (
                <div
                  key={step.id}
                  className={`border rounded-lg p-8 flex flex-col items-center cursor-pointer transition duration-300 ${selectedStep === step.id
                    ? 'bg-blue-500 text-white'
                    : 'bg-white hover:text-blue-500'
                    }`}
                  onClick={() => setSelectedStep(step.id)}
                >
                  <div className="mb-4">
                    <img
                      src={step.icon}
                      alt=""
                      className={`w-[50px] h-[50px] transition duration-300 ${selectedStep === step.id
                        ? 'filter brightness-0 invert' // White when selected
                        : 'text-blue-500' // Blue by default
                        }`}
                    />
                  </div>
                  <h2 className="text-xl font-semibold text-center mb-2">{step.title}</h2>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <p className="text-gray-600">
                {steps.find(step => step.id === selectedStep)?.description}
              </p>
            </div>
          </div>

          {/* Main content section */}
          <div className="container mx-auto py-20 px-4 md:px-6">
            {/* Original content from the first component */}
            <div className="flex flex-col md:flex-row items-center gap-8 mx-20">
              {/* Text content - left side */}
              <div className="w-full md:w-1/2 flex flex-col gap-4">
                <h2 className="text-4xl font-bold text-gray-900">Unlock Full Potential of Your Business with Enterprise & Solution Architecture</h2>

                <p className="text-gray-700 mt-4">
                Due to the expanding and complex IT ecosystem, businesses need a wide range of interfaces and the synchronization of releases, data, and support. We work with you to develop an agile enterprise architecture that makes the best use of resources, avoids bottlenecks, allows for more flexibility, and is scalable in order to connect your overall IT strategy with your business goals.
                </p>

                <p className="text-gray-700 mt-4">
                  Our solution architects comprehend your company’s specific needs and establish a communication channel between business and IT stakeholders. They strategize, create, and specify the best customer-specific application deployment and technological integration into the current environment.
                </p>

                <p className="text-gray-700 mt-4">
                  Our SAP consultants provide you with technical support post go live for a long-lasting for a successful SAP implementation.
                </p>

                <button className="bg-blue-500 hover:bg-white text-white hover:text-blue-500 font-medium py-2 w-96 border border-transparent hover:border-blue-600 rounded-full transition duration-300 z-10 mt-4">
                  Schedule a Free Consultation
                </button>
              </div>

              {/* Image - right side */}
              <div className="w-full md:w-1/2 flex justify-center">
                <img
                  src={Sapconsultant}
                  alt="Team collaborating on digital transformation"
                  className="max-w-full h-auto"
                />
              </div>
            </div>
          </div>


          {/* Introduction text */}
          <div className="text-center mb-12 max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 pb-2">SAP Implementation and Rollout Services</h1>
            <p className="text-gray-700">
              Without a specialist’s assistance, implementing SAP software is usually a lengthy process that requires several organizational adjustments and can take long time. The SAP consultants at VSD have vast experience and knowledge to assist clients in implementing SAP software more rapidly and efficiently. In doing so, we provide:

            </p>
          </div>

          {/* SAP Solutions Grid */}
          <div className="mb-16">

            {/* box grid layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Box 1 */}
              <div className="border rounded-lg p-6 flex flex-col items-center text-center shadow-lg transition duration-300">
                <div className="bg-blue-500 p-5 rounded-full mb-4">
                  <img
                    src={tv}
                    alt=""
                    className="w-[50px] h-[50px] filter invert hover:invert-0 transition duration-300"
                  />

                </div>
                <h4 className="text-xl font-semibold text-blue-500 mb-2">Training</h4>
                <p className="text-gray-700">
                  Everyone in your company, from technical employees to primary users, is involved with your SAP solution. To maximize value, train your personnel on how to use implemented SAP.
                </p>
              </div>

              {/* Box 2 */}
              <div className="border rounded-lg p-6 flex flex-col items-center text-center shadow-lg transition duration-300">
                <div className="bg-blue-500 p-4 rounded-full mb-4">
                  <img
                    src={americansign}
                    alt=""
                    className="w-[50px] h-[50px] filter invert hover:invert-0 transition duration-300"
                  />
                </div>
                <h4 className="text-xl font-semibold text-blue-500 mb-2">Change Management</h4>
                <p className="text-gray-700">
                  Prepare, equip, and assist your staff members as they help your organization navigate the transition process. Our change management solutions will help you implement your SAP solution as easy as possible.
                </p>
              </div>

              {/* Box 3 */}
              <div className="border rounded-lg p-6 flex flex-col items-center text-center shadow-lg transition duration-300">
                <div className="bg-blue-500 p-4 rounded-full mb-4">
                  <img
                    src={star}
                    alt=""
                    className="w-[50px] h-[50px] filter invert hover:invert-0 transition duration-300"
                  />
                </div>
                <h4 className="text-xl font-semibold text-blue-500 mb-2">IT Support</h4>
                <p className="text-gray-700">
                  SAP implementation is complex in general because it requires specialized SAP skills. VSD technologies can provide your business with experienced SAP professionals support so you can integrate the system to meet your needs.
                </p>
              </div>

              {/* Box 4 */}
              <div className="border rounded-lg p-6 flex flex-col items-center text-center shadow-lg transition duration-300">
                <div className="bg-blue-500 p-4 rounded-full mb-4">
                  <img
                    src={usercogs}
                    alt=""
                    className="w-[50px] h-[50px] filter invert hover:invert-0 transition duration-300"
                  />
                </div>
                <h4 className="text-xl font-semibold text-blue-500 mb-2">SAP Consulting</h4>
                <p className="text-gray-700">
                  SAP consulting services are a part of implementation support by providing guidance and experience as and whenever required.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
      <Faqs />
    </>
  );
};

export default Consulting;