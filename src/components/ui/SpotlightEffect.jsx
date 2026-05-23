import { useRef, useEffect } from "react";

export const SpotlightEffect = ({ className = "" }) => {
  const spotRef = useRef(null);

  useEffect(() => {
    const el = spotRef.current;
    if (!el) return;
    const parent = el.parentElement;
    if (!parent) return;

    const handleMove = (e) => {
      const rect = parent.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      el.style.background = `radial-gradient(600px circle at ${x}px ${y}px, oklch(0.78 0.15 195 / 0.06), transparent 70%)`;
    };

    parent.addEventListener("mousemove", handleMove);
    return () => parent.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div
      ref={spotRef}
      className={`pointer-events-none absolute inset-0 z-10 transition-all duration-300 ${className}`}
    />
  );
};
