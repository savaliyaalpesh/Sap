import React from 'react';
import CareerImg from "../Assets/career.png";
import Form from "./Form"

const Career = () => {
  // Job Card Component
  const JobCard = ({ title, location, postedDate, validUntil, description }) => {
    return (
      <div className="rounded-lg p-3 xs:p-4 sm:p-6 flex flex-col shadow-sm border border-gray-100">
        <h3 className="text-base xs:text-lg sm:text-xl font-bold mb-2">{title}</h3>
        <p className="text-blue-500 mb-1 text-sm xs:text-base">{location}</p>
        <p className="text-blue-500 text-xs sm:text-sm mb-3 xs:mb-4">
          Job Posted: {postedDate} | Valid Until: {validUntil}
        </p>
        <div className='border border-gray-100 my-3 xs:my-4'></div>
        <p className="text-gray-700 mb-4 xs:mb-6 flex-grow text-xs xs:text-sm sm:text-base">{description}</p>
        <button className="bg-blue-400 hover:bg-blue-500 text-white py-1 xs:py-2 px-3 xs:px-4 rounded w-full text-sm xs:text-base">
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
    <div>
      {/* Hero Section with Background */}
      <div className="w-full max-w-full h-72 xs:h-64 md:h-72 flex flex-col items-center justify-center relative bg-custom text-center px-2 sm:px-4 py-8 md:py-0">
        {/* <div className="absolute inset-0 opacity-70"></div> */}
        <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-white z-10 mt-4">We are hiring!</h1>
        <h2 className="text-base xs:text-lg sm:text-xl font-bold text-white z-10 uppercase mt-2 sm:mt-3 tracking-wider md:tracking-widest">
          An enthusiastic newcomer? A seasoned professional? Someone in the middle?
        </h2>

        <p className="text-white z-10 w-full max-w-7xl mt-2 text-center text-xs xs:text-sm sm:text-base px-2 font-semibold">
          We'd love to meet you regardless of where your career path is taking you. If you're good at what you do and enjoy doing it, we'd love to meet you. Our personnel at VSD Technologies are among the best in their industries. If you have a talent, VSD Technologies is a platform that will allow you to hone your talent and apply it to initiatives that are both valuable to the business and enjoyable to you. Bring your ideas, innovation, and passion to make a difference, and we'll address some of the world's most difficult problems.
        </p>
      </div>

      {/* Main content section */}
      <div className="container mx-auto py-6 xs:py-8 sm:py-12 md:py-16 px-3 xs:px-4 md:px-6 lg:px-8">
        {/* Original content from the first component */}
        <div className="flex flex-col lg:flex-row items-center gap-4 xs:gap-6 md:gap-8">
          {/* Text content - left side */}
          <div className="w-full lg:w-1/2 flex flex-col gap-2 xs:gap-3 md:gap-4">
            <h3 className='text-blue-600 uppercase text-lg xs:text-xl sm:text-2xl tracking-wider'>all benefits</h3>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-gray-900">Why VSD Technologies?</h2>

            <p className="text-gray-500 mt-2 sm:mt-4 text-xs xs:text-sm sm:text-base font-medium">
              Imagine searching for a job for one last time. Imagine giving an interview for a job position for one last time in your life. That's because when you associate with VSD Technologies, you have associated with us for a period of a Lifetime with a job that's forever there for you.
            </p>

            <p className="text-gray-500 mt-2 sm:mt-4 text-xs xs:text-sm sm:text-base font-medium">
              At VSD Technologies, we recognize that our biggest power source is our people. We put in endless hours to stay on top of the industry's latest trends, shifts, tips, and tactics, all for the sake of making your career and job flow easier and more successful. Your contribution is never overlooked at VSD Technologies. Your contribution will always be recognized and rewarded. The work environment at VSD Technologies will inspire efficiency and effectiveness in you, allowing you to thrive as a professional and as a person.
            </p>

            <p className="text-gray-500 mt-2 sm:mt-4 text-xs xs:text-sm sm:text-base font-medium">
              So, why should you join VSD Technologies? Because when you join us, you receive everything you've ever wanted from your dream job: endless opportunities for advancement, constant innovation, a learning-oriented environment, and equality.
            </p>
          </div>

          {/* Image - right side */}
          <div className="w-full lg:w-1/2 flex justify-center mt-4 xs:mt-6 lg:mt-0">
            <img
              src={CareerImg}
              alt="Team collaborating on digital transformation"
              className="max-w-full h-auto"
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto p-1 xs:p-2 sm:p-4">
          {/* Hero Banner */}
          <div className="bg-blue-600 text-white p-4 xs:p-6 sm:p-8 md:p-12 rounded-lg text-center my-4 xs:my-6 sm:my-8">
            <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold mb-0 xs:mb-1 sm:mb-2">Embrace your future.</h1>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-semibold tracking-normal">Join our winning team today!</h2>
          </div>

          {/* Career Section Header */}
          <div className="text-center mb-4 xs:mb-6 sm:mb-8">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">Career opportunities</h2>
            <p className="text-blue-400 uppercase tracking-widest font-medium text-lg xs:text-xl sm:text-2xl md:text-3xl my-2 xs:my-3 sm:my-4">OPEN ROLES</p>
          </div>

          {/* Job Listings */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 xs:gap-4 sm:gap-6 md:gap-8 mt-6 xs:mt-8 md:mt-12 font-medium">
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

      {/* Form Title */}
      <div className="text-center  md:mb-8">
        <p className="text-blue-400 text-xl sm:text-2xl md:text-3xl mb-2 tracking-widest">Submit a Resume</p>
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 px-2">
          Your Ideas, Your Innovation & Your Execution Matter to Us. Bring them On
        </h1>
      </div>

      <Form/>
    </div>
  );
};

export default Career;