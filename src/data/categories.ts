import type { ImageMetadata } from 'astro';

import tv from '../assets/cards/tv.png';
import lavadora from '../assets/cards/lavadora.png';
import refrigeradora from '../assets/cards/refrigeradora.png';
import cocina from '../assets/cards/cocina.png';
import microondas from '../assets/cards/microondas.png';
import pilas from '../assets/cards/pilas.png';
import aire from '../assets/cards/aire.png';

import iconTv from '../assets/icons/tv.svg?raw';
import iconLavadora from '../assets/icons/lavadora.svg?raw';
import iconRefrigeradora from '../assets/icons/refrigeradora.svg?raw';
import iconCocina from '../assets/icons/cocina.svg?raw';
import iconMicroondas from '../assets/icons/microondas.svg?raw';
import iconPilas from '../assets/icons/pilas.svg?raw';
import iconAire from '../assets/icons/aire.svg?raw';

export interface Category {
  id: string;
  name: string;
  accent: string;
  image: ImageMetadata;
  icon: string;
  /** front face */
  frontTitle: string;
  frontText: string;
  /** back face */
  backTitle: string;
  backText: string;
}

/* Order matches the Figma carousel (próximos lanzamientos). */
export const categories: Category[] = [
  {
    id: 'tv',
    name: 'Televisores',
    accent: 'var(--acc-tv)',
    image: tv,
    icon: iconTv,
    frontTitle: 'El entretenimiento cobra una nueva dimensión.',
    frontText:
      'Entretenimiento que cobra vida. Disfruta imágenes vibrantes, sonido envolvente y tecnología inteligente que transforma cada contenido en una experiencia más inmersiva.',
    backTitle: 'Televisores QLED & Gaming',
    backText:
      '¡Lleva tu entretenimiento al siguiente nivel con la nueva línea de Televisores QLED y Gaming Daewoo! Disfruta de colores hiperrealistas y detalles deslumbrantes gracias a la tecnología QLED con HDR10. Una fluidez imbatible de hasta 120 Hz para dominar cada partida sin lag, y un sonido envolvente 360° con Dolby Atmos que te situará en el centro de la acción.',
  },
  {
    id: 'lavadora',
    name: 'Lavadoras',
    accent: 'var(--acc-lavadora)',
    image: lavadora,
    icon: iconLavadora,
    frontTitle: 'El arte de cuidar tu ropa sin esfuerzo',
    frontText:
      'Lavado profundo que protege tus prendas. Sus motores de alta eficiencia y sistemas de ahorro de agua te garantizan un rendimiento impecable, silencioso y ecológico.',
    backTitle: 'Lavadoras con AI Wash',
    backText:
      'Revoluciona el cuidado de tu ropa con la avanzada tecnología de las lavadoras Daewoo. Equipadas con inteligencia artificial AI Wash para optimizar cada ciclo de lavado, desinfección mediante Luz UV que elimina bacterias, un moderno Panel Touch de fácil manejo, seguro Child Lock para los niños y la máxima eficiencia y durabilidad de su motor.',
  },
  {
    id: 'refrigeradora',
    name: 'Refrigeradoras',
    accent: 'var(--acc-refrigeradora)',
    image: refrigeradora,
    icon: iconRefrigeradora,
    frontTitle: 'La frescura que evoluciona contigo.',
    frontText:
      'Conserva cada alimento por más tiempo gracias a tecnologías de enfriamiento eficiente, mayor capacidad y un diseño moderno que se integra perfectamente a tu hogar.',
    backTitle: 'Refrigeradoras Eco Inverter',
    backText:
      'Mantén tus alimentos frescos por más tiempo con las refrigeradoras Daewoo. Su compresor de máxima eficiencia energética, junto al aislamiento ecológico Ciclopentano, ofrecen un rendimiento superior con menor consumo. Incorporan Super Cool y Super Freeze, Panel Digital, bandejas de vidrio templado e iluminación LED para una visibilidad clara en todo el interior.',
  },
  {
    id: 'cocina',
    name: 'Cocinas',
    accent: 'var(--acc-cocina)',
    image: cocina,
    icon: iconCocina,
    frontTitle: 'Innovación que inspira cada creación.',
    frontText:
      'Diseñadas para ofrecer precisión, seguridad y eficiencia en cada preparación. Materiales de alta calidad y tecnología confiable para disfrutar cada momento en la cocina.',
    backTitle: 'Cocinas Safety Device',
    backText:
      'Descubre la combinación perfecta de diseño, seguridad y versatilidad con las cocinas Daewoo. Fabricadas en acero inoxidable, ofrecen un acabado elegante, resistente y duradero a un precio accesible. Incorporan el sistema Safety Device, que corta automáticamente el flujo de gas si la llama se apaga, y Conversión Dual compatible con gas de balón y gas natural.',
  },
  {
    id: 'microondas',
    name: 'Microondas',
    accent: 'var(--acc-microondas)',
    image: microondas,
    icon: iconMicroondas,
    frontTitle: 'Rapidez que simplifica tu día.',
    frontText:
      'Calienta, cocina y descongela con precisión gracias a funciones inteligentes que optimizan tu tiempo sin renunciar al sabor ni a la practicidad.',
    backTitle: 'Microondas Grill Dorador',
    backText:
      'Haz que tus comidas sean más rápidas, deliciosas y fáciles de preparar con los microondas Daewoo. Diseñados con una cabina cerámica de fácil limpieza y alta resistencia. Cuentan con función Grill Dorador, un sistema de descongelamiento por peso que calcula el tiempo exacto y un moderno Panel Digital para un manejo intuitivo y preciso.',
  },
  {
    id: 'pilas',
    name: 'Pilas',
    accent: 'var(--acc-pilas)',
    image: pilas,
    icon: iconPilas,
    frontTitle: 'La energía que impulsa cada momento.',
    frontText:
      'Potencia confiable y de larga duración para acompañar tus dispositivos esenciales. Rendimiento constante pensado para mantenerte siempre conectado.',
    backTitle: 'Pilas Heavy Duty & Mega Alkalina',
    backText:
      'Mantén todos tus dispositivos funcionando con la máxima energía y rendimiento de las pilas Daewoo, disponibles en sus líneas Heavy Duty y Mega Alkalina. Diseñadas para una energía constante de larga duración, son amigables con el medio ambiente y seguras para tu hogar al ser 100% ecológicas, con 0% mercurio y 0% cadmio.',
  },
  {
    id: 'aire',
    name: 'Aire acondicionado',
    accent: 'var(--acc-aire)',
    image: aire,
    icon: iconAire,
    frontTitle: 'El confort inteligente en cada ambiente',
    frontText:
      'Disfruta una temperatura ideal con sistemas de climatización eficientes, silenciosos y de bajo consumo, diseñados para brindar bienestar durante todo el año.',
    backTitle: 'Aire Acondicionado Air Suave',
    backText:
      'Disfruta del clima ideal con los sistemas de aire acondicionado Daewoo. Su tecnología de Aire Suave proporciona un flujo uniforme y confortable, mientras que el Filtro de Salud ayuda a mantener un ambiente más limpio. Incorporan Aletas Doradas anticorrosivas, Drenaje Dual y un Panel Moderno que se integra con elegancia a cualquier espacio.',
  },
];
