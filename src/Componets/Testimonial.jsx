import React, { useState, useEffect } from 'react';
import { Quote } from "lucide-react";

const TestimonialSection = () => {
  const testimonials = {
    international: [
      {
        content: "We are working with VSD Technologies for more than 3 years for SAP Support and worked on below projects successfully: 1. SAP Developments 2. ABAP developments 3. SAP migrations 4. SAP integrations 5. SAP BI/BW solutions 6. SAP FIORI developments, 7. SAP Spectra, others. Over 150+ ABAP transactions built. VSD has completed all the assignment to our complete satisfaction and recommend the co SAP Support and other IT projects.",
        author: "Jiro Furuya",
        date: "June 24,2020",
        position: "CEO-Freedom,inc"
      },
      {
        content: "With Our first monthly license completion after migration of SAP ECC, SAP users are more satisfied and happy the system so good. Good Job Team VSD Technologies, Thanks to the wonderful hard work to work together and complete with Timepass standard and deliver challenges and complete the project on time with great knowledge team. Thanks for your ownership and commitment and those minute appreciations from all over to respective team leads.",
        author: "Venkat Gandhi",
        date: "February 10,2020",
        position: "SafeTraceHub Co,Ltd"
      },
      {
        content:"VSD has done an excellent job delivering a standard upgrade to out S4 Hana system from 1709 to 1909 in our client demonstration environment (S4, ECC, APO, Solution Manager in AWS with a mix of Windows and unix operating systems). Whilst this was relatively standard, our environment is complex, and we have specific developments that required analysis and recommendations.VSD managed these and completed on time and in budget, and the delivery of this was to be commended.Subsequent to this work we are further engaging with VSD to upgrade our Solution Manager, and I will be using VSD moving forward for Basis related activities." ,
        author: "Peter Clancy", 
        date: "June 25, 2020",
        position: "Director - Olivehorse Consulting Services"
      },
      {
        content: "For more than 2,5 years Naspers/ Prosus is cooperating with VSD Technologies Pvt. Ltd. as local SAP Partner. They supported us in local/ country specific aspects of SAP System implementation for PayU India entities. During cooperation period they supported us in more specific projects like: system Carve-out and SAP SPS18 upgrade. VSD Technologies Pvt. Ltd. carried out the entrusted tasks diligently and in a timely manner. The works were carried out by experienced consultants of VSD who were characterized by high professionalism and a comprehensive approach to each task. Our cooperation proceeded efficiently and very productively, which is why we undoubtedly recommend VSD as a specialist in SAP ecosystem and as reliable and trustworthy business partner.",
        author: "Piotr Bialek",
        date: "July 1, 2020",
        position: "SafeTraceHub Co,Ltd"
      }
    ],
    domestic: [
      {
        content: "We've always set appreciate VSD team to successfully implement SAP S/4 hana migration using brownfield approach where other vendors left us to just hold on. VSD team to successfully implement the AFS module in the difficult time of COVID19 pandemic. Test management team made the implementation of the project very successful and thorough. Thanking VSD team to support the issue of IDOC documents from TCS team. Data migration would like to thank you for your leadership skills in successfully implementing the project. Looking forward to work with you in future & hope to have a long term association with VSD. Thanking You.",
        author: "Ganesh Naidu",
        date: "June 24,2020",
        position: "IT Head-Meghmani Dyes & Intermediates LLP"
      },
      {
        content: "We have selected VSD Technologies to implement SAP HANA module after proper verification and credentials. VSD team lead by Mr. Vijay with his team has worked with other private companies and now joined us for VDSL HANA module for ABAP implementation. Framework as well as software. We liked their approach, cooperation & documentation they also supported us in projects like Slim form Report generation, print formats, file layout format system migrations of data. We are also using this framework extensively web ERP for portals allocation which is supporting our business operations. AFS module integration was taken good care off, hours cannot be an employee or factory provider, making project implementations successfully. The approach & implementation part was the key point of VSD knowledge of domain, SAP, ABAP module. We have confidence in commitment VSD team on further Project going ahead in the pipeline. All the best to VSD team for all future projects.",
        author: "S.C Joshi",
        date: "June 2,2020",
        position: "VP (HR & Administration)- Erhardt + Lemier (India) Private Limited"
      },
      {
        content: "We know VSD Technologies Pvt. Ltd. for quite long time and working with your company for more than 3 years. Company worked on below SAP assignments: 1. EHP upgrades, kernel and Patch upgrades, 2. On Premise to cloud migration with OS DB migration, 3. ABAP Development work for all SAP Modules and GST implementation. 4. SAP FICO Bank Reconciliation, 5. Other SAP Support We are more than satisfied for the work done by VSD Team and look forward to work on more  projects",
        author: "Nikhil Shah",
        date: "June 25, 2020",
        position: "GM-SAP/IT - Omega Elevators."
      },
      {
        content: "We are associated with VSD technologies for more than 2.5 years for SAP consulting services. We have engaged on below projects: 1. GST implementation, 2. Interface with PayU Money and PayU Biz systems, 3. SAP annual maintenance supports, 4. Vendor portal interfaces, 5. Bank portal interfaces, 6. Coordination with global team in Poland for PayU india projects We are satisfied with SAP services from VSD and we recommend VSD for SAP consulting assignments.",
        author: "Maneesh Goel",
        date: "June 30, 2020",
        position: "CFO - PayU India"
      }
    ]
  };

  // State for tracking pagination
  const [intCurrentPage, setIntCurrentPage] = useState(0);
  const [domCurrentPage, setDomCurrentPage] = useState(0);

  // Number of testimonials per page
  const testimonialsPerPage = 2;

  // Calculate total pages
  const intTotalPages = Math.ceil(testimonials.international.length / testimonialsPerPage);
  const domTotalPages = Math.ceil(testimonials.domestic.length / testimonialsPerPage);

  // Function to navigate to a specific page
  const goToPage = (page, type) => {
    if (type === 'international') {
      setIntCurrentPage(page);
    } else {
      setDomCurrentPage(page);
    }
  };

  // Get current testimonials for display
  const intCurrentTestimonials = testimonials.international.slice(
    intCurrentPage * testimonialsPerPage,
    (intCurrentPage * testimonialsPerPage) + testimonialsPerPage
  );

  const domCurrentTestimonials = testimonials.domestic.slice(
    domCurrentPage * testimonialsPerPage,
    (domCurrentPage * testimonialsPerPage) + testimonialsPerPage
  );

  // Next page
  const nextPage = (type) => {
    if (type === 'international') {
      setIntCurrentPage((prev) => (prev < intTotalPages - 1 ? prev + 1 : 0));
    } else {
      setDomCurrentPage((prev) => (prev < domTotalPages - 1 ? prev + 1 : 0));
    }
  };

  // Previous page
  const prevPage = (type) => {
    if (type === 'international') {
      setIntCurrentPage((prev) => (prev > 0 ? prev - 1 : intTotalPages - 1));
    } else {
      setDomCurrentPage((prev) => (prev > 0 ? prev - 1 : domTotalPages - 1));
    }
  };

  // Swipe handling
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = (type) => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextPage(type);
    }
    if (isRightSwipe) {
      prevPage(type);
    }
  };

  // Auto slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextPage('international');
      nextPage('domestic');
    }, 8000);

    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Testimonial Card Component
  const TestimonialCard = ({ testimonial }) => (
    <div className="w-full bg-white p-6 shadow-lg rounded-xl relative border border-gray-200 h-full">
      {/* Quote Icon */}
      <div className="absolute top-4 left-4 text-gray-300">
        <Quote size={32} />
      </div>

      {/* Testimonial Content - No scroll */}
      <div className="text-gray-700 text-lg leading-relaxed mt-8">
        <p>{testimonial.content}</p>
      </div>

      {/* Testimonial Date */}
      <div className="text-gray-500 text-sm mt-4">
        <p>{testimonial.date}</p>
      </div>

      {/* Profile Section */}
      <div className="flex items-center mt-6 border-t pt-4">
        <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
          <span className="text-gray-600 text-2xl">&#128100;</span>
        </div>
        <div className="ml-4">
          <h4 className="text-gray-900 font-semibold">{testimonial.author}</h4>
          <p className="text-gray-600 text-sm">{testimonial.position}</p>
        </div>
      </div>
    </div>
  );

  // Animation classes for slider
  const slideAnimation = "transition-all duration-500 ease-in-out";

  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-2">What our Clients say about our Company</h1>

        {/* International Testimonials */}
        <div className="mb-12">
          <p className="text-center text-gray-600 uppercase tracking-wider text-sm mb-8">Clients Testimonial - International</p>

          {/* Slider container with touch events */}
          <div
            className="relative overflow-hidden"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={() => onTouchEnd('international')}
          >
            {/* Grid for testimonials with animation */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-1">
              {intCurrentTestimonials.map((testimonial, index) => (
                <div key={`int-${intCurrentPage}-${index}`} className={`${slideAnimation}`}>
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>

          {/* Dot navigation */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: intTotalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToPage(index, 'international')}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${intCurrentPage === index
                    ? 'bg-blue-500 scale-110'
                    : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                aria-label={`Go to page ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>

        {/* Dot separator */}
        <div className="flex justify-center mb-8">
          <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
        </div>

        {/* Domestic Testimonials */}
        <div>
          <p className="text-center text-gray-600 uppercase tracking-wider text-sm mb-8">Clients Testimonial - Domestic</p>

          {/* Slider container with touch events */}
          <div
            className="relative overflow-hidden"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={() => onTouchEnd('domestic')}
          >
            {/* Grid for testimonials with animation */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-1">
              {domCurrentTestimonials.map((testimonial, index) => (
                <div key={`dom-${domCurrentPage}-${index}`} className={`${slideAnimation}`}>
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>

          {/* Dot navigation */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: domTotalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToPage(index, 'domestic')}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${domCurrentPage === index
                    ? 'bg-blue-500 scale-110'
                    : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                aria-label={`Go to page ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>

        {/* Dot separator */}
        <div className="flex justify-center mt-8">
          <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;