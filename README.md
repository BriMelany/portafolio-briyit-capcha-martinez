# Portafolio · Briyit Melany Capcha Martinez

Landing de portafolio hecha con **Angular 19** (componentes standalone), **HTML** y **CSS** puro (sin frameworks de UI).
Las fuentes (Inter y Luckiest Guy) están autoalojadas con `@fontsource`, así que no depende de Google Fonts.

## Requisitos
- Node.js 20.19+ o 22 LTS  ·  npm 10+

## Comandos
```bash
npm install          # instala dependencias (solo la primera vez)
npm start            # desarrollo en http://localhost:4200
npm run build        # genera la versión de producción en dist/portafolio-briyit/browser
```

## Dónde editar
| Qué | Archivo |
|---|---|
| Correo, teléfono, WhatsApp, LinkedIn, GitHub, ruta del CV | `src/app/data/portfolio.data.ts` → `PERFIL` |
| Proyectos (título, tecnologías, imagen, enlace) | `src/app/data/portfolio.data.ts` → `PROYECTOS` |
| Habilidades | `src/app/data/portfolio.data.ts` → `SKILLS_FILA_1 / SKILLS_FILA_2` |
| Colores y tipografías | `src/styles.css` (variables `:root`) |
| Textos de "Sobre mí" | `src/app/components/about/about.component.html` |
| Imágenes e iconos | `public/assets/img` y `public/assets/icons` |
| Tu CV en PDF | `public/cv/CV_Briyit_Capcha.pdf` (ruta en `PERFIL.cv`) |

## Animaciones incluidas
- **Hero:** el título se escribe letra por letra (`hero.component.ts`) y luego entra el resto del texto; el anillo gira lento.
- **Proyectos:** las capturas de páginas largas se recorren dentro de la tarjeta al pasar el cursor (en móvil, al centrarse en pantalla). Para añadir un proyecto con captura larga: `largo: true` y `duracion` (segundos) en `PROYECTOS`.
- **Entrada al hacer scroll:** directiva `appReveal` (`src/app/directives/reveal.directive.ts`).
- **Header:** barra de progreso de lectura, sombra al bajar y resaltado de la sección activa.
- Todo se desactiva automáticamente si el usuario tiene "reducir movimiento" activado en su sistema.

## Estructura
```
src/app/
├── app.component.ts          # ensambla las secciones
├── data/portfolio.data.ts    # contenido editable
└── components/
    ├── header/  hero/  marquee/  about/
    └── skills/  projects/  contact/  footer/    (cada uno: .ts + .html + .css)
```

## Despliegue
Genera `npm run build` y sube **el contenido** de `dist/portafolio-briyit/browser/`
(no la carpeta `dist` completa) a cualquiera de estas opciones:

**Hosting tradicional (Hostinger, cPanel, etc.)**: sube el contenido a `public_html/` por el
administrador de archivos o FTP. Si lo pones en una subcarpeta (p. ej. `/portafolio/`) compila con
`npx ng build --base-href /portafolio/`.

**Netlify**: conecta el repositorio (el `netlify.toml` ya está configurado) o arrastra la carpeta
`browser` a https://app.netlify.com/drop.

**Vercel**: importa el repositorio; el `vercel.json` ya indica el comando y la carpeta de salida.

**GitHub Pages**:
```bash
npx ng build --base-href /NOMBRE-DEL-REPO/
npx angular-cli-ghpages --dir=dist/portafolio-briyit/browser
```
Luego activa Pages en Settings → Pages → rama `gh-pages`.
