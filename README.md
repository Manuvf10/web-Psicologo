# Eduardo Terra - Web editorial v0

Web profesional para Eduardo Terra, psicólogo especializado en psicoterapia
psicoanalítica breve.

Esta versión abandona la estética de landing oscura y pasa a una dirección
editorial: más espacio en blanco, tipografía como material principal,
composición asimétrica, imágenes recortadas y movimiento mínimo.

## Referencias y criterio

- Aesop: sobriedad, silencio visual y jerarquía tipográfica.
- Monocle: tono editorial, estructura clara y autoridad discreta.
- Kinfolk: espacio, madurez, pausa y composición fotográfica.
- Minimal Gallery: retícula abierta, piezas visuales contenidas y ausencia de
  ornamento innecesario.
- Atelier/portfolio de autor: identidad personal, ritmo propio y composición
  menos previsible.

No se copia ninguna referencia. Se toma su filosofía para evitar una web de
psicólogo genérica.

## Qué incluye

- Header sticky con menú accesible.
- Hero editorial claro y no cinematográfico.
- Titular principal: psicoterapia breve para comprender el foco del malestar.
- Microdatos visibles: experiencia, duración, modalidad y enfoque.
- Bloque conceptual sobre comprensión del malestar.
- Explicación de psicoterapia psicoanalítica breve.
- Áreas de acompañamiento como índice editorial, no como cards.
- Método en secuencia numerada.
- Sección fuerte de Eduardo con placeholder de fotografía real.
- Cita visual sobre el iceberg.
- Modalidades presencial y online.
- Biblioteca privada de artículos sin comentarios.
- Formulario demo sin envío real.
- Footer con datos legales pendientes.

## Datos incorporados

- Más de 10 años de experiencia.
- Máster en Psicología General Sanitaria.
- Máster en Clínica de la Psicosomática.
- Psicoterapia psicoanalítica breve.
- Sesiones de 60 minutos.
- Adultos, adolescentes desde 17 años, familias y parejas.
- Presencial en Collado Villalba, Sierra de Guadarrama y noroeste de Madrid.
- Online para España y Europa hispanohablante.

## Datos pendientes para Eduardo

- Número de colegiado.
- Fotografía profesional editorial.
- Teléfono.
- Email profesional.
- Dirección exacta de consulta.
- Precio de sesiones.
- Formas de pago.
- Política de cambios y cancelaciones.
- Disponibilidad y horarios.
- Textos legales, privacidad y cookies.
- Confirmación exacta de titulaciones y forma de nombrarlas.

Los puntos de sustitución están marcados con comentarios `CLIENTE:` en
`index.html`.

## Artículos

Los artículos actuales están marcados como `Próximamente`.

Para añadir uno nuevo:

1. Duplicar un bloque `<article class="publication">` dentro de
   `.publication-list`.
2. Cambiar número, categoría y título.
3. Si existe una página real, convertir el título o el bloque en enlace.
4. Mantener la biblioteca sin comentarios ni elementos sociales.

## Formulario

El formulario está en modo demo:

- No envía datos.
- No guarda datos.
- No usa `localStorage`.
- No procesa información clínica.
- Muestra un aviso al enviar.
- Está preparado para conectarse a un canal seguro.

Antes de conectar el formulario:

- Definir responsable del tratamiento.
- Añadir consentimiento y política de privacidad.
- Añadir protección antispam.
- Enviar a un canal profesional seguro.
- Evitar recoger información clínica sensible en campos abiertos.

## Seguridad y RGPD

- No hay claves ni tokens en el frontend.
- No hay scripts externos innecesarios salvo Google Fonts.
- GSAP se carga localmente desde `assets/vendor`.
- Los datos legales se muestran como pendientes para no simular cumplimiento.
- El formulario no transmite información en esta versión.

## Accesibilidad y rendimiento

- Foco visible.
- Labels reales.
- Menú móvil accesible con `aria-expanded`.
- `prefers-reduced-motion` respetado.
- Sin cursor personalizado.
- Animaciones GSAP progresivas con fallback.
- Imágenes integradas con `alt`.
- Diseño responsive sin dependencia de hover.

## Checklist antes de publicar

1. Sustituir imagen provisional por retrato real.
2. Añadir colegiado, teléfono, email y dirección exacta.
3. Validar textos con Eduardo.
4. Crear aviso legal, privacidad y cookies.
5. Conectar formulario a backend o servicio seguro.
6. Optimizar imagen del faro y retrato a WebP/AVIF.
7. Añadir favicon y canonical.
8. Revisar Open Graph definitivo.
9. Ejecutar Lighthouse y corregir métricas.
10. Probar en móvil real.

## Desarrollo local

Puede abrirse directamente desde `index.html`, porque GSAP está incluido de
forma local.

También puede servirse con:

```powershell
npx serve -l 4173 .
```

Después abre `http://127.0.0.1:4173`.
