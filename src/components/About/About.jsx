import "./About.css";

import { useRef } from "react";

import { timeline } from "@/data/about";

import useCounter from "@/hooks/useCounter";
import useInView from "@/hooks/useInView";
import useSectionParallax from "@/hooks/useSectionParallax";

function About() {
  const sectionNumberRef = useRef(null);

  useSectionParallax(sectionNumberRef);

  const { ref, isVisible } = useInView();

  const projects = useCounter(5, isVisible);
  const courses = useCounter(4, isVisible);
  const age = useCounter(21, isVisible);

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
            ¡Hola! Soy Thomas, estudiante de Licenciatura en Sistemas y
            desarrollador web en formación.
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
                {projects}+
              </span>

              <span className="stat-label">
                Proyectos
              </span>
            </div>

            <div className="stat-row">
              <span className="stat-num"> {courses}+ </span>
              <span className="stat-label"> Cursos </span>
            </div>

            <div className="stat-row">
              <span className="stat-num"> {age} </span>
              <span className="stat-label"> Años </span>
            </div>
          </div>

          <div className="about-timeline">
            {timeline.map((item) => (
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