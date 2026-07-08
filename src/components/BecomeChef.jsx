import Reveal from './Reveal';
import logoFullImg from '../assets/logo_full.jpg';

const stats = [
  ['₹80k+', 'avg. monthly earnings'],
  ['0%', 'setup fees'],
  ['48h', 'to go live'],
];

export default function BecomeChef() {
  return (
    <section className="mx-auto mt-[60px] max-w-[1240px] px-6">
      <Reveal className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-orange to-brick px-7 py-[70px] text-white md:px-14">
        <div data-depth="0.05" className="pointer-events-none absolute -right-10 -top-20 h-[360px] w-[360px] rounded-full bg-white/10" />
        <div data-depth="0.08" className="pointer-events-none absolute -bottom-[90px] right-[20%] h-[200px] w-[200px] rounded-full bg-white/[0.08]" />
        
        <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
          <div className="relative max-w-[620px]">
            <div className="mb-4 text-[13px] font-bold uppercase tracking-[0.14em] opacity-85">For chefs</div>
            <h2 className="mb-[18px] font-display text-[clamp(32px,4vw,54px)] font-extrabold leading-[1.02] tracking-[-0.025em]">
              Cook from home. Build a following. Get paid.
            </h2>
            <p className="mb-8 max-w-[520px] text-[17.5px] leading-[1.6] opacity-90">
              Turn your kitchen into a business. Set your menu, take orders, host in-house parties & socials, and reach hungry neighbours — GoHomey handles discovery, payments and delivery.
            </p>
            <div className="flex flex-wrap gap-3.5">
              <a href="#download" className="rounded-full bg-white px-7 py-[15px] text-base font-bold text-brick transition hover:-translate-y-0.5">
                Become a chef →
              </a>
              <a href="#how" className="rounded-full border-[1.5px] border-white/55 px-[26px] py-[15px] text-base font-semibold text-white transition hover:bg-white/15">
                See how earnings work
              </a>
            </div>
            <div className="mt-11 flex gap-10">
              {stats.map(([n, l]) => (
                <div key={l}>
                  <div className="font-display text-[32px] font-extrabold">{n}</div>
                  <div className="text-[13.5px] opacity-80">{l}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="hidden lg:block relative h-[320px] overflow-hidden rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.35)] border border-white/10">
            <img src={logoFullImg} alt="GoHomey Brand Logo" className="h-full w-full object-cover transition duration-700 hover:scale-105" />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
