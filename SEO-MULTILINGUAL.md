# SEO Multilenguaje - Guía de Implementación

## ✅ Implementaciones Actuales

### 1. **Hreflang Tags** ✓

Correctamente configurados en `Layout.astro` para indicar las versiones alternativas del contenido:

- `hreflang="es"` → Español (Argentina)
- `hreflang="en"` → Inglés (Estados Unidos)
- `hreflang="pt"` → Portugués (Brasil)
- `hreflang="x-default"` → Versión predeterminada

### 2. **Open Graph Multilenguaje** ✓

- `og:locale` dinámico según idioma (es_AR, en_US, pt_BR)
- `og:locale:alternate` para versiones alternativas
- `og:site_name` traducido por idioma
- Metadata completa (title, description, image)

### 3. **Canonical URLs** ✓

URLs canónicas correctas para cada versión:

- Español: `https://andresfrei.dev/`
- Inglés: `https://andresfrei.dev/en/`
- Portugués: `https://andresfrei.dev/pt/`

### 4. **Structured Data (JSON-LD)** ✓

Schema.org Person con descripción multilenguaje:

- Información profesional
- Links a redes sociales
- Ubicación geográfica
- Habilidades técnicas

### 5. **Keywords Multilenguaje** ✓

Keywords específicas por idioma desde diccionarios JSON:

- Español: términos en español
- Inglés: términos en inglés
- Portugués: términos en portugués

### 6. **Sitemap XML Multilenguaje** ✓

Sitemap generado dinámicamente con:

- Todas las URLs en los 3 idiomas
- Links alternativos (xhtml:link) entre versiones
- Prioridades y frecuencias de actualización
- Formato compatible con Google Search Console

## 📊 Estructura de URLs SEO-Friendly

```
https://andresfrei.dev/           → Español (default)
https://andresfrei.dev/en/        → Inglés
https://andresfrei.dev/pt/        → Portugués
```

**Ventajas:**

- ✅ URLs limpias sin parámetros (?lang=)
- ✅ Fácil de recordar y compartir
- ✅ Google identifica claramente el idioma
- ✅ El idioma por defecto (español) sin prefijo

## 🔍 Checklist de SEO Multilenguaje

### Básico

- [x] HTML lang attribute dinámico
- [x] Hreflang tags para todos los idiomas
- [x] Meta description traducida
- [x] Title tag traducido
- [x] Canonical URLs correctas
- [x] Keywords por idioma

### Avanzado

- [x] Open Graph locale
- [x] Twitter Cards
- [x] Structured Data multilenguaje
- [x] Sitemap con alternates
- [x] Robots.txt actualizado

### Content

- [x] Navegación traducida
- [x] Contenido principal traducido
- [x] Experiencia laboral traducida
- [x] Proyectos traducidos
- [x] Biografía traducida

## 🚀 Mejoras Implementadas

### 1. Sitemap XML Dinámico

**Archivo:** `src/pages/sitemap.xml.ts`

Genera automáticamente un sitemap que incluye:

- URLs de todas las páginas en los 3 idiomas
- Tags `xhtml:link` con rel="alternate" y hreflang
- Prioridades (home = 1.0, otras = 0.8)
- Frecuencia de actualización (weekly)
- lastmod con fecha actual

**Ejemplo de URL en el sitemap:**

```xml
<url>
  <loc>https://andresfrei.dev/</loc>
  <lastmod>2025-10-02T00:00:00.000Z</lastmod>
  <changefreq>weekly</changefreq>
  <priority>1.0</priority>
  <xhtml:link rel="alternate" hreflang="en" href="https://andresfrei.dev/en/" />
  <xhtml:link rel="alternate" hreflang="pt" href="https://andresfrei.dev/pt/" />
</url>
```

### 2. Keywords Dinámicas

Las keywords ahora se obtienen del diccionario i18n según el idioma:

- Español: "Desarrollador Web, Base de Datos, IA..."
- Inglés: "Web Developer, Database, AI..."
- Portugués: "Desenvolvedor Web, Banco de Dados, IA..."

### 3. Robots.txt Optimizado

Actualizado para:

- Apuntar al sitemap correcto: `sitemap.xml`
- Bloquear URLs con parámetros: `Disallow: /*?*`
- Mantener crawl-delay educado: `Crawl-delay: 1`

## 📈 Próximos Pasos (Opcional)

### Para Google Search Console

1. Agregar el sitio con todas las versiones:

   - `https://andresfrei.dev/`
   - `https://andresfrei.dev/en/`
   - `https://andresfrei.dev/pt/`

2. Enviar el sitemap:

   - Ir a "Sitemaps"
   - Agregar: `https://andresfrei.dev/sitemap.xml`

3. Verificar hreflang:
   - Ir a "Indexación" → "Páginas"
   - Buscar "Versiones alternativas de páginas"
   - Verificar que no haya errores

### Para Mejor Rendimiento SEO

- [ ] Agregar imágenes localizadas (og:image con textos traducidos)
- [ ] Crear contenido único por idioma (no solo traducción)
- [ ] Implementar breadcrumbs con structured data
- [ ] Agregar FAQ schema por idioma
- [ ] Implementar AMP si el contenido crece

### Para Analytics

- [ ] Google Analytics con seguimiento por idioma
- [ ] Segmentar audiencias por idioma
- [ ] Medir conversiones por versión lingüística

## 🎯 Comandos Útiles

```bash
# Ver el sitemap generado
pnpm dev
# Luego visitar: http://localhost:4321/sitemap.xml

# Build de producción
pnpm build

# Preview del build
pnpm preview
```

## 📚 Referencias

- [Google: Gestionar versiones de sitios en varios idiomas](https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites)
- [Hreflang Best Practices](https://developers.google.com/search/docs/specialty/international/localized-versions)
- [Sitemaps XML con múltiples idiomas](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap#multilingual)
- [Schema.org Multilingual](https://schema.org/docs/multilingual.html)

## ⚠️ Notas Importantes

1. **Consistencia de URLs**: Mantén siempre la misma estructura de URLs
2. **Hreflang bidireccional**: Cada página debe referenciar todas sus alternativas
3. **Content duplication**: Google entiende que es contenido traducido gracias a hreflang
4. **Canonical self-referencing**: Cada versión tiene su propio canonical
5. **No mezclar**: No uses subdominios + directorios para idiomas diferentes

## ✨ Resultados Esperados

Con estas implementaciones, tu portfolio debería:

- ✅ Aparecer en resultados de búsqueda localizados
- ✅ Google mostrará la versión correcta según el idioma del usuario
- ✅ Mejor CTR con meta descriptions en el idioma correcto
- ✅ Rich snippets en todos los idiomas
- ✅ Sin penalización por contenido duplicado
- ✅ Indexación más rápida de todas las versiones
