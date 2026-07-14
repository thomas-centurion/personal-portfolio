// Placeholder
import placeholder from "@/assets/images/projects/placeholder.webp";
import portfolio from "@/assets/images/projects/portfolio.webp";

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
    title: "Proyecto 03",
    type: "Frontend",
    description:
      "Descripción breve del proyecto. Explicar qué problema resuelve, qué tecnologías usé y cuál fue mi aporte principal.",
    image: placeholder,
    tags: ["HTML", "CSS", "JavaScript"],
    github: "",
    demo: "",
  },
];