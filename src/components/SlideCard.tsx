import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";

type Props = { screenshots: string[] };

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};
export default function SlideCard({ screenshots }: Props) {
  const [[page, direction], setPage] = useState([0, 0]);

  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
  const imageIndex = wrap(0, screenshots.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <>
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          loading="lazy"
          className="absolute inset-0 object-contain w-full h-full p-2"
          key={page}
          src={screenshots[imageIndex]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(_e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        />
      </AnimatePresence>
      <div
        className="absolute z-10 flex items-center justify-center w-12 h-12 text-2xl text-white bg-black/30 hover:bg-brand-cyan/20 border border-white/10 hover:border-brand-cyan/50 backdrop-blur-md rounded-full cursor-pointer select-none right-4 top-1/2 -translate-y-1/2 hover:scale-110 transition-all shadow-[0_0_15px_rgba(0,0,0,0.5)] flex items-center justify-center group"
        onClick={() => paginate(1)}
      >
        <span className="group-hover:translate-x-0.5 transition-transform">❯</span>
      </div>
      <div
        className="absolute z-10 flex items-center justify-center w-12 h-12 text-2xl text-white bg-black/30 hover:bg-brand-cyan/20 border border-white/10 hover:border-brand-cyan/50 backdrop-blur-md rounded-full cursor-pointer select-none left-4 top-1/2 -translate-y-1/2 hover:scale-110 transition-all shadow-[0_0_15px_rgba(0,0,0,0.5)] flex items-center justify-center group"
        onClick={() => paginate(-1)}
      >
        <span className="group-hover:-translate-x-0.5 transition-transform">❮</span>
      </div>
    </>
  );
}
