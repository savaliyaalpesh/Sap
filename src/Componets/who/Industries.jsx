import React from 'react';
import Consulting from '../../Assets/sap consulting services.png';
import Form from "../Form"

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
      title: "Manufacturing",
      description: "In the manufacturing industry, our SAP solution makes operations much more efficient and ensures that products move smoothly from factories and the supply chain to the place of sale. Besides having records, all transactions are made easy, which is very good for businesses."
    },
    {
      icon: "🚗",
      title: "Automotive",
      description: "The auto business has a lot of competition, and you need something special to stand out. That is possible if you use SAP tools correctly. Along with keeping to budgets and client promises, SAP helps businesses improve their working processes. Many tasks are made more accessible and faster, greatly benefiting the company."
    },
    {
      icon: "🔄",
      title: "Telecom",
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
    <div className="min-h-screen flex flex-col font-sans text-gray-900">
      <div className="w-full h-48 flex items-center justify-center relative overflow-hidden bg-custom">
        <div className="absolute inset-0 opacity-70"></div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white z-10 tracking-wide">Industries</h1>
      </div>

      <div className="container mx-auto py-16 px-4 md:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">Get ahead with SAP</h2>
            <h3 className="text-lg md:text-xl font-medium mt-2">The Plan for How You Will Become More Digital</h3>
            <p className="text-gray-700 font-medium text-sm md:text-base leading-relaxed">
              At VSD Technologies, our SAP Automation services carefully plan how you will become digital. First, look at how things are done now, and then use custom software solutions to make things faster and more accurate. Our tools work well with current systems and cause as little trouble as possible. As you automate more areas, VSD Technologies ensures that things keep improving. This creates a dynamic, flexible digital environment that speeds up growth and encourages new ideas.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={Consulting}
              alt="Team collaborating on digital transformation"
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Our Domain Expertise</h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            We offer excellent SAP services because we are experts, responsible, committed to quality, and successful.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {domains.map((domain, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex flex-col items-center text-center">
              <div className="flex items-center justify-center  md:text-3xl mb-4 bg-gray-200 p-4 rounded-full w-20 h-20">
                {domain.icon}
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 tracking-wide text-blue-600">
                {domain.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed text-left">
                {domain.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Form Title */}
      <div className="text-center  md:mb-8">
        <p className="text-blue-400 text-xl sm:text-2xl md:text-3xl mb-2 tracking-widest">Get in touch with</p>
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 px-2">
          India's Leading SAP Digital Transformation and Consulting Partner
        </h1>
      </div>
      <Form/>
    </div>
  );
};

export default Industries;
