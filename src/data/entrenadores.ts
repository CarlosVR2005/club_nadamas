export interface Entrenador {
  id: string;
  nombre: string;
  cargo: string;
  especialidad: string;
  experiencia: string;
  imagen: string;
  titulacion: string;
  cita: string;
  bio: string;
}

export const entrenadores: Entrenador[] = [
  {
    id: 'ricardo-senra',
    nombre: 'Ricardo Senra Minacore',
    cargo: 'Entrenador Principal & Referente del Club',
    especialidad: 'Formación de Talentos & Grupo de Competición',
    experiencia: '34 años en Lanzarote',
    imagen: '/entrenadores/ricardo-senra.jpg',
    titulacion: 'Entrenador y Mentor Histórico de Natación',
    cita: 'El gran objetivo de la natación y del deporte en general es formar buenas personas. Luego el orgullo es ver que son buena gente y buenos profesionales.',
    bio: 'Nacido en Rosario (Argentina) y afincado en Lanzarote desde hace 34 años. Referente indiscutible de la natación en la isla y pilar del C.D.N. Nadamás Las Marinas. Ha sido cuna de talentos insulares como Alejandro Candela, Sara González, Kennedy Denby o Marta Santana, y mentor de campeones de España como Naira Jaén, Herminio Fernández y Diego Vázquez.'
  },
  {
    id: 'carlos-fernandez',
    nombre: 'Carlos Fernández',
    cargo: 'Monitor de Natación & Director de la Escuela',
    especialidad: 'Natación Formativa & Todas las Edades',
    experiencia: 'Entrenador Federado',
    imagen: '/entrenadores/Carlos-entrenador.jpeg',
    titulacion: 'Monitor de Natación & Director de la Escuela de Natación',
    cita: 'Para nosotros, la enseñanza de la natación va mucho más allá de la técnica: es la emoción de ver a un pequeño perder el miedo al agua, el orgullo de acompañar a una persona mayor a cumplir un sueño pendiente. Ver crecer a los más pequeños y dar confianza a los más grandes no es solo nuestro trabajo, es nuestra mayor satisfacción.',
    bio: 'Entrenador del C.D. Nadamás Las Marinas comprometido con la enseñanza de la natación en todas las edades y niveles. Su vocación es acompañar a cada alumno en su camino, desde los más pequeños que dan sus primeras brazadas hasta los adultos que cumplen un sueño pendiente, haciendo de cada progreso una satisfacción compartida.'
  },
  {
    id: 'nacho-villalba',
    nombre: 'Nacho Villalba',
    cargo: 'Entrenador Alevín & Preparador Técnico',
    especialidad: 'Formación Alevín & Rendimiento de Cantera',
    experiencia: 'Técnico de Competición',
    imagen: '/entrenadores/nacho-entrenador.jpg',
    titulacion: 'Graduado en CAFYD & Entrenador Superior de Natación',
    cita: 'Entrenamos a los alevines para que sean completos y tengan una base para poder rendir en categorías superiores.',
    bio: 'Entrenador del C.D. Nadamás Santa Rosa especializado en la categoría Alevín y perfeccionamiento técnico. Graduado en Ciencias de la Actividad Física y del Deporte (CAFYD) y Entrenador Superior de Natación por la RFEN, enfocado en construir nadadores completos con fundamentos sólidos en los 4 estilos y resistencia para el salto al alto rendimiento.'
  }
];
