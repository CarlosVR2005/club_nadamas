export interface Noticia {
  slug: string;
  titulo: string;
  categoria: 'Resultados' | 'Competiciones' | 'Aguas Abiertas' | 'Palmarés';
  fecha: string;
  autor: string;
  tiempoLectura: string;
  resumen: string;
  imagen: string;
  destacado?: boolean;
  contenido: {
    introduccion: string;
    parrafos: string[];
    destacadosResultados?: { atleta: string; prueba: string; puesto: string }[];
    conclusion: string;
  };
}

export const noticias: Noticia[] = [
  {
    slug: 'campeonato-canarias-2026',
    titulo: 'El C.D. Nadamás brilla en el Campeonato de Canarias con 12 medallas',
    categoria: 'Resultados',
    fecha: '4 de Agosto, 2026',
    autor: 'C.D. Nadamás',
    tiempoLectura: '3 min',
    resumen: 'Sensacional actuación de nuestro equipo de competición en Las Palmas. Logramos 5 oros, 4 platas y 3 bronces, destacando las plusmarcas de la cantera.',
    imagen: '/hero-swimming.png',
    destacado: true,
    contenido: {
      introduccion: 'El pasado fin de semana, el Club Deportivo Nadamás Las Marinas demostró una vez más su liderazgo en la natación canaria durante la celebración del Campeonato de Canarias Absoluto en las instalaciones del Club Metropole de Las Palmas de Gran Canaria.',
      parrafos: [
        'Con una delegación formada por 18 nadadores entrenados en las instalaciones del C.D. Santa Rosa en Costa Teguise, el equipo compitió al máximo nivel ante los mejores clubes del archipiélago.',
        'La jornada arrancó de forma insuperable con la victoria en el 100m Libre masculino y continuó con una apasionante final en los relevos 4x100m Estilos, donde el equipo femenino batió el récord insular de Lanzarote con un tiempo espectacular.',
        'Además de las medallas conseguidas, cuatro de nuestros nadadores juveniles han conseguido las marcas mínimas para representar al club en el próximo Campeonato de España de Verano.'
      ],
      destacadosResultados: [
        { atleta: 'Marcos Santana', prueba: '100m y 200m Libre Masculino', puesto: '🥇 Oro (x2)' },
        { atleta: 'Lucía Betancort', prueba: '50m Mariposa Femenino', puesto: '🥇 Oro' },
        { atleta: 'Relevo 4x100m Estilos', prueba: 'Relevo Femenino', puesto: '🥇 Oro (Récord Insular)' },
        { atleta: 'Alejandro Morales', prueba: '400m Libre Masculino', puesto: '🥈 Plata' },
        { atleta: 'Elena Delgado', prueba: '200m Espalda Femenino', puesto: '🥉 Bronce' },
      ],
      conclusion: '¡Queremos felicitar a todos los nadadores, cuerpo técnico y familias por su enorme dedicación y por llevar el nombre de Lanzarote y del C.D. Santa Rosa a lo más alto de Canarias!'
    }
  },
  {
    slug: 'liga-insular-jornada-3',
    titulo: 'Resultados de la 3ª Jornada de la Liga Insular de Natación',
    categoria: 'Competiciones',
    fecha: '28 de Julio, 2026',
    autor: 'Cuerpo Técnico',
    tiempoLectura: '2 min',
    resumen: 'Nuestros nadadores de categorías alevín e infantil dominaron las pruebas de estilos en la piscina municipal.',
    imagen: '/hero-swimming.png',
    destacado: false,
    contenido: {
      introduccion: 'Gran jornada de competición insular para nuestros nadadores más jóvenes en la 3ª cita de la Liga Insular de Lanzarote.',
      parrafos: [
        'Los deportistas de las categorías Alevín e Infantil mostraron un progreso técnico destacable, mejorando sus marcas personales en más del 80% de las pruebas disputadas.',
        'Especial mención a los nadadores de primer año en la categoría, que afrontaron por primera vez distancias largas de 400m libre con gran temple y estrategia.'
      ],
      destacadosResultados: [
        { atleta: 'Diego Cabrera', prueba: '200m Estilos Alevín', puesto: '1º Clasificado' },
        { atleta: 'Sofía Hernández', prueba: '100m Braza Infantil', puesto: '1ª Clasificada' },
      ],
      conclusion: 'Seguimos sumando kilómetros y experiencias. ¡El futuro de la natación en Costa Teguise está asegurado!'
    }
  },
  {
    slug: 'travesia-la-bocaina',
    titulo: 'Podio para el equipo Máster en la Travesía a Nado de Lanzarote',
    categoria: 'Aguas Abiertas',
    fecha: '15 de Julio, 2026',
    autor: 'Sección Máster',
    tiempoLectura: '4 min',
    resumen: 'Nuestros nadadores máster completaron con éxito el exigente recorrido insular, logrando la 2ª posición por equipos.',
    imagen: '/hero-swimming.png',
    destacado: false,
    contenido: {
      introduccion: 'El equipo Máster del C.D. Nadamás compitió este fin de semana en una de las travesías a nado más emblemáticas de la isla.',
      parrafos: [
        'Bajo unas condiciones de mar con fuerte oleaje de componente norte, los nadadores adultos del club demostraron que el entrenamiento en piscina combinado con la aclimatación en mar abierto da sus frutos.',
        'Con una estrategia de nado en grupo y gran control de los ritmos de respiración y orientación, el equipo se alzó con la 2ª posición en la clasificación general de clubes.'
      ],
      destacadosResultados: [
        { atleta: 'Carlos Reyes', prueba: 'Categoría Máster 40+ (3.000m)', puesto: '🥈 2º General' },
        { atleta: 'Marta Morales', prueba: 'Categoría Máster 30+ (3.000m)', puesto: '🥇 1ª Categoría' },
      ],
      conclusion: 'Enhorabuena a todo el equipo máster. Demostráis cada día que la natación es un deporte sin límite de edad.'
    }
  },
  {
    slug: 'convocatoria-nacional-2026',
    titulo: 'Tres nadadores del club convocados para el Campeonato de España',
    categoria: 'Palmarés',
    fecha: '2 de Julio, 2026',
    autor: 'Dirección Deportiva',
    tiempoLectura: '2 min',
    resumen: 'Orgullo lanzaroteño: la Federación Canaria confirma la presencia de 3 atletas de Nadamás en la cita nacional.',
    imagen: '/hero-swimming.png',
    destacado: false,
    contenido: {
      introduccion: 'La Real Federación Española de Natación (RFEN) ha hecho pública la lista de deportistas inscritos para el Campeonato de España de Verano.',
      parrafos: [
        'Tres deportistas del C.D. Nadamás Las Marinas acudirán como parte de la selección canaria tras lograr las marcas mínimas exigidas durante la temporada.',
        'La cita tendrá lugar del 22 al 26 de agosto en el Centro de Alto Rendimiento de Sabadell, donde se medirán con los mejores nadadores del país.'
      ],
      conclusion: 'Es un inmenso orgullo para Costa Teguise y para el C.D. Santa Rosa. ¡Toda la familia del Nadamás estará animando!'
    }
  }
];
