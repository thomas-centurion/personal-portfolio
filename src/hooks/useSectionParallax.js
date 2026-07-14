import { useEffect } from "react";

function useSectionParallax(ref) {
  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const update = () => {
      const rect = element.getBoundingClientRect();

      const center = rect.top + rect.height / 2;
      const viewportCenter = window.innerHeight / 2;

      const offset = (center - viewportCenter) * -0.04;

      element.style.setProperty(
        "--parallax-offset",
        `${offset}px`
      );
    };

    update();

    window.addEventListener("scroll", update, {
      passive: true,
    });

    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [ref]);
}

export default useSectionParallax;