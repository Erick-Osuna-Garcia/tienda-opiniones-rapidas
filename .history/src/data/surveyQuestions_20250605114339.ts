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
      { id: 'caja-1', text: '¿Qué tan rápido fue el proceso de cobro?' },
      { id: 'caja-2', text: '¿Te atendieron con amabilidad y cortesía?' },
      { id: 'caja-3', text: '¿Te ofrecieron ticket o factura?' },
      { id: 'caja-4', text: '¿Te sentiste bien tratado(a) al finalizar tu compra?' }
    ]
  },
  {
    id: 'general',
    name: 'Experiencia General',
    emoji: '🏬',
    color: 'bg-purple-500',
    gradient: 'from-purple-400 to-violet-500',
    questions: [
      { id: 'general-1', text: '¿Qué tan satisfecho(a) estás con la limpieza y el orden de la tienda?' },
      { id: 'general-2', text: '¿Cómo calificarías la atención del personal en general?' },
      { id: 'general-3', text: '¿Qué tan accesibles y justos consideras los precios?' },
      { id: 'general-4', text: '¿Qué tan fácil fue encontrar los productos que buscabas?' },
      { id: 'general-5', text: '¿Cómo calificarías el tiempo de espera en tu visita?' },
      { id: 'general-6', text: '¿Te sentiste bien recibido(a) al ingresar a la tienda?' },
      { id: 'general-7', text: '¿Recomendarías esta tienda a otras personas?' }
    ]
  }
];
