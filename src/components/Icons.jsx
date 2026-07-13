import logoIconImg from '../assets/logo_icon.jpg';

export function PinIcon() {
  return (
    <svg width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="#7A2E0C" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 5.5-8 12-8 12s-8-6.5-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="2.8" />
    </svg>
  );
}

export function PlateIcon() {
  return (
    <svg width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 3v7a3 3 0 0 0 3 3v8M7 3v6M10 3v6" />
      <path d="M18 3c-1.7 0-3 2.2-3 5s1 4 2 4v9" />
    </svg>
  );
}

export function ScooterIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="17" r="2.5" />
      <circle cx="17" cy="17" r="2.5" />
      <path d="M8.5 17h6M19.5 17H21v-4l-3-4h-3v8M15 9V6H9M6 9h6" />
    </svg>
  );
}

export function Logo({ size = 34 }) {
  return (
    <img
      src={logoIconImg}
      alt="Gohomeyy Logo"
      className="rounded-xl object-cover shadow-[0_4px_12px_rgba(120,50,10,0.12)]"
      style={{ width: size, height: size }}
    />
  );
}
