import "./ScrollProgress.css";

import useScrollProgress from "@/hooks/useScrollProgress";

function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div className="scroll-progress">
      <div
        className="scroll-progress-bar"
        style={{
          width: `${progress}%`,
        }}
      />
    </div>
  );
}

export default ScrollProgress;