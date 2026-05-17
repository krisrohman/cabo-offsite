export default function Slide08_RealProduct() {
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
        position: 'relative',
      }}
    >
      <Glow />

      <div
        className="reveal reveal-2"
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'grid',
          gridTemplateColumns: 'auto 1fr',
          columnGap: 'clamp(56px, 6vw, 110px)',
          alignItems: 'center',
          maxWidth: '1200px',
        }}
      >
        <div
          style={{
            fontFamily: 'var(--serif)',
            fontWeight: 500,
            fontSize: 'clamp(140px, 14vw, 240px)',
            lineHeight: 0.85,
            letterSpacing: '-0.02em',
            color: 'var(--gold-bright)',
          }}
        >
          3×
        </div>

        <div>
          <div
            style={{
              fontFamily: 'var(--serif)',
              fontWeight: 500,
              fontSize: 'clamp(24px, 2.2vw, 36px)',
              color: 'var(--on-dark)',
              lineHeight: 1.25,
              marginBottom: '1.25rem',
            }}
          >
            Growth in high-complexity trips.
          </div>
          <div
            style={{
              fontFamily: 'var(--serif)',
              fontStyle: 'italic',
              fontSize: 'clamp(18px, 1.5vw, 26px)',
              color: 'rgba(232, 220, 196, 0.75)',
              lineHeight: 1.55,
              maxWidth: '460px',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.2rem',
            }}
          >
            <div>More layered itineraries.</div>
            <div>More integrated journeys.</div>
            <div>More responsibility handed over.</div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Glow() {
  return (
    <svg
      viewBox="0 0 1600 900"
      preserveAspectRatio="xMidYMid slice"
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="real-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#DDB87E" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#DDB87E" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="1200" cy="500" r="500" fill="url(#real-glow)" />
    </svg>
  )
}
