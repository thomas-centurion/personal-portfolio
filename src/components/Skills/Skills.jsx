import "./Skills.css";

import { useRef } from "react";

import { skillGroups } from "@/data/skills";

import useInView from "@/hooks/useInView";
import useSectionParallax from "@/hooks/useSectionParallax";

function Skills() {
  const sectionNumberRef = useRef(null);

  useSectionParallax(sectionNumberRef);

  const { ref, isVisible } = useInView();

  return (
    <section
      id="skills"
      ref={ref}
      data-visible={String(isVisible)}
    >
      <div
        className="section-number"
        ref={sectionNumberRef}
        data-section="02"
      >
        02
      </div>

      <div className="skills-inner">
        <div className="skills-header">
          <div className="section-label">
            Tecnologías
          </div>

          <h2 className="section-title">
            Stack.
          </h2>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div
              key={group.id}
              className="skill-group"
            >
              <span className="skill-cat">
                {group.category}
              </span>

              <div className="skill-items">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="skill-item"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;