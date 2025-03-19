import { CheckIcon, ArrowRightIcon } from "lucide-react"

const SAPExpertiseSection = () => {
  // Define service cards data structure
  const serviceCards = [
    {
      title: "SAP Implementation and SAP Rollout",
      icon: "M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18",
      items: ["Greenfield Implementation", "Brownfield Implementation", "Company Rollout", "Plant Rollout"],
    },
    {
      title: "SAP Technical Services",
      icon: "M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z",
      items: ["SAP ABAP", "SAP BASIS", "SAP BI/BO", "SAP PI/PO/CPI", "BODS"],
    },
    {
      title: "SAP Migration",
      icon: "M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 0 1-.657.643 48.39 48.39 0 0 1-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 0 1-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 0 0-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 0 1-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 0 0 .657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 0 0 5.427-.63 48.05 48.05 0 0 0 .582-4.717.532.532 0 0 0-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 0 0 .658-.663 48.422 48.422 0 0 0-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 0 1-.61-.58v0Z",
      items: ["ECC to S/4 HANA (Rise with SAP)", "On Premise to Cloud", "OS/OB Migration"],
    },
    {
      title: "SAP AMS /AMO",
      icon: "M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z",
      items: [
        "Technical Support",
        "Functional Support",
        "SAP Application Support",
        "Security Services",
        "Optimization & Enhancement Services",
        "SAP Basis Administration Services",
        "Add-On Services",
      ],
    },
    {
      title: "Our SAP Solutions​",
      icon: "M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18",
      items: [
        "GST Solutions",
        "E-Way Bill Solutions",
        "E- Invoicing Solutions",
        "194Q/R Solutions",
        "TCS Solutions",
        "Weightbridge Integration",
      ],
    },
  ]

  // Card component for reusability
  const ServiceCard = ({ title, icon, items, isLastRow }) => (
    <div className={`bg-white rounded-lg p-4 sm:p-6 relative shadow-sm h-full ${isLastRow ? "mt-16 sm:mt-10" : ""}`}>
      {/* The icon container - improved for all screen sizes */}
      <div className="absolute -top-10 left-0 right-0 flex justify-center">
        <div className="bg-blue-100 rounded-b-full w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 sm:w-10 sm:h-10 text-blue-800"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
          </svg>
        </div>
      </div>
      <div className="pt-12 sm:pt-14">
        <h2 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-center sm:text-left">{title}</h2>
        <ul className="space-y-2 sm:space-y-3">
          {items.map((item, index) => (
            <li key={index} className="flex items-start">
              <div className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0 relative">
                <div className="absolute inset-0 border-2 border-blue-500 bg-blue-500 flex items-center justify-center">
                  <CheckIcon className="text-white w-3.5 h-3.5" />
                </div>
              </div>
              <span className="text-sm sm:text-base">{item}</span>
            </li>
          ))}
          <div className="mt-6 sm:mt-8 text-blue-500 font-medium flex items-center justify-center sm:justify-start">
            <span>Know More</span>
            <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
          </div>
        </ul>
      </div>
    </div>
  )

  return (
    <div className="bg-gray-100 py-8 px-4 sm:p-6 md:p-12 w-full">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10 sm:mb-16">
          <h3 className="text-blue-400 font-medium mb-2 sm:mb-3 tracking-widest text-xl sm:text-2xl">OUR EXPERTISE</h3>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 px-2">
            SAP Implementation and Technical Consultation
            <br className="hidden md:block" />
            Services for Modernization of Your Business
          </h1>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 sm:gap-8">
          {serviceCards.map((card, index) => {
            // Check if this card is in the last row (for a 3-column grid, cards at positions 3 and 4 in a 0-indexed array)
            const isLastRow =
              (index >= 3 && index <= 4) ||
              // For 2-column layout (sm breakpoint)
              (index % 2 === 1 && index >= 3) ||
              // For 1-column layout (xs breakpoint)
              index >= 3
            return <ServiceCard key={index} {...card} isLastRow={isLastRow} />
          })}
        </div>
      </div>
    </div>
  )
}

const SAPSolutions = () => {
  const solutions = [
    {
      title: "Rise With SAP",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="w-6 h-6 sm:w-8 sm:h-8"
        >
          <rect x="5" y="8" width="14" height="10" rx="1" />
          <line x1="8" y1="8" x2="8" y2="6" />
          <line x1="16" y1="8" x2="16" y2="6" />
          <line x1="12" y1="14" x2="12" y2="14" />
        </svg>
      ),
    },
    {
      title: "SAP S/4 HANA",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="w-6 h-6 sm:w-8 sm:h-8"
        >
          <rect x="4" y="4" width="16" height="16" rx="1" />
          <line x1="4" y1="10" x2="20" y2="10" />
          <line x1="10" y1="4" x2="10" y2="20" />
        </svg>
      ),
    },
    {
      title: "SAP BTP",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="w-6 h-6 sm:w-8 sm:h-8"
        >
          <rect x="5" y="8" width="14" height="10" rx="1" />
          <path d="M7 15h10" />
          <path d="M7 12h10" />
          <path d="M7 9h2" />
        </svg>
      ),
    },
    {
      title: "SAP Success Factors",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="w-6 h-6 sm:w-8 sm:h-8"
        >
          <circle cx="12" cy="12" r="5" />
          <path d="M17 12a5 5 0 0 0-5-5" />
          <path d="M19 12a7 7 0 0 0-7-7" />
          <path d="M5 12a7 7 0 0 1 7-7" />
        </svg>
      ),
    },
  ]

  return (
    <div className="bg-stone-100 py-8 px-4 sm:p-8 md:p-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h3 className="text-blue-400 font-medium mb-2 sm:mb-4 tracking-widest text-xl sm:text-2xl">
            OUR SAP SOLUTIONS
          </h3>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Business Ready SAP Solutions
          </h2>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-10">
          {solutions.map((solution, index) => (
            <div key={index} className="flex flex-col items-center w-40 sm:w-56">
              <div className="relative mb-2">
                {/* Cloud shape */}
                <div className="w-24 h-20 sm:w-32 sm:h-28 relative">
                  <svg viewBox="0 0 160 140" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <path
                      d="M30,100 Q10,100 10,75 Q10,40 40,40 Q45,15 80,15 Q120,15 125,50 Q155,50 155,85 Q155,105 130,105 Q125,120 105,120 Q85,120 80,105 Q50,110 30,100"
                      fill="none"
                      stroke="#5EADEF"
                      strokeWidth="2"
                    />
                  </svg>

                  {/* Icon inside cloud */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-blue-800">{solution.icon}</div>
                  </div>
                </div>

                {/* Vertical line */}
                <div className="h-4 sm:h-6 w-0.5 bg-blue-400 mx-auto mb-1"></div>

                {/* Dot */}
                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-blue-400 mx-auto"></div>
              </div>

              <div className="text-center mt-2">
                <h3 className="font-medium text-sm sm:text-base text-gray-800">{solution.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const SAPExpertiseAndSolutions = () => {
  return (
    <div>
      <SAPExpertiseSection />
      <SAPSolutions />
    </div>
  )
}

export default SAPExpertiseAndSolutions

