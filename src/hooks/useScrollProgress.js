import { useEffect, useState } from "react";

function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const percentage = Math.min((scrollTop / scrollHeight) * 100, 100);

      setProgress(percentage);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return progress;
}

export default useScrollProgress;
