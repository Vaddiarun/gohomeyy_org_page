import { useEffect } from 'react';

/**
 * Mouse-driven parallax. Every element inside `containerRef` that carries a
 * `data-depth` attribute is translated relative to the pointer position.
 * Pass no ref to bind to the whole window.
 */
export function useParallax(containerRef) {
  useEffect(() => {
    const root = containerRef?.current || document;

    const onMove = (ev) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const dx = (ev.clientX - cx) / cx;
      const dy = (ev.clientY - cy) / cy;
      root.querySelectorAll('[data-depth]').forEach((el) => {
        const d = parseFloat(el.getAttribute('data-depth') || '0.05');
        el.style.transform = `translate(${dx * d * 340}px, ${dy * d * 340}px)`;
        el.style.transition = 'transform 0.35s cubic-bezier(0.22, 1, 0.36, 1)';
        el.style.willChange = 'transform';
      });
    };

    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [containerRef]);
}
