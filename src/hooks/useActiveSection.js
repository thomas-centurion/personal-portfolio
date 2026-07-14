import { useEffect, useState } from "react";

function useActiveSection() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const OFFSET = 90;

    const handleScroll = () => {
      // Si estamos al final de la página, activamos Contact
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2
      ) {
        setActiveSection(sections[sections.length - 1].id);
        return;
      }

      let currentSection = "hero";

      sections.forEach((section) => {
        if (window.scrollY >= section.offsetTop - OFFSET) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return activeSection;
}

export default useActiveSection;