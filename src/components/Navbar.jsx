import { useScrolled } from '../hooks/useScrolled';
import { Logo } from './Icons';

const links = [
  { href: '#how', label: 'How it works' },
  { href: '#chefs', label: 'Chefs' },
  { href: '#fuel', label: 'Fuel' },
  { href: '#tables', label: 'House Parties' },
  { href: '#pantry', label: 'Pantry' },
];

export default function Navbar() {
  const scrolled = useScrolled(40);
  return (
    <nav
      className={`fixed inset-x-0 top-0 z-[100] transition-all duration-300 ${
        scrolled ? 'bg-cream/85 backdrop-blur-md shadow-[0_4px_24px_rgba(120,50,10,0.08)]' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-[1240px] items-center justify-between px-7">
        <a href="#top" className="flex items-center gap-2.5 text-ink">
          <Logo />
          <span className="font-display text-[22px] font-extrabold tracking-[-0.02em] text-ink">GoHomey</span>
        </a>
        <div className="hidden items-center gap-[34px] lg:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-[15px] font-medium text-ink/80 hover:text-orange">
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="#download"
          className="rounded-full bg-ink px-[22px] py-[11px] text-sm font-semibold text-white shadow-[0_6px_18px_rgba(36,25,20,0.22)] transition hover:-translate-y-px hover:bg-orange"
        >
          Get the app
        </a>
      </div>
    </nav>
  );
}
