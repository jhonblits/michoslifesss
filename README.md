# Página de declaración (GitHub Pages)

Página estática: no necesita instalar nada ni compilar.

## Cómo publicarla en GitHub (paso a paso)
1. Entra a github.com y crea un repositorio nuevo (botón **New**). Ponle un nombre poco obvio, por ejemplo `sorpresa-2026-xk7`.
   Con cuenta gratuita el repositorio debe ser **público**, así que cualquiera con el enlace podría verla.
2. En el repositorio: **Add file → Upload files**. Arrastra **todo el contenido** de esta carpeta
   (`index.html`, `style.css`, `script.js` y la carpeta `assets`) y pulsa **Commit changes**.
3. Ve a **Settings → Pages**. En *Build and deployment*, elige **Deploy from a branch**,
   rama `main` y carpeta `/ (root)`. Guarda.
4. Espera 1–2 minutos. Tu enlace será:
   `https://TU-USUARIO.github.io/NOMBRE-DEL-REPOSITORIO/`

## Probarla en tu computador
Abre `index.html` con doble clic. Las tipografías necesitan internet para verse como en el diseño final.

## Personalizar
Todo el texto y las fotos están al inicio de `script.js`, en el bloque `CONFIG`:
- `nombre`: si lo llenas, la pregunta dice "¿Quieres ser mi novia, Nombre?".
- `carta` y `firma`: tu mensaje.
- `lugares`, `juntos`, `corazon`: fotos y pies de foto.
- `errores`: los avisos graciosos cuando presiona "No".
Para cambiar una foto, reemplaza el archivo en `assets/` con el mismo nombre (o cambia la ruta en `CONFIG`).
