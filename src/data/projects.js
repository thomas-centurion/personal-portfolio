// Placeholder
import placeholder from "@/assets/images/projects/placeholder.webp";
import portfolio from "@/assets/images/projects/portfolio.webp";
import interactivemap from "@/assets/images/projects/interactivemap.webp";
import ecommerce from "@/assets/images/projects/ecommerce.webp";

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
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/thomas-centurion/interactive-map",
    demo: "https://thomas-centurion.github.io/interactive-map/",
  },
];