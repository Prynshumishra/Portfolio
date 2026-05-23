import { useEffect, useState } from "react";

export const StarBackground = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const generate = () => {
      const count = Math.floor((window.innerWidth * window.innerHeight) / 12000);
      setParticles(
        Array.from({ length: count }, (_, i) => ({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 1.5 + 0.5,
          opacity: Math.random() * 0.4 + 0.1,
          duration: Math.random() * 6 + 4,
          delay: Math.random() * 5,
        }))
      );
    };
    generate();
    window.addEventListener("resize", generate);
    return () => window.removeEventListener("resize", generate);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            background: "oklch(0.78 0.15 195)",
            boxShadow: `0 0 ${p.size * 3}px oklch(0.78 0.15 195 / 0.4)`,
            animation: `pulse-subtle ${p.duration}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}

      <style>{`
        @keyframes pulse-subtle {
          0%, 100% { opacity: var(--op, 0.3); transform: scale(1); }
          50%       { opacity: calc(var(--op, 0.3) * 0.3); transform: scale(0.8); }
        }
      `}</style>
    </div>
  );
};
