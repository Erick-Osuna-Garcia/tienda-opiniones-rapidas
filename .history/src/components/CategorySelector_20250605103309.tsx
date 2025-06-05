import React from 'react';
import { Category } from '../data/surveyQuestions';

interface CategorySelectorProps {
  categories: Category[];
  onSelectCategory: (category: Category) => void;
}

const CategorySelector: React.FC<CategorySelectorProps> = ({ categories, onSelectCategory }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-4 relative">
      {/* Navbar fijo */}
      <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow z-40">
        <div className="flex items-center gap-3 px-1 py-2 sm:px-8 sm:py-3 max-w-4xl mx-auto">
          <img
            src="/aguacateLogo.jpg"
            alt="Logo"
            className="w-10 h-10 sm:w-14 sm:h-14 object-contain rounded-full shadow"
          />
          <span className="text-lg sm:text-2xl font-bold text-gray-800">La michoacana</span>
        </div>
      </nav>

      {/* Contenido principal con padding para no quedar debajo del navbar */}
      <div className="max-w-4xl w-full pt-20 sm:pt-24">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            Encuesta de Satisfacción del Cliente
          </h1>
          <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto">
            Tu opinión es muy importante para nosotros. Selecciona el área sobre la cual quieres compartir tu experiencia.
          </p>
        </div>

        {/* Botones responsivos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full px-0 mx-auto">
          {categories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => onSelectCategory(category)}
              className={`
                group relative overflow-hidden rounded-xl 
                p-3 sm:p-6 text-white transition-all duration-300 
                hover:scale-105 hover:shadow-2xl animate-fade-in 
                bg-gradient-to-br ${category.gradient} w-full
                flex flex-row sm:flex-col items-center sm:items-center
                min-h-[48px] sm:min-h-[120px]
              `}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="text-3xl sm:text-5xl mr-4 sm:mr-0">{category.emoji}</span>
              <span className="flex flex-col text-left sm:text-center">
                <span className="text-base sm:text-xl font-bold">{category.name}</span>
                <span className="text-xs sm:text-base opacity-90">Evaluar esta área</span>
              </span>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
            </button>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '600ms' }}>
          <p className="text-gray-500 text-sm">
            La encuesta toma aproximadamente 2-3 minutos por área
          </p>
        </div>
      </div>
    </div>
  );
};

export default CategorySelector;
