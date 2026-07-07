import { useRef } from 'react';

/**
 * 3D hover-tilt. Spread the returned handlers onto any element that also has
 * the `tilt` class: <div className="tilt" {...useTilt()} />
 */
export function useTilt(max = 7) {
  const ref = useRef(null);

  const onMouseMove = (ev) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (ev.clientX - r.left) / r.width - 0.5;
    const py = (ev.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(800px) rotateY(${px * max}deg) rotateX(${-py * max}deg) translateY(-6px)`;
  };

  const onMouseLeave = () => {
    if (ref.current) ref.current.style.transform = 'none';
  };

  return { ref, onMouseMove, onMouseLeave };
}
