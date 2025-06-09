
export interface Question {
  id: string;
  text: string;
}

export interface Category {
  id: string;
  name: string;
  emoji: string;
  color: string;
  gradient: string;
  questions: Question[];
}

export const surveyCategories: Category[] = [
  {
    id: 'quesos',
    name: 'Quesos',
    emoji: '🧀',
    color: 'bg-amber-500',
    gradient: 'from-amber-400 to-yellow-500',
    questions: [
      { id: 'quesos-1', text: '¿Cómo calificarías la calidad de los productos en esta sección?' },
      { id: 'quesos-2', text: '¿La variedad de productos fue suficiente para ti?' },
      { id: 'quesos-3', text: '¿Qué tan bien fue la atención del personal?' },
      { id: 'quesos-4', text: '¿Consideras que los precios son justos para la calidad?' }
    ]
  },
  {
    id: 'carnes',
    name: 'Carnes',
    emoji: '🥩',
    color: 'bg-red-500',
    gradient: 'from-red-400 to-rose-500',
    questions: [
       { id: 'carnes-1', text: '¿Qué tan frescos estaban los productos?' },
      { id: 'carnes-2', text: '¿Cómo calificarías la presentación e higiene de esta sección?' },
      { id: 'carnes-3', text: '¿El personal resolvió tus dudas o peticiones?' },
      { id: 'carnes-4', text: '¿Los precios están dentro de lo que esperabas?' }
    ]
  },
  {
    id: 'abarrotes',
    name: 'Abarrotes',
    emoji: '🛒',
    color: 'bg-green-500',
    gradient: 'from-green-400 to-emerald-500',
    questions: [
       { id: 'abarrotes-1', text: '¿Encontraste todos los productos que necesitabas?' },
      { id: 'abarrotes-2', text: '¿Están bien organizados los productos en los estantes?' },
      { id: 'abarrotes-3', text: '¿El personal fue amable y disponible?' },
      { id: 'abarrotes-4', text: '¿Los precios fueron claros y razonables?' }
    ]
  },
  {
    id: 'caja',
    name: 'Caja',
    emoji: '💳',
    color: 'bg-blue-500',
    gradient: 'from-blue-400 to-indigo-500',
    questions: [
      { id: 'general-1', text: '¿Qué tan satisfecho(a) estás con la limpieza y el orden de la tienda?' },
      { id: 'general-2', text: '¿Cómo calificarías la atención del personal en general?' },
      { id: 'general-3', text: '¿Qué tan accesibles y justos consideras los precios?' },
      { id: 'general-4', text: '¿Qué tan fácil fue encontrar los productos que buscabas?' },
      { id: 'general-5', text: '¿Cómo calificarías el tiempo de espera en tu visita?' },
      { id: 'general-6', text: '¿Te sentiste bien recibido(a) al ingresar a la tienda?' },
      { id: 'general-7', text: '¿Recomendarías esta tienda a otras personas?' }
    ]
  },
  {
    id: 'general',
    name: 'Experiencia General',
    emoji: '🏬',
    color: 'bg-purple-500',
    gradient: 'from-purple-400 to-violet-500',
    questions: [
      {
        id: 'general-1',
        text: '¿Cómo calificarías tu experiencia general en la tienda?'
      },
      {
        id: 'general-2',
        text: '¿La tienda estaba limpia y bien mantenida?'
      },
      {
        id: 'general-3',
        text: '¿Recomendarías esta tienda a tus amigos y familiares?'
      },
      {
        id: 'general-4',
        text: '¿Qué tan probable es que vuelvas a comprar aquí?'
      }
    ]
  }
];

export interface RatingOption {
  value: number;
  label: string;
  emoji: string;
  color: string;
}

export const ratingOptions: RatingOption[] = [
  {
    value: 1,
    label: 'Muy Malo',
    emoji: '😞',
    color: 'bg-red-500 hover:bg-red-600'
  },
  {
    value: 2,
    label: 'Malo',
    emoji: '🙁',
    color: 'bg-orange-500 hover:bg-orange-600'
  },
  {
    value: 3,
    label: 'Bueno',
    emoji: '🙂',
    color: 'bg-yellow-500 hover:bg-yellow-600'
  },
  {
    value: 4,
    label: 'Muy Bueno',
    emoji: '😃',
    color: 'bg-green-500 hover:bg-green-600'
  }
];
