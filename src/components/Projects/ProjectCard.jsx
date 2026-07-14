import "./Projects.css";

function ProjectCard({ project, onPreview }) {
  const handlePreview = () => {
    onPreview(project);
  };

  return (
    <article className="project-card">
      <div className="project-num">
        {String(project.id).padStart(2, "0")}
      </div>

      <div className="project-content">
        <div className="project-type"> {project.type} </div>

        <h3 className="project-title"> {project.title} </h3>

        <div
          className="project-preview"
          onClick={handlePreview}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              handlePreview();
            }
          }}
          role="button"
          tabIndex={0}
          aria-label={`Ver imagen de ${project.title}`}
        >
          <img
            src={project.image}
            alt={`Vista previa de ${project.title}`}
            loading="lazy"
            width={640}
            height={360}
          />
        </div>

        <p className="project-desc"> {project.description} </p>

        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="project-tag" > {tag} </span>
          ))}
        </div>

        {(project.github || project.demo) && (
          <div className="project-actions">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link" >
                Código
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" > <path d="M7 17L17 7" /> <path d="M7 7h10v10" /> </svg>
              </a>
            )}

            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link" >
                Demo
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" > <path d="M7 17L17 7" /> <path d="M7 7h10v10" /> </svg>
              </a>
            )}

          </div>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;