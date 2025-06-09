import React, { useState } from 'react';
import { Category, Question, ratingOptions } from '../data/surveyQuestions';
import RatingButtons from './RatingButtons';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface QuestionStepperProps {
  category: Category;
  onComplete: (responses: Record<string, number>) => void;
  onBack: () => void;
}

const QuestionStepper: React.FC<QuestionStepperProps> = ({ category, onComplete, onBack }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(false); // <-- NUEVO

  const currentQuestion = category.questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === category.questions.length - 1;
  const canProceed = responses[currentQuestion.id] !== undefined;
  const progress = ((currentQuestionIndex + 1) / category.questions.length) * 100;

  const handleRatingSelect = (value: number) => {
    setResponses(prev => ({
      ...prev,
      [currentQuestion.id]: value
    }));
  };

  const handleNext = async () => {
    if (isLastQuestion) {
      setLoading(true);
      await sendResponsesToN8N(category, responses);
      setLoading(false);
      onComplete(responses);
    } else {
      setLoading(true);
      setTimeout(() => {
        setCurrentQuestionIndex(prev => prev + 1);
        setLoading(false);
      }, 500);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setLoading(true);
      setTimeout(() => {
        setCurrentQuestionIndex(prev => prev - 1);
        setLoading(false);
      }, 500);
    }
  };

  // Agrega esta función arriba o dentro de tu componente
  async function sendResponsesToN8N(category: Category, responses: Record<string, number>, clientName?: string) {
    const payload = {
      id: Date.now(),
      fecha: new Date().toISOString().slice(0, 10),
      categoria: category.name, // <-- Aquí agregas la categoría
      cliente: clientName || '',
      ...Object.fromEntries(
        category.questions.map((q, idx) => [`P${idx + 1}`, responses[q.id] ?? ''])
      )
    };

    await fetch('https://negociosadn.app.n8n.cloud/webhook-test/9190a774-84b0-49ad-b8e5-5437b1bf58ce', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br ${category.gradient} flex flex-col items-center justify-center p-4`}>
      <div className="max-w-3xl w-full">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <button
            onClick={onBack}
            className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Volver a categorías
          </button>
          
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
            <span className="text-3xl mr-3">{category.emoji}</span>
            <span className="text-white font-semibold text-lg">{category.name}</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8 animate-fade-in" style={{ animationDelay: '100ms' }}>
          <div className="flex justify-between items-center mb-2">
            <span className="text-white/80 text-sm">
              Pregunta {currentQuestionIndex + 1} de {category.questions.length}
            </span>
            <span className="text-white/80 text-sm">
              {Math.round(progress)}% completado
            </span>
          </div>
          <div className="w-full bg-white/20 rounded-full h-2">
            <div 
              className="bg-white rounded-full h-2 transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl animate-scale-in" style={{ animationDelay: '200ms' }}>
          {loading ? (
            <div className="flex flex-col items-center justify-center h-40">
              <svg className="animate-spin h-10 w-10 text-gray-400 mb-4" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"/>
              </svg>
              <span className="text-gray-500">Cargando pregunta...</span>
            </div>
          ) : (
            <>
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 leading-tight">
                  {currentQuestion.text}
                </h2>
                <p className="text-gray-600">
                  Selecciona tu nivel de satisfacción
                </p>
              </div>

              <RatingButtons
                options={ratingOptions}
                selectedValue={responses[currentQuestion.id]}
                onSelect={handleRatingSelect}
              />

              {/* Navigation */}
              <div className="flex justify-between items-center mt-12">
                <button
                  onClick={handlePrevious}
                  disabled={currentQuestionIndex === 0 || loading}
                  className="inline-flex items-center px-6 py-3 rounded-xl bg-gray-200 text-gray-700 font-semibold transition-all duration-300 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Anterior
                </button>

                <div className="flex space-x-2">
                  {category.questions.map((_, index) => (
                    <div
                      key={index}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentQuestionIndex
                          ? 'bg-gray-800 scale-125'
                          : index < currentQuestionIndex
                          ? 'bg-green-500'
                          : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={handleNext}
                  disabled={!canProceed || loading}
                  className={`inline-flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 ${
                    canProceed && !loading
                      ? `bg-gradient-to-r ${category.gradient} text-white hover:shadow-lg`
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  {isLastQuestion ? 'Finalizar' : 'Siguiente'}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuestionStepper;
