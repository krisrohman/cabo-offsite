export default function SectionOne() {
  return (
    <div className="slide-inner" style={{ position: 'relative', overflow: 'hidden', padding: 0 }}>
      <CoastlineBackdrop />
      <div
        className="lens-content reveal"
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: '22%',
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
          Dawn
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
          The <em>Foundation.</em>
        </h3>
        <p
          className="reveal reveal-3"
          style={{
            marginTop: '1.75rem',
            maxWidth: '820px',
            margin: '1.75rem auto 0',
            fontFamily: 'var(--serif)',
            fontStyle: 'italic',
            fontSize: 'clamp(22px, 1.75vw, 32px)',
            color: 'rgba(240, 229, 203, 0.92)',
            textShadow: '0 2px 12px rgba(0,0,0,0.45)',
          }}
        >
          The business became <em style={{ color: 'var(--gold-bright)' }}>more complex.</em>
        </p>
      </div>
    </div>
  )
}

function CoastlineBackdrop() {
  return (
    <svg
      viewBox="0 0 1600 900"
      preserveAspectRatio="xMidYMid slice"
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="dawn-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3D4A5C" />
          <stop offset="35%" stopColor="#7A6B5E" />
          <stop offset="62%" stopColor="#C9956A" />
          <stop offset="78%" stopColor="#A86B4A" />
          <stop offset="100%" stopColor="#5A3D2A" />
        </linearGradient>
        <linearGradient id="hill-far" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5A4332" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#3D2C20" stopOpacity="1" />
        </linearGradient>
        <linearGradient id="hill-mid" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3A2B1F" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#241910" stopOpacity="1" />
        </linearGradient>
        <linearGradient id="hill-near" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1F1610" />
          <stop offset="100%" stopColor="#120C08" />
        </linearGradient>
        <radialGradient id="dawn-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFD9A8" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#FFD9A8" stopOpacity="0" />
        </radialGradient>
        {/* Subtle vignette behind text for legibility */}
        <radialGradient id="dawn-text-shade" cx="50%" cy="38%" r="55%">
          <stop offset="0%" stopColor="#000" stopOpacity="0.25" />
          <stop offset="70%" stopColor="#000" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* dawn sky */}
      <rect x="0" y="0" width="1600" height="900" fill="url(#dawn-sky)" />

      {/* sun glow shifted to lower-right of the sky so it doesn't fight the title */}
      <circle cx="1280" cy="520" r="320" fill="url(#dawn-glow)" />

      {/* Subtle shade so the title carries against the bright dawn sky */}
      <rect x="0" y="0" width="1600" height="900" fill="url(#dawn-text-shade)" />

      {/* far hills */}
      <path
        d="M 0 560 C 200 530, 420 580, 640 550 S 1100 510, 1320 540 S 1600 560, 1600 560 L 1600 900 L 0 900 Z"
        fill="url(#hill-far)"
      />
      {/* mid hills */}
      <path
        d="M 0 640 C 180 600, 380 670, 600 630 S 1040 590, 1280 630 S 1600 640, 1600 640 L 1600 900 L 0 900 Z"
        fill="url(#hill-mid)"
      />
      {/* near hills */}
      <path
        d="M 0 740 C 240 710, 480 780, 760 750 S 1180 720, 1420 750 S 1600 740, 1600 740 L 1600 900 L 0 900 Z"
        fill="url(#hill-near)"
      />
    </svg>
  )
}
