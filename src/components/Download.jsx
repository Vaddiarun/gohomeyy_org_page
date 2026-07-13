import Reveal from './Reveal';
import { appScreen } from '../data';

export default function Download() {
  return (
    <section id="download" className="mx-auto max-w-[1240px] px-6 pb-[90px] pt-[110px]">
      <div className="grid items-center gap-[50px] md:grid-cols-2">
        <Reveal>
          <h2 className="mb-5 font-display text-[clamp(34px,4.4vw,58px)] font-extrabold leading-none tracking-[-0.03em]">
            Your neighbourhood kitchen, in your pocket.
          </h2>
          <p className="mb-[34px] max-w-[440px] text-lg leading-[1.55] text-coffee">
            Download Gohomeyy and taste what's cooking next door tonight.
          </p>
          <div className="flex flex-wrap gap-3.5">
            <a href="#download" className="inline-flex items-center gap-3 rounded-2xl bg-ink px-6 py-3.5 text-white transition hover:-translate-y-0.5">
              <span className="text-[26px]"></span>
              <div className="leading-[1.15]">
                <div className="text-[11px] opacity-70">Download on the</div>
                <div className="font-display text-[19px] font-bold">App Store</div>
              </div>
            </a>
            <a href="#download" className="inline-flex items-center gap-3 rounded-2xl bg-ink px-6 py-3.5 text-white transition hover:-translate-y-0.5">
              <span className="text-2xl">▶</span>
              <div className="leading-[1.15]">
                <div className="text-[11px] opacity-70">Get it on</div>
                <div className="font-display text-[19px] font-bold">Google Play</div>
              </div>
            </a>
          </div>
          <div className="mt-[30px] flex items-center gap-3.5">
            <div className="h-24 w-24 rounded-2xl bg-white p-[9px] shadow-[0_12px_30px_rgba(120,50,10,0.14)]">
              <div
                className="h-full w-full rounded-lg"
                style={{ background: 'repeating-conic-gradient(#241914 0 25%,#fff 0 50%) 0 0/16px 16px' }}
              />
            </div>
            <div className="max-w-[150px] text-sm text-mocha">Scan to download on your phone</div>
          </div>
        </Reveal>

        <Reveal className="relative grid h-[520px] place-items-center">
          <div
            data-depth="0.03"
            className="absolute h-[360px] w-[360px] animate-pulseGlow rounded-full"
            style={{ background: 'radial-gradient(circle,rgba(245,147,51,.4),transparent 68%)' }}
          />
          <div
            data-depth="0.06"
            className="relative h-[508px] w-[250px] animate-floatY rounded-[42px] bg-ink p-2.5 shadow-[0_40px_70px_rgba(120,50,10,0.34)]"
          >
            <div className="absolute left-1/2 top-5 z-[2] h-[22px] w-20 -translate-x-1/2 rounded-b-[14px] bg-ink" />
            <div className="h-full w-full overflow-hidden rounded-[34px] bg-cream">
              <img src={appScreen} alt="Gohomeyy app" className="h-full w-full object-cover" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
