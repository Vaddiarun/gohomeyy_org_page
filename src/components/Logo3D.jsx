/**
 * The GoHomey mark: a ribbon-wrapped "H" topped with a chef hat.
 * Each visual part carries a data-part attribute so scroll timelines
 * (see BrandIntro.jsx) can grab and animate them independently.
 */
export default function Logo3D({ size = 1, className = '' }) {
  return (
    <svg
      viewBox="0 0 200 240"
      width={200 * size}
      height={240 * size}
      className={className}
      style={{ overflow: 'visible' }}
    >
      <defs>
        <linearGradient id="legGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F59333" />
          <stop offset="55%" stopColor="#E86A17" />
          <stop offset="100%" stopColor="#C0392B" />
        </linearGradient>
        <linearGradient id="ribbonGradient" x1="0" y1="0" x2="1" y2="0.15">
          <stop offset="0%" stopColor="#C0392B" />
          <stop offset="45%" stopColor="#F59333" />
          <stop offset="55%" stopColor="#FFD9A6" />
          <stop offset="70%" stopColor="#E86A17" />
          <stop offset="100%" stopColor="#C0392B" />
        </linearGradient>
        <linearGradient id="hatGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#F1E6D8" />
        </linearGradient>
      </defs>

      <g data-part="leg-left">
        <rect x="42" y="70" width="42" height="146" rx="10" fill="url(#legGradient)" />
        <rect x="42" y="70" width="15" height="146" rx="7" fill="#fff" opacity="0.18" />
      </g>

      <g data-part="leg-right">
        <rect x="116" y="70" width="42" height="146" rx="10" fill="url(#legGradient)" />
        <rect x="116" y="70" width="15" height="146" rx="7" fill="#fff" opacity="0.18" />
      </g>

      <g data-part="ribbon">
        <path
          d="M30 158 C 70 118, 130 168, 172 128 L 172 154 C 130 194, 70 144, 30 184 Z"
          fill="url(#ribbonGradient)"
        />
        <path
          d="M30 158 C 70 118, 130 168, 172 128"
          fill="none"
          stroke="#fff"
          strokeOpacity="0.35"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </g>

      <g data-part="hat">
        <ellipse cx="63" cy="70" rx="26" ry="9" fill="url(#hatGradient)" />
        <rect x="41" y="63" width="44" height="18" rx="9" fill="url(#hatGradient)" />
        <path
          d="M35 44 C35 26 51 14 63 14 C75 14 91 26 91 44 C91 54 84 60 76 62 C79 50 74 34 63 34 C52 34 47 50 50 62 C42 60 35 54 35 44 Z"
          fill="url(#hatGradient)"
        />
        <ellipse cx="63" cy="44" rx="8" ry="10" fill="#fff" opacity="0.5" />
      </g>
    </svg>
  );
}
