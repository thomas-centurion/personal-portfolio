import "./Cursor.css";

import { useEffect, useRef } from "react";

const interactiveSelector =
  "a, button, input, textarea, select, label";

function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 901px)");

    let animationId;
    let cleanup = null;

    const enableCursor = () => {
      const dot = dotRef.current;
      const ring = ringRef.current;

      if (!dot || !ring) return;

      let mouseX = 0;
      let mouseY = 0;

      let ringX = 0;
      let ringY = 0;

      const handleMouseMove = (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        dot.style.left = `${mouseX}px`;
        dot.style.top = `${mouseY}px`;
      };

      const animateRing = () => {
        ringX += (mouseX - ringX) * 0.15;
        ringY += (mouseY - ringY) * 0.15;

        ring.style.left = `${ringX}px`;
        ring.style.top = `${ringY}px`;

        animationId = requestAnimationFrame(animateRing);
      };

      const handlePointerOver = (e) => {
        if (e.target.closest(interactiveSelector)) {
          ring.classList.add("cursor-hover");
        }
      };

      const handlePointerOut = (e) => {
        if (e.target.closest(interactiveSelector)) {
          ring.classList.remove("cursor-hover");
        }
      };

      window.addEventListener("mousemove", handleMouseMove, {
        passive: true,
      });

      document.addEventListener(
        "mouseover",
        handlePointerOver
      );

      document.addEventListener(
        "mouseout",
        handlePointerOut
      );

      animateRing();

      cleanup = () => {
        window.removeEventListener(
          "mousemove",
          handleMouseMove
        );

        document.removeEventListener(
          "mouseover",
          handlePointerOver
        );

        document.removeEventListener(
          "mouseout",
          handlePointerOut
        );

        cancelAnimationFrame(animationId);

        ring.classList.remove("cursor-hover");
      };
    };

    const updateCursor = (e) => {
      cleanup?.();

      cleanup = null;

      if (e.matches) {
        enableCursor();
      }
    };

    updateCursor(mediaQuery);

    mediaQuery.addEventListener("change", updateCursor);

    return () => {
      cleanup?.();

      mediaQuery.removeEventListener(
        "change",
        updateCursor
      );
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="cursor-dot"
      />

      <div
        ref={ringRef}
        className="cursor-ring"
      />
    </>
  );
}

export default Cursor;