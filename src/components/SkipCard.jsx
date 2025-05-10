import React from 'react';

export default function SkipCard({ skip, selected, onSelect }) {
  return (
    <div 
      className={`bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:transform hover:scale-105 ${selected ? 'ring-2 ring-yellow-500' : ''}`}
    >
      <div className="relative">
        <div className="h-48 bg-gray-700 flex items-center justify-center">
          {/* Skip visual representation */}
          <div className={`w-3/4 h-32 ${skip.id === 1 ? 'bg-yellow-500' : 'bg-yellow-600'} relative rounded-md flex items-center justify-center`}>
            <span className="text-black font-bold">{skip.size}</span>
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-yellow-700"></div>
          </div>
        </div>
        
        <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
          {skip.size} Yards
        </div>
        
        {skip.allowed_on_road && (
          <div className="absolute bottom-2 left-0 right-0 mx-auto w-max bg-red-600 text-white text-xs px-3 py-1 rounded-full">
            Not Allowed On The Road
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="font-bold text-xl mb-1">{skip.size ? `${skip.size} Yard Skip` : ''}</h3>
        <p className="text-gray-400 text-sm mb-3">
          {skip.hire_period_days ? `${skip.hire_period_days} day hire period` : ''}
        </p>
        
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-yellow-500">
            £{skip.price_before_vat ?? ''}
          </span>
          <button 
            className={`px-4 py-2 rounded-md transition-colors ${
              selected
                ? 'bg-yellow-600 text-black font-bold' 
                : 'bg-gray-700 text-white hover:bg-gray-600'
            }`}
            onClick={() => onSelect(skip.id)}
          >
            Select This Skip
          </button>
        </div>
      </div>
    </div>
  );
}