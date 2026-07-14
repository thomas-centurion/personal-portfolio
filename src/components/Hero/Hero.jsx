import "./Hero.css";

import { useRef } from "react";

import useParallax from "@/hooks/useParallax";
import useTyping from "@/hooks/useTyping";
import useMagnetic from "@/hooks/useMagnetic";

function Hero() {
  const text = useTyping([
    "Web Developer",
    "Junior Frontend Dev",
    "Problem Solver",
  ]);

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
              <span className="typing-text"> {text} </span>

              <span className="typing-line"> | </span>
            </span>
          </h1>

          <p className="hero-desc">
            Desarrollador web y estudiante de Licenciatura en Sistemas,
            viviendo en Buenos Aires, Argentina. Me especializo en el
            desarrollo frontend con React y actualmente estoy ampliando mis
            conocimientos en backend con Node.js.
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