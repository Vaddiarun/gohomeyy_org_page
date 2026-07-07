import Reveal from './Reveal';
import { pantryImages } from '../data';

const tags = ['Fresh produce', 'Sauces & spices', 'Meal kits', 'Chef bundles'];

export default function Pantry() {
  return (
    <section id="pantry" className="mx-auto max-w-[1240px] px-6 pb-10 pt-[100px]">
      <div className="grid items-center gap-14 md:grid-cols-[1fr_1.1fr]">
        <Reveal className="relative h-[440px]">
          <div
            data-depth="0.05"
            className="absolute left-[4%] top-0 h-[280px] w-[230px] animate-floatY overflow-hidden rounded-[22px] shadow-[0_24px_46px_rgba(120,50,10,0.2)]"
          >
            <img src={pantryImages.jar} alt="Pantry item" className="h-full w-full object-cover" />
          </div>
          <div
            data-depth="0.09"
            className="absolute bottom-0 right-[2%] h-[250px] w-[210px] animate-floatY3 overflow-hidden rounded-[22px] shadow-[0_24px_46px_rgba(120,50,10,0.2)]"
          >
            <img src={pantryImages.kit} alt="Meal kit" className="h-full w-full object-cover" />
          </div>
          <div
            data-depth="0.14"
            className="absolute left-0 top-[44%] flex items-center gap-[11px] rounded-2xl bg-white p-3 pr-[15px] shadow-[0_18px_34px_rgba(120,50,10,0.2)]"
          >
            <span className="grid h-[38px] w-[38px] place-items-center rounded-[11px] bg-gradient-to-br from-peach to-amber text-[19px]">🧺</span>
            <div>
              <div className="font-display text-sm font-bold">Added to cart</div>
              <div className="text-xs font-semibold text-leaf">Meal kit · $18</div>
            </div>
          </div>
        </Reveal>
        <Reveal>
          <div className="mb-3.5 text-[13px] font-bold uppercase tracking-[0.14em] text-orange">Pantry shop</div>
          <h2 className="mb-5 font-display text-[clamp(32px,4vw,52px)] font-extrabold leading-[1.02] tracking-[-0.025em]">
            Stock up on chef-prepped kits & goods
          </h2>
          <p className="mb-[26px] max-w-[460px] text-[17px] leading-[1.6] text-coffee">
            Buy the same ingredients and meal kits your favourite chefs cook with — dropped in the same cart as your meals and subscriptions.
          </p>
          <div className="flex flex-wrap gap-3">
            {tags.map((t) => (
              <span key={t} className="rounded-full border border-ink/10 bg-white px-4 py-2.5 text-[14.5px] font-semibold">
                {t}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
