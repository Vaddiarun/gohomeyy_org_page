import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Logo3D from './Logo3D';

gsap.registerPlugin(ScrollTrigger);

export default function BrandIntro() {
  const sectionRef = useRef(null);
  const spinRef = useRef(null);
  const logoRef = useRef(null);
  const reflectionRef = useRef(null);
  const ghostTopRef = useRef(null);
  const ghostBottomRef = useRef(null);
  const taglineRef = useRef(null);

  useLayoutEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ctx = gsap.context(() => {
      const parts = {
        hat: logoRef.current.querySelector('[data-part="hat"]'),
        ribbon: logoRef.current.querySelector('[data-part="ribbon"]'),
        legLeft: logoRef.current.querySelector('[data-part="leg-left"]'),
        legRight: logoRef.current.querySelector('[data-part="leg-right"]'),
      };

      if (reduceMotion) {
        gsap.set(taglineRef.current, { opacity: 1, y: 0 });
        return;
      }

      gsap.set(parts.hat, { y: -140, rotate: -15, opacity: 0, transformOrigin: '50% 100%' });
      gsap.set(parts.legLeft, { y: 160, opacity: 0 });
      gsap.set(parts.legRight, { y: 160, opacity: 0 });
      gsap.set(parts.ribbon, { x: -220, rotate: -18, opacity: 0, transformOrigin: '50% 50%' });
      gsap.set(spinRef.current, { scale: 0.75, rotateY: -24 });
      gsap.set(reflectionRef.current, { opacity: 0 });
      gsap.set(taglineRef.current, { opacity: 0, y: 24 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=280%',
          scrub: 0.8,
          pin: true,
          anticipatePin: 1,
        },
      });

      tl.to(parts.legLeft, { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }, 0)
        .to(parts.legRight, { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }, 0.06)
        .to(parts.ribbon, { x: 0, rotate: 0, opacity: 1, duration: 1, ease: 'power3.out' }, 0.18)
        .to(parts.hat, { y: 0, rotate: 0, opacity: 1, duration: 1, ease: 'back.out(1.6)' }, 0.34)
        .to(spinRef.current, { scale: 1, rotateY: 0, duration: 1 }, 0.15)
        .to(ghostTopRef.current, { xPercent: -10, opacity: 0.16, duration: 1 }, 0)
        .to(ghostBottomRef.current, { xPercent: 10, opacity: 0.16, duration: 1 }, 0)
        .to(spinRef.current, { rotateY: 360, duration: 2, ease: 'power1.inOut' }, 1.3)
        .to(reflectionRef.current, { opacity: 0.32, duration: 0.6 }, 1.5)
        .to(spinRef.current, { scale: 0.86, y: -18, duration: 1 }, 3.5)
        .to([ghostTopRef.current, ghostBottomRef.current], { opacity: 0, duration: 0.6 }, 3.5)
        .to(taglineRef.current, { opacity: 1, y: 0, duration: 0.8 }, 3.6);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex h-[100svh] items-center justify-center overflow-hidden"
      style={{ background: 'radial-gradient(120% 90% at 50% 20%,#FFE0BE 0%,#FBF3E8 55%,#FBF3E8 100%)' }}
    >
      <div
        ref={ghostTopRef}
        className="pointer-events-none absolute left-1/2 top-[16%] -translate-x-1/2 whitespace-nowrap font-display text-[clamp(60px,13vw,200px)] font-extrabold leading-none tracking-[-0.03em] text-ink/10"
      >
        GoHomey&nbsp;&nbsp;GoHomey
      </div>
      <div
        ref={ghostBottomRef}
        className="pointer-events-none absolute bottom-[14%] left-1/2 -translate-x-1/2 whitespace-nowrap font-display text-[clamp(60px,13vw,200px)] font-extrabold leading-none tracking-[-0.03em] text-ink/10"
      >
        GoHomey&nbsp;&nbsp;GoHomey
      </div>

      <div className="relative" style={{ perspective: '1400px' }}>
        <div ref={spinRef} style={{ transformStyle: 'preserve-3d' }}>
          <div ref={logoRef} className="drop-shadow-[0_50px_60px_rgba(120,50,10,0.35)]">
            <Logo3D size={1.7} />
          </div>
          <div
            ref={reflectionRef}
            className="absolute left-0 top-full"
            style={{
              transform: 'scaleY(-1)',
              maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.5), transparent 65%)',
              WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.5), transparent 65%)',
            }}
          >
            <Logo3D size={1.7} />
          </div>
        </div>
      </div>

      <div ref={taglineRef} className="absolute bottom-[8%] left-1/2 -translate-x-1/2 text-center">
        <p className="font-display text-[clamp(18px,2.2vw,26px)] font-semibold text-coffee">
          Real chefs. Home-cooked. <span className="text-orange">Delivered.</span>
        </p>
      </div>
    </section>
  );
}
