import React from 'react';
import { Category } from '../data/surveyQuestions';

interface CategorySelectorProps {
  categories: Category[];
  onSelectCategory: (category: Category) => void;
}

const CategorySelector: React.FC<CategorySelectorProps> = ({ categories, onSelectCategory }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-4 relative">
      {/* Logo en la esquina superior izquierda, responsivo */}
      <img
        src="src/images/aguacateLogo.jpg"
        alt="Logo"
        className="absolute top-3 left-3 w-12 h-12 sm:top-6 sm:left-6 sm:w-16 sm:h-16 object-contain rounded-full shadow-lg z-20"
      />
      <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">La michoacana</h1>

      <div className="max-w-4xl w-full">
        {/* Agrega padding-top en móvil para evitar que el logo tape el título */}
        <div className="text-center mb-12 animate-fade-in pt-16 sm:pt-0">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            Encuesta de Satisfacción del Cliente
          </h1>
          <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto">
            Tu opinión es muy importante para nosotros. Selecciona el área sobre la cual quieres compartir tu experiencia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-0 mx-auto min-h-[50px]">
          {categories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => onSelectCategory(category)}
              className={`group relative overflow-hidden rounded-2xl p-8 text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-fade-in bg-gradient-to-br ${category.gradient} w-full`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative z-10 text-center">
                <div className="text-5xl md:text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {category.emoji}
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-2">
                  {category.name}
                </h3>
                <p className="text-sm md:text-base opacity-90">
                  Evaluar esta área
                </p>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
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
