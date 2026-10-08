import "./About.css";

import { useRef } from "react";

import { education } from "@/data/about";
import { projects as projectList } from "@/data/projects";

import useCounter from "@/hooks/useCounter";
import useInView from "@/hooks/useInView";
import useSectionParallax from "@/hooks/useSectionParallax";

const fullstackCount = projectList.filter(
  (project) => project.type === "Fullstack"
).length;

const demoCount = projectList.filter((project) => project.demo).length;

function About() {
  const sectionNumberRef = useRef(null);

  useSectionParallax(sectionNumberRef);

  const { ref, isVisible } = useInView();

  const projects = useCounter(projectList.length, isVisible);
  const fullstack = useCounter(fullstackCount, isVisible);
  const demos = useCounter(demoCount, isVisible);

  return (
    <section
      id="about"
      className="animate"
      ref={ref}
      data-visible={String(isVisible)}
    >
      <div
        className="section-number"
        ref={sectionNumberRef}
        data-section="01"
      >
        01
      </div>

      <div className="about-inner">
        <div className="about-text">
          <div className="section-label">
            Conoceme un poco
          </div>

          <h2 className="section-title">
            Construyendo soluciones, aprendiendo todos los días.
          </h2>

          <p>
            ¡Hola! Soy Thomas, desarrollador Full Stack Junior y estudiante
            de Licenciatura en Sistemas en la UNNOBA.
          </p>

          <p>
            En mis proyectos trabajo de punta a punta: APIs REST,
            autenticación con roles, bases de datos relacionales y no
            relacionales, interfaces responsive y despliegue, usando
            TypeScript tanto en el frontend como en el backend.
          </p>

          <p>
            Me gusta crear aplicaciones que no solo funcionen bien, sino que
            también ofrezcan una buena experiencia de usuario. Disfruto aprender
            nuevas tecnologías, resolver problemas y mejorar continuamente la
            forma en la que desarrollo software.
          </p>

          <p>
            Actualmente estoy enfocado en seguir ampliando mis conocimientos y
            buscando mi primera experiencia profesional como desarrollador.
          </p>
        </div>

        <div className="about-sidebar">
          <div className="about-stats">
            <div className="stat-row">
              <span className="stat-num">
                {projects}
              </span>

              <span className="stat-label">
                Proyectos publicados
              </span>
            </div>

            <div className="stat-row">
              <span className="stat-num"> {fullstack} </span>
              <span className="stat-label"> Aplicaciones full stack </span>
            </div>

            <div className="stat-row">
              <span className="stat-num"> {demos} </span>
              <span className="stat-label"> Demos online </span>
            </div>
          </div>

          <div className="about-timeline">
            <span className="section-label">
              Formación
            </span>

            {education.map((item) => (
              <div
                key={item.id}
                className="timeline-item"
              >
                <span className="timeline-dot" />

                <div>
                  <span className="timeline-date">
                    {item.date}
                  </span>

                  <span className="timeline-text">
                    {item.text}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;