import { useRef, useState, type PointerEvent } from "react";

type Props = { screenshots: string[] };

// popmotion's wrap(), inlined -- it was the only thing we used from that package.
export const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

/**
 * Which way a finished drag should paginate: |distance| * velocity against a
 * confidence threshold, so a short flick counts but a slow drag does not. Same
 * rule and same numbers framer-motion's dragEnd used, velocity in px/s.
 * Returns 1 for next, -1 for previous, 0 when it was not a swipe.
 */
const SWIPE_CONFIDENCE = 10000;

export const swipeDirection = (offset: number, velocity: number) => {
  const confidence = Math.abs(offset) * velocity;
  if (confidence < -SWIPE_CONFIDENCE) return 1;
  if (confidence > SWIPE_CONFIDENCE) return -1;
  return 0;
};

const SPRING_BACK = "transform 0.3s ease-out";

export default function SlideCard({ screenshots }: Props) {
  const [[page, direction], setPage] = useState([0, 0]);
  const [leaving, setLeaving] = useState<number | null>(null);
  const drag = useRef<{ startX: number; startTime: number } | null>(null);

  const imageIndex = wrap(0, screenshots.length, page);

  const paginate = (step: number) => {
    setLeaving(page);
    setPage([page + step, step]);
  };

  const startDrag = (event: PointerEvent<HTMLImageElement>) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    drag.current = { startX: event.clientX, startTime: event.timeStamp };
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const moveDrag = (event: PointerEvent<HTMLImageElement>) => {
    const state = drag.current;
    if (!state) return;
    event.currentTarget.style.transition = "none";
    event.currentTarget.style.transform = `translateX(${event.clientX - state.startX}px)`;
  };

  const endDrag = (event: PointerEvent<HTMLImageElement>, step = 0) => {
    const state = drag.current;
    drag.current = null;
    if (!state) return;

    if (step) {
      // Inline transform stays put: the exit keyframe has no `from`, so the
      // image slides out from wherever the finger let go of it.
      paginate(step);
      return;
    }

    event.currentTarget.style.transition = SPRING_BACK;
    event.currentTarget.style.transform = "";
  };

  const releaseDrag = (event: PointerEvent<HTMLImageElement>) => {
    const state = drag.current;
    if (!state) return;
    const offset = event.clientX - state.startX;
    const elapsed = Math.max(event.timeStamp - state.startTime, 1);
    endDrag(event, swipeDirection(offset, (offset / elapsed) * 1000));
  };

  return (
    <>
      {leaving !== null && (
        <img
          key={leaving}
          alt=""
          aria-hidden="true"
          className={`absolute inset-0 object-contain w-full h-full p-2 ${
            direction > 0 ? "slide-out-left" : "slide-out-right"
          }`}
          src={screenshots[wrap(0, screenshots.length, leaving)]}
          onAnimationEnd={() => setLeaving(null)}
        />
      )}
      <img
        key={page}
        alt=""
        loading="lazy"
        draggable={false}
        src={screenshots[imageIndex]}
        onPointerDown={startDrag}
        onPointerMove={moveDrag}
        onPointerUp={releaseDrag}
        onPointerCancel={endDrag}
        className={`absolute inset-0 object-contain w-full h-full p-2 touch-pan-y select-none ${
          direction > 0 ? "slide-in-right" : direction < 0 ? "slide-in-left" : ""
        }`}
      />
      <button
        type="button"
        aria-label="Next screenshot"
        className="absolute z-10 flex items-center justify-center w-12 h-12 text-2xl text-white bg-black/30 hover:bg-brand-cyan/20 border border-white/10 hover:border-brand-cyan/50 backdrop-blur-md rounded-full cursor-pointer select-none right-4 top-1/2 -translate-y-1/2 hover:scale-110 transition-all shadow-[0_0_15px_rgba(0,0,0,0.5)] flex items-center justify-center group"
        onClick={() => paginate(1)}
      >
        <span className="group-hover:translate-x-0.5 transition-transform">❯</span>
      </button>
      <button
        type="button"
        aria-label="Previous screenshot"
        className="absolute z-10 flex items-center justify-center w-12 h-12 text-2xl text-white bg-black/30 hover:bg-brand-cyan/20 border border-white/10 hover:border-brand-cyan/50 backdrop-blur-md rounded-full cursor-pointer select-none left-4 top-1/2 -translate-y-1/2 hover:scale-110 transition-all shadow-[0_0_15px_rgba(0,0,0,0.5)] flex items-center justify-center group"
        onClick={() => paginate(-1)}
      >
        <span className="group-hover:-translate-x-0.5 transition-transform">❮</span>
      </button>
    </>
  );
}
