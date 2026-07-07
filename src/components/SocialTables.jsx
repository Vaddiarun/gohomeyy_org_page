import Reveal from './Reveal';
import { useTilt } from '../hooks/useTilt';
import { events } from '../data';

function EventCard({ ev, delay }) {
  const tilt = useTilt();
  return (
    <Reveal
      delay={delay}
      className="tilt relative min-h-[380px] overflow-hidden rounded-3xl bg-ink shadow-[0_20px_44px_rgba(120,50,10,0.14)]"
      tilt={tilt}
    >
      <img src={ev.src} alt={ev.title} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg,rgba(20,12,8,.05) 30%,rgba(20,12,8,.88))' }} />
      <div className="absolute left-4 top-4 rounded-xl bg-white px-[11px] py-[7px] text-center leading-none">
        <div className="font-display text-[21px] font-extrabold text-brick">{ev.day}</div>
        <div className="text-[11px] font-bold tracking-[0.08em] text-mocha">{ev.mon}</div>
      </div>
      <div className="absolute inset-x-0 bottom-0 p-[22px] text-white">
        <div className="mb-1.5 text-[12.5px] font-semibold opacity-80">{ev.tag}</div>
        <h3 className="mb-2.5 font-display text-[22px] font-bold leading-[1.1]">{ev.title}</h3>
        <div className="flex items-center justify-between">
          <span className="text-[13.5px] opacity-85">{ev.seats}</span>
          <span className="rounded-full bg-orange px-[15px] py-2 text-[13.5px] font-bold">{ev.price}</span>
        </div>
      </div>
    </Reveal>
  );
}

export default function SocialTables() {
  return (
    <section id="tables" className="mx-auto max-w-[1240px] px-6 pb-10 pt-[100px]">
      <Reveal className="mx-auto mb-14 max-w-[640px] text-center">
        <div className="mb-3.5 text-[13px] font-bold uppercase tracking-[0.14em] text-orange">Chef House Parties & Socials</div>
        <h2 className="mb-4 font-display text-[clamp(32px,4vw,52px)] font-extrabold leading-[1.02] tracking-[-0.025em]">
          Attend a Chef-Hosted House Party
        </h2>
        <p className="text-[17px] leading-[1.55] text-coffee">
          Our chefs host exclusive, ticketed parties in their home kitchens or custom venues. Book your ticket today, attend a unique dining social, and meet new friends.
        </p>
      </Reveal>
      <div className="grid gap-6 md:grid-cols-3">
        {events.map((ev, i) => (
          <EventCard key={ev.title} ev={ev} delay={i * 80} />
        ))}
      </div>
    </section>
  );
}
