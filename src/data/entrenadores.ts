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
