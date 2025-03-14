import React, { useState } from 'react';
import Consulting from '../../Assets/sap consulting services.png';
import Misson from '../../Assets/Misson.jpg';
import Vision from '../../Assets/Vision.png';
import VirandraSharda from '../../Assets/Virandra Sharda.jpg';
import NaineshPatadia from '../../Assets/Nainesh Patadia.jpg';
import NareshPandya from '../../Assets/Naresh Pandya.jpg';

const Leadership = () => {
  const missionPoints = [
    'Our task is to resource our clients in developing their organizations by imparting them with superb SAP solutions that assist them save money and get the maximum out of their investments.',
    'Our commitment to R&D ensures we are always at the forefront of developing cutting-edge business solutions and delivery methods.',
    'Always keeping an eye on sustainability is something that drives our team.',
    "Maximum profit for the company is our top priority. With the help of SAP's many modules, we want to streamline and improve several business processes, ultimately leading to better outcomes.",
  ];

  const visionPoints = [
    'We empower businesses with innovative solutions that boost growth and efficiency, improving their digital landscape.',
    'We see businesses using SAP technology to streamline operations, boost productivity, and succeed. We offer the best Sap services to grow your business.',
    'We deliver transformative SAP solutions to help businesses achieve new heights of innovation, competitiveness, and profitability.',
  ];

  const teamMembers = [
    {
      name: 'Virandra Sharda',
      title: 'CEO / MENTOR & ADVISOR',
      photo: VirandraSharda,
      skills: [
        '10+ Years experience in SAP Consulting',
        'SAP CC Certified Solution Architect',
        'Project Head, record of Global Product Delivery',
        'Project and Program Management with different Geographies and Cultures',
        'Led the peak team size of 75 consultants',
        'Worked on various projects for different industry verticals across different geographies',
        'Key Implementation Markets - DACH – Europe, Great Midsherie -the USA, MENA',
        'Key Domains- Clients - AUDI, Volvo, KubeData, Symphony',
      ],
    },
    {
      name: 'Nainesh Patadia',
      title: 'CTO / CHIEF TECHNICAL OFFICER',
      photo: NaineshPatadia,
      skills: [
        'SAP Abap Technical Consultant having 12+ years of SAP Technical experience',
        'Implementation of ABAP, SAPUI5, Fiori, SAP Hana, OOABAP, Enhancement Package, WebDynpro and Implementation of SAP and different advanced technologies in ABAP/4',
        'Design, management, support and assessment of SAP landscape',
        'SAP and CCMS Interface monitoring and implementation',
        'Technical design and solution guides for performing & reporting SAP maintenance, upgrades, releases, etc. in Multiple areas of SAP',
        'Project Manager for different SAP projects implementation, Rollout, monitoring',
        'Professional Degree from ICAI-CS Department of Human Services, Professional CS Accounting',
        'Domestic Clients - Indian Pipeline, Torrent Pharma, Aramco Pharma, Larsen Pipeline, Torrent Petrol (S.A., UK, East Central)',
      ],
    },
    {
      name: 'Naresh Pandya',
      title: 'SAP FICO SOLUTION ARCHITECT / LEAD',
      photo: NareshPandya,
      skills: [
        '18 Years of SAP Experience, Commerce graduate with Specialization in CA/FICO',
        'Proficient in SAP/Finance Team Lead with Global implementations in SAP S/4 HANA & SAP ECC',
        'Implementation of SAP S/4 HANA, Greenfield, Brownfield, Global Roll-Out, Implementation, Support Projects and Coordination of New Functionalities in SAP',
        'Industries served: Industry verticals such as, Media, Petrochemicals, Oil & Natural Gas, Pharmaceuticals, Air Lines, FMCG, Retail, Mining & Metals, Aviation, Logistics, Aerospace, Transportation, Ship Building, Marine, Electrical, Energy, Infrastructure & Mining, Real Estate & Life Sciences, Waste Management, Space Research and Aerospace',
        'International clients handled - DACH, Great lakes mid-states corporation, California-USA, Switzerland, Netherlands, US & Canada, Middle East, Gulf Countries of S. Arabia and Africa, Europe/EU Countries (100+ Clients)',
        'Domestic clients handled - National, Iron-Sierra, Diamond Pharma, Petro India, Shanthi Dev Cables, Univer Well, Vikram Power',
      ],
    },
  ];

  const trustFactors = [
    {
      title: 'Diversified Industry Experience',
      description:
        'Our experience in various industries speaks for itself. We provide clients with valuable insights and customized solutions based on years of sector experience.',
    },
    {
      title: 'Solutions for Everyone & Anyone',
      description:
        "As your SAP partner, we offer solutions for everyone. Our SAP expertise makes SAP technology available to businesses of all sizes and industries. Our excellence and customer service guarantee personalized support and SAP optimizations. If you're a growing or multinational corporation, we maximize SAP's value for your business to help you achieve your goals and stay ahead in today's competitive market.",
    },
    {
      title: 'Process Oriented',
      description:
        'Trust us as your SAP partner for our process-oriented approach. We prioritize efficiency and precision throughout implementation to ensure organizational optimization and optimal performance. We understand your business needs, tailor solutions to meet goals, and deliver results that exceed expectations.',
    },
    {
      title: 'Dedicated Service and Support',
      description:
        'Trust us as your SAP partner for dedicated service and support because we put your success first. With years of SAP solution experience, we provide unmatched, customized assistance. Our dedicated team ensures seamless operations and maximum SAP investment value from implementation to support.',
    },
  ];

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
        question: 'Are you familiar with SAP?',
        answer:
          'Having SAP skills means you can use SAP software to fix issues in your company.',
      },
      {
        question: 'Then why is SAP renowned?',
        answer:
          'Businesses that run SAP solutions are vital to the global economy, which is why SAP is so important.',
      },
      {
        question: 'Is there a lot of code in SAP?',
        answer:
          'With SAP’s intuitive interface, users can accomplish most tasks without touching code. ',
      },
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
      <div className="min-h-screen flex flex-col">
        {/* Header with background image */}
        <div className="w-full h-48 flex items-center justify-center relative overflow-hidden bg-custom">
          <div className="absolute inset-0 opacity-70"></div>
          <h1 className="text-5xl font-bold text-white z-10">Leadership</h1>
        </div>

        {/* Main content section */}
        <div className="container mx-auto py-16 px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Text content - left side */}
            <div className="w-full md:w-1/2 flex flex-col gap-4">
              <h2 className="text-4xl font-bold text-gray-900">
                Ride the Waves of Digitalization with VSD Technologies
              </h2>
              <p className="text-gray-700 mt-4">
                Technocrats founded VSD Technologies in 2013, and since then, it
                has become a reliable digital transformation partner for both
                new and well-known brands worldwide. VSD Technologies is an
                internationally recognized IT consulting, implementation,
                upgrade, and support firm that works with SAP customers. As an
                esteemed SAP ERP partner, we provide first-rate outsourcing and
                system integration solutions to customers across many sectors.
              </p>

              <p className="text-gray-700 mt-4">
                Our team of expert SAP consultants can propel projects of any
                size, and we are proud to be a trusted SAP partner offering
                first-rate SAP consulting services. Our dedication is to
                collaborate closely with each of our valued clients, assisting
                them in materializing their vision by applying appropriate
                resources (including people, technology, and best business
                practices). Our primary goal is to increase our client's overall
                business efficiency by delivering outstanding results.
              </p>
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
          <p className="text-gray-700 mt-10">
            We pride ourselves on our team of highly competent SAP developers
            who are experts at providing cutting-edge SAP solutions to
            companies. Please take advantage of our SAP consultants' and
            implementation teams' enthusiasm, expertise, and innovation by
            hiring SAP developers from our team.
          </p>

          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row gap-6 mb-16 mt-28">
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Our Mission
                </h2>
                <p className="text-orange-500 font-medium mb-6">
                  Committed to Create Value for Your Business Growth
                </p>

                <ul className="space-y-4">
                  {missionPoints.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <span className="flex-shrink-0 bg-blue-600 text-white p-1 mr-2 rounded">
                        📋
                      </span>
                      <span className="text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="w-full md:w-1/2 flex justify-center items-center">
                <img
                  src={Misson}
                  alt="Mission illustration with growth arrows and target"
                  className="max-w-full h-auto"
                />
              </div>
            </div>

            {/* Vision Section */}
            <div className="flex flex-col-reverse md:flex-row gap-6">
              <div className="w-full md:w-1/2 flex justify-center items-center">
                <img
                  src={Vision}
                  alt="Vision illustration with lightbulb and gears"
                  className="max-w-full h-auto"
                />
              </div>

              <div className="w-full md:w-1/2">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Our Vision
                </h2>
                <p className="text-orange-500 font-medium mb-6">
                  Transform the Businesses with Innovation
                </p>

                <ul className="space-y-4">
                  {visionPoints.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <span className="flex-shrink-0 bg-blue-600 text-white p-1 mr-2 rounded">
                        📋
                      </span>
                      <span className="text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="container mx-auto px-4 py-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold">
                Meet Our Core Management Team
              </h2>
              <p className="text-sm text-gray-600">
                Industry Standards with 10+ Years of Experience Joined Hands to
                Help Customers Expand Their Enterprise Potential
              </p>
            </div>

            <div className="space-y-12">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'
                    } gap-6`}
                >
                  <div className="w-full md:w-3/4">
                    <h3 className="text-xl font-bold text-blue-800">
                      {member.name}
                    </h3>
                    <p className="text-sm text-blue-600 font-medium mb-4">
                      {member.title}
                    </p>

                    <ul className="space-y-2">
                      {member.skills.map((skill, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <span className="text-blue-500 mr-2 mt-1 flex-shrink-0">
                            ●
                          </span>
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="w-full flex justify-center">
                    <div className="rounded-full overflow-hidden flex items-center justify-center">
                      <img
                        src={member.photo}
                        alt={`${member.name} - ${member.title}`}
                        className="w-96 h-96 object-cover scale-100"
                      />
                    </div>
                  </div>

                </div>
              ))}

              {/* Why Clients Trust Us Section */}
              <div className="mt-28 mb-16">
                <h2 className="text-3xl font-bold text-center mb-12">
                  Why Clients Trust Us?
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {trustFactors.map((factor, index) => (
                    <div
                      key={index}
                      className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
                    >
                      <div className="w-20 h-20 mb-4 flex items-center justify-center bg-blue-50 rounded-full">
                        <span className="text-blue-600 text-4xl font-bold">
                          {index === 0
                            ? '🏭'
                            : index === 1
                              ? '🔄'
                              : index === 2
                                ? '📋'
                                : '🛠️'}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-blue-800 mb-2">
                        {factor.title}
                      </h3>
                      <p className="text-sm text-gray-600 text-left">
                        {factor.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Faqs />

      
    </>
  );
};

export default Leadership;