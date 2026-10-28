import { useEffect, useRef } from "react";

/**
 * A dive-computer style depth readout on wide desktops. Decorative, but it is
 * the one thing that ties the scroll position to the dive metaphor, so it reads
 * the real document height and writes straight to the DOM (no React re-render
 * on scroll). Hidden below 1400px so it never crowds the content column.
 */
const DepthGauge = () => {
  const valueRef = useRef<HTMLSpanElement>(null);
  const markerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const root = document.documentElement;
      const max = root.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? Math.min(Math.max(window.scrollY / max, 0), 1) : 0;

      if (valueRef.current) {
        valueRef.current.textContent = String(Math.round(ratio * 60)).padStart(3, "0");
      }
      if (markerRef.current) {
        markerRef.current.style.top = `${ratio * 100}%`;
      }
    };

    const request = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", request, { passive: true });
    window.addEventListener("resize", request);
    return () => {
      window.removeEventListener("scroll", request);
      window.removeEventListener("resize", request);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 select-none flex-col items-center gap-3 font-mono text-[9px] uppercase tracking-[0.3em] text-foam/35 min-[1400px]:flex"
    >
      <span>Depth</span>
      <span
        ref={valueRef}
        className="text-lg font-light tracking-[0.1em] text-reef/80 tabular-nums"
      >
        000
      </span>
      <span className="text-foam/25">m</span>

      <div className="relative mt-3 h-52 w-px bg-foam/15">
        {[0, 1, 2, 3, 4].map((tick) => (
          <span
            key={tick}
            className="absolute -left-[3px] h-px w-[7px] bg-foam/25"
            style={{ top: `${tick * 25}%` }}
          />
        ))}
        <div
          ref={markerRef}
          className="absolute -left-[5px] h-px w-[11px] bg-reef shadow-[0_0_10px_rgba(94,234,212,0.8)]"
          style={{ top: "0%" }}
        />
      </div>

      <span className="text-foam/25">60</span>
      <span className="[writing-mode:vertical-rl] text-foam/25">Seabed</span>
    </div>
  );
};

export default DepthGauge;
