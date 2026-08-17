# Graph Report - clubnadamas-web  (2026-08-17)

## Corpus Check
- Large corpus: 56 files · ~736,284 words. Semantic extraction will be expensive (many Claude tokens). Consider running on a subfolder.

## Summary
- 127 nodes · 165 edges · 17 communities (16 shown, 1 thin omitted)
- Extraction: 72% EXTRACTED · 26% INFERRED · 2% AMBIGUOUS · INFERRED: 43 edges (avg confidence: 0.83)
- Token cost: 509,470 input · 0 output

## Community Hubs (Navigation)
- Homepage & Trainers UI
- News System
- Astro Docs (Duplicated)
- Package Config
- README Content
- Build Dependencies
- Site Shell (Header/Footer)
- TypeScript Config
- Public Icons & Champion Photos
- Club Logo & Icons
- Champion Portraits
- Coach Portraits & Hero
- Dev Server Commands
- Regional Championship Gallery
- Open Water Event Gallery
- National/Regional News Photos

## God Nodes (most connected - your core abstractions)
1. `Astro Documentation` - 8 edges
2. `getImagen()` - 7 edges
3. `Astro Documentation` - 7 edges
4. `scripts` - 5 edges
5. `Astro Project Structure` - 5 edges
6. `formatCategoria()` - 4 edges
7. `noticias` - 4 edges
8. `Astro Starter Kit: Basics` - 4 edges
9. `Club Nada Mas Logo (Diving Swimmer in Red Square)` - 4 edges
10. `Gustavo - Champion Portrait` - 4 edges

## Surprising Connections (you probably didn't know these)
- `Astro Documentation` --semantically_similar_to--> `Astro Documentation`  [INFERRED] [semantically similar]
  AGENTS.md → README.md
- `Andrea, Champion Swimmer with Medals Poolside` --references--> `Club Nada Mas Logo (Diving Swimmer in Red Square)`  [AMBIGUOUS]
  src/assets/images/campeones/Andrea-campeona.jpg → public/logo-club.png
- `Dev Server Background Mode` --shares_data_with--> `Dev Server Background Mode`  [INFERRED]
  AGENTS.md → CLAUDE.md
- `Astro Dev Server Management Commands` --shares_data_with--> `Astro Dev Server Management Commands`  [INFERRED]
  AGENTS.md → CLAUDE.md
- `Astro Documentation` --shares_data_with--> `Astro Documentation`  [INFERRED]
  AGENTS.md → CLAUDE.md

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Duplicated Dev Server Workflow Across AGENTS.md and CLAUDE.md** — agents_dev_server_background_mode, agents_astro_dev_management_commands, claude_dev_server_background_mode, claude_astro_dev_management_commands [INFERRED 0.85]
- **Galería de fotos: XII Copa de Natación en Aguas Abiertas Lanzarote 2026** — src_assets_images_noticias_aguas_abiertas_travesia_tinosa_1_photo, src_assets_images_noticias_aguas_abiertas_travesia_tinosa_2_photo, src_assets_images_noticias_aguas_abiertas_travesia_tinosa_3_photo [INFERRED 0.90]
- **Galeria del Regional de Canarias Junior y Absoluto Verano 2026** — src_assets_images_noticias_regionales_regional_canarias_junior_absoluto_verano26_2_photo, src_assets_images_noticias_regionales_regional_canarias_junior_absoluto_verano26_3_photo, src_assets_images_noticias_regionales_regional_canarias_junior_absoluto_verano26_4_photo, src_assets_images_noticias_regionales_regional_canarias_junior_absoluto_verano26_5_photo [INFERRED 0.90]

## Communities (17 total, 1 thin omitted)

### Community 0 - "Homepage & Trainers UI"
Cohesion: 0.21
Nodes (4): Entrenador, entrenadores, getImagen(), images

### Community 1 - "News System"
Cohesion: 0.19
Nodes (9): noticiasPreview, formatCategoria(), Noticia, noticias, cards, restNoticias, showSlide(), startAutoPlay() (+1 more)

### Community 2 - "Astro Docs (Duplicated)"
Cohesion: 0.21
Nodes (14): Astro Components Guide, Astro Documentation, Content Collections Guide, Framework Components Guide, Internationalization Guide, Astro Routing Guide, Styling Guide, Astro Components Guide (+6 more)

### Community 3 - "Package Config"
Cohesion: 0.18
Nodes (10): engines, node, name, scripts, astro, build, dev, preview (+2 more)

### Community 4 - "README Content"
Cohesion: 0.20
Nodes (10): Astro CLI, Astro Discord Server, Astro Documentation, Astro Starter Kit: Basics, index.astro Page, Layout.astro Component, npm Commands, Astro Project Structure (+2 more)

### Community 5 - "Build Dependencies"
Cohesion: 0.22
Nodes (9): astro, @astrojs/sitemap, dependencies, astro, @astrojs/sitemap, tailwindcss, @tailwindcss/vite, tailwindcss (+1 more)

### Community 6 - "Site Shell (Header/Footer)"
Cohesion: 0.22
Nodes (6): quickLinks, socialLinks, hamburgerBtn, hamburgerLines, mobileMenu, canonicalURL

### Community 7 - "TypeScript Config"
Cohesion: 0.25
Nodes (7): **/*, astro/tsconfigs/strict, .astro/types.d.ts, dist, exclude, extends, include

### Community 8 - "Public Icons & Champion Photos"
Cohesion: 0.50
Nodes (5): Club Logo (Apple Touch Icon), Diego - Champion Swimmer Photo, Nacho - Coach Portrait, Club Logo (Favicon 96x96), Herminio - Champion Swimmer Photo

### Community 9 - "Club Logo & Icons"
Cohesion: 0.60
Nodes (5): PWA Icon 192px (Club Swimmer Logo), PWA Icon 512px (Club Swimmer Logo), Club Nada Mas Logo (Diving Swimmer in Red Square), Two Junior Swimmers with Medals at Campeonato de España Verano Junior, Andrea, Champion Swimmer with Medals Poolside

### Community 10 - "Champion Portraits"
Cohesion: 1.00
Nodes (5): Diego - Champion Portrait, Gustavo - Champion Portrait, Juan - Champion Portrait, Kennedy - Champion Portrait, Naira - Champion Portrait

### Community 11 - "Coach Portraits & Hero"
Cohesion: 0.50
Nodes (5): Herminio Club Champion Photo, Carlos Coach Photo, Nacho Coach Photo, Ricardo Senra Coach Photo, Hero Swimming Banner Photo

### Community 12 - "Dev Server Commands"
Cohesion: 0.67
Nodes (4): Astro Dev Server Management Commands, Dev Server Background Mode, Astro Dev Server Management Commands, Dev Server Background Mode

### Community 13 - "Regional Championship Gallery"
Cohesion: 1.00
Nodes (4): Podio nadador y nadadora con trofeos - Regional Canarias, Grupo de cuatro nadadores con medallas de plata - Regional Canarias, Podio masculino con medallas - Regional Canarias, Podio femenino con medallas - Regional Canarias

### Community 14 - "Open Water Event Gallery"
Cohesion: 1.00
Nodes (3): Podio XII Copa de Natación en Aguas Abiertas Lanzarote (grupo 1), Podio XII Copa de Natación en Aguas Abiertas Lanzarote (grupo 2), Organizadores y colaboradores en podio, XII Copa de Natación en Aguas Abiertas Lanzarote

## Ambiguous Edges - Review These
- `Diego - Champion Swimmer Photo` → `Nacho - Coach Portrait`  [AMBIGUOUS]
  public/entrenadores/Nacho-entrenador.jpeg · relation: conceptually_related_to
- `Nacho - Coach Portrait` → `Herminio - Champion Swimmer Photo`  [AMBIGUOUS]
  public/entrenadores/Nacho-entrenador.jpeg · relation: conceptually_related_to
- `Club Nada Mas Logo (Diving Swimmer in Red Square)` → `Andrea, Champion Swimmer with Medals Poolside`  [AMBIGUOUS]
  src/assets/images/campeones/Andrea-campeona.jpg · relation: references

## Knowledge Gaps
- **39 isolated node(s):** `name`, `type`, `version`, `node`, `dev` (+34 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What is the exact relationship between `Diego - Champion Swimmer Photo` and `Nacho - Coach Portrait`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **What is the exact relationship between `Nacho - Coach Portrait` and `Herminio - Champion Swimmer Photo`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **What is the exact relationship between `Club Nada Mas Logo (Diving Swimmer in Red Square)` and `Andrea, Champion Swimmer with Medals Poolside`?**
  _Edge tagged AMBIGUOUS (relation: references) - confidence is low._
- **Why does `Astro Documentation` connect `Astro Docs (Duplicated)` to `README Content`?**
  _High betweenness centrality (0.021) - this node is a cross-community bridge._
- **Why does `Astro Documentation` connect `README Content` to `Astro Docs (Duplicated)`?**
  _High betweenness centrality (0.016) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `Astro Documentation` (e.g. with `Astro Documentation` and `Astro Documentation`) actually correct?**
  _`Astro Documentation` has 2 INFERRED edges - model-reasoned connections that need verification._
- **What connects `name`, `type`, `version` to the rest of the system?**
  _39 weakly-connected nodes found - possible documentation gaps or missing edges._