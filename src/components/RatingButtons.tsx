
import React from 'react';
import { RatingOption } from '../data/surveyQuestions';

interface RatingButtonsProps {
  options: RatingOption[];
  selectedValue?: number;
  onSelect: (value: number) => void;
}

const RatingButtons: React.FC<RatingButtonsProps> = ({ options, selectedValue, onSelect }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => onSelect(option.value)}
          className={`
            relative p-6 rounded-2xl text-white font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg
            ${selectedValue === option.value 
              ? `${option.color} scale-105 shadow-lg ring-4 ring-white ring-opacity-50` 
              : `${option.color} opacity-80 hover:opacity-100`
            }
          `}
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl mb-2 transform transition-transform duration-300 hover:scale-110">
              {option.emoji}
            </div>
            <div className="text-sm md:text-base font-bold">
              {option.label}
            </div>
          </div>
          
          {selectedValue === option.value && (
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-2xl"></div>
          )}
        </button>
      ))}
    </div>
  );
};

export default RatingButtons;
