import Reveal from './Reveal';
import { useTilt } from '../hooks/useTilt';
import { chefs } from '../data';

function ChefCard({ chef, delay }) {
  const tilt = useTilt();
  return (
    <Reveal delay={delay} className="tilt overflow-hidden rounded-[22px] bg-white shadow-[0_16px_40px_rgba(120,50,10,0.1)]" tilt={tilt}>
      <div className="relative h-[210px] bg-gradient-to-br from-peach to-blush">
        <img src={chef.src} alt={chef.name} className="h-full w-full object-cover" />
        <div className="absolute left-3 top-3 rounded-full bg-white/90 px-[11px] py-[5px] text-xs font-bold text-ink backdrop-blur-sm">
          {chef.cuisine}
        </div>
        <div className="absolute bottom-3 right-3 rounded-full bg-ink px-[11px] py-[5px] text-[12.5px] font-bold text-white">
          {chef.rating}★
        </div>
      </div>
      <div className="px-[18px] pb-[22px] pt-[18px]">
        <h3 className="font-display text-[19px] font-bold">{chef.name}</h3>
        <p className="mb-3.5 mt-1 text-[13.5px] text-mocha">{chef.area}</p>
        <div className="flex items-center justify-between">
          <span className="text-[13.5px] text-coffee">{chef.meals} meals today</span>
          <span className="grid h-[34px] w-[34px] place-items-center rounded-full bg-cream text-[15px] text-orange">♥</span>
        </div>
      </div>
    </Reveal>
  );
}

export default function Chefs() {
  return (
    <section id="chefs" className="mx-auto max-w-[1240px] px-6 pb-10 pt-[90px]">
      <Reveal className="mb-11 flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-[560px]">
          <div className="mb-3.5 text-[13px] font-bold uppercase tracking-[0.14em] text-orange">Featured chefs</div>
          <h2 className="font-display text-[clamp(32px,4vw,52px)] font-extrabold leading-[1.02] tracking-[-0.025em]">
            Meet the Indian chefs behind the plates
          </h2>
        </div>
        <a href="#download" className="inline-flex items-center gap-[7px] text-[15px] font-semibold hover:gap-3">
          Follow your favourite Indian chefs →
        </a>
      </Reveal>
      <div className="grid grid-cols-2 gap-[22px] lg:grid-cols-4">
        {chefs.map((c, i) => (
          <ChefCard key={c.name} chef={c} delay={i * 70} />
        ))}
      </div>
    </section>
  );
}
