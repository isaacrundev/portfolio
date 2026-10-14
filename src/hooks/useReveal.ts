import { useEffect, useRef } from "react";

// One observer shared by every revealed element on the page. Scroll-triggered
// reveals used to each carry their own framer-motion viewport watcher.
let observer: IntersectionObserver | undefined;

const getObserver = () =>
  (observer ??= new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("is-revealed");
        observer?.unobserve(entry.target); // reveal once, like viewport.once
      }
    },
    { rootMargin: "-80px" },
  ));

/**
 * Reveals an element the first time it scrolls into view. Returns a ref to put
 * on the element, which must carry the `reveal` class.
 */
export const useReveal = <T extends HTMLElement>(delay = 0) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (delay) element.style.animationDelay = `${delay}s`;

    const instance = getObserver();
    instance.observe(element);

    return () => instance.unobserve(element);
  }, [delay]);

  return ref;
};
