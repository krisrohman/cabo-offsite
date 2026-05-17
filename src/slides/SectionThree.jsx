export default function SectionThree() {
  return (
    <div className="slide-inner" style={{ position: 'relative', overflow: 'hidden', padding: 0 }}>
      <HorizonBackdrop />
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
            color: 'var(--teal-deep)',
            marginBottom: '1.25rem',
            textShadow: '0 2px 14px rgba(255, 240, 200, 0.4)',
          }}
        >
          Sunset
        </div>
        <h3
          className="lens-title reveal reveal-2"
          style={{
            fontSize: 'clamp(72px, 9vw, 140px)',
            lineHeight: 1,
            color: 'var(--teal-deep)',
            textShadow: '0 4px 30px rgba(255, 240, 200, 0.4)',
          }}
        >
          The <em style={{ color: '#FAF3E2', textShadow: '0 2px 18px rgba(80, 50, 20, 0.45)' }}>Future.</em>
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
            color: 'var(--teal-deep)',
            textShadow: '0 2px 12px rgba(255, 240, 200, 0.4)',
          }}
        >
          What deeper trust <em style={{ color: '#FAF3E2', textShadow: '0 2px 14px rgba(80, 50, 20, 0.5)' }}>makes possible.</em>
        </p>
      </div>
    </div>
  )
}

function HorizonBackdrop() {
  return (
    <svg
      viewBox="0 0 1600 900"
      preserveAspectRatio="xMidYMid slice"
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="sun-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E2C998" />
          <stop offset="20%" stopColor="#DDB87E" />
          <stop offset="40%" stopColor="#C9A06A" />
          <stop offset="56%" stopColor="#8A6B45" />
          <stop offset="62%" stopColor="#3F5350" />
          <stop offset="74%" stopColor="#2C5755" />
          <stop offset="100%" stopColor="#1F3E3D" />
        </linearGradient>
        <radialGradient id="sun-rays" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFF0CE" stopOpacity="0.95" />
          <stop offset="60%" stopColor="#DDB87E" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#C9A06A" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect x="0" y="0" width="1600" height="900" fill="url(#sun-sky)" />
      {/* Sun moved lower so the title sits in the cleaner sky area above */}
      <circle cx="800" cy="600" r="280" fill="url(#sun-rays)" />
      <circle cx="800" cy="600" r="64" fill="#FFE7B5" opacity="0.92" />
      <line x1="0" x2="1600" y1="640" y2="640" stroke="#1F3E3D" strokeWidth="1.5" strokeOpacity="0.5" />
      {Array.from({ length: 8 }).map((_, i) => {
        const y = 660 + i * 14
        const len = 100 + i * 30
        return (
          <line
            key={i}
            x1={800 - len / 2}
            x2={800 + len / 2}
            y1={y}
            y2={y}
            stroke="#DDB87E"
            strokeWidth="1"
            strokeOpacity={Math.max(0.05, 0.5 - i * 0.05)}
          />
        )
      })}
    </svg>
  )
}
