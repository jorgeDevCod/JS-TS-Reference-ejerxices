# 📘 JS / TS Reference

Una guía de referencia interactiva sobre **métodos de Arrays y Objetos en JavaScript** y los patrones más usados de **TypeScript** para proyectos con React y Next.js — con ejercicios de práctica incluidos.

> Funciona como archivo HTML estático. Sin dependencias, sin instalación, sin internet.

---

## 🚀 Demo rápida

Descarga el archivo y ábrelo directamente en tu navegador:

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/js-ts-reference.git

# Abrir en el navegador
open js-ts-reference.html
# o en Windows:
start js-ts-reference.html
```

---

## ✨ Características

- **3 tabs principales** — JavaScript, TypeScript y Ejercicios de práctica
- **Sidebar con toggle** — ocultable con el botón ☰, adaptable a cualquier pantalla
- **Sintaxis resaltada** — colores tipo Dracula sin librerías externas
- **Botón copiar** en cada bloque de código
- **Desplegables por ejercicio** — solución recomendada + explicación detallada del proceso
- **Filtros por nivel** — Básico, Intermedio, Avanzado
- **100% offline** — sin Google Fonts ni CDN externos
- **Responsive** — funciona en desktop, tablet y móvil

---

## 📚 Contenido

### JavaScript

| Sección | Temas |
|---|---|
| **Arrays Básico** | `push` `pop` `shift` `unshift` `forEach` `includes` `indexOf` `find` `findIndex` `slice` `splice` `join` `Array.from` `Array.isArray` |
| **Arrays Intermedio** | `map` `filter` `reduce` `sort` `some` `every` |
| **Arrays Avanzado** | `flat` `flatMap` `Set` `Map` `Object.groupBy` · Composición funcional |
| **Objetos Básico** | `keys` `values` `entries` `fromEntries` · Spread · Destructuring · Optional chaining · `??` |
| **Objetos Intermedio** | `structuredClone` · `Object.assign` · Deep copy · Getters & Setters |
| **Objetos Avanzado** | `freeze` `seal` `defineProperty` · Proxy · `Object.create` |

### TypeScript

| Sección | Temas |
|---|---|
| **Tipos & Interfaces** | `type` vs `interface` · Extensión · `as const` · `satisfies` · `keyof` · `typeof` |
| **Generics** | Funciones genéricas · Constraints · `fetchData<T>` · Hook genérico reutilizable |
| **Utility Types** | `Partial` `Required` `Pick` `Omit` `Record` · `ReturnType` · `Awaited` · `infer` |
| **Hooks & Componentes** | `useState` `useRef` `useReducer` · Eventos tipados · `children` · `ComponentProps` · `useContext` |
| **Next.js Patterns** | Page props · `generateMetadata` · Server Actions · Zod · Route Handlers |
| **Async & Fetching** | `Promise.all` · `allSettled` · React Query tipado · Patrón Result |

### ⚡ Ejercicios de práctica

**JavaScript — 7 ejercicios:**

| # | Título | Nivel | Temas |
|---|---|---|---|
| 1 | Invertir array sin `.reverse()` | 🟢 Básico | spread, reduce, Array.from |
| 2 | Contar frecuencia de palabras | 🟢 Básico | reduce, objetos |
| 3 | Pipeline: usuarios activos con más de X pedidos | 🟡 Intermedio | filter, map, reduce, sort |
| 4 | Aplanar y deduplicar tags de posts | 🟡 Intermedio | flatMap, Set |
| 5 | Transformar array a objeto indexado por id | 🟡 Intermedio | reduce, Object.fromEntries |
| 6 | Deep merge de objetos | 🔴 Avanzado | recursividad, Object.keys |
| 7 | Implementar memoize genérico | 🔴 Avanzado | closures, Map |

**TypeScript — 5 ejercicios:**

| # | Título | Nivel | Temas |
|---|---|---|---|
| T1 | Tipar props de un componente ProductCard | 🟢 Básico | interface, React.ReactNode |
| T2 | Usar Partial y Omit para formularios | 🟢 Básico | utility types, intersección |
| T3 | Hook `useLocalStorage` tipado con genérico | 🟡 Intermedio | generics, useState |
| T4 | Discriminated union para estados de carga | 🟡 Intermedio | union types, narrowing |
| T5 | Type-safe event emitter con generics | 🔴 Avanzado | generics, keyof, indexed access |

Cada ejercicio incluye:
- 📝 Enunciado y código de inicio
- ✅ Solución recomendada (desplegable)
- 💡 Explicación del proceso y conceptos clave (desplegable)

---

## 📱 Compatibilidad

| Entorno | Soporte |
|---|---|
| Chrome / Edge | ✅ Completo |
| Firefox | ✅ Completo |
| Safari | ✅ Completo |
| Android (Acode, Spck, Chrome) | ✅ Completo |
| iOS (Safari) | ✅ Completo |

---

## 🗂 Estructura del proyecto

```
js-ts-reference/
└── js-ts-reference.html   # Todo en un único archivo HTML autocontenido
```

El proyecto es intencionalmente un **único archivo** para máxima portabilidad: puedes copiarlo a cualquier dispositivo y abrirlo sin configuración.

---

## 🛠 Tecnologías

- **HTML5** semántico
- **CSS3** — variables CSS, `clamp()`, `flexbox`, media queries
- **JavaScript vanilla** — sin frameworks ni dependencias
- Resaltado de sintaxis con **clases CSS** (sin librerías)

---

## 🤝 Contribuir

¿Quieres añadir más ejercicios, corregir algo o añadir una sección nueva?

1. Haz fork del repositorio
2. Crea una rama: `git checkout -b feature/nuevo-ejercicio`
3. Haz tus cambios en el HTML
4. Abre un Pull Request describiendo qué añadiste

### Ideas de contribución

- [ ] Ejercicios de Promesas y async/await puro
- [ ] Sección de patrones de diseño en JS
- [ ] Ejemplos de Zustand o Jotai tipados con TS
- [ ] Traducción al inglés
- [ ] Modo claro

---

## 📄 Licencia

MIT — úsalo libremente para aprender, enseñar o como base para tu propio proyecto.

---

<p align="center">Hecho para aprender JS y TS de forma práctica 🧠</p>
