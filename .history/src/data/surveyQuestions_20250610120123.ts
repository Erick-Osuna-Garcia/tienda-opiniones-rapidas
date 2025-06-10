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
    id: 'general',
    name: 'Tienda General',
    emoji: '🏬',
    color: 'bg-indigo-600', // Cambiado
    gradient: 'from-purple-400 to-violet-500',
    questions: [
      { id: 'general-1', text: '¿Estás satisfecho con la limpieza de la tienda?' },
      { id: 'general-2', text: '¿Cómo calificarías la atención del personal en general?' },
      { id: 'general-3', text: '¿Qué tan simple fue conocer el precio de los productos?' },
      { id: 'general-4', text: '¿Qué tan fácil fue encontrar los productos que buscabas?' },
      { id: 'general-5', text: '¿Cómo calificarías la variedad de productos ofertada?' },
      { id: 'general-6', text: '¿Cómo calificarías la presentación de los colaboradores?' },
      { id: 'general-7', text: '¿Cómo calificaría la calidad de los productos exhibidos?' }
    ]
  },
  {
    id: 'quesos',
    name: 'Quesos',
    emoji: '🧀',
    color: 'bg-yellow-600', // Cambiado
    gradient: 'from-amber-400 to-yellow-500',
    questions: [
      { id: 'quesos-1', text: '¿Estás satisfecho con la limpieza del área de quesos?' },
      { id: 'quesos-2', text: '¿Cómo calificarías la atención del personal encargado del área de quesos?' },
      { id: 'quesos-3', text: '¿Qué tan bien fue la atención del personal?' },
      { id: 'quesos-4', text: '¿Qué tan fácil fue conocer el precio de los quesos en exhibición?' },
      { id: 'quesos-5', text: '¿Cómo calificarías la variedad de quesos disponibles?' },
      { id: 'quesos-6', text: '¿Cómo calificarías la presentación del personal en el área de quesos?' },
      { id: 'quesos-7', text: '¿Cómo calificarías la calidad de los quesos exhibidos?' }
    ]
  },
  {
    id: 'frutas-verduras-frescas',
    name: 'Frutas y Verduras Frescas',
    emoji: '🍏',
    color: 'bg-lime-600', // Cambiado
    gradient: 'from-lime-400 to-green-500',
    questions: [
      { id: 'fvf-1', text: '¿Estás satisfecho con la limpieza del área de frutas y verduras frescas?' },
      { id: 'fvf-2', text: '¿Cómo calificarías la atención del personal en el área de frutas y verduras frescas?' },
      { id: 'fvf-3', text: '¿Qué tan fácil fue conocer el precio de las frutas y verduras frescas?' },
      { id: 'fvf-4', text: '¿Qué tan fácil fue encontrar los productos frescos que buscabas?' },
      { id: 'fvf-5', text: '¿Cómo calificarías la variedad de frutas y verduras frescas disponibles?' },
      { id: 'fvf-6', text: '¿Cómo calificarías la presentación del personal del área?' },
      { id: 'fvf-7', text: '¿Cómo calificarías la calidad y frescura de los productos exhibidos?' }
    ]
  },
  {
    id: 'frutas-verduras-vitrina',
    name: 'Frutas y Verduras en Vitrina',
    emoji: '🥗',
    color: 'bg-orange-600', // Cambiado
    gradient: 'from-teal-400 to-cyan-500',
    questions: [
      { id: 'fvv-1', text: '¿Estás satisfecho con la limpieza del área de frutas y verduras en vitrina?' },
      { id: 'fvv-2', text: '¿Cómo calificarías la atención del personal encargado de la vitrina?' },
      { id: 'fvv-3', text: '¿Qué tan fácil fue conocer el precio de los productos en vitrina?' },
      { id: 'fvv-4', text: '¿Qué tan fácil fue solicitar o acceder a los productos de la vitrina?' },
      { id: 'fvv-5', text: '¿Cómo calificarías la variedad de productos en vitrina?' },
      { id: 'fvv-6', text: '¿Cómo calificarías la presentación del personal que atiende la vitrina?' },
      { id: 'fvv-7', text: '¿Cómo calificarías la calidad y frescura de los productos en vitrina?' }
    ]
  },
  {
    id: 'abarrotes',
    name: 'Abarrotes',
    emoji: '🛒',
    color: 'bg-green-500',
    gradient: 'from-green-400 to-emerald-500',
    questions: [
      { id: 'abarrotes-1', text: '¿Estás satisfecho con la limpieza del área de abarrotes?' },
      { id: 'abarrotes-2', text: '¿Cómo calificarías la atención del personal en el área de abarrotes?' },
      { id: 'abarrotes-3', text: '¿Qué tan fácil fue conocer el precio de los productos de abarrotes?' },
      { id: 'abarrotes-4', text: '¿Qué tan fácil fue encontrar los productos de abarrotes que buscabas?' },
      { id: 'abarrotes-5', text: '¿Cómo calificarías la variedad de productos de abarrotes disponibles?' },
      { id: 'abarrotes-6', text: '¿Cómo calificarías la presentación del personal en el área de abarrotes?' },
      { id: 'abarrotes-7', text: '¿Cómo calificarías la calidad de los productos de abarrotes en exhibición?' }
    ]
  },
  {
    id: 'especias-auxiliares',
    name: 'Especias y Auxiliares Naturales',
    emoji: '🌿',
    color: 'bg-emerald-700',
    gradient: 'from-emerald-400 to-green-700',
    questions: [
      { id: 'especias-1', text: '¿Estás satisfecho con la limpieza del área de especias y auxiliares naturales?' },
      { id: 'especias-2', text: '¿Cómo calificarías la atención del personal en esta sección?' },
      { id: 'especias-3', text: '¿Qué tan fácil fue conocer el precio de las especias y productos naturales?' },
      { id: 'especias-4', text: '¿Qué tan fácil fue encontrar las especias o auxiliares naturales que buscabas?' },
      { id: 'especias-5', text: '¿Cómo calificarías la variedad de productos disponibles en esta sección?' },
      { id: 'especias-6', text: '¿Cómo calificarías la presentación del personal que atiende esta sección?' },
      { id: 'especias-7', text: '¿Cómo calificarías la calidad de los productos naturales y especias exhibidos?' }
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
    color: 'bg-pink-600 hover:bg-pink-700'
  },
  {
    value: 2,
    label: 'Malo',
    emoji: '🙁',
    color: 'bg-yellow-600 hover:bg-yellow-700'
  },
  {
    value: 3,
    label: 'Bueno',
    emoji: '🙂',
    color: 'bg-blue-500 hover:bg-blue-600'
  },
  {
    value: 4,
    label: 'Muy Bueno',
    emoji: '😃',
    color: 'bg-emerald-500 hover:bg-emerald-600'
  }
];
