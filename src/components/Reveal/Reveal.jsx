import "./Reveal.css";

import useInView from "@/hooks/useInView";

function Reveal({ children, className = "" }) {
  const { ref, isVisible } = useInView({
    threshold: 0.15,
  });

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? "visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

export default Reveal;