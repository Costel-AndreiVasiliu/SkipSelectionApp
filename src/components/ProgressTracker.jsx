import React from 'react';

export default function ProgressTracker() {
  const steps = [
    { label: 'Postcode', status: 'completed', number: 1 },
    { label: 'Waste Type', status: 'completed', number: 2 },
    { label: 'Select Skip', status: 'current', number: 3 },
    { label: 'Permit Check', status: 'upcoming', number: 4 },
    { label: 'Choose Date', status: 'upcoming', number: 5 },
    { label: 'Payment', status: 'upcoming', number: 6 }
  ];

  // Mobile version
  const MobileProgressTracker = () => {
    const firstColumn = steps.slice(0, 3);
    const secondColumn = steps.slice(3, 6);
    
    return (
      <div className="grid grid-cols-2 gap-4 md:hidden">
        {/* First Column - Steps 1,2,3 */}
        <div className="flex flex-col space-y-4">
          {firstColumn.map((step) => (
            <div key={step.number} className="flex items-center py-2">
              <div 
                className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold ${
                  step.status === 'upcoming' 
                    ? 'bg-gray-700 text-gray-400' 
                    : 'bg-yellow-500 text-black'
                }`}
              >
                {step.number}
              </div>
              <span className={`ml-3 ${
                step.status === 'upcoming' 
                  ? 'text-gray-400' 
                  : 'text-white font-medium'
              }`}>
                {step.label}
              </span>
            </div>
          ))}
        </div>
        
        {/* Second Column - Steps 4,5,6 */}
        <div className="flex flex-col space-y-4">
          {secondColumn.map((step) => (
            <div key={step.number} className="flex items-center py-2">
              <div 
                className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold ${
                  step.status === 'upcoming' 
                    ? 'bg-gray-700 text-gray-400' 
                    : 'bg-yellow-500 text-black'
                }`}
              >
                {step.number}
              </div>
              <span className={`ml-3 ${
                step.status === 'upcoming' 
                  ? 'text-gray-400' 
                  : 'text-white font-medium'
              }`}>
                {step.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Desktop version
  const DesktopProgressTracker = () => (
    <div className="hidden md:flex items-center justify-between">
      {steps.map((step, index) => (
        <React.Fragment key={step.number}>
          <div className="flex items-center">
            <div 
              className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold ${
                step.status === 'upcoming' 
                  ? 'bg-gray-700 text-gray-400' 
                  : 'bg-yellow-500 text-black'
              }`}
            >
              {step.number}
            </div>
            <span className={`ml-3 ${
              step.status === 'upcoming' 
                ? 'text-gray-400' 
                : 'text-white font-medium'
            }`}>
              {step.label}
            </span>
          </div>
          
          {index < steps.length - 1 && (
            <div 
              className={`h-px w-16 lg:w-24 ${
                steps[index + 1].status === 'upcoming' ? 'bg-gray-600' : 'bg-yellow-500'
              }`}
            ></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <div className="bg-gray-900 p-4">
      <div className="container mx-auto">
        <MobileProgressTracker />
        <DesktopProgressTracker />
      </div>
    </div>
  );
}