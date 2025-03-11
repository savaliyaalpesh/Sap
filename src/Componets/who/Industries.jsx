import React from 'react';
import Consulting from '../../Assets/sap consulting services.png'

const Industries = () => {

  const domains = [
    {
      icon: "⚡",
      title: "Energy, Gas & Utility",
      description: "It is one of the most complex businesses, and we understand that. Our SAP implementations for SAP products are the best; our experts can draw a lot from energy value-add balancing safety and sustainability with investment costs. We can help you with whatever you need. With our Energy & Utilities Digital Platform you can boost your supply chain and get a better vision of your business."
    },
    {
      icon: "💊",
      title: "Pharmaceuticals",
      description: "With the help of the newest technologies, our experts can make medical services better for their patients. Our medical SAP Healthcare solutions are innovative and cutting-edge, and dedicated to every aspect of the medical world for you."
    },
    {
      icon: "🏭",
      description: "In the manufacturing industries, we take systems and build them into a complete process that products move smoothly from factories and the supply chain to the point of sale. This helps manufacturing businesses create wins, which is very good for businesses."
    },
    {
      icon: "🏭",
      title: "Manufacturing",
      description: "In the manufacturing industry, our SAP solution makes operations much more efficient and ensures that products move smoothly from factories and the supply chain to the place of sale. Besides having records, all transactions are made easy, which is very good for businesses."
    },
    {
      icon: "🔄",
      title: "Telecommunications",
      description: "In the telecommunications business, our SAP application expertise delivers relevant business applications that improve operations, security, and make billing systems work better. We help telecoms companies enhance service and quality, while also creating unique products that can easily integrate new technologies for attracting customers."
    },
    {
      icon: "💻",
      title: "IT & Services",
      description: "Our SAP applications manage Tech IT and development services product projects, meet project goals, and deliver needed industry-specific results. This makes it possible to automate complicated processes, improve the way people work together, and make the business work more smoothly. This helps cost controls grow and simplifies a complicated environment."
    },
    {
      icon: "🏙️",
      title: "Construction",
      description: "Real estate management is much better with our SAP systems, and the business is much better organized. Tools improve every process, from building to selling, so you get the best results."
    }
  ];


  return (
    <div className="min-h-screen flex flex-col">
      {/* Header with background image */}
      <div
        className="w-full h-48  flex items-center justify-center relative overflow-hidden bg-custom"
      >
        <div className="absolute inset-0 opacity-70"></div>
        <h1 className="text-5xl font-bold text-white z-10">Industries</h1>
      </div>

      {/* Main content section */}
      <div className="container mx-auto py-16 px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Text content - left side */}
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            <h2 className="text-4xl font-bold text-gray-900">Get ahead with SAP</h2>
            <h3 className="text-xl font-medium text-gray-800 mt-2">The Plan for How You Will Become More Digital</h3>

            <p className="text-gray-700 mt-4">
              At VSD Technologies, our SAP Automation services carefully plan how you will become digital. First, look at how things are done now, and then use custom software solutions to make things faster and more accurate. Our tools work well with current systems and cause as little trouble as possible. As you automate more areas, VSD Technologies ensures that things keep improving. This creates a dynamic, flexible digital environment that speeds up growth and encourages new ideas.
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
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">Our Domain Expertise</h2>
          <p className="text-gray-600 text-sm">
            We offer excellent SAP services because we are experts, responsible, committed to quality, and successful.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {domains.map((domain, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center">
              <div className="text-4xl mb-4 bg-blue-50 p-4 rounded-full">
                {domain.icon}
              </div>

              <h3 className="text-lg font-semibold text-center mb-2">
                {domain.title || "Manufacturing"}
              </h3>

              <p className="text-gray-600 text-sm text-center">
                {domain.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Industries;