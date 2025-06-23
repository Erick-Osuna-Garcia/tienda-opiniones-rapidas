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
