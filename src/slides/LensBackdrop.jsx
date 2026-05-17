export default function LensBackdrop({ lens }) {
  if (lens === 'dawn') return <DawnBackdrop />
  if (lens === 'ocean') return <OceanBackdrop />
  if (lens === 'sunset') return <SunsetBackdrop />
  return null
}

function DawnBackdrop() {
  return (
    <svg
      viewBox="0 0 1600 900"
      preserveAspectRatio="xMidYMid slice"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="dawn-bottom" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F1E8D4" stopOpacity="0" />
          <stop offset="60%" stopColor="#E6D5B8" stopOpacity="0" />
          <stop offset="92%" stopColor="#C9956A" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#8A6342" stopOpacity="0.35" />
        </linearGradient>
        <radialGradient id="dawn-sun-corner" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#DDB87E" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#DDB87E" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect x="0" y="0" width="1600" height="900" fill="url(#dawn-bottom)" />
      <circle cx="1500" cy="180" r="320" fill="url(#dawn-sun-corner)" />
      {/* faint dune silhouette at very bottom */}
      <path
        d="M 0 880 C 220 870, 460 892, 720 875 S 1140 858, 1380 875 S 1600 880, 1600 880 L 1600 900 L 0 900 Z"
        fill="#5A4332"
        fillOpacity="0.14"
      />
    </svg>
  )
}

function OceanBackdrop() {
  return (
    <svg
      viewBox="0 0 1600 900"
      preserveAspectRatio="xMidYMid slice"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="ocean-bottom" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F1E8D4" stopOpacity="0" />
          <stop offset="70%" stopColor="#7E8C92" stopOpacity="0" />
          <stop offset="90%" stopColor="#3F5D62" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#0F2A2C" stopOpacity="0.32" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="1600" height="900" fill="url(#ocean-bottom)" />
      {/* horizon line near bottom */}
      <line x1="0" x2="1600" y1="780" y2="780" stroke="#1F3E3D" strokeWidth="1" strokeOpacity="0.18" />
      {/* faint swell lines below horizon */}
      {Array.from({ length: 8 }).map((_, i) => {
        const y = 800 + i * 12
        const offset = (i % 3) * 200
        const opacity = Math.max(0.04, 0.18 - i * 0.018)
        return (
          <g key={i}>
            <line x1={offset} x2={offset + 280} y1={y} y2={y} stroke="#A8C1C2" strokeWidth="1" strokeOpacity={opacity} />
            <line x1={offset + 600} x2={offset + 920} y1={y + 2} y2={y + 1} stroke="#A8C1C2" strokeWidth="1" strokeOpacity={opacity * 0.7} />
            <line x1={offset + 1200} x2={offset + 1500} y1={y - 1} y2={y + 2} stroke="#A8C1C2" strokeWidth="1" strokeOpacity={opacity * 0.5} />
          </g>
        )
      })}
    </svg>
  )
}

function SunsetBackdrop() {
  return (
    <svg
      viewBox="0 0 1600 900"
      preserveAspectRatio="xMidYMid slice"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="sunset-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFD9A8" stopOpacity="0.35" />
          <stop offset="55%" stopColor="#DDB87E" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#C9A06A" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="sunset-top" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#DDB87E" stopOpacity="0.16" />
          <stop offset="40%" stopColor="#C9A06A" stopOpacity="0" />
          <stop offset="100%" stopColor="#F1E8D4" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="1600" height="900" fill="url(#sunset-top)" />
      <circle cx="1280" cy="220" r="400" fill="url(#sunset-glow)" />
      {/* thin horizon mark */}
      <line x1="0" x2="1600" y1="220" y2="220" stroke="#C9A06A" strokeWidth="1" strokeOpacity="0.18" />
    </svg>
  )
}
