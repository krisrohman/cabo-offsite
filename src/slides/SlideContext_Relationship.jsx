export default function SlideContext_Relationship() {
  return (
    <div
      className="slide-inner"
      style={{
        padding: '0 var(--slide-pad-x)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        maxWidth: '1400px',
        margin: '0 auto',
        height: '100%',
        gap: 'clamp(60px, 9vh, 130px)',
      }}
    >
      {/* TOP — setup */}
      <div>
        <h2
          className="display reveal reveal-2"
          style={{
            fontFamily: 'var(--serif)',
            fontWeight: 500,
            fontSize: 'clamp(38px, 4.2vw, 64px)',
            lineHeight: 1.02,
            letterSpacing: '-0.015em',
            color: 'var(--teal-deep)',
            marginBottom: 'clamp(10px, 1.2vh, 18px)',
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
            fontSize: 'clamp(17px, 1.45vw, 24px)',
            lineHeight: 1.3,
            color: 'rgba(184, 130, 80, 0.78)',
          }}
        >
          By name. By preference. By history.
        </div>
      </div>

      {/* BOTTOM — hero composition: lead-in + icon + Time */}
      <div className="reveal reveal-4">
        <div
          style={{
            fontFamily: 'var(--serif)',
            fontStyle: 'italic',
            fontSize: 'clamp(18px, 1.55vw, 26px)',
            color: 'var(--ink-mute)',
            letterSpacing: '0.02em',
            marginBottom: 'clamp(20px, 2.4vh, 32px)',
          }}
        >
          Trusted with their most precious resource:
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'clamp(20px, 2.4vw, 44px)',
          }}
        >
          <div
            style={{
              flexShrink: 0,
              width: 'clamp(96px, 11vw, 168px)',
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
              fontSize: 'clamp(120px, 15vw, 260px)',
              lineHeight: 0.88,
              letterSpacing: '-0.03em',
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

      {/* Hour hand pointing at 10 */}
      <line x1="100" y1="124" x2="68" y2="98" stroke={color} strokeWidth="3.5" strokeLinecap="round" />
      {/* Minute hand pointing at 2 */}
      <line x1="100" y1="124" x2="138" y2="84" stroke={color} strokeWidth="2.4" strokeLinecap="round" />

      {/* Center pin */}
      <circle cx="100" cy="124" r="4.5" fill={color} />
      <circle cx="100" cy="124" r="2" fill="#F8F2E8" />
    </svg>
  )
}
