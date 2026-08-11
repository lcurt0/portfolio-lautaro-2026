# Portfolio de Lautaro Curto — Contexto del proyecto

Este archivo le da contexto a Claude (vía Claude Code) sobre este proyecto.
Leelo entero antes de hacer cambios.

## Quién es Lautaro (Lau)

Product Designer / Design Engineer híbrido, 10 años de experiencia (community
management, content creator, copywriter, gestión de proyectos, brand design,
y los últimos 4+ años en product design puro). Trabaja actualmente en
Redbility, equipo JUNGLE, en Córdoba (Andalucía, España), remoto. Antes pasó
por Steve Edge Design, Nice Studio (estudio propio, fundado con su pareja),
Dtail Studio, AvatarLA y Mediamonks (donde trabajó para Netflix, Spotify y
Warner Bros haciendo contenido/branding).

Busca trabajo con más autonomía y flexibilidad — el portfolio es la
herramienta central de esa búsqueda.

## Posicionamiento y voz

- Se posiciona como **híbrido Product Designer / Design Engineer**: diseña
  Y programa (HTML/CSS, React con ayuda de IA). No es un "técnico puro" —
  su diferencial es la curiosidad, la adaptabilidad y la trayectoria
  atravesando disciplinas distintas (contenido → marca → gestión → producto).
- Eje conceptual del sitio: la frase **"a real human being"** (de la
  película Drive), usada en el hero. La idea: en la era del screening con
  IA y los portfolios genéricos, la calidez y el criterio humano son el
  diferencial.
- Tono de escritura: cálido pero serio, primera persona, sin jerga
  corporativa. Frases cortas. Nada de "growth hacker" ni bullet points
  vacíos. Siempre en español (target: mercado español/LatAm por ahora;
  una versión en inglés quedó pendiente para más adelante).
- Lau NO quiere sonar como "pixel pusher" ni como diseñador puramente
  técnico/frío — la actitud de fondo es optimismo, curiosidad y
  compañerismo, no solidez técnica fría.

## Sistema de diseño ("Washi / Hanko")

Dirección elegida tras comparar 4 alternativas (editorial japandi ganó
sobre: Grid & Signal/técnico, Zine Optimista/colorido, Terminal Craft/oscuro).

- **Paleta**: `--washi:#F3EFE6` (fondo papel cálido), `--washi-2:#EAE3D3`
  (panel secundario), `--sumi:#211D19` (tinta/texto), `--hanko:#B93A22`
  (rojo sello, acento principal), `--moss:#5C6E52` (acento secundario),
  `--line:#D9D0BC` (líneas finas).
- **Tipografía**: Fraunces (display/serif editorial, vía Google Fonts),
  Space Grotesk (cuerpo), JetBrains Mono (etiquetas/metadata).
- **Elemento firma**: el "hanko" — un sello cuadrado rojo con iniciales
  "L C" (SVG inline, clase `.hanko`), aparece junto al nombre en la nav,
  junto a cada proyecto, y en el footer. Representa firmar el trabajo
  como una pieza artesanal.
- **Layout**: editorial asimétrico, mucho aire, hairlines finos en vez de
  cards con sombra. Nada de esquinas muy redondeadas ni gradientes.

Todo el CSS vive en `styles.css` (compartido por todas las páginas). No
crear estilos inline ni duplicar tokens.

## Estructura del sitio

- `index.html` — landing de una sola página con anclas: hero, #about,
  #work (tarjetas-resumen de proyectos, NO los casos completos), #writing,
  #contact.
- `proyectos/*.html` — una página completa por caso de estudio, con
  estructura fija: case-hero → contexto → proceso (pasos numerados) →
  decisiones/resultado → reflexión → nav a caso anterior/siguiente.
  Ver `proyectos/occident.html` como plantilla de referencia.
- `script.js` — nav mobile toggle + scroll reveal (IntersectionObserver).
  Compartido por todas las páginas.
- `CNAME` — necesario para GitHub Pages, contiene `lautarocurto.com`.
  NO BORRAR ni renombrar.

Cuando agregues un proyecto nuevo: crear el HTML en `proyectos/`, agregar
la tarjeta-resumen correspondiente en `index.html` dentro de `#work`, y
actualizar los links "caso anterior/siguiente" en la página adyacente.

## Casos ya documentados

1. **Occident** (renovación e-cliente, seguros) — bajo NDA, contenido
   basado en fuentes públicas.
2. **Acciona Motosharing / Silence** (movilidad eléctrica) — bajo NDA,
   contenido basado en fuentes públicas.
3. **Konfía Seguros** — proyecto personal, sin NDA, puede tener más detalle.
4. **ACCIONA Carbon Technologies** (cálculo/compensación de huella de
   carbono) — bajo NDA. **PENDIENTE**: confirmar si se pueden usar
   capturas de la App Store; por ahora tiene un placeholder de imagen
   (`.img-placeholder`) sin reemplazar.

Todos los proyectos bajo NDA usan el bloque `.case-note` para aclarar que
el contenido es público/no confidencial. Mantené ese patrón en casos
nuevos que también tengan NDA.

## Deploy

- Hosteado en **GitHub Pages**, repo `portfolio-lautaro-2026` (usuario
  GitHub: `lcurt0`).
- Dominio propio **lautarocurto.com** comprado en Namecheap (DNS ya
  apuntado a GitHub Pages, funcionando).
- HTTPS forzado activo.
- Cualquier commit a `main` se refleja solo en producción en unos minutos.

## Pendientes conocidos (no asumir que están resueltos)

- Idea pendiente: hover con preview de imagen al pasar el mouse sobre cada
  proyecto en `#work` de `index.html` — estilo similar a portfolios de
  agencia, pero adaptado a la identidad Washi/Hanko (sin sans-serif
  gigante ni negro puro). Requiere JS para posicionar la imagen junto al
  cursor, y necesita fallback para mobile (sin hover). Esperar a tener
  las 4 imágenes de proyecto listas antes de implementar.
- Meta tags `og:image` / `og:title` / `og:description` para que el link
  comparta bien en LinkedIn/WhatsApp.
- Verificar/crear favicon con el hanko.
- Página 404 personalizada con identidad del sitio.

- Confirmar NDA de ACCIONA Carbon Technologies para sumar capturas reales.
- Posible sección de fotografía (Lau tiene Sony a7C) — evaluada pero no
  construida aún.
- Posible versión en inglés del sitio, para roles internacionales.
- Sección de escritura enlaza a un Medium desactualizado
  (medium.com/@drk0_) — Lau planea retomarlo pero no hay fecha.

## Auditoría de accesibilidad (WCAG 2.1 AA) — 2026-08-11

El sitio pasó por una auditoría manual de accesibilidad sobre las 5 páginas
(`index.html` + los 4 `proyectos/*.html`). Resultado:

**Ya cumplía (sin cambios):**
- Contraste de color: `--hanko`, `--sumi-soft` y `--moss` sobre `--washi`
  superan 4.5:1 en claro y oscuro (rango real: 4.60:1–8.38:1; el más
  ajustado es `--hanko` en modo oscuro, 4.60:1).
- `alt` en todas las `<img>`, `aria-hidden` en todos los `<svg>` decorativos.
- `aria-label` en el toggle de tema y nombre accesible en el toggle de
  menú mobile; `aria-expanded` ya se actualizaba dinámicamente vía JS.
- Un solo `<h1>` por página, sin saltos de nivel entre h2/h3.
- `<header>`, `<main>`, `<nav>`, `<footer>` semánticos (no divs).
- `lang="es"` presente en las 5 páginas.

**Corregido:**
- Agregado `:focus-visible` global (outline visible en `--hanko`) para
  links, botones y `[tabindex]` — antes solo existía en `.nav-links a`.
- Agregado skip link ("Saltar al contenido") al inicio del `<body>` en
  las 5 páginas, con target `#main-content` en cada `<main>`.
- Agregado `aria-label="Navegación entre casos"` a `.case-nav` en las 4
  páginas de proyecto, para distinguirlo del `<nav>` principal del header.

## Cómo trabajar en este proyecto

- Mantené el tono y el sistema de diseño existente — no introduzcas
  nuevas paletas, fuentes o estilos de card sin que Lau lo pida
  explícitamente.
- No inventes datos, métricas ni cotas de proyectos bajo NDA. Si falta
  información, preguntá antes de asumir.
- Antes de publicar contenido nuevo sobre un proyecto de cliente,
  confirmá con Lau si hay NDA y qué se puede mostrar.
- Priorizá HTML/CSS/JS plano — nada de frameworks pesados, es parte de
  la identidad "design engineer, sin sobre-ingeniería" del sitio.
- Antes de subir cualquier imagen nueva: optimizarla (comprimir, ancho máximo
  ~1600px para capturas grandes, formato WebP cuando sea posible) y sumar
  siempre un <p class="img-caption"> debajo describiendo brevemente qué se ve.
