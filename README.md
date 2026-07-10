# 🐉 Dragon Ball API Consumer 🐉

<div align="center">
  <p><strong>Aplicación web interactiva para explorar el universo de Dragon Ball, consumiendo datos en tiempo real mediante una arquitectura modular en React.</strong></p>
  <a href="https://jonasmoran.github.io/dragonball-api-consumer/"><strong>Explorar la Demo en Vivo →</strong></a>
</div>



##  Descripción del Proyecto

Este proyecto es una aplicación pura de práctica diseñada para dominar el consumo de APIs REST públicas, la gestión de estados globales/locales en **React** y la modularización de componentes en entornos de producción modernos utilizando **Vite**. 

La aplicación recupera de forma dinámica el listado de personajes de la API de Dragon Ball, renderizándolos en tarjetas interactivas organizadas a través de un sistema de paginación fluida. Su interfaz fue construida bajo la filosofía **Mobile-First**, garantizando una experiencia visual completamente responsive y fluida en cualquier dispositivo. Al interactuar con cualquier tarjeta, el usuario puede profundizar en el trasfondo del personaje mediante una vista detallada de su descripción.

## Características Clave

* **Manejo de Estados Asíncronos:** Interfaz que incluye pantallas de carga (*loading states*) y control de errores en pantalla en caso de fallos de conexión con la API.
* **Diseño Adaptable:** Arquitectura CSS basada en un enfoque Mobile-First para asegurar compatibilidad total en pantallas móviles y de escritorio.
* **Navegación Fluida:** Sistema de paginación dinámica que distribuye el contenido de 10 en 10 personajes de forma eficiente.

##  Tecnologías Utilizadas
Para garantizar un buen aprendizaje de las tecnologias bases, **no se utilizaron librerías externas**. El proyecto fue construido de forma pura con:

* **React**: Biblioteca principal para la construcción de la interfaz basada en componentes.
* **Vite**: Herramienta de empaquetado de última generación para un entorno de desarrollo ultra rápido.
* **Axios**: Cliente HTTP para la gestión limpia de peticiones asíncronas hacia la API.
* **CSS Modules**: Estilizado encapsulado a nivel de componente, evitando colisiones en el alcance global y permitiendo el mapeo de clases dinámicas.


## Arquitectura y Modularización

Uno de los mayores aprendizajes durante el desarrollo fue comprender el **porqué** de la modularización en aplicaciones reales. El proyecto está segmentado en archivos pequeños y especializados, donde cada componente cumple con el principio de responsabilidad única:

```text
├── src/
│   ├── assets/                     # Recursos estaticos globales
│   │   └── logo.png
│   ├── components/                 # Componentes modulares
│   │   ├── Character.jsx           # Tarjeta Individual de personaje
│   │   ├── Character.module.css
│   │   ├── CharacterList.jsx       # Contenedor y estructura de tarjetas
│   │   ├── CharacterList.module.css
│   │   ├── Footer.jsx              # Pie de pagina estatico
│   │   ├── Footer.module.css
│   │   ├── Modal.jsx               # Ventana emergente de personaje
│   │   ├── Modal.module.css
│   │   ├── Navbar.jsx              # Barra de navegacion
│   │   ├── Navbar.module.css
│   │   ├── Pagination.jsx          # Control de pagina dinamico
│   │   └── Pagination.module.css
│   ├── App.css      
│   ├── App.jsx                     # App principal
│   ├── index.css
│   └── main.jsx                    # Punto de Entrada de React
├── .gitignore  
├── eslint.config.js
├── index.html                      # Plantilla base de la aplicacion
├── package-lock.json
├── package.json                    # Scripts y Dependencias
└── vite.config.js
```

##  Retos y Aprendizajes

### 1. Consumo de API y Flujo Asíncrono
El mayor desafío técnico radicó en asimilar el flujo completo del consumo de una API pública: desde la petición asíncrona mediante un cliente como `Axios`, el manejo del ciclo de vida del componente con React hooks, hasta el renderizado seguro de la información en pantalla controlando estados de carga.

### 2. Estilizado Dinámico Escalable
Se implementó un sistema de mapeo en JavaScript acoplado a **CSS Modules** para asignar colores visuales específicos (badges) a las tarjetas según la raza (`Saiyan`, `Human`, `Android`, `Namekian`) o género del personaje. Esto eliminó por completo el uso de estilos en línea (`inline styles`), centralizando el diseño en el archivo CSS y manteniendo el JSX limpio y legible.

### 3. Filosofía de Archivos Pequeños
Más allá de entender el concepto teórico de "componente", este proyecto sirvió para interiorizar la necesidad de fracturar la interfaz en bloques de código pequeños y reutilizables. Esto facilita drásticamente el mantenimiento del software, el aislamiento de bugs y la escalabilidad del diseño estético.


## 💻 Instalación y Configuración Local

Sigue estos pasos para clonar y ejecutar el proyecto en tu entorno local:

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/JonasMoran/dragonball-api-consumer
   cd dragonball-api-consumer
   ```

2. **Instalar dependencias:**
   Vite configurará automáticamente el entorno. Solo ejecuta:
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   Abre [http://localhost:5173](http://localhost:5173) en tu navegador para ver la aplicación corriendo.

---

## Flujo de Trabajo (Git)

El proyecto se gestionó siguiendo una metodología rigurosa de control de versiones mediante el uso de ramas (`main` para producción y `develop` para integración de características) y aplicando la convención de **Conventional Commits** para mantener un historial limpio, legible y profesional.