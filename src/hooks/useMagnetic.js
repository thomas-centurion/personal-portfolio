import { useEffect, useRef } from "react";

function useMagnetic(strength = 8) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const handleMouseMove = (e) => {
      const rect = element.getBoundingClientRect();

      const dx =
        e.clientX - (rect.left + rect.width / 2);

      const dy =
        e.clientY - (rect.top + rect.height / 2);

      const distance = Math.sqrt(dx ** 2 + dy ** 2);

      const offset = Math.min(distance / 4, strength);

      const angle = Math.atan2(dy, dx);

      element.style.transform = `translate(
        ${Math.cos(angle) * offset}px,
        ${Math.sin(angle) * offset}px
      )`;

      element.style.transition =
        "transform .08s ease-out";
    };

    const handleMouseLeave = () => {
      element.style.transform = "translate(0,0)";
      element.style.transition =
        "transform .3s ease";
    };

    element.addEventListener(
      "mousemove",
      handleMouseMove
    );

    element.addEventListener(
      "mouseleave",
      handleMouseLeave
    );

    return () => {
      element.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      element.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );
    };
  }, [strength]);

  return ref;
}

export default useMagnetic;