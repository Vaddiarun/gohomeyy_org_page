import { Logo } from './Icons';

const columns = [
  {
    title: 'Explore',
    links: [
      ['Discover chefs', '#chefs'],
      ['Fuel plans', '#fuel'],
      ['House parties', '#tables'],
      ['Pantry shop', '#pantry'],
    ],
  },
  {
    title: 'Company',
    links: [
      ['About us', '#'],
      ['Become a chef', '#download'],
      ['Careers', '#'],
      ['Press', '#'],
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#1A1109] text-white/70">
      <div className="mx-auto grid max-w-[1240px] gap-10 px-6 pb-10 pt-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <div className="mb-4 flex items-center gap-2.5">
            <Logo />
            <span className="font-display text-[22px] font-extrabold text-white">GoHomey</span>
          </div>
          <p className="max-w-[280px] text-[14.5px] leading-[1.6]">
            Home-cooked meals from real chefs next door. Discover, subscribe, and gather around the table.
          </p>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <div className="mb-4 font-display text-sm font-bold text-white">{col.title}</div>
            <div className="flex flex-col gap-[11px] text-[14.5px]">
              {col.links.map(([label, href]) => (
                <a key={label} href={href} className="text-white/70 hover:text-amber">
                  {label}
                </a>
              ))}
            </div>
          </div>
        ))}
        <div>
          <div className="mb-4 font-display text-sm font-bold text-white">Get the app</div>
          <div className="flex flex-col gap-[11px]">
            <a href="#download" className="rounded-xl bg-white/[0.08] px-4 py-[11px] text-[13.5px] font-semibold text-white hover:bg-white/15">
               App Store
            </a>
            <a href="#download" className="rounded-xl bg-white/[0.08] px-4 py-[11px] text-[13.5px] font-semibold text-white hover:bg-white/15">
              ▶ Google Play
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1240px] flex-wrap justify-between gap-3 px-6 py-[22px] text-[13px]">
          <span>© 2025 GoHomey. Made with heat & heart.</span>
          <span className="flex gap-5">
            <a href="#" className="text-white/60">Privacy</a>
            <a href="#" className="text-white/60">Terms</a>
            <a href="#" className="text-white/60">Support</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
