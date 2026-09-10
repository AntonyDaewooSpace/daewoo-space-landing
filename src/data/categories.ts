import type { ImageMetadata } from 'astro';

import tv from '../assets/cards/tv.png';
import lavadora from '../assets/cards/lavadora.png';
import refrigeradora from '../assets/cards/refrigeradora.png';
import cocina from '../assets/cards/cocina.png';
import microondas from '../assets/cards/microondas.png';
import pilas from '../assets/cards/pilas.png';
import aire from '../assets/cards/aire.png';

// Back-face assets, per category: <cat>/logo.png + <cat>/<n>-*.png benefit lockups
const backAssets = import.meta.glob<ImageMetadata>('../assets/cards/back/*/*.png', {
  eager: true,
  import: 'default',
});

const backLogo = (cat: string): ImageMetadata =>
  backAssets[`../assets/cards/back/${cat}/logo.png`];

const backBenefits = (cat: string): ImageMetadata[] =>
  Object.entries(backAssets)
    .filter(([p]) => p.includes(`/back/${cat}/`) && /\/\d+-/.test(p))
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, m]) => m);

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
  /** back face — rebuilt in HTML for full sharpness */
  backLogo: ImageMetadata;
  backBenefits: ImageMetadata[];
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
    backLogo: backLogo('tv'),
    backBenefits: backBenefits('tv'),
    icon: iconTv,
    frontTitle: 'El entretenimiento cobra una nueva dimensión.',
    frontText:
      'Entretenimiento que cobra vida. Disfruta imágenes vibrantes, sonido envolvente y tecnología inteligente que transforma cada contenido en una experiencia más inmersiva.',
    backTitle: 'Televisores QLED & Gaming',
    backText:
      'Entretenimiento superior con tecnología QLED + HDR10, fluidez de hasta 120 Hz gaming y sonido inmersivo Dolby Vision Atmos.',
  },
  {
    id: 'lavadora',
    name: 'Lavadoras',
    accent: 'var(--acc-lavadora)',
    image: lavadora,
    backLogo: backLogo('lavadora'),
    backBenefits: backBenefits('lavadora'),
    icon: iconLavadora,
    frontTitle: 'El arte de cuidar tu ropa sin esfuerzo',
    frontText:
      'Lavado profundo que protege tus prendas. Sus motores de alta eficiencia y sistemas de ahorro de agua te garantizan un rendimiento impecable, silencioso y ecológico.',
    backTitle: 'Lavadoras con AI Wash',
    backText:
      'Máxima eficiencia y cuidado: tecnología AI Wash, eliminación de bacterias con Luz UV y panel touch intuitivo con bloqueo de seguridad.',
  },
  {
    id: 'refrigeradora',
    name: 'Refrigeradoras',
    accent: 'var(--acc-refrigeradora)',
    image: refrigeradora,
    backLogo: backLogo('refrigeradora'),
    backBenefits: backBenefits('refrigeradora'),
    icon: iconRefrigeradora,
    frontTitle: 'La frescura que evoluciona contigo.',
    frontText:
      'Conserva cada alimento por más tiempo gracias a tecnologías de enfriamiento eficiente, mayor capacidad y un diseño moderno que se integra perfectamente a tu hogar.',
    backTitle: 'Refrigeradoras Eco Inverter',
    backText:
      'Frescura prolongada y máxima eficiencia energética. Incluye funciones No Frost y Super Freeze con materiales de alta durabilidad.',
  },
  {
    id: 'cocina',
    name: 'Cocinas',
    accent: 'var(--acc-cocina)',
    image: cocina,
    backLogo: backLogo('cocina'),
    backBenefits: backBenefits('cocina'),
    icon: iconCocina,
    frontTitle: 'Innovación que inspira cada creación.',
    frontText:
      'Diseñadas para ofrecer precisión, seguridad y eficiencia en cada preparación. Materiales de alta calidad y tecnología confiable para disfrutar cada momento en la cocina.',
    backTitle: 'Cocinas Safety Device',
    backText:
      'Diseño, seguridad y versatilidad. Equipadas con corte automático de gas (Safety Device) y sistema de conversión dual (GLP/GN).',
  },
  {
    id: 'microondas',
    name: 'Microondas',
    accent: 'var(--acc-microondas)',
    image: microondas,
    backLogo: backLogo('microondas'),
    backBenefits: backBenefits('microondas'),
    icon: iconMicroondas,
    frontTitle: 'Rapidez que simplifica tu día.',
    frontText:
      'Calienta, cocina y descongela con precisión gracias a funciones inteligentes que optimizan tu tiempo sin renunciar al sabor ni a la practicidad.',
    backTitle: 'Microondas Grill Dorador',
    backText:
      'Rapidez y practicidad en tu cocina: cabina cerámica de fácil limpieza, grill dorador, descongelamiento por peso y panel digital.',
  },
  {
    id: 'pilas',
    name: 'Pilas',
    accent: 'var(--acc-pilas)',
    image: pilas,
    backLogo: backLogo('pilas'),
    backBenefits: backBenefits('pilas'),
    icon: iconPilas,
    frontTitle: 'La energía que impulsa cada momento.',
    frontText:
      'Potencia confiable y de larga duración para acompañar tus dispositivos esenciales. Rendimiento constante pensado para mantenerte siempre conectado.',
    backTitle: 'Pilas Heavy Duty & Mega Alkalina',
    backText:
      'Energía confiable y duradera (Heavy Duty y Mega Alkalina) con fórmula ecológica libre de mercurio y cadmio.',
  },
  {
    id: 'aire',
    name: 'Aire acondicionado',
    accent: 'var(--acc-aire)',
    image: aire,
    backLogo: backLogo('aire'),
    backBenefits: backBenefits('aire'),
    icon: iconAire,
    frontTitle: 'El confort inteligente en cada ambiente',
    frontText:
      'Disfruta una temperatura ideal con sistemas de climatización eficientes, silenciosos y de bajo consumo, diseñados para brindar bienestar durante todo el año.',
    backTitle: 'Aire Acondicionado Air Suave',
    backText:
      'Climatización confortablemente uniforme con tecnología Aire Suave, filtro de salud, protección Gold Filter y drenaje dual.',
  },
];
