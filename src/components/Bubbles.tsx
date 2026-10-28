// Decorative only, and deliberately cheap: a dozen CSS-animated spans behind
// the content instead of a canvas loop. The CSS drops half of them on phones.
const BUBBLES = [
  { left: 6, size: 9, duration: 26, delay: 0, sway: 26 },
  { left: 14, size: 5, duration: 34, delay: 6, sway: -18 },
  { left: 23, size: 13, duration: 30, delay: 12, sway: 22 },
  { left: 32, size: 6, duration: 24, delay: 3, sway: -24 },
  { left: 41, size: 10, duration: 38, delay: 16, sway: 18 },
  { left: 52, size: 4, duration: 28, delay: 9, sway: -14 },
  { left: 61, size: 12, duration: 32, delay: 20, sway: 24 },
  { left: 69, size: 7, duration: 25, delay: 5, sway: -20 },
  { left: 77, size: 5, duration: 36, delay: 14, sway: 16 },
  { left: 85, size: 11, duration: 29, delay: 2, sway: -22 },
  { left: 92, size: 6, duration: 33, delay: 11, sway: 18 },
  { left: 48, size: 8, duration: 40, delay: 22, sway: -16 },
];

const Bubbles = () => (
  <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
    {BUBBLES.map((bubble, i) => (
      <span
        key={i}
        className="bubble"
        style={
          {
            left: `${bubble.left}%`,
            width: bubble.size,
            height: bubble.size,
            "--duration": `${bubble.duration}s`,
            "--delay": `${bubble.delay}s`,
            "--sway": `${bubble.sway}px`,
          } as React.CSSProperties
        }
      />
    ))}
  </div>
);

export default Bubbles;
