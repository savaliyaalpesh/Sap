const SapBtpPage = () => {
  return (
    <div>
      {/* Hero Banner */}
      <div className="w-full h-60 bg-custom flex items-center justify-center relative overflow-hidden px-4">
        <div className="z-10 flex flex-col items-center text-center">
          <h1 className="text-4xl font-bold text-white mb-3">SAP BTP</h1>
          <p className="text-white text-base max-w-2xl text-left">
            It is an integrated platform offered by SAP that provides a range of tools, services, and technologies to
            help businesses develop, integrate, and extend their applications in the cloud.
          </p>
          <p className="text-white text-base max-w-2xl mt-2 text-left">
            SAP BTP is designed to support the creation of innovative business applications, data integration, and
            advanced analytics. It incorporates various services and capabilities, including:
          </p>
          <button className="bg-blue-500 hover:bg-white text-white hover:text-blue-500 font-medium py-2 px-6 w-80 border border-transparent hover:border-blue-600 rounded-full transition duration-300 z-10 mt-4">
            Schedule a Free Consultation
          </button>
        </div>
      </div>


      {/* Content Section */}
      <div className="max-w-4xl mx-auto py-10 px-4 text-left">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">What is SAP BTP?</h2>
        <p className="text-gray-700 mb-4 text-lg">
          It is an integrated platform offered by SAP that provides a range of tools, services, and technologies to help
          businesses develop, integrate, and extend their applications in the cloud.
        </p>
        <p className="text-gray-700 mb-6 text-lg">
          SAP BTP is designed to support the creation of innovative business applications, data integration, and
          advanced analytics. It incorporates various services and capabilities, including:
        </p>

        <div className="space-y-4 text-left inline-block">
          <div className="flex items-start">
            <div className="w-6 h-6 bg-blue-500 flex items-center justify-center rounded">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="ml-3 text-lg text-gray-700">
             Integration Suite: Provides tools for integrating various SAP and non-SAP applications and data sources.
            </p>
          </div>

          <div className="flex items-start">
            <div className="w-6 h-6 bg-blue-500 flex items-center justify-center rounded">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="ml-3 text-lg text-gray-700">
             Extension Suite:Allows businesses to extend and customize their existing SAP applications to meet
              specific requirements.
            </p>
          </div>

          <div className="flex items-start">
            <div className="w-6 h-6 bg-blue-500 flex items-center justify-center rounded">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="ml-3 text-lg text-gray-700">
             Analytics Suite: Offers advanced analytics and data visualization tools to gain insights from data.
            </p>
          </div>
        </div>

        <div className="mt-8 space-y-4">
          <p className="text-lg text-gray-700">
            SAP BTP aims to simplify the process of application development and deployment, enable faster innovation,
            and provide scalability and flexibility for businesses in the cloud-based market.
          </p>

          <p className="text-lg text-gray-700">
            SAP Business Technology Platform (BTP) offers services and solutions across multiple cloud providers,
            supporting Cloud Foundry, ABAP, and Kyma environments. It also comes integrated and provides a broad choice
            of programming languages for application development.
          </p>
        </div>

        <div className="mt-8 border border-gray-300 rounded-md p-2">
          <img
            src="/placeholder.svg?height=600&width=300"
            alt="SAP BTP Architecture Diagram"
            className="w-full h-auto"
          />
        </div>
      </div>


      {/* Account Types Section */}
      <div className="font-sans max-w-6xl mx-auto px-4 py-8">
      {/* Title */}
      <h1 className="text-3xl font-bold text-center mb-6">
        Different Account Types Offered in SAP BTP
      </h1>

      {/* Description */}
      <p className="text-base text-center mb-6">
        SAP Business Technology Platform (SAP BTP) offers several types of global accounts catering to different user needs:
      </p>

      {/* Account Types List */}
      <div className="flex justify-center gap-6 mb-6">
        {['Trial Account', 'Free Tier Account', 'Enterprise Account'].map((type) => (
          <div key={type} className="flex items-center">
            <div className="h-5 w-5 border border-black flex items-center justify-center mr-2">
              <div className="h-2.5 w-2.5 bg-black"></div>
            </div>
            <span className="text-base font-medium">{type}</span>
          </div>
        ))}
      </div>

      {/* Account Types Comparison */}
      <div className="grid grid-cols-3 gap-4 mb-12">
        {[
          {
            title: 'Trial Account',
            description: [
              'Designed for individual developers',
              'Allows free exploration of SAP BTP for about 90 days',
              'Ideal for proof-of-concept, experimentation, not for production use',
              'Access to a subset of platform services and capabilities',
              'Requires extension to continue beyond the time limit otherwise data will be lost permanently',
            ],
          },
          {
            title: 'Free Tier Account',
            description: [
              'Available to customers, partners, and individual developers',
              'Offers free usage of SAP services without time limitations',
              'Ideal production environment for testing services and building applications',
              'Limited capacity and functionality compared to enterprise tiers',
              'Perfect for small businesses with moderate computational and resource needs',
              'Can be seamlessly upgraded to paid enterprise accounts',
            ],
          },
          {
            title: 'Enterprise Account',
            description: [
              'Caters to SAP customers and partners for production use',
              'Subscription that provides entitlements to SAP BTP services based on contract',
              'Access to a comprehensive range of services and features',
              'Support, maintenance and deployment of production-grade applications and solutions using SAP BTP',
            ],
          },
        ].map((account) => (
          <div key={account.title} className="border border-gray-300">
            <div className="bg-gray-100 p-3 text-lg font-medium text-center">{account.title}</div>
            <div className="p-4">
              <ul className="list-disc pl-5 text-sm space-y-2">
                {account.description.map((desc, index) => (
                  <li key={index}>{desc}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Platform Deep Dive Section */}
      <h2 className="text-2xl font-bold text-center mb-6">SAP Business Technology Platform Deep Dive</h2>
      <div className="flex justify-center mb-12">
        <img src="/placeholder.svg?height=250&width=700" alt="SAP BTP Platform Architecture" className="w-4/5 h-auto" />
      </div>

      {/* Environments Section */}
      <h2 className="text-2xl font-bold text-center mb-6">Environments for Your Applications</h2>
      <div className="grid grid-cols-3 gap-4">
        {[
          {
            title: 'Cloud Foundry',
            description: [
              'Cloud native',
              'Development, deployment',
              'Integration',
              'Multi-cloud',
              'Language support',
              'Custom apps/microservices',
              'Platform-managed, rich ecosystem, multi-language, ready to deploy, lifecycle control, DevOps support, resilient architecture, scalable, integrations and services',
            ],
          },
          {
            title: 'Kyma',
            description: [
              'Containerized',
              'Development, deployment',
              'Kubernetes',
              'Fully managed access',
              'Open source project',
              'Cloud-native development of apps and functions',
              'Highly extensible microservice architecture',
              'Kyma is stable, responsive, event-driven',
            ],
          },
          {
            title: 'ABAP Environment',
            description: [
              'ABAP runtime',
              'Development, deployment',
              'Core business logic',
              'ABAP environment',
              'Integrated',
              'Tested',
              'SAP project',
              'ABAP RESTful programming model',
              'Integration with cloud services for hybrid applications',
              'Enables ABAP developers to migrate to cloud',
              'Fully configurable applications',
            ],
          },
        ].map((env) => (
          <div key={env.title} className="border border-gray-300">
            <div className="bg-blue-600 text-white p-3 text-lg font-medium text-center">{env.title}</div>
            <div className="p-4 flex flex-col items-center">
              <div className="mb-4">
                <img src="/placeholder.svg?height=60&width=60" alt={`${env.title} Icon`} className="w-12 h-12" />
              </div>
              <ul className="text-sm w-full space-y-2">
                {env.description.map((desc, index) => (
                  <li key={index}>• {desc}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>

      {/* Environments Comparison */}
      <div className="font-sans max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-3 gap-6 mb-12">
          {/* Cloud Foundry Environment */}
          <div>
            <h3 className="text-center text-blue-500 font-medium mb-4">Cloud Foundry Environment</h3>
            <ul className="space-y-3 text-xs">
              <li className="flex">
                <span className="text-blue-600 mr-2">•</span>
                <span>The Cloud Foundry environment operates as an open-source platform-as-a-service</span>
              </li>
              <li className="flex">
                <span className="text-blue-600 mr-2">•</span>
                <span>Graphical creation of cloud applications with built-in deployment lifecycle management</span>
              </li>
              <li className="flex">
                <span className="text-blue-600 mr-2">•</span>
                <span>Support major programming languages including Java, Node.js, and Python</span>
              </li>
              <li className="flex">
                <span className="text-blue-600 mr-2">•</span>
                <span>Browser-connected build packs for fast deployment</span>
              </li>
            </ul>
          </div>

          {/* Kyma Environment */}
          <div>
            <h3 className="text-center text-blue-500 font-medium mb-4">Kyma Environment</h3>
            <ul className="space-y-3 text-xs">
              <li className="flex">
                <span className="text-blue-600 mr-2">•</span>
                <span>Fully managed Kubernetes system in SAP BTP based on the open-source project</span>
              </li>
              <li className="flex">
                <span className="text-blue-600 mr-2">•</span>
                <span>
                  Offers extensions for managing applications lifecycle, containers, serverless functions, and API
                  management
                </span>
              </li>
              <li className="flex">
                <span className="text-blue-600 mr-2">•</span>
                <span>
                  Allows seamless integration of services between enterprise systems and cloud-native components to
                  address IoT solutions
                </span>
              </li>
              <li className="flex">
                <span className="text-blue-600 mr-2">•</span>
                <span>
                  Supports event-driven architecture for building full-stack applications with flexibility and
                  scalability
                </span>
              </li>
            </ul>
          </div>

          {/* ABAP Environment */}
          <div>
            <h3 className="text-center text-blue-500 font-medium mb-4">ABAP Environment</h3>
            <ul className="space-y-3 text-xs">
              <li className="flex">
                <span className="text-blue-600 mr-2">•</span>
                <span>
                  Designed for developing extension applications for SAP S/4HANA products like procurement and financial
                  planning
                </span>
              </li>
              <li className="flex">
                <span className="text-blue-600 mr-2">•</span>
                <span>Also supports creation of independent cloud applications</span>
              </li>
              <li className="flex">
                <span className="text-blue-600 mr-2">•</span>
                <span>Operates as a multitenant environment which shares runtime infrastructure</span>
              </li>
              <li className="flex">
                <span className="text-blue-600 mr-2">•</span>
                <span>
                  Built on the ABAP RESTful application programming model, incorporating technology enhancements while
                  supporting the Application Server ABAP
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* BTP Technology Categories */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-center mb-8">BTP Technology Categories</h2>

          <div className="flex justify-center">
            <div className="relative h-64 w-96">
              {/* Base platform */}
              <div className="absolute bottom-0 left-0 w-96 h-36 bg-gray-200 border border-gray-400 transform perspective-500 rotate-x-10 shadow-lg">
                <div className="flex justify-center items-center h-full">
                  <p className="font-medium">Business Technology Platform</p>
                </div>
              </div>

              {/* Technology blocks */}
              <div className="absolute top-6 left-12 flex space-x-2">
                <div className="w-12 h-12 bg-blue-200 border border-blue-400 transform rotate-y-20 shadow-md flex items-center justify-center text-xs text-center">
                  <span>Application Dev</span>
                </div>
                <div className="w-12 h-12 bg-blue-200 border border-blue-400 transform rotate-y-20 shadow-md flex items-center justify-center text-xs text-center">
                  <span>Automation</span>
                </div>
                <div className="w-12 h-12 bg-blue-200 border border-blue-400 transform rotate-y-20 shadow-md flex items-center justify-center text-xs text-center">
                  <span>Integration</span>
                </div>
                <div className="w-12 h-12 bg-blue-200 border border-blue-400 transform rotate-y-20 shadow-md flex items-center justify-center text-xs text-center">
                  <span>Data & Analytics</span>
                </div>
                <div className="w-12 h-12 bg-blue-200 border border-blue-400 transform rotate-y-20 shadow-md flex items-center justify-center text-xs text-center">
                  <span>Artificial Intelligence</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BTP Tools Section */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-center mb-8">BTP Tools for Business and professional developers</h2>

          <div className="grid grid-cols-2 gap-8">
            {/* Low-code tools */}
            <div className="border border-gray-200 rounded p-4">
              <h3 className="text-center text-blue-500 mb-4">Low-code tools</h3>
              <ul className="space-y-4 text-xs">
                <li className="flex">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>
                    <span className="font-medium">SAP Build Apps:</span> Create enterprise applications without writing
                    code
                  </span>
                </li>
                <li className="flex">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>
                    <span className="font-medium">SAP Build Process Automation:</span> Automate workflows, processes,
                    and tasks with simple drag-and-drop UI
                  </span>
                </li>
                <li className="flex">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>
                    <span className="font-medium">SAP Build Work Zone:</span> Create intuitive frontend sites to get end
                    users quickly access all your enterprise applications
                  </span>
                </li>
              </ul>
            </div>

            {/* Pro-code tools */}
            <div className="border border-gray-200 rounded p-4">
              <h3 className="text-center text-blue-500 mb-4">Pro-code tools</h3>
              <ul className="space-y-4 text-xs">
                <li className="flex">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>
                    <span className="font-medium">ABAP environment:</span> Leverage ABAP know-how to develop and run
                    ABAP applications in the cloud
                  </span>
                </li>
                <li className="flex">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>
                    <span className="font-medium">SAP Business Application Studio:</span> Increase productivity using
                    IDE tools and frameworks optimized for zero-time onboarding
                  </span>
                </li>
                <li className="flex">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>
                    <span className="font-medium">Cloud Foundry:</span> Build highly scalable, resilient and manageable
                    applications
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Getting Started Section */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-center mb-8">Getting started with SAP BTP Services</h2>
        </div>

        {/* Subscription Models Section */}
        <div className="grid grid-cols-2 gap-6 mb-12">
          {/* Free Tier */}
          <div className="border border-gray-200 rounded p-6">
            <h3 className="text-blue-500 font-medium mb-4 text-center">SAP BTP Free Tier</h3>
            <ul className="space-y-3 text-xs">
              <li className="flex">
                <span className="text-blue-600 mr-2">•</span>
                <span>SAP BTP offers a Free Tier with limited access to a production account</span>
              </li>
              <li className="flex">
                <span className="text-blue-600 mr-2">•</span>
                <span>Users get a curated selection of BTP services to craft applications</span>
              </li>
              <li className="flex">
                <span className="text-blue-600 mr-2">•</span>
                <span>It's a great opportunity to explore SAP BTP's powerful benefits</span>
              </li>
              <li className="flex">
                <span className="text-blue-600 mr-2">•</span>
                <span>No limitation to the trial period, if desired</span>
              </li>
            </ul>
          </div>

          {/* Pay-As-You-Go */}
          <div className="border border-gray-200 rounded p-6">
            <h3 className="text-blue-500 font-medium mb-4 text-center">SAP BTP Pay-As-You-Go</h3>
            <ul className="space-y-3 text-xs">
              <li className="flex">
                <span className="text-blue-600 mr-2">•</span>
                <span>
                  Pay-as-you-go model: Suitable for users experimenting with SAP services without long-term commitment
                </span>
              </li>
              <li className="flex">
                <span className="text-blue-600 mr-2">•</span>
                <span>Purchase credits to specific services and pay only for what you use</span>
              </li>
              <li className="flex">
                <span className="text-blue-600 mr-2">•</span>
                <span>No unlimited upfront commitment or minimum usage requirements</span>
              </li>
              <li className="flex">
                <span className="text-blue-600 mr-2">•</span>
                <span>Access services on a pay-as-you-go basis based on business needs</span>
              </li>
              <li className="flex">
                <span className="text-blue-600 mr-2">•</span>
                <span>Optimizes costs and resource allocation</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Subscription Section */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-center mb-6">Subscriptions</h2>

          <div className="grid grid-cols-2 gap-6">
            {/* Left column */}
            <div className="space-y-3 text-xs">
              <div className="flex">
                <span className="text-blue-600 mr-2">•</span>
                <span>Access specific SAP BTP services for a fixed cost with a contract or agreement</span>
              </div>
              <div className="flex">
                <span className="text-blue-600 mr-2">•</span>
                <span>Different durations available: Subscriptions can range from monthly to yearly</span>
              </div>
              <div className="flex">
                <span className="text-blue-600 mr-2">•</span>
                <span>Clear understanding of costs and planning</span>
              </div>
              <div className="flex">
                <span className="text-blue-600 mr-2">•</span>
                <span>
                  Commitment to multiple services and flexibility to scale up extra fee during the subscription period
                </span>
              </div>
            </div>

            {/* Right column */}
            <div className="space-y-3 text-xs">
              <div className="flex">
                <span className="text-blue-600 mr-2">•</span>
                <span>
                  The Cloud Platform Enterprise Agreement (CPEA) is a flexible option that provides credit with lower
                  costs
                </span>
              </div>
              <div className="flex">
                <span className="text-blue-600 mr-2">•</span>
                <span>
                  These credits can be utilized to access any of the diverse services available on SAP Business
                  Technology Platform (SAP BTP)
                </span>
              </div>
              <div className="flex">
                <span className="text-blue-600 mr-2">•</span>
                <span>
                  CPEA provides flexibility in resource allocation and the capability to migrate across multiple
                  services during trial and live use phases of development
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* VSD Offering Section */}
        <div className="mb-12">
          <div className="grid grid-cols-2 gap-6 items-center">
            {/* Image Column */}
            <div className="flex items-center justify-center h-full">
              <img
                src="/placeholder.svg?height=250&width=350"
                alt="Two business people shaking hands"
                className="w-full max-w-md"
              />
            </div>

            {/* Services Column */}
            <div>
              <h2 className="text-xl font-bold mb-4">VSD Offering SAP BTP Solutions</h2>

              <ul className="space-y-3 text-sm">
                {[
                  "SAP BTP cloud application development",
                  "Migration of applications from on-premise to cloud in BTP",
                  "Cloud-based core architecture for analytics",
                  "Custom cloud platform for application development and integration",
                  "SAP Build Work Zone",
                  "SAP Launchpad low-code application development",
                  "SAP ABAP development",
                  "Multi-target JavaScript (MTA) application development",
                  "SAP HTML 5.0 based application development",
                  "A fully managed, in-memory database service on the cloud",
                  "Developing and managing IoT ML applications",
                  "24/7 support for all available services on SAP BTP for VSD",
                  "SAP Fiori and freestyle application development using SAP BTP as UI layer",
                  "UI/UX standardization and SignOff",
                ].map((text, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-yellow-400 flex items-center justify-center rounded">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>


        {/* Benefits Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-8">Benefits of using SAP BTP</h2>

          <div className="grid grid-cols-2 gap-8 items-center">
            {/* Benefits List */}
            <div className="space-y-4">
              {[
                "SAP BTP provides a unified development environment for multiple programming languages.",
                "It offers scaled applications to adapt to dynamic business needs.",
                "Access to SAP services and APIs like machine learning and IoT enhances application functionality.",
                "Reduced complexity accelerates development by focusing on solutions.",
                "Strong security measures ensure compliance and safeguard sensitive data.",
                "Quick collaboration across teams and seamless integration with other systems.",
                "It offers developer support and a robust community for knowledge sharing.",
                "Cost-efficient automation of build, testing, and deployment to other systems.",
                "Development tools provide valuable insights for application improvement."
              ].map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-6 h-6 flex items-center justify-center bg-blue-500 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm ml-4">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Image */}
            <div className="flex items-center justify-center">
              <img
                src="/placeholder.svg?height=250&width=350"
                alt="SAP BTP Services Illustration"
                className="w-full max-w-md"
              />
            </div>
          </div>
        </div>



        {/* Platform Benefits Section */}
        <div>
          <h2 className="text-lg font-bold text-center mb-8">
            SAP BTP provides clients with a unified, versatile, and secure platform with the help of
          </h2>

          <div className="space-y-4 text-xs">
            <div className="flex">
              <span className="text-blue-600 mr-2">•</span>
              <p>
                <span className="font-bold">Seamless Integration:</span> SAP BTP allows smooth integration between SAP
                applications, third-party systems, and data, ensuring an efficient workflow
              </p>
            </div>

            <div className="flex">
              <span className="text-blue-600 mr-2">•</span>
              <p>
                <span className="font-bold">Cloud-Based Scalability:</span> Its cloud infrastructure offers flexible
                scalability, enabling clients to adjust resources based on demand without significant capital
                investments
              </p>
            </div>

            <div className="flex">
              <span className="text-blue-600 mr-2">•</span>
              <p>
                <span className="font-bold">Faster Application Development:</span> With pre-built services, tools, and
                APIs, SAP BTP accelerates application development, reducing time to market for digital solutions
              </p>
            </div>

            <div className="flex">
              <span className="text-blue-600 mr-2">•</span>
              <p>
                <span className="font-bold">Robust Security Framework:</span> Built-in security features and SAP ensures
                robust protection for applications and data, addressing cyber security and compliance standards
              </p>
            </div>

            <div className="flex">
              <span className="text-blue-600 mr-2">•</span>
              <p>
                <span className="font-bold">Cost Optimization:</span> Pay-as-you-go model optimizes costs, allowing IT
                managers with end-to-end visibility
              </p>
            </div>

            <div className="flex">
              <span className="text-blue-600 mr-2">•</span>
              <p>
                <span className="font-bold">Multi-Cloud Strategy:</span> Using SAP BTP improves - cutting edge
                technologies like ML AI, and IoT offering innovation for clients
              </p>
            </div>

            <div className="flex">
              <span className="text-blue-600 mr-2">•</span>
              <p>
                <span className="font-bold">Analytics and Insights:</span> Robust analytics in BTP provide valuable
                insights, enhancing operations and identifying opportunities
              </p>
            </div>

            <div className="flex">
              <span className="text-blue-600 mr-2">•</span>
              <p>
                <span className="font-bold">Enhanced User Experience:</span> BTP offers tools for intuitive and engaging
                interfaces, improving user adoption and satisfaction
              </p>
            </div>

            <div className="flex">
              <span className="text-blue-600 mr-2">•</span>
              <p>
                <span className="font-bold">Flexibility and Adaptability:</span> SAP BTP's modular approach allows
                clients to adapt the platform to their needs, building solutions that meet their specific business
                processes and objectives
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SapBtpPage

