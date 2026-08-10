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
    slug: 'campeonato-regional-canarias-junior-absoluto-verano-2026',
    titulo: 'Espectacular actuación del C.D. Nadamás Santa Rosa en el Campeonato Regional de Canarias Junior y Absoluto de Verano 2026',
    fecha: '5 de Julio, 2026',
    categoria: 'regionales',
    resumen: 'Brillante expedición de 6 nadadores en el C.N. Metropole (Gran Canaria), destacando múltiples medallas absolutas y un excelente rendimiento de todo el equipo.',
    imagenPrincipal: '/noticias/regionales/regional-canarias-junior-absoluto-verano26-1.jpg',
    imagenes: [
      '/noticias/regionales/regional-canarias-junior-absoluto-verano26-1.jpg',
      '/noticias/regionales/regional-canarias-junior-absoluto-verano26-2.jpg',
      '/noticias/regionales/regional-canarias-junior-absoluto-verano26-3.jpg',
      '/noticias/regionales/regional-canarias-junior-absoluto-verano26-4.jpg',
      '/noticias/regionales/regional-canarias-junior-absoluto-verano26-5.jpg'
    ],
    contenido: `Del 3 al 5 de julio 6 nadadores del Club Nadamás Santa Rosa se desplazaron hasta Gran Canaria para participar en el Campeonato de Canarias en las instalaciones del C.N. Metropole.

Clasificación final por clubes:
• 5º puesto Junior Femenino
• 6º puesto Absoluto Masculino
• 7º puesto Absoluto Femenino
• 8º puesto Junior Masculino

Resultados destacados:

Herminio Fernández (2008):
• 400L: 🥇 18 años y 🥈 Absoluto
• 800L: 🥇 18 años y 🥈 Absoluto
• 1500L: 🥇 18 años y 🥈 Absoluto
• 100M: 🥇 18 años y 11º Absoluto
• 200M: 🥇 18 años y 🥇 Absoluto

Naira Jaén (2008):
• 200L: 🥇 18 años y 🥈 Absoluta
• 400L: 🥇 18 años y 🥇 Absoluta
• 800L: 🥇 18 años y 🥇 Absoluta
• 1500L: 🥇 18 años y 🥇 Absoluta
• 400EST: 🥇 18 años y 4ª Absoluta

Andreu Jaén (2006):
• 200L: 13º Absoluto
• 400L: 5º Absoluto
• 800L: 4º Absoluto
• 1500L: 5º Absoluto
• 400EST: 8º Absoluto

Besay Delgado (2010):
• 50L: 11º 16 años
• 100L: 6º 16 años
• 200L: 4º 16 años
• 50E: 6º 16 años
• 100E: 5º 16 años

Natalia Sasu (2008):
• 100E: 🥉 18 años
• 100L: 7ª 18 años
• 50L: 8ª 18 años
• 200L: 7ª 18 años
• 50E: 8ª 18 años

Matías Padrón (2008):
• 100L: 6º 18 años
• 200EST: 🥉 18 años

Relevos:
• 4x100L: 6º Absoluto (Besay Delgado, Matías Padrón, Andreu Jaén y Herminio Fernández)
• 4x200L: 🥈 Absoluto (Besay Delgado, Matías Padrón, Andreu Jaén y Herminio Fernández)
• 4x100EST Mixto: 4º Junior (Natalia Sasu, Matías Padrón, Herminio Fernández y Naira Jaén)

Resultados destacados - Mejor Rendimiento (Puntos AQUA):
• Herminio: 800L - 718 puntos 🥇 1º Junior
• Naira: 800L - 677 puntos 🥈 2ª Junior

¡Enhorabuena a todo el equipo! Próxima parada: Nacional Alevín, Infantil y Junior.

Agradecimientos: CACT Lanzarote, Concejalía de Deportes de Teguise, Cabildo de Lanzarote, Deporte Canario (Gobierno de Canarias), Lanzarote Deportiva, Cadena SER Lanzarote, Radio Marca Lanzarote, Ayuntamiento de Teguise, GradaCero.es y La Voz de Lanzarote.`
  },
  {
    slug: 'campeonato-espana-junior-exito-herminio-naira',
    titulo: 'Histórico final en el Campeonato de España Junior: Herminio logra 3 Oros y Naira conquista un emotivo Bronce Nacional',
    fecha: '10 de Agosto, 2026',
    categoria: 'nacionales',
    resumen: 'Herminio Fernández con 3 medallas de oro (400, 800 y 1500m libres) y Naira Jaén Serra con un heroico bronce nacional en 800m libres tras superar una fractura de muñeca cierran un campeonato inolvidable.',
    imagenPrincipal: '/noticias/nacionales/campeonato-espana-junior-26.jpg',
    imagenes: [
      '/noticias/nacionales/campeonato-espana-junior-26.jpg',
      '/campeones/herminio-campeon.jpeg',
      '/campeones/Naira-Campeona.jpg'
    ],
    contenido: `¡Campeonato de España Junior terminado! Nuestros deportistas Herminio Fernández y Naira Jaén Serra han puesto el broche de oro y bronce a una competición nacional histórica para el C.D. Nadamás Santa Rosa.

Herminio con 3 oros (400m, 800m y 1.500m libres) y Naira con una medalla de bronce (800m libres con una marca de 9:15.46) cierran el campeonato en lo más alto del podio nacional.

Felicidades a nuestros dos nadadores que han luchado hasta el final en una temporada que no ha sido del todo fácil. Destacar el enorme mérito y coraje de Naira, que después de una fractura en la muñeca que la mantuvo media temporada sin poder competir, ha logrado recuperarse y acabar con un podio a nivel nacional.

¡Son un ejemplo de superación, disciplina y garra para todos nosotros!

Agradecimiento especial a nuestros patrocinadores e instituciones por su continuo respaldo al deporte de Lanzarote: CACT Lanzarote, Concejalía de Deportes de Teguise, Cabildo de Lanzarote, Gobierno de Canarias (Deporte Canario), Lanzarote Deportiva, Cadena SER Lanzarote, Radio Marca Lanzarote, Ayuntamiento de Teguise, GradaCero.es y La Voz de Lanzarote.`
  },
  {
    slug: 'travesia-la-tinosa-copa-aguas-abiertas-lanzarote',
    titulo: 'Exhibición del C.D. Nadamás Santa Rosa en la Travesía La Tiñosa: Podio completo de la General en la 1ª etapa de la Copa de Lanzarote',
    fecha: '10 de Agosto, 2026',
    categoria: 'aguas-abiertas',
    resumen: 'El Club Nadamás demostró una vez más su potencial absoluto en aguas abiertas siendo todo el podio de la Clasificación General de nuestro club en la Travesía La Tiñosa.',
    imagenPrincipal: '/noticias/aguas-abiertas/travesia-tinosa-1.jpg',
    imagenes: [
      '/noticias/aguas-abiertas/travesia-tinosa-1.jpg',
      '/noticias/aguas-abiertas/travesia-tinosa-2.jpg',
      '/noticias/aguas-abiertas/travesia-tinosa-3.jpg'
    ],
    contenido: `El pasado sábado se celebró la Travesía La Tiñosa, organizada por cd4elementos. Esta prueba supuso la 1ª etapa puntuable para la Copa de Aguas Abiertas de Lanzarote 2026. Destacar que el C.D. Nadamás Santa Rosa ha demostrado una vez más su potencial siendo todo el podio de la Clasificación General de nuestro club.

Resultados de la prueba:

Prueba 400m:
• 1º Alexander Delgado
• 2ª Ariadna Martí
• 4º Eliaset Suárez
• 5º Santiago Javier León

Prueba 800m:
• 1ª Andrea Fraga
• 2º Lois Chantada
• 3ª Nahia Escudero
• 5ª Chloe Vaz
• 6ª Irene González
• 7ª Diana Castro
• 8ª Noa Pérez

CLASIFICACIÓN GENERAL 1500m (Podio íntegro del C.D. Nadamás Santa Rosa):
🥇 Andreu Jaén (1º General)
🥈 Naira Jaén (2ª General)
🥉 Nicolás Padrón (3º General)
• Katia Pérez
• Diego Vázquez
• Natalia Sasu

CLASIFICACIÓN POR CATEGORÍAS 1500m:
• Andrés Arcadio Martín (1º Adaptada)
• Nicolás Padrón (1º Infantil)
• Katia Pérez (1ª Infantil)
• Naira Jaén (1ª Junior 2)
• Andreu Jaén (1º Máster A)
• Claudia Iglesias (1ª Máster A)
• Daniele Tambini (1º Máster D)
• Roberta Bornaghi (1ª Máster E)
• Olga Tavio (1ª Máster F)
• Martín Torres (1º Máster H)
• María Elena Tabares (1ª Máster J)
• Diego Vázquez (1º Infantil)
• Nora Delgado (2ª Infantil)
• Besay Delgado (1º Junior 1)
• Natalia Sasu (1ª Junior 2)
• José Vicente Vizcaíno (1º Máster D)
• Carmen Rosa Guadalupe (1ª Máster G)
• Juan José Ramos (3º Infantil)
• Lily Gopar (3ª Junior 2)
• Cristo García (1º Máster C)
• Íñigo Navarro (1º Máster)
• Armando Guadalupe (1º Máster C)
• Erik Suárez (4º Infantil)
• Jimena Martín (4ª Infantil)
• Echedey Cabrera (5º Infantil)
• Martina Martín (5ª Infantil)`
  }
];
