import portfolio from "@/assets/images/projects/portfolio.webp";
import session from "@/assets/images/projects/session.webp";
import oftalmologo from "@/assets/images/projects/oftalmologo.webp";
import footballtm from "@/assets/images/projects/footballtm.svg";
import prime from "@/assets/images/projects/prime.webp";
import gym from "@/assets/images/projects/gym.webp";
import taxflow from "@/assets/images/projects/taxflow.webp";


export const projects = [
  {
    id: 1,
    title: "Prime Inmobiliaria",
    type: "Fullstack",
    summary: "Aplicación web full stack para una inmobiliaria: catálogo público con búsqueda y filtros, y panel administrativo para gestionar propiedades y consultas.",
    highlights: [
      "Separé las funcionalidades públicas y privadas mediante rutas protegidas y autenticación con JWT.",
      "Control de acceso por roles en el panel de administración.",
      "Filtros de propiedades, validaciones y manejo de errores.",
      "Interfaz responsive con una arquitectura clara entre frontend, backend y base de datos.",
    ],
    image: prime,
    tags: ["JavaScript", "React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/thomas-centurion/prime-inmobiliaria",
    demo: "https://prime-inmobiliaria.vercel.app/",
  },
  {
    id: 2,
    title: "Gym Management",
    type: "Fullstack",
    summary: "Aplicación web full stack para administrar socios, membresías, pagos y asistencias de un gimnasio.",
    highlights: [
      "Modelé el ciclo de vida de las membresías (actuales, futuras e históricas) centralizando las reglas de negocio en el backend, con PostgreSQL como fuente de verdad.",
      "Autenticación con JWT y control de acceso por roles.",
      "Validaciones y manejo de errores en toda la aplicación.",
      "Frontend y backend desplegados de forma independiente.",
    ],
    image: gym,
    tags: ["TypeScript", "React", "Tailwind CSS", "Node.js", "Express", "PostgreSQL"],
    github: "https://github.com/thomas-centurion/gym-management/tree/main",
    demo: "https://gym-management-demo-frontend.vercel.app/",
  },
  {
    id: 3,
    title: "Football Tournament Manager",
    type: "Backend",
    summary: "API REST para gestionar torneos de fútbol 5, equipos, jugadores y partidos.",
    highlights: [
      "Arquitectura por capas con Controllers, Services, Repositories y DAO.",
      "Persistencia con MongoDB y Mongoose, con relaciones entre entidades.",
      "Generación de tablas de posiciones a partir de los resultados de los partidos.",
      "Validaciones de datos y manejo centralizado de errores.",
    ],
    image: footballtm,
    tags: ["Node.js", "Express", "MongoDB"],
    github: "https://github.com/thomas-centurion/football-tournament-manager",
  },
  {
    id: 4,
    title: "SOF Pergamino",
    type: "Frontend",
    summary: "Rediseño de práctica del sitio de una clínica oftalmológica de Pergamino, desarrollado con React, TypeScript y Vite y publicado en Cloudflare Workers. No es el sitio oficial.",
    highlights: [
      "Sitio de cinco páginas (Inicio, Servicios, Staff, Nosotros y Contacto) con navegación mediante React Router.",
      "Identidad visual inspirada en las láminas del test de Ishihara: campos de puntos dibujados en canvas que esconden letras.",
      "Formulario de turnos en tres pasos y formulario de contacto, como maqueta (no envían datos).",
      "Pensado para celular y para personas con baja visión: tipografía Atkinson Hyperlegible y buen contraste.",
    ],
    image: oftalmologo,
    tags: ["TypeScript", "React", "CSS"],
    github: "https://github.com/thomas-centurion/sof-oftalmologia",
    demo: "https://sof-pergamino.thomas-centurion.workers.dev/",
  },
  {
    id: 5,
    title: "Session Haus",
    type: "Frontend",
    summary: "Landing page para Session Haus, una cervecería de Pergamino, desarrollada con React, TypeScript y Vite y publicada en Cloudflare Workers.",
    highlights: [
      "Estado abierto/cerrado calculado en tiempo real a partir de los turnos del local, incluidos los que cierran después de la medianoche, y promos destacadas según el día.",
      "Carta completa con precios y happy hour, organizada por categorías.",
      "Contenido centralizado en archivos de datos para actualizar precios, promos y horarios sin tocar componentes.",
      "Imágenes optimizadas en WebP responsive y accesos directos a delivery por WhatsApp, Instagram y Google Maps.",
    ],
    image: session,
    tags: ["TypeScript", "React", "CSS"],
    github: "https://github.com/thomas-centurion/session-landing",
    demo: "https://session-haus.thomas-centurion.workers.dev/",
  },
  {
    id: 6,
    title: "Personal Portfolio",
    type: "Frontend",
    summary: "Este sitio: mi portfolio personal desarrollado con React y Vite.",
    highlights: [
      "Tema claro/oscuro persistente y diseño responsive.",
      "Formulario de contacto funcional con EmailJS.",
      "Animaciones e interacciones implementadas sin librerías externas.",
    ],
    image: portfolio,
    tags: ["JavaScript", "React", "CSS"],
    github: "https://github.com/thomas-centurion/personal-portfolio",
    demo: "https://thomas-centurion.vercel.app/",
  },

];
