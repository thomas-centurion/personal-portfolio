import "./Lightbox.css";

function Lightbox() {
  return (
    <div className="lightbox" id="lightbox" role="dialog" aria-modal="true" aria-label="Vista previa" > <button className="lightbox-close" aria-label="Cerrar"> ✕ </button> <img className="lightbox-img" src="" alt="" /> </div>
  );
}
