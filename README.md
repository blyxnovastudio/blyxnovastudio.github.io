# 🧉 Las Marianas - E-commerce Demo

> **Proyecto Demo** - Sitio web ficticio de una tienda de mates, termos y artículos para regalar.

Proyecto de demostración de un e-commerce moderno para "Las Marianas", una tienda ficticia especializada en productos de mate argentino, termos, materas y artículos para regalo.

🌐 **[Ver Demo en Vivo](https://blyxnovastudio.github.io/)**

---

## 📋 Descripción

Las Marianas es un sitio web de e-commerce desarrollado como proyecto demo que simula una tienda online real. El sitio incluye:

- ✨ Landing page con hero section personalizado
- 🛍️ Catálogo de productos destacados
- 🛒 Carrito de compras funcional con Zustand
- 📝 Formulario de checkout con validación
- 💰 Cálculo automático de envío (gratis sobre $50,000 ARS)
- 📱 Diseño responsive y moderno
- 🎨 UI/UX pulida con Tailwind CSS y shadcn/ui

---

## 🚀 Tecnologías

Este proyecto está construido con tecnologías modernas:

- **React 18.3** - Biblioteca UI
- **TypeScript** - Tipado estático
- **Vite 7** - Build tool y dev server
- **Tailwind CSS** - Framework CSS utility-first
- **shadcn/ui** - Componentes UI accesibles
- **Zustand** - Estado global para el carrito
- **React Router** - Navegación SPA
- **Lucide React** - Iconos
- **GitHub Actions** - CI/CD automático

---

## 🛠️ Desarrollo Local

```bash
# Clonar el repositorio
git clone https://github.com/blyxnovastudio/blyxnovastudio.github.io.git
cd blyxnovastudio.github.io

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Abrir en http://localhost:8080
```

---

## 📦 Comandos Disponibles

```bash
npm run dev          # Servidor de desarrollo
npm run build        # Build de producción
npm run preview      # Preview del build
npm run lint         # Linter ESLint
npm run test         # Tests con Vitest
npm run test:watch   # Tests en modo watch
```

---

## 🎨 Características Principales

### 🛒 Sistema de Carrito
- Agregar/eliminar productos
- Ajustar cantidades
- Persistencia con localStorage
- Cálculo automático de totales y envío

### 📱 Diseño Responsive
- Mobile-first approach
- Adaptable a tablets y desktop
- Navegación optimizada para touch

### 🎯 UI/UX
- Scroll suave entre secciones
- Animaciones y transiciones fluidas
- Feedback visual en interacciones
- Componentes accesibles (a11y)

---

## 📄 Estructura del Proyecto

```
├── public/              # Archivos estáticos
├── src/
│   ├── assets/         # Imágenes y recursos
│   ├── components/
│   │   ├── pages/      # Páginas (Index, NotFound)
│   │   ├── ui/         # Componentes UI reutilizables
│   │   └── hooks/      # Custom hooks
│   ├── stores/         # Zustand stores (carrito)
│   ├── App.tsx         # Componente principal
│   └── main.tsx        # Entry point
├── .github/
│   └── workflows/      # GitHub Actions (deployment)
└── ...config files
```

---

## 🚀 Despliegue

El proyecto está configurado para desplegar automáticamente en GitHub Pages mediante GitHub Actions.

Cada push a la rama `main` dispara:
1. ✅ Build del proyecto
2. ✅ Optimización de assets
3. ✅ Deploy a GitHub Pages

**URL de producción:** https://blyxnovastudio.github.io/

---

## 📝 Notas

- Este es un **proyecto de demostración** con fines educativos
- Los productos y precios son ficticios
- No se procesan pagos reales
- El formulario de checkout solo muestra una alerta de confirmación

---

## 👨‍💻 Autor

**Blyx Nova Studio**

---

## 📜 Licencia

Este proyecto es de código abierto y está disponible bajo una licencia permisiva para fines educativos y de demostración.

- React 18
- TypeScript
- Vite 7
- Tailwind CSS
- shadcn/ui
- React Router
- TanStack Query

## 📝 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Compila para producción
- `npm run preview` - Vista previa del build de producción
- `npm run lint` - Ejecuta ESLint
- `npm run test` - Ejecuta las pruebas

## 🎨 Características

- ✅ Diseño responsive
- ✅ Componentes UI modernos con shadcn/ui
- ✅ Rutas con React Router
- ✅ Optimización automática con Vite
- ✅ TypeScript para type safety
- ✅ Despliegue automático en GitHub Pages



