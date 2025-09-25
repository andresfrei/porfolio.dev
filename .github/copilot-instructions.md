# Portfolio Astro - Instrucciones para Agentes AI

## Arquitectura del Proyecto

Este es un portfolio personal construido con **Astro 4.1.3** y **Tailwind CSS**, utilizando TypeScript y la fuente variable Onest. Es un sitio estático con enfoque en la simplicidad y rendimiento.

### Stack Tecnológico
- **Framework**: Astro 4.1.3 con integración Tailwind
- **Styling**: Tailwind CSS 3.4.1 con clases utilitarias personalizadas
- **Tipografía**: `@fontsource-variable/onest` como fuente principal
- **Desarrollo**: pnpm como package manager preferido

## Estructura y Patrones

### Componentes Clave
- `src/layouts/Layout.astro`: Layout principal con metadata, Google Analytics y diseño base
- `src/components/SectionContainer.astro`: Wrapper reutilizable con max-width de 740px
- `src/components/Projects.astro`: Sistema de tags con configuración centralizada
- `src/components/icons/`: Colección de iconos SVG como componentes Astro

### Patrones de Diseño
- **Tema dual**: Soporte nativo para modo claro/oscuro usando `prefers-color-scheme`
- **Layout responsive**: Diseño mobile-first con breakpoints md/lg
- **Componentes slot-based**: Uso extensivo de `<slot />` para contenido dinámico

### Convenciones de Estilo
- **Background gradients**: Uso de gradientes radiales complejos para efectos visuales
- **Color scheme**: Paleta neutral (100/950) con colores específicos por tecnología
- **Spacing**: Sistema consistente con `py-44`, `pb-32`, `pb-24` para secciones

## Estructura de Datos

### Sistema de Tags en Projects.astro
```javascript
const TAGS = {
  NEXT: { name: "Next.js", class: "bg-black text-white", icon: NextJS },
  TAILWIND: { name: "Tailwind CSS", class: "bg-[#003159] text-white", icon: Tailwind }
}
```

### Configuración de Proyectos
- Array `PROJECTS` con título, descripción, link, imagen y tags
- Imágenes en `/public/projects/` con formato WebP
- Descripciones usando template literals para formato multilínea

## Comandos de Desarrollo

```bash
pnpm dev          # Servidor de desarrollo
pnpm build        # Build con type checking (astro check && astro build)
pnpm preview      # Preview del build de producción
```

## Consideraciones Importantes

- **Path mapping**: Usa alias `@/` para importaciones desde `src/`
- **SEO**: Meta description y title personalizados por página
- **Analytics**: Google Analytics configurado con Partytown
- **Accessibility**: `scroll-behavior: smooth` con respeto a `prefers-reduced-motion`
- **Assets**: Favicon SVG y avatar JPEG en `/public/`

## Modificaciones Comunes

- **Nuevos proyectos**: Agregar al array `PROJECTS` con imagen WebP correspondiente
- **Nuevas tecnologías**: Definir en objeto `TAGS` con clase de color consistente
- **Iconos**: Crear componentes SVG en `src/components/icons/`
- **Secciones**: Usar `SectionContainer` con spacing estándar `pb-24`