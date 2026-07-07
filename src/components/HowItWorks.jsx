import Reveal from './Reveal';
import { useTilt } from '../hooks/useTilt';
import { PinIcon, PlateIcon, ScooterIcon } from './Icons';

const steps = [
  {
    n: '01',
    icon: <PinIcon />,
    iconBg: 'from-peach to-amber',
    title: 'Discover chefs near you',
    body: "Browse today's menus, pantry goods, and exclusive chef-hosted social parties in your neighbourhood.",
  },
  {
    n: '02',
    icon: <PlateIcon />,
    iconBg: 'from-blush to-orange',
    title: 'Order or subscribe',
    body: 'One-off meals, weekly Fuel plans tuned to your goals, or a ticket to an in-house chef party.',
  },
  {
    n: '03',
    icon: <ScooterIcon />,
    iconBg: 'from-[#FFC9B0] to-brick',
    title: 'Track to your door',
    body: 'Real-time tracking for one-off orders and every delivery on your active subscription.',
  },
];

function Card({ step, delay }) {
  const tilt = useTilt();
  return (
    <Reveal delay={delay} className="tilt rounded-3xl bg-white p-[34px] shadow-[0_20px_44px_rgba(120,50,10,0.09)]" tilt={tilt}>
      <div className={`mb-[22px] grid h-[58px] w-[58px] place-items-center rounded-[17px] bg-gradient-to-br ${step.iconBg}`}>
        {step.icon}
      </div>
      <div className="mb-2 font-display text-xl font-extrabold text-orange">{step.n}</div>
      <h3 className="mb-2.5 font-display text-[22px] font-bold">{step.title}</h3>
      <p className="text-[15.5px] leading-[1.55] text-coffee">{step.body}</p>
    </Reveal>
  );
}

export default function HowItWorks() {
  return (
    <section id="how" className="mx-auto max-w-[1240px] px-6 pb-10 pt-[110px]">
      <Reveal className="mx-auto mb-[60px] max-w-[640px] text-center">
        <div className="mb-3.5 text-[13px] font-bold uppercase tracking-[0.14em] text-orange">How it works</div>
        <h2 className="font-display text-[clamp(32px,4vw,52px)] font-extrabold leading-[1.02] tracking-[-0.025em]">
          Three taps to a home-cooked meal
        </h2>
      </Reveal>
      <div className="grid gap-6 md:grid-cols-3">
        {steps.map((s, i) => (
          <Card key={s.n} step={s} delay={i * 80} />
        ))}
      </div>
    </section>
  );
}
