# Las Marianas

Sitio web de Las Marianas - Tu destino para productos de calidad.

## 🚀 Despliegue en GitHub Pages

Este proyecto está configurado para desplegarse automáticamente en GitHub Pages.

### Pasos para desplegar:

1. **Crear repositorio en GitHub:**
   - Ve a [GitHub](https://github.com) y crea un nuevo repositorio
   - Nombra el repositorio (ej: `las-marianas`)

2. **Subir el código:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git
   git push -u origin main
   ```

3. **Configurar GitHub Pages:**
   - Ve a Settings > Pages en tu repositorio
   - En "Source", selecciona "GitHub Actions"
   - El sitio se desplegará automáticamente en: `https://TU_USUARIO.github.io/TU_REPOSITORIO/`

## 🛠️ Desarrollo Local

Follow these steps:

```sh
# Paso 1: Clonar o navegar al directorio del proyecto
cd <NOMBRE_DEL_PROYECTO>

# Paso 2: Instalar las dependencias
npm install

# Paso 3: Iniciar el servidor de desarrollo
npm run dev
```

## 📦 Tecnologías

Este proyecto está construido con:

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


## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
