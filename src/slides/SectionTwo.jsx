export default function SectionTwo() {
  return (
    <div className="slide-inner" style={{ position: 'relative', overflow: 'hidden', padding: 0 }}>
      <OceanBackdrop />
      <div
        className="lens-content reveal"
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: '18%',
          padding: '0 var(--slide-pad-x)',
          gap: '1rem',
          textAlign: 'center',
        }}
      >
        <div
          className="reveal reveal-2"
          style={{
            fontFamily: 'var(--sans)',
            fontSize: 'clamp(11px, 0.9vw, 14px)',
            fontWeight: 500,
            letterSpacing: '0.36em',
            textTransform: 'uppercase',
            color: 'var(--gold-bright)',
            marginBottom: '1.25rem',
            textShadow: '0 2px 18px rgba(0,0,0,0.45)',
          }}
        >
          Midday
        </div>
        <h3
          className="lens-title reveal reveal-2"
          style={{
            fontSize: 'clamp(72px, 9vw, 140px)',
            lineHeight: 1,
            color: 'var(--on-dark)',
            textShadow: '0 4px 30px rgba(0,0,0,0.5)',
          }}
        >
          The <em>Relationship.</em>
        </h3>
        <p
          className="reveal reveal-3"
          style={{
            marginTop: '1.75rem',
            maxWidth: '880px',
            margin: '1.75rem auto 0',
            fontFamily: 'var(--serif)',
            fontStyle: 'italic',
            fontSize: 'clamp(22px, 1.75vw, 32px)',
            color: 'rgba(240, 229, 203, 0.92)',
            textShadow: '0 2px 12px rgba(0,0,0,0.45)',
          }}
        >
          The relationship <em style={{ color: 'var(--gold-bright)' }}>is the business.</em>
        </p>
      </div>
    </div>
  )
}

function OceanBackdrop() {
  return (
    <svg
      viewBox="0 0 1600 900"
      preserveAspectRatio="xMidYMid slice"
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="sea-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#C4B69A" />
          <stop offset="55%" stopColor="#7E8C92" />
          <stop offset="100%" stopColor="#3F5D62" />
        </linearGradient>
        <linearGradient id="sea-water" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3F6F70" />
          <stop offset="40%" stopColor="#2A5455" />
          <stop offset="100%" stopColor="#0F2A2C" />
        </linearGradient>
        {/* depth tint for title legibility */}
        <radialGradient id="sea-text-shade" cx="50%" cy="30%" r="50%">
          <stop offset="0%" stopColor="#000" stopOpacity="0.22" />
          <stop offset="70%" stopColor="#000" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect x="0" y="0" width="1600" height="500" fill="url(#sea-sky)" />
      <rect x="0" y="500" width="1600" height="400" fill="url(#sea-water)" />
      <rect x="0" y="0" width="1600" height="900" fill="url(#sea-text-shade)" />
      <line x1="0" x2="1600" y1="500" y2="500" stroke="#1F3E3D" strokeWidth="1" strokeOpacity="0.6" />
      {Array.from({ length: 18 }).map((_, i) => {
        const y = 520 + i * 22
        const offset = (i % 3) * 200
        const opacity = Math.max(0.06, 0.32 - i * 0.018)
        return (
          <g key={i}>
            <line x1={offset} x2={offset + 280} y1={y} y2={y - 1} stroke="#A8C1C2" strokeWidth="1" strokeOpacity={opacity} />
            <line x1={offset + 560} x2={offset + 920} y1={y + 2} y2={y + 1} stroke="#A8C1C2" strokeWidth="1" strokeOpacity={opacity * 0.7} />
            <line x1={offset + 1200} x2={offset + 1500} y1={y - 1} y2={y + 2} stroke="#A8C1C2" strokeWidth="1" strokeOpacity={opacity * 0.5} />
          </g>
        )
      })}
      {/* far sailboat — pushed to upper-left edge so it doesn't crowd the title */}
      <g opacity="0.55">
        <line x1="200" x2="200" y1="478" y2="498" stroke="#1F1610" strokeWidth="1" />
        <path d="M 192 498 L 208 498 L 204 504 L 196 504 Z" fill="#1F1610" />
        <polygon points="200,478 200,498 208,498" fill="#3A3328" />
      </g>
    </svg>
  )
}
