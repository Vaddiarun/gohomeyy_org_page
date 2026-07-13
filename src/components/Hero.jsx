import { useRef } from 'react';
import { useParallax } from '../hooks/useParallax';
import { heroDishes } from '../data';

const marqueeItems = ['Discovery', 'Fuel Subscriptions', 'Pantry Shop', 'Chef House Parties', 'Order Tracking'];

function Plate({ img, className, inset, rotate, ring, ...rest }) {
  return (
    <div className={className} {...rest}>
      <div
        className="relative h-full w-full"
        style={{ transform: rotate, transformStyle: 'preserve-3d' }}
      >
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: 'conic-gradient(from 40deg,#fff,#F4E7D6,#fff,#EFDFC9,#fff)',
            boxShadow: `inset 0 0 0 ${ring}px #fff, inset 0 0 0 ${ring + 2}px rgba(0,0,0,.05)`,
          }}
        />
        <div
          className="absolute overflow-hidden rounded-full shadow-[inset_0_6px_24px_rgba(90,40,10,0.28)]"
          style={{ inset }}
        >
          <img src={img} alt="Dish" className="h-full w-full object-cover" />
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const stageRef = useRef(null);
  useParallax();

  return (
    <header
      id="top"
      className="relative min-h-[100svh] overflow-hidden px-6 pb-16 pt-[118px]"
      style={{ background: 'radial-gradient(120% 90% at 78% 8%,#FFE0BE 0%,#FBF3E8 46%,#FBF3E8 100%)' }}
    >
      <div
        data-depth="0.018"
        className="pointer-events-none absolute -right-[120px] -top-[120px] h-[620px] w-[620px] animate-pulseGlow rounded-full"
        style={{ background: 'radial-gradient(circle,rgba(245,147,51,.42),rgba(245,147,51,0) 68%)' }}
      />
      <div
        data-depth="0.03"
        className="pointer-events-none absolute -bottom-[90px] -left-20 h-[440px] w-[440px] rounded-full"
        style={{ background: 'radial-gradient(circle,rgba(192,57,43,.24),rgba(192,57,43,0) 70%)' }}
      />

      <div className="relative mx-auto grid max-w-[1240px] items-center gap-10 md:grid-cols-[1.02fr_1fr]">
        <div className="max-w-[620px]">
          <div className="mb-[26px] inline-flex items-center gap-[9px] rounded-full border border-orange/30 bg-white/70 px-[15px] py-2 text-[13.5px] font-semibold text-brick backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-leaf shadow-[0_0_0_4px_rgba(34,166,90,0.2)]" />
            1,200+ home chefs cooking near you
          </div>
          <h1 className="mb-[22px] font-display text-[clamp(44px,6vw,80px)] font-extrabold leading-[0.98] tracking-[-0.03em] [text-wrap:balance]">
            Home-cooked meals from{' '}
            <span className="bg-gradient-to-r from-orange to-brick bg-clip-text text-transparent">real chefs</span> next door.
          </h1>
          <p className="mb-[34px] max-w-[500px] text-[clamp(17px,1.5vw,20px)] leading-[1.55] text-coffee">
            Discover neighbourhood cooks, subscribe to a diet-tailored Fuel plan, grab pantry kits, and book tickets to exclusive chef-hosted house parties — all in one app.
          </p>
          <div className="flex flex-wrap items-center gap-[14px]">
            <a
              href="#download"
              className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-br from-amber via-orange to-brick px-[30px] py-4 text-[16.5px] font-bold text-white shadow-[0_14px_30px_rgba(232,106,23,0.4)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(232,106,23,0.5)]"
            >
              Download Gohomeyy <span className="text-[19px]">→</span>
            </a>
            <a
              href="#how"
              className="inline-flex items-center gap-2.5 rounded-full border-[1.5px] border-ink/15 px-[22px] py-4 text-base font-semibold text-ink transition hover:border-orange hover:text-orange"
            >
              <span className="grid h-[26px] w-[26px] place-items-center rounded-full bg-ink text-[11px] text-white">▶</span>
              See how it works
            </a>
          </div>
          <div className="mt-11 flex gap-[30px]">
            {[
              ['4.9★', '30k+ ratings'],
              ['45 min', 'avg. delivery'],
              ['120+', 'cuisines'],
            ].map(([n, l], i) => (
              <div key={l} className="flex gap-[30px]">
                {i > 0 && <div className="w-px bg-ink/10" />}
                <div>
                  <div className="font-display text-[30px] font-extrabold text-ink">{n}</div>
                  <div className="text-[13.5px] text-mocha">{l}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3D plate stage */}
        <div ref={stageRef} className="relative order-first h-[420px] [perspective:1200px] md:order-none md:h-[560px]">
          <Plate
            img={heroDishes.main}
            className="absolute left-[8%] top-[6%] h-[240px] w-[240px] animate-floatY3 drop-shadow-[0_40px_45px_rgba(120,50,10,0.34)] md:h-[340px] md:w-[340px]"
            data-depth="0.05"
            inset="16%"
            rotate="rotateX(52deg) rotateZ(-8deg)"
            ring={16}
          />
          <Plate
            img={heroDishes.second}
            className="absolute right-[2%] top-[40%] h-[170px] w-[170px] animate-floatY drop-shadow-[0_34px_38px_rgba(120,50,10,0.32)] md:h-[230px] md:w-[230px]"
            data-depth="0.08"
            inset="15%"
            rotate="rotateX(48deg) rotateZ(10deg)"
            ring={13}
          />
          <div
            data-depth="0.12"
            className="absolute bottom-[2%] left-[20%] h-[120px] w-[120px] animate-floatY2 overflow-hidden rounded-full bg-white drop-shadow-[0_22px_26px_rgba(120,50,10,0.3)] [box-shadow:inset_0_0_0_10px_#fff] md:h-[150px] md:w-[150px]"
          >
            <div className="absolute inset-[12%] overflow-hidden rounded-full">
              <img src={heroDishes.third} alt="Dessert" className="h-full w-full object-cover" />
            </div>
          </div>

          <div
            data-depth="0.16"
            className="absolute right-[8%] top-[12%] flex items-center gap-2.5 rounded-2xl bg-white p-[11px] pr-[14px] shadow-[0_18px_36px_rgba(120,50,10,0.22)]"
          >
            <div className="h-10 w-10 flex-none overflow-hidden rounded-xl">
              <img src={heroDishes.chef} alt="Chef" className="h-full w-full object-cover" />
            </div>
            <div>
              <div className="font-display text-[13.5px] font-bold">Chef Ananya</div>
              <div className="text-[11.5px] font-semibold text-leaf">● Cooking now</div>
            </div>
          </div>
          <div
            data-depth="0.14"
            className="absolute bottom-[14%] right-[14%] rounded-[14px] bg-ink px-4 py-3 text-white shadow-[0_18px_36px_rgba(36,25,20,0.32)]"
          >
            <div className="text-[11.5px] font-medium opacity-65">Fuel plan · Lunch</div>
            <div className="mt-0.5 font-display text-[15px] font-bold">Delivered 12:30 ✓</div>
          </div>
        </div>
      </div>

      {/* trust marquee */}
      <div className="relative mx-auto mt-[52px] max-w-[1240px] overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
        <div className="flex w-max animate-marquee gap-14 whitespace-nowrap font-display text-[19px] font-semibold text-coffee opacity-50">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="flex items-center gap-14">
              {item} <span>·</span>
            </span>
          ))}
        </div>
      </div>
    </header>
  );
}
