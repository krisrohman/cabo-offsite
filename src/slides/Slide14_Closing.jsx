export default function Slide14_Closing() {
  return (
    <div className="slide-inner" style={{ position: 'relative', overflow: 'hidden', padding: 0 }}>
      <PanoramicHorizon />

      <div
        className="reveal"
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: '50%',
          transform: 'translateY(-50%)',
          padding: '0 var(--slide-pad-x)',
          textAlign: 'center',
          zIndex: 3,
        }}
      >
        <h2
          className="hero reveal reveal-2"
          style={{
            fontFamily: 'var(--serif)',
            fontWeight: 500,
            fontSize: 'clamp(64px, 7vw, 112px)',
            lineHeight: 0.98,
            letterSpacing: '-0.015em',
            color: 'var(--on-dark)',
            margin: '0 auto',
            maxWidth: '1000px',
            textShadow: '0 4px 28px rgba(0,0,0,0.6)',
          }}
        >
          Built for <em style={{ color: 'var(--gold-bright)', fontStyle: 'italic', fontWeight: 400 }}>the next phase.</em>
        </h2>

        <div
          className="reveal reveal-3"
          style={{
            marginTop: 'clamp(36px, 4.5vh, 56px)',
            fontFamily: 'var(--serif)',
            fontStyle: 'italic',
            fontSize: 'clamp(22px, 1.9vw, 30px)',
            color: 'rgba(240, 229, 203, 0.9)',
            lineHeight: 1.45,
            textShadow: '0 2px 18px rgba(0,0,0,0.55)',
            letterSpacing: '0.01em',
          }}
        >
          Together.
        </div>
      </div>

      <div
        className="reveal reveal-4"
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 'clamp(40px, 5vh, 64px)',
          padding: '0 var(--slide-pad-x)',
          textAlign: 'center',
          zIndex: 3,
          fontFamily: 'var(--sans)',
          fontSize: 'clamp(10px, 0.85vw, 12px)',
          fontWeight: 500,
          letterSpacing: '0.36em',
          textTransform: 'uppercase',
          color: 'rgba(232, 220, 196, 0.45)',
        }}
      >
        State of the Business · 2026
      </div>
    </div>
  )
}

function PanoramicHorizon() {
  return (
    <svg
      viewBox="0 0 1600 900"
      preserveAspectRatio="xMidYMid slice"
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 0 }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="pano-sky" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#3D4A5C" />
          <stop offset="20%" stopColor="#5E5648" />
          <stop offset="48%" stopColor="#6B5743" />
          <stop offset="72%" stopColor="#8A5E3A" />
          <stop offset="100%" stopColor="#3A1F15" />
        </linearGradient>
        <linearGradient id="pano-sea" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#1B2226" />
          <stop offset="35%" stopColor="#1F3838" />
          <stop offset="60%" stopColor="#142A29" />
          <stop offset="100%" stopColor="#2A1810" />
        </linearGradient>
        <radialGradient id="pano-sun" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFE7B5" stopOpacity="0.85" />
          <stop offset="55%" stopColor="#DDB87E" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#C9A06A" stopOpacity="0" />
        </radialGradient>
        {/* central dim overlay so text reads */}
        <radialGradient id="pano-textshade" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#000" stopOpacity="0.35" />
          <stop offset="70%" stopColor="#000" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="pano-depth" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#000" stopOpacity="0.15" />
          <stop offset="80%" stopColor="#000" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#000" stopOpacity="0.4" />
        </linearGradient>
      </defs>

      {/* sky/sea */}
      <rect x="0" y="0" width="1600" height="540" fill="url(#pano-sky)" />
      <rect x="0" y="540" width="1600" height="360" fill="url(#pano-sea)" />
      <line x1="0" x2="1600" y1="540" y2="540" stroke="#1F3E3D" strokeWidth="1.5" strokeOpacity="0.4" />

      {/* Sun pushed to far right-bottom, mostly behind horizon — ambient */}
      <circle cx="1420" cy="560" r="220" fill="url(#pano-sun)" />
      <circle cx="1420" cy="560" r="42" fill="#FFE7B5" opacity="0.78" />
      {Array.from({ length: 6 }).map((_, i) => {
        const y = 600 + i * 12
        const len = 80 + i * 24
        return (
          <line
            key={i}
            x1={1420 - len / 2}
            x2={1420 + len / 2}
            y1={y}
            y2={y}
            stroke="#DDB87E"
            strokeWidth="1"
            strokeOpacity={Math.max(0.04, 0.35 - i * 0.05)}
          />
        )
      })}

      {/* Central text-area shade for legibility */}
      <rect x="200" y="180" width="1200" height="540" fill="url(#pano-textshade)" />

      {/* Bottom depth */}
      <rect x="0" y="0" width="1600" height="900" fill="url(#pano-depth)" />
    </svg>
  )
}
