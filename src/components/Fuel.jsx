import Reveal from './Reveal';
import { useTilt } from '../hooks/useTilt';
import { fuelDays, fuelMeals } from '../data';

export default function Fuel() {
  const tilt = useTilt();
  return (
    <section id="fuel" className="relative mt-20 overflow-hidden bg-gradient-to-br from-ink to-[#3A251A] text-white">
      <div
        data-depth="0.04"
        className="absolute -right-16 -top-[100px] h-[420px] w-[420px] rounded-full"
        style={{ background: 'radial-gradient(circle,rgba(245,147,51,.3),transparent 68%)' }}
      />
      <div className="relative mx-auto grid max-w-[1240px] items-center gap-[60px] px-6 py-[100px] md:grid-cols-2">
        <Reveal>
          <div className="mb-3.5 text-[13px] font-bold uppercase tracking-[0.14em] text-amber">Fuel subscriptions</div>
          <h2 className="mb-5 font-display text-[clamp(32px,4vw,52px)] font-extrabold leading-[1.02] tracking-[-0.025em]">
            Eat toward your goals, on autopilot
          </h2>
          <p className="mb-[30px] max-w-[480px] text-[17px] leading-[1.6] text-white/70">
            Subscribe to a diet-tailored meal plan, pick your delivery days and time slots, and let one chef cook your Breakfast, Lunch and Dinner all week.
          </p>
          <div className="flex max-w-[420px] flex-col gap-3.5">
            {[
              '3-day, 1-week & 1-month plans matched to your health goals',
              'Day-wise menus — swap any Breakfast, Lunch or Dinner',
              'Track every daily delivery in real time',
            ].map((t) => (
              <div key={t} className="flex items-start gap-[13px]">
                <span className="flex-none text-[19px] text-leafbright">✓</span>
                <span className="text-[15.5px] text-white/85">{t}</span>
              </div>
            ))}
          </div>
          <a
            href="#download"
            className="mt-8 inline-flex rounded-full bg-gradient-to-br from-amber to-orange px-7 py-[15px] text-base font-bold text-white shadow-[0_14px_30px_rgba(232,106,23,0.42)] transition hover:-translate-y-0.5"
          >
            Start a plan →
          </a>
        </Reveal>

        {/* fuel plan card */}
        <Reveal className="tilt rounded-[26px] border border-white/10 bg-white/[0.06] p-[26px] backdrop-blur-lg" tilt={tilt}>
          <div className="mb-5 flex items-center justify-between">
            <div>
              <div className="font-display text-[19px] font-bold">Lean & Green Plan</div>
              <div className="text-[13px] text-white/55">1 week · with Chef Ananya</div>
            </div>
            <div className="rounded-full bg-leaf px-3 py-[5px] text-[12.5px] font-bold">Active</div>
          </div>
          <div className="mb-[18px] flex gap-2">
            {fuelDays.map((d, i) => (
              <div
                key={i}
                className={`grid h-8 w-8 place-items-center rounded-[10px] text-[13px] font-bold ${
                  d.active ? 'bg-orange text-white' : 'bg-white/[0.08] text-white/60'
                }`}
              >
                {d.label}
              </div>
            ))}
          </div>
          {fuelMeals.map((m) => (
            <div key={m.meal} className="mb-2.5 flex items-center gap-3.5 rounded-2xl bg-white/[0.05] p-[13px]">
              <div className="h-[52px] w-[52px] flex-none overflow-hidden rounded-[13px]">
                <img src={m.src} alt={m.dish} className="h-full w-full object-cover" />
              </div>
              <div className="flex-1">
                <div className="text-xs font-bold uppercase tracking-[0.06em] text-amber">{m.meal}</div>
                <div className="mt-0.5 text-[15px] font-semibold">{m.dish}</div>
              </div>
              <div className="text-right">
                <div className="text-[12.5px] text-white/55">{m.time}</div>
                <div className="text-[12.5px] font-semibold text-leafbright">{m.status}</div>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
