import Reveal from './Reveal';
import { useTilt } from '../hooks/useTilt';
import { reviews } from '../data';

function ReviewCard({ r, delay }) {
  const tilt = useTilt();
  return (
    <Reveal delay={delay} className="tilt rounded-[22px] bg-white p-[30px] shadow-[0_16px_40px_rgba(120,50,10,0.1)]" tilt={tilt}>
      <div className="mb-3.5 text-base text-amber">★★★★★</div>
      <p className="mb-[22px] text-[16.5px] leading-[1.55] text-ink">{r.quote}</p>
      <div className="flex items-center gap-3">
        <div className="h-[42px] w-[42px] flex-none overflow-hidden rounded-full">
          <img src={r.src} alt={r.name} className="h-full w-full object-cover" />
        </div>
        <div>
          <div className="font-display text-[14.5px] font-bold">{r.name}</div>
          <div className="text-[12.5px] text-mocha">{r.role}</div>
        </div>
      </div>
    </Reveal>
  );
}

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-[1240px] px-6 pb-10 pt-[100px]">
      <Reveal className="mx-auto mb-[52px] max-w-[640px] text-center">
        <div className="mb-3.5 text-[13px] font-bold uppercase tracking-[0.14em] text-orange">Loved by locals</div>
        <h2 className="font-display text-[clamp(32px,4vw,52px)] font-extrabold leading-[1.02] tracking-[-0.025em]">
          30,000 clean plates & counting
        </h2>
      </Reveal>
      <div className="grid gap-[22px] md:grid-cols-3">
        {reviews.map((r, i) => (
          <ReviewCard key={r.name} r={r} delay={i * 80} />
        ))}
      </div>
    </section>
  );
}
