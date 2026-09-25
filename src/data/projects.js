import portfolio from "@/assets/images/projects/portfolio.webp";
import interactivemap from "@/assets/images/projects/interactivemap.webp";
import ecommerce from "@/assets/images/projects/ecommerce.webp";
import footballtm from "@/assets/images/projects/footballtm.svg";
import prime from "@/assets/images/projects/prime.webp"; 
import virgocueva from "@/assets/images/projects/virgocueva.svg"; 

export const projects = [
  {
    id: 1,
    title: "Personal Portfolio",
    type: "Frontend",
    description: "Mi portfolio personal desarrollado con React para presentar mis proyectos, habilidades y experiencia. Incluye diseño responsive, tema claro/oscuro, animaciones, cursor personalizado, filtros de proyectos, lightbox y un formulario de contacto funcional con EmailJS.",
    image: portfolio,
    tags: ["HTML", "CSS", "JavaScript", "React"],
    github: "https://github.com/thomas-centurion/personal-portfolio",
    demo: "https://thomas-centurion.vercel.app/",
  },
  {
    id: 2,
    title: "E-commerce React",
    type: "Frontend",
    description: "Aplicación de e-commerce desarrollada con React que permite explorar productos, filtrarlos por categoría y gestionar un carrito de compras. Utiliza React Router para la navegación, Context API para el manejo del estado global y Firebase Firestore como base de datos para almacenar y obtener los productos.",
    image: ecommerce,
    tags: ["HTML", "CSS", "JavaScript", "React", "Firebase"],
    github: "https://github.com/thomas-centurion/proyecto-ecommerce/tree/main",
    demo: "https://tcenturion-ecommerce.vercel.app/",
  },
  {
    id: 3,
    title: "Interactive Map",
    type: "Frontend",
    description: "Aplicación web interactiva desarrollada con JavaScript que permite explorar información general de los países directamente desde un mapa mundial. Al seleccionar un país, se muestran datos como bandera, capital, población, moneda, idiomas y fronteras mediante una interfaz dinámica e intuitiva.",
    image: interactivemap,
    tags: ["JavaScript"],
    github: "https://github.com/thomas-centurion/interactive-map",
    demo: "https://thomas-centurion.github.io/interactive-map/",
  },
  {
    id: 4,
    title: "Football Tournament Manager",
    type: "Backend",
    description: "API REST desarrollada con Node.js y Express para gestionar torneos de fútbol 5, equipos, jugadores y partidos. Implementa una arquitectura por capas con Controllers, Services, Repositories y DAO, utilizando MongoDB y Mongoose para la persistencia de datos. Incluye validaciones de datos, relaciones entre entidades, manejo centralizado de errores, operaciones CRUD y generación de tablas de posiciones a partir de los resultados de los partidos.",
    image: footballtm,
    tags: ["Node.js", "Express", "MongoDB"],
    github: "https://github.com/thomas-centurion/football-tournament-manager",
  },
  {
    id: 5,
    title: "Prime Inmobiliaria",
    type: "Fullstack",
    description: "Aplicación web full stack completa para una inmobiliaria, desarrollada con React, Node.js, Express y MongoDB. Permite explorar y filtrar propiedades, consultar información detallada y enviar consultas, mientras que el panel de administración incorpora autenticación con JWT, gestión de propiedades y seguimiento de consultas. El proyecto implementa control de acceso por roles, validaciones, manejo de errores, protección de rutas y una interfaz responsive, integrando frontend, backend y base de datos en una aplicación completamente funcional.",
    image: prime,
    tags: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/thomas-centurion/prime-inmobiliaria",
    demo: "https://prime-inmobiliaria.vercel.app/",
  },
  {
  id: 6,
  title: "La VirgoCueva",
  type: "Fullstack",
  description: "Red social privada desarrollada desde cero con React Native, Expo, TypeScript y Supabase, utilizando IA como herramienta de desarrollo. Incluye autenticación, perfiles, publicaciones con imágenes, likes, Revirgs, seguidores, comentarios, notificaciones, búsqueda de usuarios y almacenamiento seguro con Row Level Security.",
  image: virgocueva,
  tags: ["TypeScript", "React Native", "Expo", "Supabase", "PostgreSQL"],
  github: "https://github.com/thomas-centurion/la-virgocueva",
},
];