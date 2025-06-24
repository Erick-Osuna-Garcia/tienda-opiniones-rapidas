
import React, { useState } from 'react';
import { Category } from '../data/surveyQuestions';
import { surveyCategories } from '../data/surveyQuestions';
import CategorySelector from './CategorySelector';
import QuestionStepper from './QuestionStepper';
import ThankYou from './ThankYou';

type AppState = 'category-selection' | 'survey' | 'thank-you';

interface SurveyResponse {
  category: Category;
  responses: Record<string, number>;
  timestamp: Date;
}

const SurveyApp: React.FC = () => {
  const [currentState, setCurrentState] = useState<AppState>('category-selection');
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [allResponses, setAllResponses] = useState<SurveyResponse[]>([]);

  const handleCategorySelect = (category: Category) => {
    setSelectedCategory(category);
    setCurrentState('survey');
  };

  const handleSurveyComplete = (responses: Record<string, number>) => {
    if (selectedCategory) {
      const newResponse: SurveyResponse = {
        category: selectedCategory,
        responses,
        timestamp: new Date()
      };
      
      setAllResponses(prev => [...prev, newResponse]);
      console.log('Nueva respuesta guardada:', newResponse);
      console.log('Todas las respuestas:', [...allResponses, newResponse]);
      
      setCurrentState('thank-you');
    }
  };

  const handleBackToHome = () => {
    setSelectedCategory(null);
    setCurrentState('category-selection');
  };

  return (
    <div className="w-full">
      {currentState === 'category-selection' && (
        <CategorySelector
          categories={surveyCategories}
          onSelectCategory={handleCategorySelect}
        />
      )}

      {currentState === 'survey' && selectedCategory && (
        <QuestionStepper
          category={selectedCategory}
          onComplete={handleSurveyComplete}
          onBack={handleBackToHome}
        />
      )}

      {currentState === 'thank-you' && selectedCategory && (
        <ThankYou
          onBackToHome={handleBackToHome}
          categoryName={selectedCategory.name}
          categoryEmoji={selectedCategory.emoji}
        />
      )}
    </div>
  );
};

export default SurveyApp;
