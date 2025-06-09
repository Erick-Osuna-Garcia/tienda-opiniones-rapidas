
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
      {
        id: 'carnes-1',
        text: '¿Qué tan satisfecho estás con la calidad de las carnes?'
      },
      {
        id: 'carnes-2',
        text: '¿El personal atendió adecuadamente en el área de carnes?'
      },
      {
        id: 'carnes-3',
        text: '¿Cómo calificarías la presentación de los productos cárnicos?'
      },
      {
        id: 'carnes-4',
        text: '¿Los precios te parecen justos por la calidad ofrecida?'
      }
    ]
  },
  {
    id: 'abarrotes',
    name: 'Abarrotes',
    emoji: '🛒',
    color: 'bg-green-500',
    gradient: 'from-green-400 to-emerald-500',
    questions: [
      {
        id: 'abarrotes-1',
        text: '¿Qué tan fácil fue encontrar los productos que buscabas?'
      },
      {
        id: 'abarrotes-2',
        text: '¿Cómo calificarías la organización de los pasillos?'
      },
      {
        id: 'abarrotes-3',
        text: '¿Los productos estaban bien etiquetados con precios?'
      },
      {
        id: 'abarrotes-4',
        text: '¿Encontraste productos en buen estado y dentro de fecha?'
      }
    ]
  },
  {
    id: 'caja',
    name: 'Caja',
    emoji: '💳',
    color: 'bg-blue-500',
    gradient: 'from-blue-400 to-indigo-500',
    questions: [
      {
        id: 'caja-1',
        text: '¿Qué tan rápido fue el proceso de pago?'
      },
      {
        id: 'caja-2',
        text: '¿El cajero fue amable y profesional?'
      },
      {
        id: 'caja-3',
        text: '¿El tiempo de espera en la fila fue aceptable?'
      },
      {
        id: 'caja-4',
        text: '¿El proceso de pago fue claro y sin complicaciones?'
      }
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
