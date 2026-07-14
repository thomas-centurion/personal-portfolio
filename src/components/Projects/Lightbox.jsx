import "./Projects.css";

import { useEffect } from "react";

function Lightbox({ project, onClose }) {
  useEffect(() => {
    if (!project) return;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className={`lightbox ${ project ? "open" : "" }`}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Vista previa de ${project.title}`}
    >
      <button
        className="lightbox-close"
        onClick={onClose}
        aria-label="Cerrar vista previa"
      >
        ✕
      </button>

      <img
        className="lightbox-img"
        src={project.image}
        alt={`Vista previa de ${project.title}`}
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}

export default Lightbox;