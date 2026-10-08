import portfolio from "@/assets/images/projects/portfolio.webp";
import footballtm from "@/assets/images/projects/footballtm.svg";
import prime from "@/assets/images/projects/prime.webp";
import gym from "@/assets/images/projects/gym.webp";
import taxflow from "@/assets/images/projects/taxflow.webp";

export const projects = [
  {
    id: 1,
    title: "TaxFlow",
    type: "Fullstack",
    summary: "Plataforma SaaS B2B para centralizar obligaciones tributarias, vencimientos, documentos y auditoría de empresas, con frontend en Angular y backend modular en NestJS.",
    highlights: [
      "Autenticación JWT con tres roles y autorización resuelta en el backend, con rate limiting en el login.",
      "Job programado que detecta vencimientos y genera notificaciones idempotentes, garantizadas con restricciones únicas en PostgreSQL.",
      "Transiciones de estado validadas, auditoría persistente de cada cambio y gestión de documentos con validación de tipo y contenido.",
      "Migraciones con TypeORM, PostgreSQL en Docker y tests unitarios y E2E.",
    ],
    image: taxflow,
    tags: ["TypeScript", "Angular", "NestJS", "PostgreSQL", "TypeORM", "Docker"],
    github: "https://github.com/thomas-centurion/taxflow",
  },
  {
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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
