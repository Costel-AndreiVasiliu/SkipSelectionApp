import { useState } from 'react';
import ProgressTracker from '../components/ProgressTracker';
import SkipCard from '../components/SkipCard';
import Loader from '../components/Loader';
import useSkips from '../hooks/useSkips';

export default function SkipSelectionPage() {
  const [selectedSkipId, setSelectedSkipId] = useState(null);
  const { skips, loading, error } = useSkips();

  const handleSkipSelect = (skipId) => {
    setSelectedSkipId(skipId);
  };

  const handleContinue = () => {
    if (selectedSkipId) {
      // In a real application, you would navigate to the next page or process the selection
      alert(`Proceeding with Skip ID: ${selectedSkipId}`);
    } else {
      alert("Please select a skip size first");
    }
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="bg-red-100 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-red-800 mb-2">Error</h2>
          <p className="text-red-600">{error}</p>
          <button 
            className="mt-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
            onClick={() => window.location.reload()}
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Progress Tracker */}
      <ProgressTracker />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-2">Choose Your Skip Size</h1>
        <p className="text-center text-gray-400 mb-8">Select the skip size that best suits your needs</p>

        {/* Skip Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skips.map((skip) => (
            <SkipCard 
              key={skip.id} 
              skip={skip} 
              selected={selectedSkipId === skip.id}
              onSelect={handleSkipSelect}
            />
          ))}
        </div>

        {/* Continue Button */}
        <div className="mt-10 flex justify-center">
          <button
            className={`py-3 px-8 rounded-lg font-bold transition-colors ${
              selectedSkipId 
                ? 'bg-yellow-500 text-black hover:bg-yellow-600' 
                : 'bg-gray-700 text-gray-400 cursor-not-allowed'
            }`}
            onClick={handleContinue}
            disabled={!selectedSkipId}
          >
            Continue to Next Step
          </button>
        </div>
      </div>
    </div>
  );
}