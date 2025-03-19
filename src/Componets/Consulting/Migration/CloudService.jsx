import React, { useState } from 'react';
import Consultant from "../../../Assets/sap_migration_services.png";
import Interview from "../../../Assets/Interview.png"
import Services from "../../../Assets/SAP_Business_Goal.png";
import Digital from "../../../Assets/SAP_Digital_Transformation.png"
import searchengin from '../../../Icons/searchengin.svg'
import filecode from '../../../Icons/file-code.svg'
import chalkboard from '../../../Icons/chalkboard.svg'


const CloudService = () => {

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
        question: 'Which cloud service provider does SAP employ?',
        answer:
          'The SAP Business Technology Platform relies on SAP HANA Cloud for database management. This platform includes intelligent technologies, application development, integration, analytics, database management, and data management.',
      },
      {
        question: 'SAP in the cloud: right choice?',
        answer:
          'Scalability, cost savings, flexibility, and security are all benefits of cloud migration for SAP S/4HANA.',
      },
      {
        question: 'What makes on-premises ideal compared to the cloud?',
        answer:
          'To utilize on-premise software, businesses must first acquire a license or physical copy of the program. Security is typically better with on-premises software licencing and complete instances residing within an organization’s premises than with cloud computing.',
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


  const [selectedStep, setSelectedStep] = useState('Discover');


  const steps = [
    {
      id: 'Discover',
      title: 'Discover',
      icon: searchengin
    },
    {
      id: 'Implementation',
      title: 'Realize',
      icon: filecode
    },
    {
      id: 'Monitor and optimization',
      title: 'Deploy',
      icon: chalkboard
    }
  ];

  return (
    <>
      <div className="min-h-screen bg-white text-black font-sans">
        {/* Hero Section with Background */}
        <div className="w-full h-56 flex flex-col items-center justify-center relative overflow-hidden bg-custom text-center px-auto">
          <div className="absolute inset-0 opacity-70"></div>
          <h1 className="text-5xl font-bold text-white z-10">SAP MIGRATION</h1>
          <h1 className="text-5xl font-bold text-white z-10">ON-PREMISE TO CLOUD SERVICES</h1>
        </div>

        {/* Main content section */}
        <div className="container mx-auto py-16 px-4 md:px-6">


          {/* Original content from the first component */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Text content - left side */}
            <div className="w-full md:w-1/2 flex flex-col gap-4">
              <h2 className="text-4xl font-bold text-gray-900">Seamlessly Migrate Your SAP Business Architecture to Cloud</h2>

              <p className="text-gray-700 mt-4">
                With our <b>SAP on premise to cloud migration</b> expertise, maximize your business. Our comprehensive roadmap uses cutting-edge technology to streamline the transition and increase efficiency and agility. We guide you from assessment to implementation with our proven track record and personalized approach, minimizing disruption and maximizing ROI. Trust VSD Technologies to help you streamline, scale, and future-proof your SAP landscape as you embrace digital transformation.
              </p>

              <button className="bg-blue-500 hover:bg-white text-white hover:text-blue-500 font-medium py-1 w-60 border border-transparent hover:border-blue-600 rounded-full transition duration-300 z-10 mt-4">
                Schedule a Free Consultation
              </button>
            </div>

            {/* Image - right side */}
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={Consultant}
                alt="Team collaborating on digital transformation"
                className="max-w-full h-auto"
              />
            </div>
          </div>


          <div className="flex flex-col md:flex-row items-start gap-8 px-4 md:px-28 py-10 mt-12">
            {/* Left side content */}
            <div className="w-full md:w-1/2 flex flex-col gap-4">

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Perks of Associating with VSD Technologies for On-Premise to Cloud SAP Migration Services:
              </h2>

              <p className="text-gray-700 mt-4">
                SAP Automation’s on-premise to cloud migration expertise can digitalize your business. At VSD Technologies, we minimize disruption and maximize efficiency and scalability during our seamless transition process. With years of experience and a proven track record, we help organizations migrate and optimize SAP systems for the cloud. SAP cloud solutions give businesses agility, innovation, and cost savings to stay ahead in today’s competitive landscape. Trust SAP Automation to maximize SAP system potential and advance your business.
              </p>

              <p className="text-gray-700 mt-4">
                We at VSD Technologies offer seamless <b>SAP on premise to cloud migration</b> for minimal disruption and maximum business efficiency.
              </p>

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
            <p className="text-gray-600">In the initial phase of migrating SAP systems from on-premise to cloud services, the "Discover" stage involves thorough exploration and assessment.</p>
          </div>


          <div className="container mx-auto py-20 px-4 md:px-6">
            {/* Original content from the first component */}
            <div className="flex flex-col md:flex-row items-center gap-8 mx-20">
              {/* Text content - left side */}
              <div className="w-full md:w-1/2 flex flex-col gap-4">
                <h2 className="text-4xl font-bold text-gray-900">Ace the Business Goal Chase with Real-Time Data Insights on SAP Cloud</h2>

                <p className="text-gray-700 mt-4">
                  Choose us for reliable <b>SAP on premise to cloud migration</b>. We plan, test, and support your business transition to make it easy. Our experts’ years of experience and technical knowledge ensure a smooth migration process for every project. Rest assured that we will protect your data and exceed your expectations.
                </p>

                <p className="text-gray-700 mt-4">
                  Choose us for SAP on-premise to cloud migration because we put customers first. Our experts tailor solutions to your business needs and exceed expectations. Customer-centricity ensures clear communication, timely support, and seamless migration collaboration. Trust our expertise and dedication to your success to help you transition to the cloud smoothly—experience working with a partner who prioritizes your needs and drives business growth.
                </p>

                <p className="text-gray-700 mt-4">
                  Choose us for <b>SAP migration from on premise to cloud</b> because of our unparalleled expertise and experience. Our experienced consultants have completed many migration projects, ensuring smooth transitions and optimal results for our clients. Our SAP and cloud expertise allows us to customize solutions for your business. Excellence is our goal from planning and execution to post-migration support.
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
                  className="max-w-full h-full "
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8 mx-20">

            {/* Image - right side */}
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={Digital}
                alt="Team collaborating on digital transformation"
                className="max-w-full h-full "
              />
            </div>


            {/* Text content - left side */}
            <div className="w-full md:w-1/2 flex flex-col gap-4 my-10">
              <h2 className="text-4xl font-bold text-gray-900">SAP MIGRATION – ON-PREMISE TO CLOUD SERVICES</h2>

              <p className="text-gray-700 mt-4">
              Choose us for fast SAP on-premise to cloud migration. Our dedicated team follows strict timelines and project milestones to ensure a smooth transition. We guarantee timely delivery without compromising quality with our proven expertise and efficient project management. 
              </p>

              <p className="text-gray-700 mt-4">
              VSD Technologies offers unmatched expertise and commitment to <b>SAP migration from on premise to cloud</b> teamwork. We have SAP migration experts who ensure smooth execution and timely delivery. Our customer-centric approach prioritizes your business needs and goals, providing personalized solutions and continuous migration support. Trust our passionate team to simplify SAP migration, reduce risks, and maximize cloud benefits.
              </p>

              <button className="bg-blue-500 hover:bg-white text-white hover:text-blue-500 font-medium py-2 w-96 border border-transparent hover:border-blue-600 rounded-full transition duration-300 z-10 mt-4">
                Schedule a Free Consultation
              </button>
            </div>


          </div>

        </div>
      </div>
      <Faqs />
    </>
  );
};


export default CloudService
