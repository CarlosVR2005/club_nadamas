import type { ImageMetadata } from 'astro';

// Data files (entrenadores.ts, noticias.ts) and the vitrina in Palmares.astro
// keep storing image paths as plain strings (e.g. '/campeones/foo.jpg') so
// they stay easy to edit. This resolves those strings to the actual imported
// asset that astro:assets needs to optimize the image.
const images = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/images/**/*.{jpg,jpeg,png}',
  { eager: true }
);

export function getImagen(ruta: string): ImageMetadata {
  const key = `/src/assets/images${ruta}`;
  const mod = images[key];
  if (!mod) {
    throw new Error(
      `Imagen no encontrada: "${ruta}" (se esperaba en src/assets/images${ruta}). ` +
      `Revisa que el archivo exista y que el nombre coincida exactamente (mayúsculas y acentos incluidos).`
    );
  }
  return mod.default;
}
