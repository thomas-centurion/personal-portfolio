import "./Hero.css";

import { useRef } from "react";

import useParallax from "@/hooks/useParallax";
import useMagnetic from "@/hooks/useMagnetic";

function Hero() {
  const heroRef = useRef(null);
  const shapeRef = useRef(null);

  const projectsButtonRef = useMagnetic();
  const cvButtonRef = useMagnetic();
  const contactButtonRef = useMagnetic();

  useParallax(heroRef, shapeRef);

  return (
    <section id="hero" className="hero" ref={heroRef}>
      <div className="hero-inner">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="hero-t1">Hola, soy</span>
            <span className="hero-t2">Thomas.</span>
            <span className="hero-t3">
              Desarrollador Full&nbsp;Stack&nbsp;Junior
              <span className="typing-line" aria-hidden="true"> | </span>
            </span>
          </h1>

          <p className="hero-desc">
            Estudiante de Licenciatura en Sistemas en Buenos Aires, Argentina.
            Desarrollo aplicaciones web completas, desde la API y la base de
            datos hasta la interfaz, con TypeScript, React, Angular, Node.js,
            NestJS y PostgreSQL.
          </p>

          <p className="hero-status">
            Buscando mi primera experiencia profesional como desarrollador.
          </p>

          <div className="hero-btns">
            <a ref={projectsButtonRef} href="#projects" className="btn-primary" > Ver proyectos </a>
            <a ref={cvButtonRef} href="/CV_Thomas_Centurion.pdf" className="btn-secondary" download="CV_Thomas_Centurion.pdf" > Descargar CV </a>
            <a ref={contactButtonRef} href="#contact" className="btn-secondary" > Contactar </a>

          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-shape" ref={shapeRef} /> </div>
      </div>
    </section>
  );
}

export default Hero;