export default function SlideContext_WhatsAhead() {
  const stops = [
    { label: 'Private aviation', Icon: PlaneIcon },
    { label: 'Airport coordination', Icon: TowerIcon },
    { label: 'WOW experiences', Icon: ChampagneIcon },
    { label: 'Complex itineraries', Icon: MapIcon },
    { label: 'Continuity across the trip', Icon: ThreadIcon },
  ]
  return (
    <div
      className="slide-inner"
      style={{
        padding: '0 var(--slide-pad-x)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        maxWidth: '1320px',
        margin: '0 auto',
      }}
    >
      <h2
        className="display reveal reveal-2"
        style={{
          fontFamily: 'var(--serif)',
          fontWeight: 500,
          fontSize: 'clamp(40px, 4.4vw, 64px)',
          lineHeight: 1.15,
          letterSpacing: '-0.008em',
          color: 'var(--teal-deep)',
          maxWidth: '1200px',
          marginBottom: 'clamp(48px, 6vh, 80px)',
        }}
      >
        FlySmoother is becoming more involved <em style={{ color: 'var(--gold)' }}>in the journey itself.</em>
      </h2>

      <JourneyStrip stops={stops} />

      <div
        className="reveal reveal-4"
        style={{
          marginTop: 'clamp(48px, 6vh, 72px)',
          paddingTop: 'clamp(20px, 2.4vh, 30px)',
          borderTop: '1px solid rgba(217, 171, 114, 0.32)',
          fontFamily: 'var(--serif)',
          fontStyle: 'italic',
          fontSize: 'clamp(18px, 1.5vw, 24px)',
          color: 'var(--ink-soft)',
          maxWidth: '900px',
          lineHeight: 1.5,
        }}
      >
        Which raises a question: what should every trip <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>feel like?</em>
      </div>
    </div>
  )
}

function JourneyStrip({ stops }) {
  const n = stops.length
  return (
    <div className="reveal reveal-3" style={{ width: '100%' }}>
      <div style={{ position: 'relative', padding: '0 4%' }}>
        {/* Connecting line */}
        <div
          style={{
            position: 'absolute',
            top: '60px',
            left: '8%',
            right: '8%',
            height: '1px',
            background:
              'linear-gradient(90deg, transparent 0%, rgba(180, 145, 95, 0.45) 14%, rgba(184, 130, 80, 0.85) 100%)',
          }}
        />
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${n}, 1fr)`,
            columnGap: 'clamp(16px, 2vw, 32px)',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {stops.map((stop, i) => {
            const intensity = 0.55 + (i / (n - 1)) * 0.45
            const color = `rgba(184, 107, 74, ${intensity})`
            const { Icon, label } = stop
            return (
              <div
                key={i}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    width: '52px',
                    height: '52px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 'clamp(22px, 2.6vh, 32px)',
                  }}
                >
                  <Icon color={color} />
                </div>
                <div
                  style={{
                    fontFamily: 'var(--serif)',
                    fontStyle: 'italic',
                    fontSize: 'clamp(14px, 1.15vw, 18px)',
                    color: 'var(--teal-deep)',
                    lineHeight: 1.25,
                    maxWidth: '160px',
                  }}
                >
                  {label}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

function PlaneIcon({ color }) {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path
        d="M 6 28 L 42 8 L 28 34 L 24 24 L 14 28 Z"
        stroke={color}
        strokeWidth="1.6"
        strokeLinejoin="round"
        fill={color}
        fillOpacity="0.18"
      />
      <line x1="24" y1="24" x2="42" y2="8" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}

function TowerIcon({ color }) {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      {/* Tower body */}
      <path
        d="M 20 40 L 20 20 L 16 16 L 32 16 L 28 20 L 28 40 Z"
        stroke={color}
        strokeWidth="1.6"
        strokeLinejoin="round"
        fill={color}
        fillOpacity="0.16"
      />
      {/* Mast */}
      <line x1="24" y1="16" x2="24" y2="8" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
      {/* Beacon */}
      <circle cx="24" cy="6" r="2.2" fill={color} />
      {/* Ground line */}
      <line x1="12" y1="40" x2="36" y2="40" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}

function ChampagneIcon({ color }) {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      {/* Flute bowl */}
      <path
        d="M 19 6 L 29 6 L 27 26 Q 24 28 21 26 Z"
        stroke={color}
        strokeWidth="1.6"
        strokeLinejoin="round"
        fill={color}
        fillOpacity="0.2"
      />
      {/* Surface line in the bowl */}
      <line x1="20" y1="12" x2="28" y2="12" stroke={color} strokeWidth="0.7" strokeOpacity="0.6" />
      {/* Stem */}
      <line x1="24" y1="28" x2="24" y2="40" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
      {/* Base */}
      <line x1="17" y1="42" x2="31" y2="42" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      {/* Bubbles inside the flute */}
      <circle cx="22" cy="20" r="1.1" fill={color} />
      <circle cx="25" cy="16" r="1" fill={color} />
      <circle cx="24" cy="23" r="0.8" fill={color} />
      {/* Sparkle bursts around the flute */}
      <g stroke={color} strokeWidth="1.2" strokeLinecap="round">
        <line x1="6" y1="10" x2="10" y2="10" />
        <line x1="8" y1="8" x2="8" y2="12" />
      </g>
      <g stroke={color} strokeWidth="1.2" strokeLinecap="round">
        <line x1="38" y1="14" x2="42" y2="14" />
        <line x1="40" y1="12" x2="40" y2="16" />
      </g>
      <g stroke={color} strokeWidth="1" strokeLinecap="round" opacity="0.65">
        <line x1="4" y1="30" x2="7" y2="30" />
        <line x1="5.5" y1="28.5" x2="5.5" y2="31.5" />
      </g>
    </svg>
  )
}

function MapIcon({ color }) {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      {/* Folded map */}
      <path
        d="M 6 14 L 18 10 L 30 14 L 42 10 L 42 36 L 30 40 L 18 36 L 6 40 Z"
        stroke={color}
        strokeWidth="1.6"
        strokeLinejoin="round"
        fill={color}
        fillOpacity="0.15"
      />
      {/* Fold lines */}
      <line x1="18" y1="10" x2="18" y2="36" stroke={color} strokeWidth="1.1" strokeOpacity="0.75" />
      <line x1="30" y1="14" x2="30" y2="40" stroke={color} strokeWidth="1.1" strokeOpacity="0.75" />
      {/* Tiny route dot */}
      <circle cx="24" cy="25" r="1.5" fill={color} />
    </svg>
  )
}

function ThreadIcon({ color }) {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path
        d="M 6 34 Q 14 14 24 24 T 42 14"
        stroke={color}
        strokeWidth="1.8"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="6" cy="34" r="3" stroke={color} strokeWidth="1.6" fill="none" />
      <circle cx="42" cy="14" r="3" fill={color} />
    </svg>
  )
}
