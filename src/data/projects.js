// Placeholder
import placeholder from "@/assets/images/projects/placeholder.webp";
import portfolio from "@/assets/images/projects/portfolio.webp";
import interactivemap from "@/assets/images/projects/interactivemap.webp";

export const projects = [
  {
    id: 1,
    title: "Personal Portfolio",
    type: "Frontend",
    description: "Mi portfolio personal desarrollado con React para presentar mis proyectos, habilidades y experiencia. Incluye diseño responsive, tema claro/oscuro, animaciones, cursor personalizado, filtros de proyectos, lightbox y un formulario de contacto funcional con EmailJS.",
    image: portfolio,
    tags: ["HTML", "CSS", "JavaScript", "React", "EmailJS"],
    github: "https://github.com/thomas-centurion/personal-portfolio",
    demo: "https://thomas-centurion.vercel.app/",
  },
  {
    id: 2,
    title: "Proyecto 02",
    type: "Full Stack",
    description:
      "Descripción breve del proyecto. Explicar qué problema resuelve, qué tecnologías usé y cuál fue mi aporte principal.",
    image: placeholder,
    tags: ["HTML", "CSS", "React", "Firebase"],
    github: "",
    demo: "",
  },
  {
    id: 3,
    title: "Interactive Map",
    type: "Frontend",
    description: "Aplicación web interactiva desarrollada con JavaScript que permite explorar información general de los países directamente desde un mapa mundial. Al seleccionar un país, se muestran datos como bandera, capital, población, moneda, idiomas y fronteras mediante una interfaz dinámica e intuitiva.",
    image: interactivemap,
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/thomas-centurion/interactive-map",
    demo: "https://thomas-centurion.github.io/interactive-map/",
  },
];