# Sistema Multilenguaje - Portfolio Astro

## 🌍 Arquitectura i18n

Este portfolio implementa un sistema de internacionalización (i18n) nativo de Astro con **3 idiomas**:

- 🇦🇷 **Español (es)** - Idioma por defecto
- 🇺🇸 **Inglés (en)**
- 🇧🇷 **Portugués (pt)**

## 📁 Estructura del Sistema

```
src/
├── i18n/
│   ├── es.json          # Diccionario español
│   ├── en.json          # Diccionario inglés
│   ├── pt.json          # Diccionario portugués
│   └── utils.ts         # Helpers y utilidades
├── data/
│   ├── about.ts         # AboutMe en 3 idiomas
│   ├── experience.ts    # Experiencia laboral en 3 idiomas
│   └── projects.ts      # 7 proyectos en 3 idiomas
├── pages/
│   ├── index.astro      # Página principal (español)
│   ├── en/
│   │   └── index.astro  # Versión inglés
│   └── pt/
│       └── index.astro  # Versión portugués
└── components/
    ├── LanguageSelector.astro  # Selector de idioma
    ├── Header.astro            # Header con nav traducido
    ├── Footer.astro            # Footer traducido
    ├── AboutMe.astro           # Auto-detecta idioma
    ├── Experience.astro        # Auto-detecta idioma
    └── Projects.astro          # Auto-detecta idioma
```

## 🔧 Configuración

### astro.config.mjs

```javascript
export default defineConfig({
  site: "https://andresfrei.dev",
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en", "pt"],
    routing: {
      prefixDefaultLocale: false, // español sin prefijo /es
    },
  },
});
```

### Estructura de URLs

- `/` → Español (idioma por defecto)
- `/en/` → Inglés
- `/pt/` → Portugués

## 📝 Diccionarios (JSON)

Cada idioma tiene su archivo JSON con esta estructura:

```json
{
  "nav": {
    "experience": "Experiencia",
    "projects": "Proyectos",
    "about": "Sobre mí",
    "contact": "Contacto"
  },
  "hero": {
    "badge": "Disponible para trabajar",
    "title": "Hey, soy Andrés Frei",
    "subtitle": "DBA & Full Stack Developer",
    "description": "...",
    "contact": "Contáctame",
    "downloadCV": "Descargar CV"
  },
  "experience": {
    "title": "Experiencia laboral",
    "current": "Actualidad"
  },
  "projects": {
    "title": "Proyectos destacados"
  },
  "about": {
    "title": "Sobre mí",
    "content": "..."
  },
  "footer": {
    "madeWith": "Hecho con",
    "collaboration": "y gran colaboración del gran",
    "home": "Inicio"
  },
  "meta": {
    "title": "Portfolio de Andrés Frei - DBA & Full Stack Developer",
    "description": "...",
    "keywords": "..."
  }
}
```

## 🛠️ Utilidades (utils.ts)

### Funciones principales

**useTranslations(lang)**

```typescript
const t = useTranslations("es");
t("nav.experience"); // → "Experiencia"
t("hero.title"); // → "Hey, soy Andrés Frei"
```

**getLangFromUrl(url)**

```typescript
const currentLang = getLangFromUrl(Astro.url);
// Detecta automáticamente el idioma de la URL
```

**getLocalizedPath(path, lang)**

```typescript
getLocalizedPath("/", "en"); // → "/en/"
getLocalizedPath("/", "es"); // → "/"
getLocalizedPath("/blog", "pt"); // → "/pt/blog"
```

## 💻 Uso en Componentes

### En páginas (.astro)

```astro
---
import { useTranslations } from "@/i18n/utils";
const t = useTranslations('es'); // o 'en', 'pt'
---

<Layout
  title={t('meta.title')}
  description={t('meta.description')}
  lang="es"
>
  <h1>{t('hero.title')}</h1>
  <p>{t('hero.description')}</p>
</Layout>
```

### En componentes reutilizables

```astro
---
import { getLangFromUrl, useTranslations } from "@/i18n/utils";

const currentLang = getLangFromUrl(Astro.url);
const t = useTranslations(currentLang);
---

<nav>
  <a href="/#experiencia">{t('nav.experience')}</a>
  <a href="/#proyectos">{t('nav.projects')}</a>
  <a href="/#sobre-mi">{t('nav.about')}</a>
</nav>
```

## 🎨 LanguageSelector

El selector de idioma es un dropdown con:

- 🌐 Icono de globo
- Código del idioma actual (ES/EN/PT)
- Menú desplegable con banderas
- Indicador visual del idioma activo
- Navegación automática a la ruta traducida

```astro
<LanguageSelector />
```

**Características:**

- Mantiene la ruta actual al cambiar idioma
- Cierre automático al hacer clic fuera
- Soporte para teclado (Escape)
- Animaciones suaves
- Responsive

## 🔍 SEO Multilenguaje

El Layout incluye automáticamente:

### Tags hreflang

```html
<link rel="alternate" hreflang="es" href="https://andresfrei.dev/" />
<link rel="alternate" hreflang="en" href="https://andresfrei.dev/en/" />
<link rel="alternate" hreflang="pt" href="https://andresfrei.dev/pt/" />
<link rel="alternate" hreflang="x-default" href="https://andresfrei.dev/" />
```

### Open Graph por idioma

```html
<meta property="og:locale" content="es_AR" />
<meta property="og:locale:alternate" content="en_US" />
<meta property="og:locale:alternate" content="pt_BR" />
```

### Canonical URL

Cada página tiene su URL canónica única por idioma.

### Structured Data

JSON-LD con descripción traducida según el idioma.

## 📌 Buenas Prácticas

### ✅ HACER

- Usar siempre `t('clave.anidada')` para texto traducible
- Agregar nuevas claves a TODOS los archivos JSON (es, en, pt)
- Mantener la misma estructura en todos los diccionarios
- Usar `getLangFromUrl()` en componentes reutilizables
- Especificar `lang` prop en Layout

### ❌ EVITAR

- Ternarios inline `{lang === 'es' ? 'texto1' : 'texto2'}`
- Hardcodear textos directamente en componentes
- Olvidar actualizar un idioma al agregar traducciones
- Crear rutas personalizadas que rompan el patrón

## 🚀 Agregar Nuevo Idioma

1. **Configurar en astro.config.mjs**

```javascript
locales: ["es", "en", "pt", "fr"]; // Agregar 'fr'
```

2. **Crear diccionario**

```bash
cp src/i18n/es.json src/i18n/fr.json
# Editar y traducir todo el contenido
```

3. **Actualizar utils.ts**

```typescript
import fr from "./fr.json";

export const languages = {
  es: "Español",
  en: "English",
  pt: "Português",
  fr: "Français", // Agregar
};

export const ui = {
  es,
  en,
  pt,
  fr, // Agregar
} as const;
```

4. **Actualizar LanguageSelector**

```typescript
const langFlags = {
  es: "🇦🇷",
  en: "🇺🇸",
  pt: "🇧🇷",
  fr: "🇫🇷", // Agregar bandera
} as const;

// Actualizar regex
const currentPath = Astro.url.pathname.replace(/^\/(en|es|pt|fr)/, "") || "/";
```

5. **Crear página**

```bash
mkdir src/pages/fr
cp src/pages/index.astro src/pages/fr/index.astro
# Cambiar lang="es" a lang="fr"
# Cambiar useTranslations('es') a useTranslations('fr')
```

6. **Actualizar Layout.astro**

- Agregar hreflang para el nuevo idioma
- Agregar locale en Open Graph
- Extender ternarios si es necesario (o mejor: refactorizar a función)

## 🎯 Casos de Uso

### Contenido con formato

```json
{
  "about": {
    "content": "Texto con **markdown** y\n\nsaltos de línea."
  }
}
```

### Contenido HTML

Para contenido complejo, usar componentes separados por idioma en lugar de JSON.

### Plurales y variables

Si necesitas interpolación, crea una función helper:

```typescript
export function pluralize(count: number, lang: Language) {
  const words = {
    es: { projects: ["proyecto", "proyectos"] },
    en: { projects: ["project", "projects"] },
    pt: { projects: ["projeto", "projetos"] },
  };
  return count === 1 ? words[lang].projects[0] : words[lang].projects[1];
}
```

## 📊 Estado Actual

- ✅ Configuración i18n nativa de Astro
- ✅ 3 idiomas: español, inglés, portugués
- ✅ Diccionarios JSON completos
- ✅ Selector visual de idioma
- ✅ SEO multilenguaje completo
- ✅ Routing automático
- ✅ Footer traducido con diccionarios
- ✅ **AboutMe completo en 3 idiomas** (`src/data/about.ts`)
- ✅ **Experience completo en 3 idiomas** (`src/data/experience.ts`)
- ✅ **Projects completo en 3 idiomas** (7 proyectos traducidos en `src/data/projects.ts`)

## 🔮 Mejoras Futuras

- [ ] Sistema de fechas localizadas
- [ ] Detección automática de idioma del navegador
- [ ] Persistencia de preferencia en localStorage
- [ ] Sitemap multilenguaje automático
- [ ] Agregar más proyectos traducidos

## 🤝 Mantenimiento

Al agregar nuevo contenido:

1. Agregar clave en `es.json`
2. Copiar y traducir a `en.json`
3. Copiar y traducir a `pt.json`
4. Usar `t('nueva.clave')` en componentes
5. Verificar en las 3 versiones del sitio

---

**Notas:** Este sistema sigue las mejores prácticas de Astro para sitios estáticos multilenguaje, con SEO optimizado y URLs amigables. Es escalable, mantenible y no requiere JavaScript del lado del cliente para funcionar.
