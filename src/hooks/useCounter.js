import { useEffect, useState } from "react";

function useCounter(end, start = false, duration = 1500) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min(
        (timestamp - startTime) / duration,
        1
      );

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    let animationId;

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
    
  }, [end, start, duration]);

  return count;
}

export default useCounter;