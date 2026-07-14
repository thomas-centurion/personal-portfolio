import { useEffect } from "react";

function useParallax(containerRef, targetRef, strength = 25) {
  useEffect(() => {
    const container = containerRef.current;
    const target = targetRef.current;

    if (!container || !target) return;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();

      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const x = (e.clientX - centerX) / strength;
      const y = (e.clientY - centerY) / strength;

      target.style.transform = `translate(${x}px, ${y}px)`;
    };

    const handleMouseLeave = () => {
      target.style.transform = "translate(0px, 0px)";
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [containerRef, targetRef, strength]);
}

export default useParallax;