export interface Noticia {
  slug: string;
  titulo: string;
  fecha: string;
  categoria: 'regionales' | 'nacionales' | 'aguas-abiertas';
  resumen: string;
  imagenPrincipal: string;
  imagenes: string[];
  contenido: string;
}

export function formatCategoria(cat: Noticia['categoria']): string {
  switch (cat) {
    case 'regionales':
      return 'Regionales';
    case 'nacionales':
      return 'Nacionales';
    case 'aguas-abiertas':
      return 'Aguas Abiertas';
  }
}

export const noticias: Noticia[] = [
  {
    slug: 'campeonato-canarias-absoluto',
    titulo: 'El C.D.N. Nadamás Las Marinas se corona en el Campeonato de Canarias Absoluto con un gran medallero',
    fecha: '4 de Agosto, 2026',
    categoria: 'regionales',
    resumen: 'Sensacional actuación del equipo en Las Palmas de Gran Canaria, conquistando múltiples oros y ratificando el liderazgo de la natación de Lanzarote.',
    imagenPrincipal: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?q=80&w=1200&auto=format&fit=crop',
    imagenes: [
      'https://images.unsplash.com/photo-1530549387789-4c1017266635?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1519315901367-f34ff9154487?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1569517282132-25d22f4573e6?q=80&w=1200&auto=format&fit=crop'
    ],
    contenido: `El Club Deportivo Nadamás Las Marinas ha firmado una página dorada en la natación canaria tras su rotunda actuación en el Campeonato de Canarias Absoluto. En una intensa jornada disputada en la piscina olímpica, nuestra delegación de 18 nadadores formados en las instalaciones del C.D. Santa Rosa de Costa Teguise dominó de principio a fin.

La jornada arrancó con pruebas de alta exigencia donde la preparación técnica y física del club se hizo evidente. Los nadadores del C.D.N. Nadamás lograron subirse al podio en distancias de velocidad y fondo, sumando un amplio botín de medallas que sitúan a Lanzarote en la élite del archipiélago.

Especial protagonismo tuvieron las pruebas de relevos, donde el trabajo en equipo y el espíritu de unión del club brillaron con luz propia. El cuerpo técnico ha destacado la disciplina y constancia diaria mostrada durante toda la temporada en la piscina de entrenamiento.

Este magnífico resultado ratifica la consolidación del proyecto deportivo del C.D.N. Nadamás Las Marinas, demostrando que con trabajo diario y pasión por la natación, Costa Teguise es cantera insustituible de campeones regionales.`
  },
  {
    slug: 'tercera-jornada-liga-insular-lanzarote',
    titulo: 'Excelente actuación de la cantera en la 3ª Jornada de la Liga Insular de Lanzarote',
    fecha: '28 de Julio, 2026',
    categoria: 'regionales',
    resumen: 'Los nadadores alevines e infantiles de Nadamás demostraron una evolución técnica brillante y grandes marcas personales en la piscina insular.',
    imagenPrincipal: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=1200&auto=format&fit=crop',
    imagenes: [
      'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1519315901367-f34ff9154487?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1438029071396-1e831a7fa6d8?q=80&w=1200&auto=format&fit=crop'
    ],
    contenido: `La cantera del C.D.N. Nadamás Las Marinas completó una jornada memorable en la 3ª cita de la Liga Insular de Lanzarote. Nuestros nadadores más jóvenes, pertenecientes a las categorías alevín e infantil, mostraron un despliegue de técnica, esfuerzo y compañerismo sobresaliente.

A lo largo de la mañana se disputaron pruebas exigentes de estilos y braza, en las que más del 80% de los integrantes del club lograron rebajar sus registros personales. La evolución desde el inicio del curso evidencia el gran trabajo que se realiza a diario en la escuela del C.D. Santa Rosa.

Los entrenadores felicitaron a los deportistas por su seriedad en la cámara de salida y su capacidad de gestionar los ritmos de nado. Los nadadores más noveles afrontaron sus pruebas con temple de veteranos, animados en todo momento por la afición de familias desplazadas a la grada.

Con estos brillantes resultados, el club refuerza su posición en la tabla clasificatoria insular y asegura un futuro repleto de promesas deportivas para la natación de Lanzarote.`
  },
  {
    slug: 'medalla-nacional-equipo-master-espana',
    titulo: 'Medalla nacional para el equipo Máster en el Campeonato de España de Verano',
    fecha: '18 de Julio, 2026',
    categoria: 'nacionales',
    resumen: 'La sección de nadadores adultos de Nadamás conquista el podio en la cita nacional celebrada ante los mejores clubes del país.',
    imagenPrincipal: 'https://images.unsplash.com/photo-1569517282132-25d22f4573e6?q=80&w=1200&auto=format&fit=crop',
    imagenes: [
      'https://images.unsplash.com/photo-1569517282132-25d22f4573e6?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1530549387789-4c1017266635?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=1200&auto=format&fit=crop'
    ],
    contenido: `El equipo Máster del C.D.N. Nadamás Las Marinas ha alcanzado una gesta inolvidable tras proclamarse medallista en el Campeonato de España Máster de Verano. Nuestros nadadores adultos demostraron que la pasión por el agua y el espíritu competitivo no tienen edad.

En una competición de altísimo nivel técnico que reunió a cientos de nadadores de toda la geografía española, la representación lanzaroteña cuajó carreras estratégicamente impecables. El esfuerzo acumulado en los entrenamientos matutinos y vespertinos en el C.D. Santa Rosa dio sus frutos en el momento oportuno.

La medalla obtenida en el recinto nacional fue celebrada con enorme emoción por toda la expedición. Más allá del metal conquistado, la actuación sirvió para reivindicar el modelo de natación de adultos del club, donde priman la superación personal, la salud y el compañerismo.

El C.D.N. Nadamás Las Marinas regresa a Costa Teguise con el orgullo de llevar el nombre de Lanzarote a los puestos de honor de la natación máster en España.`
  },
  {
    slug: 'convocados-seleccion-canaria-nacional',
    titulo: 'Dos nadadores del club convocados con la Selección Canaria para el Nacional por Comunidades Autónomas',
    fecha: '2 de Julio, 2026',
    categoria: 'nacionales',
    resumen: 'Reconocimiento al trabajo de base: la Federación Canaria premia el rendimiento de nuestros deportistas incluyéndolos en el combinado autonómico.',
    imagenPrincipal: 'https://images.unsplash.com/photo-1438029071396-1e831a7fa6d8?q=80&w=1200&auto=format&fit=crop',
    imagenes: [
      'https://images.unsplash.com/photo-1438029071396-1e831a7fa6d8?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1519315901367-f34ff9154487?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1569517282132-25d22f4573e6?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1530549387789-4c1017266635?q=80&w=1200&auto=format&fit=crop'
    ],
    contenido: `Noticia histórica para la natación de Costa Teguise: la Federación Canaria de Natación ha hecho oficial la convocatoria de dos deportistas del C.D.N. Nadamás Las Marinas para integrar la Selección Canaria en el próximo Campeonato de España por Comunidades Autónomas.

La convocatoria premia la regularidad y las mínimas nacionales conseguidas por ambos nadadores a lo largo de los diferentes controles de marcas en piscina de 50 metros. Su rendimiento en los entrenamientos diarios bajo la dirección de la dirección técnica del club ha sido clave para alcanzar esta meta internacional e interautonómica.

Los dos deportistas representarán a Canarias midiéndose contra los mejores talentos del panorama estatal. Para la directiva y la masa social del C.D.N. Nadamás, su presencia en la selección autonómica constituye un enorme motivo de orgullo y un estímulo para todos los jóvenes de la cantera.

Desde el C.D. Santa Rosa enviamos todo nuestro apoyo a nuestros nadadores internacionales, convencidos de que defenderán la gorra de la Selección Canaria con la garra y deportividad que caracterizan a Nadamás.`
  },
  {
    slug: 'podio-historico-travesia-la-bocaina',
    titulo: 'Podio histórico del equipo en la Travesía a Nado La Bocaina (Lanzarote - Fuerteventura)',
    fecha: '20 de Junio, 2026',
    categoria: 'aguas-abiertas',
    resumen: 'Nuestros especialista en aguas abiertas completan los 15 kilómetros de canal con un ritmo espectacular y subida al podio por clubes.',
    imagenPrincipal: 'https://images.unsplash.com/photo-1519861531473-9200262188bf?q=80&w=1200&auto=format&fit=crop',
    imagenes: [
      'https://images.unsplash.com/photo-1519861531473-9200262188bf?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1530549387789-4c1017266635?q=80&w=1200&auto=format&fit=crop'
    ],
    contenido: `Los especialistas de aguas abiertas del C.D.N. Nadamás Las Marinas han escrito una de las páginas más épicas de la temporada al lograr la segunda posición absoluta por clubes en la legendaria Travesía a Nado La Bocaina, cruzando el estrecho entre Lanzarote y Fuerteventura.

La travesía, con una distancia aproximada de 15 kilómetros de mar abierto, exigió lo mejor de cada uno de los nadadores del club. Con unas condiciones de corriente cruzada y oleaje exigente, el equipo mantuvo la disciplina de nado en grupo y una hidratación milimétrica para superar los tramos de mayor resistencia de agua.

La llegada a la costa de Fuerteventura tras horas de esfuerzo ininterrumpido fue un momento cargado de emoción. El esfuerzo combinado del equipo sirvió para colocar al C.D.N. Nadamás entre los tres mejores clubes de la competición marítima más célebre del archipiélago.

Este resultado confirma la versatilidad de los nadadores del club, capaces de rendir al máximo nivel tanto en la piscina del C.D. Santa Rosa como en los desafíos marinos más exigentes del Atlántico.`
  },
  {
    slug: 'travesia-a-nado-el-rio-la-graciosa',
    titulo: 'Gran participación del C.D.N. Nadamás en la Travesía a Nado El Río de La Graciosa',
    fecha: '5 de Junio, 2026',
    categoria: 'aguas-abiertas',
    resumen: 'Una amplia marea roja de nadadores del club inundó la travesía entre el Mirador del Río y Caleta de Sebo con brillantes resultados individuales.',
    imagenPrincipal: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop',
    imagenes: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1519861531473-9200262188bf?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1569517282132-25d22f4573e6?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=1200&auto=format&fit=crop'
    ],
    contenido: `La espectacular Travesía a Nado El Río, que une la playa del Risco de Famara con Caleta de Sebo en La Graciosa, se vistió con los colores del C.D.N. Nadamás Las Marinas. Más de 25 nadadores de todas las categorías del club tomaron la salida en una jornada festiva y deportiva inigualable.

Con un mar en excelentes condiciones de transparencia, la escuadra de Nadamás tomó la delantera desde las primeras brazadas tras cruzar la playa de salida. Nadadores juveniles, absolutos y máster del club se apoyaron mutuamente a lo largo de los 2.600 metros de travesía marítima.

A la llegada al muelle de La Graciosa, nuestros nadadores cosecharon varios podios en sus respectivas categorías por edades, levantando el aplauso unánime del numeroso público congregado en el puerto.

La jornada concluyó con un almuerzo de convivencia entre deportistas, técnicos y familiares, reafirmando los valores de compañerismo, amor por la naturaleza marítima de Lanzarote y deportividad que definen la seña de identidad del C.D.N. Nadamás.`
  }
];
