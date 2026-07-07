import { useEffect, useRef } from 'react';

/**
 * Adds the `is-visible` class the first time an element scrolls into view.
 * Attach the returned ref to any element that also has the `reveal` class.
 */
export function useReveal(options = {}) {
  const ref = useRef(null);
  const { threshold = 0.12, rootMargin = '0px 0px -8% 0px', delay = 0 } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (delay) el.style.transitionDelay = `${delay}ms`;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [threshold, rootMargin, delay]);

  return ref;
}
