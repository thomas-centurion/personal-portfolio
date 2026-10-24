import portfolio from "@/assets/images/projects/portfolio.webp";
import isaac from "@/assets/images/projects/isaac.webp";
import session from "@/assets/images/projects/session.webp";
import oftalmologo from "@/assets/images/projects/oftalmologo.webp";
import eventos from "@/assets/images/projects/eventos.webp";
import prime from "@/assets/images/projects/prime.webp";
import gym from "@/assets/images/projects/gym.webp";


export const projects = [
  {
    id: 1,
    title: "Isaac Atlas",
    type: "Fullstack",
    summary: "Bitácora comunitaria de seeds y runs de The Binding of Isaac: Repentance+, donde los usuarios registran sus partidas y la comunidad las busca, las vota y las clasifica. Monorepo con React, Node.js y MongoDB.",
    highlights: [
      "Buscador de runs por personaje, ítems iniciales, ítems que tiene y que no tiene, dificultad y resultado.",
      "Votos y veredictos con rankings hot, top (límite inferior de Wilson) y new, más una seed del día.",
      "Cuentas con email y contraseña, Google o Steam, perfiles públicos, reportes y panel de moderación.",
      "Monorepo con paquete compartido de esquemas Zod, tests contra un MongoDB real, CI y despliegue en Render; interfaz bilingüe ES/EN, accesible (WCAG AA) y responsive.",
    ],
    image: isaac,
    tags: ["TypeScript", "React", "Node.js", "Express", "MongoDB", "Docker"],
    github: "https://github.com/thomas-centurion/isaac-atlas",
    demo: "https://isaac-atlas.onrender.com/",
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
    title: "Plataforma de Eventos e Inscripciones",
    type: "Backend",
    summary: "API REST donde organizadores publican eventos y los usuarios se inscriben, con Node.js, Express y MongoDB. Proyecto final del curso Backend II de Coderhouse.",
    highlights: [
      "Autenticación con Passport y JWT guardado en cookie, con tres roles (user, organizer y admin) y permisos sobre recursos propios.",
      "Inscripciones con control de cupos y emails de confirmación con Nodemailer.",
      "Arquitectura por capas con DAO, Repository, Service y DTO.",
      "Listado de eventos con filtros, paginación y orden, más pruebas automatizadas y una colección de Postman.",
    ],
    image: eventos,
    tags: ["Node.js", "Express", "MongoDB", "JWT"],
    github: "https://github.com/thomas-centurion/coderhouse-backend-2",
  },
  {
    id: 5,
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
    id: 6,
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
    id: 7,
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
