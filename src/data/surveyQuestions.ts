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
    id: 'caja',
    name: 'Caja',
    emoji: '💳',
    color: 'bg-pink-600',
    gradient: 'from-pink-400 to-rose-500',
    questions: [
      { id: 'caja-1', text: '¿Cómo calificarías la atención recibida en caja?' },
      { id: 'caja-2', text: '¿El proceso de pago fue rápido y eficiente?' },
      { id: 'caja-3', text: '¿El cajero fue amable y cordial durante tu visita?' },
      { id: 'caja-4', text: '¿Te entregaron correctamente tu comprobante o ticket?' },
      { id: 'caja-5', text: '¿Hubo claridad en los precios y cobros realizados?' },
      { id: 'caja-6', text: '¿Te ofrecieron promociones o combos disponibles al momento?' },
      { id: 'caja-7', text: '¿Qué tan ordenada y limpia encontraste el área de caja?' }
    ]
  },
  {
    id: 'mesas-comedor',
    name: 'Mesas / Comedor',
    emoji: '🍽️',
    color: 'bg-yellow-600',
    gradient: 'from-yellow-400 to-amber-500',
    questions: [
      { id: 'mesas-1', text: '¿Qué tan limpias encontraste las mesas al llegar?' },
      { id: 'mesas-2', text: '¿Fue fácil encontrar una mesa disponible?' },
      { id: 'mesas-3', text: '¿Cómo calificarías la comodidad del área de comedor?' },
      { id: 'mesas-4', text: '¿Qué tan rápido fue el servicio de limpieza tras desocupar mesas?' },
      { id: 'mesas-5', text: '¿Qué tan ordenado estaba el espacio entre mesas y pasillos?' },
      { id: 'mesas-6', text: '¿Te sentiste cómodo(a) comiendo en el área de mesas?' },
      { id: 'mesas-7', text: '¿El mobiliario (mesas y sillas) se encontraba en buen estado?' }
    ]
  },
  {
    id: 'drive-thru',
    name: 'Drive-Thru (Servicio en auto)',
    emoji: '🚗',
    color: 'bg-cyan-600',
    gradient: 'from-cyan-400 to-teal-500',
    questions: [
      { id: 'drive-1', text: '¿Fue clara la señalización para realizar tu pedido?' },
      { id: 'drive-2', text: '¿Cómo calificarías la atención del personal en el Drive Thru?' },
      { id: 'drive-3', text: '¿Qué tan rápido recibiste tu pedido desde tu llegada?' },
      { id: 'drive-4', text: '¿Recibiste tu pedido completo y correctamente empacado?' },
      { id: 'drive-5', text: '¿La comunicación con el personal fue clara y efectiva?' },
      { id: 'drive-6', text: '¿El tiempo de espera fue adecuado?' },
      { id: 'drive-7', text: '¿Qué tan ordenado y limpio encontraste el circuito de autoservicio?' }
    ]
  },
  {
    id: 'general',
    name: 'Tienda General',
    emoji: '🏬',
    color: 'bg-indigo-600',
    gradient: 'from-purple-400 to-violet-500',
    questions: [
      { id: 'general-1', text: '¿Qué tan limpia y ordenada encontraste la tienda en general?' },
      { id: 'general-2', text: '¿Fue fácil encontrar los productos o áreas que buscabas?' },
      { id: 'general-3', text: '¿Cómo calificarías la ambientación del lugar (música, iluminación, olor)?' },
      { id: 'general-4', text: '¿Te sentiste seguro(a) durante tu estancia en la tienda?' },
      { id: 'general-5', text: '¿Cómo calificarías la organización general del espacio?' },
      { id: 'general-6', text: '¿El lugar tenía una buena señalización y distribución?' },
      { id: 'general-7', text: '¿Qué tan satisfecho(a) estás con la experiencia general en la tienda?' }
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
      { id: 'quesos-3', text: '¿Qué tan fácil fue conocer el precio de los quesos en exhibición?' },
      { id: 'quesos-4', text: '¿Qué tan fácil fue encontrar el tipo de queso que buscabas?' },
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
