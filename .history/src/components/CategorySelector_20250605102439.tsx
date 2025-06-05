import React from 'react';
import { Category } from '../data/surveyQuestions';

interface CategorySelectorProps {
  categories: Category[];
  onSelectCategory: (category: Category) => void;
}

const CategorySelector: React.FC<CategorySelectorProps> = ({ categories, onSelectCategory }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-4 relative">
      <div className="relative w-full">
        {/* Logo fijo en la esquina superior izquierda */}
        <img
          src="/aguacateLogo.jpg"
          alt="Logo"
          className="fixed top-3 left-3 w-12 h-12 sm:top-6 sm:left-6 sm:w-16 sm:h-16 object-contain rounded-full shadow-lg z-30"
        />
        {/* Título solo visible en pantallas medianas o mayores */}
        <h1 className="hidden sm:block absolute top-6 left-24 text-xl font-bold text-gray-700 z-30">
          La michoacana
        </h1>
      </div>

      <div className="max-w-4xl w-full">
        {/* Agrega padding-top en móvil para evitar que el logo tape el título */}
        <div className="text-center mb-12 animate-fade-in pt-20 sm:pt-0">
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
