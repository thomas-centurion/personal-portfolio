import "./BackToTop.css";

import { useEffect, useState } from "react";

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button className={`back-to-top ${ isVisible ? "visible" : "" }`} onClick={scrollToTop} aria-label="Volver arriba" title="Volver arriba">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" > <path d="M18 15l-6-6-6 6" /> </svg>
    </button>
  );
}

export default BackToTop;