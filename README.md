# Eduardo Terra - Web profesional v0

Experiencia web editorial para Eduardo Terra, psicólogo especializado en
psicoterapia psicoanalítica breve.

La dirección creativa utiliza el faro como metáfora de orientación. Esta
versión mantiene el carácter cinematográfico, pero lo equilibra con claridad,
confianza profesional, accesibilidad y acciones de contacto visibles.

## Qué se ha refinado

- Hero comprensible en pocos segundos.
- Identificación inmediata de Eduardo como psicólogo sanitario.
- Atención presencial en Collado Villalba y la Sierra de Guadarrama.
- Terapia online para España y Europa hispanohablante.
- CTAs discretos para solicitar consulta, contactar y ver la modalidad online.
- Ocho capítulos con una función informativa clara.
- Mayor contraste, tamaño de texto e interlineado.
- Sistema unificado de botones, radios, bordes, sombras y superficies.
- Movimiento GSAP más lento y contenido.
- Animaciones simplificadas en móvil.
- Contenido visible y utilizable si GSAP no carga.
- Formulario demo presentado como una integración pendiente, no como un error.
- SEO local integrado de forma natural en títulos y contenidos.

## Estructura

1. El malestar.
2. El foco terapéutico.
3. El método.
4. La alianza terapéutica.
5. Modalidades presencial y online.
6. Eduardo Terra.
7. Biblioteca privada.
8. Contacto.

## Datos incorporados

- Más de 10 años de experiencia.
- Máster en Psicología General Sanitaria.
- Máster en Clínica de la Psicosomática.
- Psicoterapia psicoanalítica breve.
- Sesiones de 60 minutos.
- Adultos, adolescentes desde 17 años, familias y parejas.
- Presencial en Collado Villalba, Sierra de Guadarrama y noroeste de Madrid.
- Online para España y Europa hispanohablante.

## Datos pendientes

Eduardo debe facilitar o confirmar antes de publicar:

- Número de colegiado.
- Fotografía profesional.
- Teléfono.
- Email profesional.
- Dirección exacta de consulta.
- Precio de las sesiones y formas de pago.
- Política de cambios y cancelaciones.
- Disponibilidad y horario de atención.
- Titulaciones redactadas exactamente como deben mostrarse.
- Textos legales, privacidad y política de cookies.

Los puntos de sustitución están marcados con comentarios `CLIENTE:` en
`index.html`.

## Qué debe revisar Eduardo

- Que la descripción del método representa fielmente su forma de trabajar.
- Que los colectivos atendidos y la edad mínima son correctos.
- Que las áreas geográficas y la modalidad online son exactas.
- Que desea mostrar ambas titulaciones con esta jerarquía.
- Que aprueba el tono editorial de los textos.
- Que los tres temas propuestos para la biblioteca son adecuados.
- Qué canal debe recibir las solicitudes de consulta.

## Biblioteca y nuevos artículos

Los tres artículos actuales son propuestas editoriales marcadas como
`Próximamente`; no aparentan estar publicados.

Para añadir un artículo manualmente:

1. Duplicar un bloque `<article class="essay">` dentro de `.essay-list`.
2. Actualizar número, categoría, título y resumen.
3. Cuando exista una página real, convertir el bloque en un enlace o enlazar su
   título.
4. Mantener la biblioteca sin comentarios ni elementos de distracción.

Para una versión con publicaciones frecuentes se recomienda conectar la lista a
un CMS sencillo.

## Formulario

El formulario es una demostración visual:

- No envía ni almacena datos.
- No procesa información clínica.
- Incluye un mensaje visible explicando su estado.
- Está preparado para conectarse a un canal definitivo y añadir antispam.

## Movimiento y accesibilidad

GSAP y ScrollTrigger se cargan localmente desde:

- `assets/vendor/gsap.min.js`
- `assets/vendor/ScrollTrigger.min.js`

La web:

- Respeta `prefers-reduced-motion`.
- Reduce parallax, blur y microinteracciones en móvil.
- Mantiene foco visible y labels asociados.
- Usa `aria-live` para el estado del formulario.
- Conserva todo el contenido si JavaScript o GSAP fallan.

## Pasos para publicar

1. Incorporar foto, colegiado y datos de contacto definitivos.
2. Obtener la aprobación escrita de textos y credenciales.
3. Conectar el formulario a un canal seguro con protección antispam.
4. Preparar aviso legal, privacidad y cookies.
5. Añadir dominio, hosting, correo profesional y HTTPS.
6. Crear favicon, imagen social, canonical y datos estructurados.
7. Convertir y optimizar la imagen del faro a WebP o AVIF.
8. Revisar la política de consentimiento y tratamiento de datos.
9. Probar en móviles reales y navegadores principales.
10. Ejecutar auditorías finales de accesibilidad, SEO y Core Web Vitals.

## Abrir en local

Puede abrirse directamente desde `index.html`, ya que las dependencias de
animación son locales.

También puede servirse mediante:

```powershell
npx serve -l 4173 .
```

Después, abrir `http://127.0.0.1:4173`.
