import "./Projects.css";

import { useMemo, useRef, useState } from "react";

import { projects } from "@/data/projects";

import useInView from "@/hooks/useInView";
import useSectionParallax from "@/hooks/useSectionParallax";

import ProjectCard from "./ProjectCard";
import Lightbox from "./Lightbox";

const ALL_FILTER = "all";

const ALL_TYPE_FILTER = "all";

const typeFilters = [
  "Frontend",
  "Backend",
  "Fullstack",
];

const filterOrder = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "Firebase",
];

function Projects() {
  const sectionNumberRef = useRef(null);

  useSectionParallax(sectionNumberRef);

  const { ref, isVisible } = useInView();

  const [filter, setFilter] = useState(ALL_FILTER);
  const [typeFilter, setTypeFilter] = useState(ALL_TYPE_FILTER);

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

    return projects.filter((project) => {

      const matchesType =
        typeFilter === ALL_TYPE_FILTER ||
        project.type === typeFilter;

      const matchesTechnology =
        filter === ALL_FILTER ||
        project.tags.includes(filter);

      return matchesType && matchesTechnology;
    });

  }, [filter, typeFilter]);

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

          <div className="project-type-filters">

            <button
              type="button"
              className={`filter-btn ${
                typeFilter === ALL_TYPE_FILTER ? "active" : ""
              }`}
              onClick={() => setTypeFilter(ALL_TYPE_FILTER)}
            >
              Todos
            </button>

            {typeFilters.map((currentType) => (
              <button
                key={currentType}
                type="button"
                className={`filter-btn ${
                  typeFilter === currentType ? "active" : ""
                }`}
                onClick={() => setTypeFilter(currentType)}
              >
                {currentType}
              </button>
            ))}

          </div>

          <div className="project-filters">

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