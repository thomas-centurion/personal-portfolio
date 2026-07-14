import "./Contact.css";

import { useRef, useState } from "react";

import { sendContactEmail } from "@/services/email";

import useInView from "@/hooks/useInView";
import useMagnetic from "@/hooks/useMagnetic";
import useSectionParallax from "@/hooks/useSectionParallax";

function Contact() {
  const { ref, isVisible } = useInView({
    threshold: 0.15,
  });

  const sectionNumberRef = useRef(null);

  useSectionParallax(sectionNumberRef);

  const downloadButtonRef = useMagnetic();
  const seeOnlineButtonRef = useMagnetic();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    setStatus({
      type: "",
      message: "",
    });

    try {
      await sendContactEmail(form);

      setStatus({
        type: "success",
        message: "¡Gracias por tu mensaje! Te responderé lo antes posible.",
      });

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error al enviar el email:", error);;

      setStatus({
        type: "error",
        message:
          "No pude enviar el mensaje. Intentá nuevamente en unos minutos.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="animate" ref={ref} data-visible={String(isVisible)} >
      <div className="section-number" ref={sectionNumberRef} data-section="04" > 04 </div>

      <div className="contact-inner">
        <div className="contact-info">
          <div className="section-label">Contacto</div>

          <h2 className="section-title">¿Trabajamos juntos?</h2>

          <p className="contact-desc">
            Estoy disponible para proyectos freelance, colaboraciones y
            oportunidades laborales.
          </p>

          <div className="contact-social">
            <a href="https://github.com/thomas-centurion" target="_blank" rel="noopener noreferrer" className="social-link" >
              GitHub
            </a>

            <a href="https://www.linkedin.com/in/thomascenturion/" target="_blank" rel="noopener noreferrer" className="social-link" >
              LinkedIn
            </a>

            <a href="mailto:tcenturion.dev@gmail.com" className="social-link" >
              Email
            </a>
          </div>

          <div className="contact-buttons">
            <a href="/CV_Thomas_Centurion.pdf" className="btn-secondary" download="CV_Thomas_Centurion.pdf" ref={downloadButtonRef} >
              Descargar CV
            </a>

            <a href="https://thomas-centurion.vercel.app/CV_Thomas_Centurion.pdf" className="btn-secondary" target="_blank" rel="noopener noreferrer" ref={seeOnlineButtonRef} >
              Ver online
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="name">Nombre</label>
            <input type="text" id="name" name="name" value={form.name} onChange={handleChange} required />
          </div>

          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required />
          </div>

          <div className="form-field">
            <label htmlFor="message">Mensaje</label>
            <textarea id="message" name="message" value={form.message} onChange={handleChange} required />
          </div>

          <button type="submit" className="form-submit" disabled={loading} >
            {loading ? ( "Enviando..." ) : (
              <>
                Enviar
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" > <path d="M5 12h14" /> <path d="M12 5l7 7-7 7" /> </svg>
              </>
            )}
          </button>

          {status.message && (
            <p className={`form-status ${status.type}`}>
              {status.message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;