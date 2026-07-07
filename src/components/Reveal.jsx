import { useReveal } from '../hooks/useReveal';

/**
 * Wraps children in a scroll-reveal container. Optionally accepts a `tilt`
 * object from useTilt() and merges its ref with the reveal ref so a single
 * element gets both behaviours.
 */
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children, tilt, ...rest }) {
  const revealRef = useReveal({ delay });

  const setRef = (node) => {
    revealRef.current = node;
    if (tilt?.ref) tilt.ref.current = node;
  };

  const handlers = tilt ? { onMouseMove: tilt.onMouseMove, onMouseLeave: tilt.onMouseLeave } : {};

  return (
    <Tag ref={setRef} className={`reveal ${className}`} {...handlers} {...rest}>
      {children}
    </Tag>
  );
}
