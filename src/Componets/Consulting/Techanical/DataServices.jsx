import React, { useState } from 'react';
import DataService from "../../../Assets/SAP Data Service.png"
import Interview from "../../../Assets/Interview.png"
import Consulting from "../../../Assets/Consulting Services.png"
import Data from "../../../Assets/sap data services.png"
import searchengin from '../../../Icons/searchengin.svg'
import filecode from '../../../Icons/file-code.svg'
import chalkboard from '../../../Icons/chalkboard.svg'
import Form from "../../Form"

const DataServices = () => {
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
        question: 'How can data help my Business to grow?',
        answer:
          'Data is the lifeblood of every business in the 21st century. It helps organizations make informed decisions, understand customers, and optimize operations. As a result, data has become one of the most valuable assets for companies across industries.',
      },
      {
        question: 'How SAP Data Services will be beneficial for my business?',
        answer:
          'SAP Data Services is a powerful data management tool that can help organizations streamline their data management processes. After integrating SAP Data Services into their business operations, organizations can experience several benefits, including Improved Data Quality, Increased Operational Efficiency, and Enhanced Customer Satisfaction. ',
      },
      {
        question: "How do my business staff get used to SAP ERP?",
        answer: 'Once you get associated with VSD Technologies for SAP BI/BO Services, it is our responsibility to train your staff regarding the SAP features and get them used to the SAP ERP Software. A team of experts from VSD Technologies will be at your disposal, who will consistently train your staff about SAP as and when required.',
      }
    ];

    const toggleItem = (index) => {
      setOpenItem((prevOpen) => (prevOpen === index ? null : index));
    };

    return (
      <div className="p-4 sm:p-6  mx-auto w-full">
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

  const [selectedStep, setSelectedStep] = useState('Analyze');

  const steps = [
    {
      id: 'Analyze',
      title: 'Identify Your Requirements',
      icon: searchengin,
      description: 'Once we are done with the requirements and data source process, at the last step, we will use the BODS or CPI-DS for migration of data from source system to target system. we will perform the verification for making sure that all the data are successfully migrated.'
    },
    {
      id: 'Assemble',
      title: 'Identify the Data Sources',
      icon: filecode,
      description: 'Once we are done with the requirements and data source process, at the last step, we will use the BODS or CPI-DS for migration of data from source system to target system. we will perform the verification for making sure that all the data are successfully migrated.'
    },
    {
      id: 'Transition',
      title: 'Data Migration',
      icon: chalkboard,
      description: 'Once we are done with the requirements and data source process, at the last step, we will use the BODS or CPI-DS for migration of data from source system to target system. we will perform the verification for making sure that all the data are successfully migrated.'
    }
  ];

  return (
    <>
      <div className="min-h-screen bg-white text-black font-sans">
        {/* Hero Section with Background */}
        <div className="w-full h-40 flex flex-col items-center justify-center relative overflow-hidden bg-custom text-center px-4">
          <div className="absolute inset-0 opacity-70"></div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white z-10">SAP Data Services Designer</h1>
        </div>

        {/* Main content section */}
        <div className="container mx-auto py-8 sm:py-12 md:py-16 px-4 md:px-6">
          {/* Original content from the first component */}
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            {/* Text content - left side */}
            <div className="w-full md:w-1/2 flex flex-col gap-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Uncover Your Business Possibilities with Data</h2>

              <p className="text-gray-700 mt-4">
                SAP Data Services offers services including data Migration, data integration, Data replication with data cleansing data transformation, data validation, data load and data reconciallation. , This can help drive business acceleration for the companies through information based on the data and reach greater heights.
              </p>

              <p className="text-gray-700 mt-4">
                SAP Data Services assists businesses in integrating, connecting, and processing  structured or unstructured data from SAP or any other  legacy system or enterprise solutions. SAP BODS can help in loading in SAP system and also can extract from SAP system and load the same in other SAP system or legacy system. Companies can also convert, clean up, match, and consolidate data using the Data Quality features of SAP Data Services, and they can also deliver transformations that are ready to use. Other capabilities like data profiling and text data processing help to boost business insights while also enhancing overall performance and bringing sense to unstructured text data.
              </p>

              <button className="bg-blue-500 hover:bg-white text-white hover:text-blue-500 font-medium py-2 w-full sm:w-96 border border-transparent hover:border-blue-600 rounded-full transition duration-300 z-10 mt-4">
                Schedule a Free Consultation
              </button>
            </div>

            {/* Image - right side */}
            <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
              <img
                src={DataService}
                alt="Team collaborating on digital transformation"
                className="max-w-full h-auto"
              />
            </div>
          </div>

          {/* Benefits section (from original component) */}
          <div className="flex flex-col md:flex-row items-start gap-8 px-4 md:px-8 lg:px-28 py-10 mt-8 md:mt-12">
            {/* Left side content */}
            <div className="w-full md:w-1/2 flex flex-col gap-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Perks of Associating with VSD Technologies for SAP Data Services:
              </h2>

              <p className="text-gray-700">Transforming Businesses with the Help of SAP Data Services</p>

              <div className="flex flex-col space-y-4">
                <div className="flex items-start">
                  <div className="mt-1 mr-2 flex-shrink-0">
                    <div className="w-5 h-5 bg-blue-500 flex items-center justify-center rounded">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-gray-700">Highly experienced consultant</p>
                </div>

                <div className="flex items-start">
                  <div className="mt-1 mr-2 flex-shrink-0">
                    <div className="w-5 h-5 bg-blue-500 flex items-center justify-center rounded">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-gray-700">Higher Efficiency at a Reduced Cost</p>
                </div>

                <div className="flex items-start">
                  <div className="mt-1 mr-2 flex-shrink-0">
                    <div className="w-5 h-5 bg-blue-500 flex items-center justify-center rounded">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-gray-700">Empowering Your Employees for effective Data Usage</p>
                </div>

                <div className="flex items-start">
                  <div className="mt-1 mr-2 flex-shrink-0">
                    <div className="w-5 h-5 bg-blue-500 flex items-center justify-center rounded">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-gray-700">Improved Data Quality with Greater Business Insights</p>
                </div>

                <div className="flex items-start">
                  <div className="mt-1 mr-2 flex-shrink-0">
                    <div className="w-5 h-5 bg-blue-500 flex items-center justify-center rounded">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-gray-700">Meet your Business Specific Data Needs</p>
                </div>

                <div className="flex items-start">
                  <div className="mt-1 mr-2 flex-shrink-0">
                    <div className="w-5 h-5 bg-blue-500 flex items-center justify-center rounded">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-gray-700">Experienced with all types of Master and transaction data load </p>
                </div>
              </div>

              <button className="bg-blue-500 hover:bg-white text-white hover:text-blue-500 font-medium py-2 w-full sm:w-64 border border-transparent hover:border-blue-600 rounded-full transition duration-300 z-10 mt-4">
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
            <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">Our Process</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
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

            <div className="mt-8">
              <p className="text-gray-600">
                {steps.find(step => step.id === selectedStep)?.description}
              </p>
            </div>
          </div>

          {/* Main content section */}
          <div className="container mx-auto py-12 sm:py-20 px-4 md:px-6">
            {/* Original content from the first component */}
            <div className="flex flex-col md:flex-row items-center gap-8 mx-4 sm:mx-8 lg:mx-20">
              {/* Text content - left side */}
              <div className="w-full md:w-1/2 flex flex-col gap-4">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Fueling the Growth of Businesses through Data Quality, Integration, and Transformation</h2>

                <p className="text-gray-700 mt-4">
                  SAP Data Services is a comprehensive data integration and transformation solution that enables organizations to quickly and easily move data between different systems. SAP Data Services offers a wide range of features and capabilities, including real-time data replication, data cleansing, and ETL (extract, transform, load) processing. SAP Data Services is an ideal solution for companies that need to consolidate data from multiple sources into a single repository or format. Not limited to these only, it can also be used to Validate, enrich and load data from legacy systems to SAP applications.
                </p>

                <p className="text-gray-700 mt-4">
                  VSD Technologies has extensive experience implementing and configuring SAP Data Services for our clients. We have extensive experience implementing data services for SAP systems, and our team comprises of certified experts in data migration, integration, and more. This means that you can rest assured knowing that your project is in good hands from start to finish.
                </p>

                <button className="bg-blue-500 hover:bg-white text-white hover:text-blue-500 font-medium py-2 w-full sm:w-96 border border-transparent hover:border-blue-600 rounded-full transition duration-300 z-10 mt-4">
                  Schedule a Free Consultation
                </button>
              </div>

              {/* Image - right side */}
              <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
                <img
                  src={Consulting}
                  alt="Team collaborating on digital transformation"
                  className="max-w-full h-auto"
                />
              </div>
            </div>
          </div>

          <div className="container mx-auto py-12 sm:py-20 px-4 md:px-6">
            {/* Original content from the first component */}
            <div className="flex flex-col md:flex-row items-center gap-8 mx-4 sm:mx-8 lg:mx-20">
              {/* Image - left side */}
              <div className="w-full md:w-1/2 flex justify-center order-2 md:order-1">
                <img
                  src={Data}
                  alt="Team collaborating on digital transformation"
                  className="max-w-full h-auto"
                />
              </div>

              {/* Text content - right side */}
              <div className="w-full md:w-1/2 flex flex-col gap-4 order-1 md:order-2">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">SAP Data Services</h2>

                <p className="text-gray-700 mt-4">
                  SAP Data Services is a data management platform that enables businesses to collect, transform, and migrate data. The platform provides a unified, end-to-end view of an organization's data, making it easy to manage and govern data across the enterprise. SAP Data Services enables businesses to quickly and easily connect to any data source, whether it's on-premises or in the cloud. SAP Data Services provides a single point of control for all data transformation and migration activities. SAP Data Services is built on a highly scalable, modular architecture that can be deployed on-premises or in the cloud. The platform uses a simple drag-and-drop interface to make it easy to create data flows. Once transformation logic implemented data services job can be easily scheduled and executed with just a few clicks.
                </p>

                <p className="text-gray-700 mt-4">
                  In order to help organizations unlock the value contained in the data, SAP Data Services enables them to deal seamlessly with data of all types and from all sources. Connect to a variety of data sources, evaluate the quality of the data, and then use your own business logic to enhance and improve it so that users can make smarter decisions and advance your organization's adoption of a data-driven culture.
                </p>

                <p className="text-gray-700 mt-4">
                  Develop your company with insight and intelligence; using our assessment services, which are based on years of experience of our certified experts, plan your transition. Our customizable, useful services assist you in planning your migration with minimum business impact, understanding your data and analytical maturity, and seeing your future. We'll work with you to determine the use case, connect to the appropriate data sources, and give you the tools that would help you to create your own data models and data flows.
                </p>

                <button className="bg-blue-500 hover:bg-white text-white hover:text-blue-500 font-medium py-2 w-full sm:w-96 border border-transparent hover:border-blue-600 rounded-full transition duration-300 z-10 mt-4">
                  Schedule a Free Consultation
                </button>
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
          How Your Business can get benefitted from SAP Data Services.
        </h1>
      </div>

      <Form />
    </>
  );
};

export default DataServices;