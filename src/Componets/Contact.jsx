import React from 'react';
import Form from "./Form"
const ContactPage = () => {
  // The actual coordinates from the provided Google Maps link
  // const latitude = 23.049736;
  // const longitude = 72.511726;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Banner */}
      <div className="relative h-48 bg-custom flex items-center justify-center">
        <h1 className="text-5xl font-bold text-white z-10">Contact</h1>
      </div>

      {/* Main Content */}
      <div className="container mx-auto py-12 px-4 md:px-0">
        <div className="flex flex-col lg:flex-row">
          {/* Left Column - Contact Information */}
          <div className="w-full lg:w-1/2 lg:pr-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Digital Transformers for Your Business are Right Here.
            </h2>
            <p className="text-gray-600 mb-8">
              Get your Business Fully Digitalized With Customized SAP Solutions and Scale Your Business to
              New Heights with the help of Data and Analytics. Contact us now to embark on your digital
              transformation journey.
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-blue-500 mb-4">INDIA</h3>

              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-md flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-700">
                    TIMES CORPORATE PARK Opp. Copper Stone,
                    Near Dev Vihar, 2, Thaltej - Shilaj Rd, Thaltej,
                    Ahmedabad, Gujarat 380059
                  </p>
                </div>
              </div>

              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-md flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div>
                  <a href="mailto:info@vsdtechno.com" className="text-blue-500 hover:underline">
                    info@vsdtechno.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-md flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-700">+91 94276 30630 (Sales)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Map */}
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
            <div className="bg-gray-100 p-2 rounded-md shadow-md">
              <div className="relative pb-2">
                <div className="bg-white p-2 mb-2 text-sm">
                  <div className="mb-1">
                    <strong>VSD Technologies Pvt. Ltd.</strong>
                  </div>
                  <div className="text-xs text-gray-600">
                    TIMES CORPORATE PARK Opp. Copper Stone,
                    Near Dev Vihar, 2, Thaltej - Shilaj Rd, Thaltej,
                    Ahmedabad, Gujarat 380059
                  </div>
                  <div className="flex items-center mt-1">
                    <div className="flex text-yellow-500 text-xs">
                      <span>4.7</span>
                      <div className="flex ml-1">★★★★★</div>
                    </div>
                    <span className="text-xs text-gray-600 ml-1">108 reviews</span>
                  </div>
                  <div className="flex justify-between items-center mt-1">
                    <a
                      href="https://maps.app.goo.gl/sRUXwDGbLDvygHKW9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline text-xs"
                    >
                      View larger map
                    </a>
                    <a
                      href="https://maps.app.goo.gl/sRUXwDGbLDvygHKW9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline text-xs flex items-center"
                    >
                    </a>
                  </div>
                </div>
                <div className="h-64 bg-gray-200 rounded-md relative overflow-hidden">
                  <iframe
                    src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.0918160544824!2d72.4917071150318!3d23.05135418493747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9bd110a006b7%3A0x8c213bd2db920eee!2sTIMES%20CORPORATE%20PARK!5e0!3m2!1sen!2sin!4v1649232622603!5m2!1sen!2sin`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="VSD Technologies location map"
                    className="rounded-md"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Form Title */}
      <div className="text-center  md:mb-8">
        <p className="text-blue-400 text-xl sm:text-2xl md:text-3xl mb-2 tracking-widest">Get in touch with</p>
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 px-2">
          India’s Leading SAP Digital Transformation and Consulting Partner
        </h1>
      </div>
      <Form />
    </div>
  );
};

export default ContactPage;