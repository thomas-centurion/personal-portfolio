import "./Projects.css";

import { useMemo, useRef, useState } from "react";

import { projects } from "@/data/projects";

import useInView from "@/hooks/useInView";
import useSectionParallax from "@/hooks/useSectionParallax";

import ProjectCard from "./ProjectCard";
import Lightbox from "./Lightbox";

const ALL_FILTER = "all";

const filterOrder = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "Firebase",
  "EmailJS",
];

function Projects() {
  const sectionNumberRef = useRef(null);

  useSectionParallax(sectionNumberRef);

  const { ref, isVisible } = useInView();

  const [filter, setFilter] = useState(ALL_FILTER);
  const [selectedProject, setSelectedProject] = useState(null);

  const closeLightbox = () => {
    setSelectedProject(null);
  };

  const filters = useMemo(() => {
    const availableTags = new Set(
      projects.flatMap((project) => project.tags)
    );

    return [
      ALL_FILTER,
      ...filterOrder.filter((tag) =>
        availableTags.has(tag)
      ),
    ];
  }, []);

  const filteredProjects = useMemo(() => {
    if (filter === ALL_FILTER) {
      return projects;
    }

    return projects.filter((project) =>
      project.tags.includes(filter)
    );
  }, [filter]);

  return (
    <>
      <section
        id="projects"
        className="animate"
        ref={ref}
        data-visible={String(isVisible)}
      >
        <div className="projects-inner">
          <div className="projects-header">
            <div className="section-number" ref={sectionNumberRef} data-section="03" > 03 </div>

            <div className="section-label"> Proyectos </div>
            <h2 className="section-title"> Lo que construí. </h2>
            
          </div>

          <div className="project-filters">
            {filters.map((currentFilter) => (
              <button
                key={currentFilter}
                type="button"
                className={`filter-btn ${
                  filter === currentFilter
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  setFilter(currentFilter)
                }
              >
                {currentFilter === ALL_FILTER
                  ? "Todos"
                  : currentFilter}
              </button>
            ))}
          </div>

          <div className="projects-list">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onPreview={setSelectedProject}
              />
            ))}
          </div>
        </div>
      </section>

      <Lightbox
        project={selectedProject}
        onClose={closeLightbox}
      />
    </>
  );
}

export default Projects;