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
    cargo: 'Director Técnico & Preparación Técnica',
    especialidad: 'Competición Federada & Alto Rendimiento',
    experiencia: '+15 años de experiencia',
    imagen: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop',
    titulacion: 'Técnico Superior de Natación (RFEN)',
    cita: 'El trabajo constante en el C.N. Nadamás Las Marinas es la base para formar campeones en Canarias y en España.',
    bio: 'Técnico del C.D.N. Nadamás Las Marinas. Ha acompañado a nadadores campeones regionales y medallistas nacionales en piscina y aguas abiertas, implantando metodologías de entrenamiento de alto rendimiento.'
  },
  {
    id: 'raul-morales',
    nombre: 'Raúl Morales',
    cargo: 'Entrenador Cantera & Categorías Base',
    especialidad: 'Escuela de Natación (3 a 16 años)',
    experiencia: '+10 años de experiencia',
    imagen: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
    titulacion: 'Técnico de Natación Nivel II & Graduado en CAFD',
    cita: 'Fomentamos la técnica de nado y la pasión por el deporte desde los primeros metros en el agua.',
    bio: 'Especialista en desarrollo motor acuático y formación de jóvenes deportistas. Encargado de estructurar los niveles de la escuela infantil, garantizando una evolución técnica sólida en los cuatro estilos.'
  },
  {
    id: 'marta-betancort',
    nombre: 'Marta Betancort',
    cargo: 'Entrenadora Escuela de Adultos & Máster',
    especialidad: 'Iniciación, Perfeccionamiento & Aguas Abiertas',
    experiencia: '+8 años de experiencia',
    imagen: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
    titulacion: 'Técnico Deportivo en Natación & Especialista en Aguas Abiertas',
    cita: 'Nadar es una disciplina para toda la vida; ayudamos a cada adulto a superar sus metas en piscina y en mar abierto.',
    bio: 'Responsable de los entrenamientos de la Escuela de Adultos y del equipo Máster. Coordina las sesiones de perfeccionamiento en piscina y las salidas de aclimatación marina para travesías.'
  }
];
