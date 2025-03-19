import { useState, useEffect } from 'react';
import illustration from '../Assets/sap consulting services.png';

const Main = () => {
  const [counts, setCounts] = useState({
    customers: 0,
    team: 0,
    vertical: 0,
    footprint: 0,
    consultants: 0,
    experience: 0
  });

  useEffect(() => {
    // Better counter animation with cleanup to prevent memory leaks
    const timers = [];
    
    const animateCounter = (key, max, duration) => {
      const delay = duration / max;
      
      for (let i = 0; i <= max; i++) {
        const timer = setTimeout(() => {
          setCounts(prevCounts => ({
            ...prevCounts,
            [key]: i
          }));
        }, i * delay);
        
        timers.push(timer);
      }
    };

    animateCounter('customers', 80, 1600);
    animateCounter('team', 90, 1800);
    animateCounter('vertical', 7, 1400);
    animateCounter('footprint', 15, 1500);
    animateCounter('consultants', 30, 1600);
    animateCounter('experience', 9, 1400);
    
    // Cleanup function to clear all timers
    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, []);

  const backgroundStyle = {
    backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1440 320\'%3E%3Cpath fill=\'%23f0f8ff\' fill-opacity=\'0.3\' d=\'M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z\'%3E%3C/path%3E%3C/svg%3E")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'bottom'
  };

  return (
    <div className="bg-white w-full">
      {/* Introduction Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-12">
          <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-4 lg:pr-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 sm:mb-6 break-words sm:break-normal">
              We are VSD Technologies
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-black mb-4 sm:mb-6 break-words sm:break-normal">
              Transforming Business Digitally With SAP Automation
            </h2>
            <p className="text-gray-700 font-semibold mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed">
              At VSD Technologies, SAP Automation makes your business digitally
              powerful. Our innovative solutions automate operations, boost productivity,
              and boost growth. With SAP's innovative technology, we help businesses
              optimize processes, gain actionable insights, and stay ahead in today's
              dynamic market. SAP Automation boosts efficiency, agility, and scalability,
              helping businesses thrive in the digital age. SAP Automation can transform
              your business for success.
            </p>
            <button className="bg-blue-400 hover:bg-white text-white hover:text-blue-600 border border-transparent hover:border-blue-600 font-medium py-2 sm:py-3 px-6 sm:px-8 rounded-full transition duration-300 shadow-md hover:shadow-lg w-full sm:w-auto">
              Schedule a Free Consultation
            </button>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={illustration}
              alt="VSD Technologies team collaborating"
              className="w-full h-auto max-w-xs sm:max-w-sm md:max-w-md object-contain"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 sm:py-12 md:py-16 relative" style={backgroundStyle}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-blue-500 font-medium text-base sm:text-lg mb-3 sm:mb-4">ABOUT VSD TECHNOLOGIES!</h3>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 sm:mb-6">Making SAP Easy for You</h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-4xl mx-auto px-2">
              We understand the challenges and assess the pace of Digital Transformation in Business process and analytics.
            </p>
          </div>

          {/* Stats Cards - First Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <StatCard label="Satisfied Customers" count={counts.customers} />
            <StatCard label="Team" count={counts.team} />
            <StatCard label="Vertical Served" count={counts.vertical} />
          </div>

          {/* Stats Cards - Second Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <StatCard label="Global Foot Print" count={counts.footprint} />
            <StatCard label="Certified Consultant" count={counts.consultants} />
            <StatCard label="Years Of Experience" count={counts.experience} />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-8 sm:h-12 bg-blue-50"></div>
      </section>
    </div>
  );
};

const StatCard = ({ label, count }) => (
  <div className="text-center bg-white bg-opacity-80 p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
    <div className="flex items-center justify-center">
      <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900">{count}</span>
      <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-500">+</span>
    </div>
    <p className="mt-2 text-base sm:text-lg font-medium">{label}</p>
  </div>
);

export default Main;