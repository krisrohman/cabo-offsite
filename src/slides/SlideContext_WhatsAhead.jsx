export default function SlideContext_WhatsAhead() {
  const stops = [
    { label: 'Private aviation', Icon: PlaneIcon },
    { label: 'Airport coordination', Icon: TowerIcon },
    { label: 'WOW experiences', Icon: PartyHatIcon },
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

function PartyHatIcon({ color }) {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      {/* Cone */}
      <path
        d="M 24 6 L 38 40 L 10 40 Z"
        stroke={color}
        strokeWidth="1.6"
        strokeLinejoin="round"
        fill={color}
        fillOpacity="0.18"
      />
      {/* Pom-pom at top */}
      <circle cx="24" cy="5" r="2.8" fill={color} />
      {/* Decorative stripe bands */}
      <line x1="13" y1="33" x2="35" y2="33" stroke={color} strokeWidth="0.9" strokeOpacity="0.65" />
      <line x1="17" y1="24" x2="31" y2="24" stroke={color} strokeWidth="0.7" strokeOpacity="0.55" />
      {/* Confetti dots */}
      <circle cx="4" cy="16" r="1.3" fill={color} opacity="0.7" />
      <circle cx="44" cy="20" r="1.3" fill={color} opacity="0.7" />
      <circle cx="3" cy="32" r="1.1" fill={color} opacity="0.55" />
      <circle cx="45" cy="34" r="1.1" fill={color} opacity="0.55" />
      {/* Brim line */}
      <line x1="9" y1="40" x2="39" y2="40" stroke={color} strokeWidth="1.2" />
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
