import React from 'react';
import CareerImg from "../Assets/career.png";

const Career = () => {
  // Job Card Component
  const JobCard = ({ title, location, postedDate, validUntil, description }) => {
    return (
      <div className=" rounded-lg p-6 flex flex-col">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-blue-500 mb-1">{location}</p>
        <p className="text-blue-500 text-sm mb-4">
          Job Posted: {postedDate} | Valid Until: {validUntil}
        </p>
        <div className='border  border-gray-100 my-4'></div>
        <p className="text-gray-700 mb-6 flex-grow">{description}</p>
        <button className="bg-blue-400 hover:bg-blue-500 text-white py-2 px-4 rounded w-full">
          Apply
        </button>
      </div>
    );
  };

  // Job listings data
  const jobListings = [
    {
      id: 1,
      title: "SAP SD Consultant",
      location: "Ahmedabad, India",
      postedDate: "July 15, 2023",
      validUntil: "August 15, 2023",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
    },
    {
      id: 2,
      title: "SAP ABAP Consultant",
      location: "Ahmedabad, India",
      postedDate: "July 15, 2023",
      validUntil: "August 15, 2023",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
    },
    {
      id: 3,
      title: "SAP MM Consultant",
      location: "Madrid, Spain",
      postedDate: "July 15, 2023",
      validUntil: "August 15, 2023",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
    },
    {
      id: 4,
      title: "SAP PP Consultant",
      location: "Jakarta, Indonesia",
      postedDate: "July 15, 2023",
      validUntil: "August 15, 2023",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
    },
    {
      id: 5,
      title: "SAP PM Consultant",
      location: "Madrid, Spain",
      postedDate: "July 15, 2023",
      validUntil: "August 15, 2023",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
    },
    {
      id: 6,
      title: "SAP HCM Consultant",
      location: "Jakarta, Indonesia",
      postedDate: "July 15, 2023",
      validUntil: "August 15, 2023",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
    },
    {
      id: 7,
      title: "SAP FICO Consultant",
      location: "Madrid, Spain",
      postedDate: "July 15, 2023",
      validUntil: "August 15, 2023",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
    },
    {
      id: 8,
      title: "SAP Basis Consultant",
      location: "Jakarta, Indonesia",
      postedDate: "July 15, 2023",
      validUntil: "August 15, 2023",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
    },
    {
      id: 9,
      title: "SAP Fiori/Ui5 Consultant",
      location: "Madrid, Spain",
      postedDate: "July 15, 2023",
      validUntil: "August 15, 2023",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
    },
    {
      id: 10,
      title: "SAP BTP Consultant",
      location: "Jakarta, Indonesia",
      postedDate: "July 15, 2023",
      validUntil: "August 15, 2023",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
    },
    {
      id: 11,
      title: "SAP Basis Consultant",
      location: "Madrid, Spain",
      postedDate: "July 15, 2023",
      validUntil: "August 15, 2023",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
    },
    {
      id: 12,
      title: "SAP Fiori/Ui5 Consultant",
      location: "Jakarta, Indonesia",
      postedDate: "July 15, 2023",
      validUntil: "August 15, 2023",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
    }
  ];

  return (
    <>
      <div className="min-h-screen bg-white text-black font-sans">
        {/* Hero Section with Background */}
        <div className="w-full h-56 flex flex-col items-center justify-center relative overflow-hidden bg-custom text-center px-4">
          <div className="absolute inset-0 opacity-70"></div>
          <h1 className="text-5xl font-bold text-white z-10">We are hiring!</h1>
          <h2 className="text-xl font-bold text-white z-10 uppercase mt-3">
            An enthusiastic newcomer? A seasoned professional? Someone in the middle?
          </h2>

          <p className="text-white z-10 max-w-7xl mt-2 text-left">
            We'd love to meet you regardless of where your career path is taking you. If you're good at what you do and enjoy doing it, we'd love to meet you. Our personnel at VSD Technologies are among the best in their industries. If you have a talent, VSD Technologies is a platform that will allow you to hone your talent and apply it to initiatives that are both valuable to the business and enjoyable to you. Bring your ideas, innovation, and passion to make a difference, and we'll address some of the world's most difficult problems.
          </p>
        </div>

        {/* Main content section */}
        <div className="container mx-auto py-16 px-4 md:px-6">
          {/* Original content from the first component */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Text content - left side */}
            <div className="w-full md:w-1/2 flex flex-col gap-4">
              <h3 className='text-blue-600 uppercase text-2xl tracking-wider'>all benefits</h3>
              <h2 className="text-4xl font-bold text-gray-900">Why VSD Technologies?</h2>

              <p className="text-gray-500 mt-4 font-medium">
                Imagine searching for a job for one last time. Imagine giving an interview for a job position for one last time in your life. That's because when you associate with VSD Technologies, you have associated with us for a period of a Lifetime with a job that's forever there for you.
              </p>

              <p className="text-gray-500 mt-4 font-medium">
                At VSD Technologies, we recognize that our biggest power source is our people. We put in endless hours to stay on top of the industry's latest trends, shifts, tips, and tactics, all for the sake of making your career and job flow easier and more successful. Your contribution is never overlooked at VSD Technologies. Your contribution will always be recognized and rewarded. The work environment at VSD Technologies will inspire efficiency and effectiveness in you, allowing you to thrive as a professional and as a person.
              </p>

              <p className="text-gray-500 mt-4 font-medium">
                So, why should you join VSD Technologies? Because when you join us, you receive everything you've ever wanted from your dream job: endless opportunities for advancement, constant innovation, a learning-oriented environment, and equality.
              </p>

            </div>

            {/* Image - right side */}
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={CareerImg}
                alt="Team collaborating on digital transformation"
                className="max-w-full h-auto"
              />
            </div>
          </div>

          <div className="max-w-7xl mx-auto p-4">
            {/* Hero Banner */}
            <div className="bg-blue-600 text-white p-12 rounded-lg text-center my-8 ">
              <h1 className="text-4xl font-bold mb-2">Embrace your future.</h1>
              <h2 className="text-5xl font-semibold tracking-normal">Join our winning team today!</h2>
            </div>

            {/* Career Section Header */}
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-2">Career opportunities</h2>
              <p className="text-blue-400 uppercase tracking-widest font-medium text-3xl my-4">OPEN ROLES</p>
            </div>

            {/* Job Listings */}
            <div className="grid md:grid-cols-2 gap-8 mt-12  font-medium">
              {jobListings.map(job => (
                <JobCard
                  key={job.id}
                  title={job.title}
                  location={job.location}
                  postedDate={job.postedDate}
                  validUntil={job.validUntil}
                  description={job.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Career;