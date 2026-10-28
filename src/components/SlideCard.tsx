import { useRef, useState, type ComponentProps, type PointerEvent } from "react";
import { useTranslation } from "../i18n.tsx";
import { avifVersions } from "../assets/index.ts";

type Props = { screenshots: string[]; name: string };

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

/** `<picture>` wrapper that swaps in AVIF where one exists and falls back to the
 *  WebP otherwise -- only some images win from AVIF, so the source is conditional.
 *  Defined at module level, not inside the render: a fresh component type each
 *  render would remount the <img> and restart its slide animation. */
const Picture = ({ shot, alt, ...rest }: { shot: string; alt: string } & ComponentProps<"img">) => (
  <picture className="contents">
    {avifVersions[shot] && <source srcSet={avifVersions[shot]} type="image/avif" />}
    <img alt={alt} src={shot} {...rest} />
  </picture>
);

export default function SlideCard({ screenshots, name }: Props) {
  const { t } = useTranslation();
  const [[page, direction], setPage] = useState([0, 0]);
  const [leaving, setLeaving] = useState<number | null>(null);
  const drag = useRef<{ startX: number; startTime: number } | null>(null);

  const imageIndex = wrap(0, screenshots.length, page);
  const src = screenshots[imageIndex];
  const leavingSrc = leaving === null ? null : screenshots[wrap(0, screenshots.length, leaving)];

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
      {leavingSrc !== null && (
        <Picture
          key={leaving}
          shot={leavingSrc}
          alt=""
          aria-hidden="true"
          className={`absolute inset-0 object-contain w-full h-full p-2 ${
            direction > 0 ? "slide-out-left" : "slide-out-right"
          }`}
          onAnimationEnd={() => setLeaving(null)}
        />
      )}
      <Picture
        key={page}
        shot={src}
        alt={name}
        loading="lazy"
        draggable={false}
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
        aria-label={t("showcases.nextScreenshot")}
        className="group absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 cursor-pointer select-none items-center justify-center rounded-full border border-foam/10 bg-abyss/40 text-lg text-foam/70 backdrop-blur-md transition-colors hover:border-reef/40 hover:bg-reef/10 hover:text-reef sm:right-4 sm:h-12 sm:w-12 sm:text-2xl"
        onClick={() => paginate(1)}
      >
        <span className="transition-transform group-hover:translate-x-0.5">❯</span>
      </button>
      <button
        type="button"
        aria-label={t("showcases.prevScreenshot")}
        className="group absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 cursor-pointer select-none items-center justify-center rounded-full border border-foam/10 bg-abyss/40 text-lg text-foam/70 backdrop-blur-md transition-colors hover:border-reef/40 hover:bg-reef/10 hover:text-reef sm:left-4 sm:h-12 sm:w-12 sm:text-2xl"
        onClick={() => paginate(-1)}
      >
        <span className="transition-transform group-hover:-translate-x-0.5">❮</span>
      </button>
    </>
  );
}
