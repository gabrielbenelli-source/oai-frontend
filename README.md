# OAI - Interfaz de Inteligencia Artificial (Prototipo Alpha)

Este repositorio contiene el prototipo inicial y Producto Mínimo Viable (MVP) de **OAI**, una interfaz web diseñada para la interacción y gestión de procesos optimizados mediante Inteligencia Artificial. Este desarrollo forma parte de la fase fundacional del **Prototipo Alpha**.

El objetivo principal de este prototipo es validar la arquitectura del frontend, la experiencia de usuario (UX/UI) y la viabilidad de los flujos de comunicación antes de la integración con modelos de lenguaje (LLMs) en producción.

---

## 🚀 Características Clave (Requerimientos Prototipo Alpha)

Para cumplir con los estándares exigidos por el Proyecto Alpha, la interfaz incorpora y planifica las siguientes capacidades:

*   **Diseño Modular y Escalable:** Construido sobre componentes reutilizables que permiten añadir nuevas herramientas de gestión sin romper la estética existente.
*   **Simulación de Respuestas de IA:** Incluye una capa de servicio asíncrona (`aiService.js`) para emular tiempos de carga y procesamiento de datos en tiempo real.
*   **Estética Profesional y Accesible:** Una paleta de colores optimizada (tonos azules institucionales), tipografía clara y diseño completamente responsivo.
*   **Control de Sesiones:** Estructura lateral (Sidebar) preparada para la gestión de historial de interacciones, configuraciones y navegación interna.

---

## 🛠️ Tecnologías Utilizadas

*   **Framework:** [Vue.js 3](https://vuejs.org/) (Ecosistema moderno, rápido y reactivo).
*   **Herramienta de Construcción:** [Vite](https://vitejs.dev/) (Para un entorno de desarrollo ultra veloz).
*   **Estilos y Maquetación:** [Bootstrap 5](https://getbootstrap.com/) combinado con **Sass/SCSS** para una personalización profunda de los componentes visuales.
*   **Control de Versiones:** Git & GitHub.

---

## 📂 Estructura Principal del Proyecto

```text
├── public/              # Archivos estáticos
├── src/
│   ├── assets/          # Imágenes, logos y recursos globales
│   ├── components/      # Componentes UI reutilizables (Chat, Sidebar, etc.)
│   ├── services/        # Lógica de negocio y simulación de APIs (aiService.js)
│   ├── style.scss       # Personalización global y variables de Bootstrap
│   ├── App.vue          # Componente raíz de la aplicación
│   └── main.js          # Punto de entrada de Vue
├── .gitignore           # Exclusiones de Git (node_modules, etc.)
└── package.json         # Dependencias y scripts del proyecto