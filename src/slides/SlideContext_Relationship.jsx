export default function SlideContext_Relationship() {
  return (
    <div
      className="slide-inner"
      style={{
        padding: '0 var(--slide-pad-x)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: '1400px',
        margin: '0 auto',
        height: '100%',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.25fr 1fr',
          columnGap: 'clamp(48px, 7vw, 120px)',
          alignItems: 'center',
          width: '100%',
        }}
      >
        {/* LEFT — the message */}
        <div>
          <h2
            className="display reveal reveal-2"
            style={{
              fontFamily: 'var(--serif)',
              fontWeight: 500,
              fontSize: 'clamp(48px, 5.2vw, 84px)',
              lineHeight: 1.0,
              letterSpacing: '-0.018em',
              color: 'var(--teal-deep)',
              marginBottom: 'clamp(18px, 2.2vh, 30px)',
              textWrap: 'balance',
            }}
          >
            Our clients are{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--gold)', fontWeight: 500 }}>Known.</em>
          </h2>

          <div
            className="reveal reveal-3"
            style={{
              fontFamily: 'var(--serif)',
              fontStyle: 'italic',
              fontWeight: 400,
              fontSize: 'clamp(18px, 1.5vw, 26px)',
              lineHeight: 1.3,
              color: 'rgba(184, 130, 80, 0.78)',
              marginBottom: 'clamp(40px, 5vh, 64px)',
            }}
          >
            By name. By preference. By history.
          </div>

          <div
            className="reveal reveal-4"
            style={{
              fontFamily: 'var(--serif)',
              fontStyle: 'italic',
              fontSize: 'clamp(15px, 1.2vw, 19px)',
              color: 'var(--ink-mute)',
              letterSpacing: '0.02em',
              lineHeight: 1.4,
              maxWidth: '420px',
            }}
          >
            Trusted with their most precious resource.
          </div>
        </div>

        {/* RIGHT — icon + Time */}
        <div
          className="reveal reveal-4"
          style={{
            borderLeft: '1px solid rgba(217, 171, 114, 0.4)',
            paddingLeft: 'clamp(48px, 6vw, 100px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: 'clamp(20px, 2.6vh, 36px)',
          }}
        >
          <div
            style={{
              width: 'clamp(120px, 18vw, 220px)',
              aspectRatio: '5 / 6',
            }}
          >
            <PocketWatchIcon color="#B0823F" />
          </div>
          <div
            style={{
              fontFamily: 'var(--serif)',
              fontStyle: 'italic',
              fontWeight: 500,
              fontSize: 'clamp(72px, 9vw, 160px)',
              lineHeight: 0.9,
              letterSpacing: '-0.025em',
              color: 'var(--gold)',
            }}
          >
            Time.
          </div>
        </div>
      </div>
    </div>
  )
}

function PocketWatchIcon({ color }) {
  return (
    <svg viewBox="0 0 200 240" style={{ width: '100%', height: '100%' }} aria-hidden="true">
      {/* Crown bow loop at top */}
      <circle cx="100" cy="10" r="6" fill="none" stroke={color} strokeWidth="2" />
      <line x1="100" y1="16" x2="100" y2="22" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <rect x="94" y="22" width="12" height="10" rx="2" fill={color} />

      {/* Outer case ring */}
      <circle cx="100" cy="124" r="88" fill="none" stroke={color} strokeWidth="2.5" />
      {/* Inner face */}
      <circle cx="100" cy="124" r="80" fill={color} fillOpacity="0.07" stroke={color} strokeWidth="0.8" strokeOpacity="0.5" />

      {/* Hour markers */}
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => {
        const rad = ((deg - 90) * Math.PI) / 180
        const isMain = deg % 90 === 0
        const inner = isMain ? 64 : 70
        const outer = 76
        const x1 = 100 + Math.cos(rad) * inner
        const y1 = 124 + Math.sin(rad) * inner
        const x2 = 100 + Math.cos(rad) * outer
        const y2 = 124 + Math.sin(rad) * outer
        return (
          <line
            key={deg}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke={color}
            strokeWidth={isMain ? 2.4 : 1}
            strokeOpacity={isMain ? 0.9 : 0.55}
            strokeLinecap="round"
          />
        )
      })}

      {/* Hour hand — pointing roughly at 10 (classic watch position) */}
      <line
        x1="100"
        y1="124"
        x2="68"
        y2="98"
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      {/* Minute hand — pointing at 2 */}
      <line
        x1="100"
        y1="124"
        x2="138"
        y2="84"
        stroke={color}
        strokeWidth="2.4"
        strokeLinecap="round"
      />

      {/* Center pin */}
      <circle cx="100" cy="124" r="4.5" fill={color} />
      <circle cx="100" cy="124" r="2" fill="#F8F2E8" />
    </svg>
  )
}
