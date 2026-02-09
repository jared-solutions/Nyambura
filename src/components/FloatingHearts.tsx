import { useMemo } from "react";

const FLOATING_ITEMS = [
  "💕", "💖", "💗", "💝", "🌸", "✨", "💞",
  "🌺", "🌻", "🌷", "🌹", "💐", "🌼", "🩷"
];

const FloatingHearts = () => {
  const hearts = useMemo(
    () =>
      Array.from({ length: 25 }, (_, i) => ({
        id: i,
        symbol: FLOATING_ITEMS[i % FLOATING_ITEMS.length],
        left: Math.random() * 100,
        size: 14 + Math.random() * 20,
        duration: 10 + Math.random() * 15,
        delay: Math.random() * 10,
        opacity: 0.3 + Math.random() * 0.5,
      })),
    []
  );

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
      aria-hidden="true"
    >
      {hearts.map((h) => (
        <span
          key={h.id}
          className="absolute animate-float-heart"
          style={{
            left: `${h.left}%`,
            fontSize: `${h.size}px`,
            animationDuration: `${h.duration}s`,
            animationDelay: `${h.delay}s`,
            opacity: h.opacity,
          }}
        >
          {h.symbol}
        </span>
      ))}
    </div>
  );
};

export default FloatingHearts;
