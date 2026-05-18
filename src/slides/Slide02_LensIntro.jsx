export default function Slide02_LensIntro() {
  const acts = [
    {
      kicker: 'First,',
      section: 'The Foundation',
      change: 'The business became more complex.',
    },
    {
      kicker: 'Then,',
      section: 'The Relationship',
      change: 'The client relationships became deeper.',
    },
    {
      kicker: 'Now,',
      section: 'The Path',
      change: 'Our horizon expanded.',
    },
  ]
  return (
    <div
      className="slide-inner"
      style={{
        padding: '0 var(--slide-pad-x)',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
      }}
    >
      <Backdrop />

      <div
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '1320px',
          width: '100%',
          margin: '0 auto',
        }}
      >
        <h1
          className="reveal"
          style={{
            fontFamily: 'var(--serif)',
            fontWeight: 500,
            fontSize: 'clamp(44px, 5vw, 76px)',
            lineHeight: 1.02,
            letterSpacing: '-0.015em',
            color: 'rgba(252, 248, 236, 0.98)',
            textShadow: '0 4px 30px rgba(0,0,0,0.45)',
            margin: 0,
            maxWidth: '1100px',
            marginBottom: 'clamp(72px, 9vh, 120px)',
          }}
        >
          What changed{' '}
          <em
            style={{
              color: 'rgba(232, 192, 130, 0.95)',
              fontStyle: 'italic',
              fontWeight: 400,
            }}
          >
            over the last 18 months.
          </em>
        </h1>

        <div
          className="reveal reveal-2"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            columnGap: 'clamp(48px, 6vw, 100px)',
            alignItems: 'start',
          }}
        >
          {acts.map((act, i) => (
            <div
              key={i}
              style={{
                position: 'relative',
                paddingLeft: 'clamp(22px, 2.4vw, 36px)',
                borderLeft: '1px solid rgba(217, 171, 114, 0.45)',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--serif)',
                  fontStyle: 'italic',
                  fontSize: 'clamp(16px, 1.35vw, 22px)',
                  color: 'rgba(217, 171, 114, 0.78)',
                  marginBottom: 'clamp(14px, 1.6vh, 22px)',
                  letterSpacing: '0.01em',
                }}
              >
                {act.kicker}
              </div>

              <div
                style={{
                  fontFamily: 'var(--serif)',
                  fontStyle: 'italic',
                  fontWeight: 500,
                  fontSize: 'clamp(40px, 4vw, 62px)',
                  lineHeight: 1.0,
                  letterSpacing: '-0.012em',
                  color: 'rgba(232, 192, 130, 0.96)',
                  marginBottom: 'clamp(28px, 3.4vh, 42px)',
                  textShadow: '0 2px 18px rgba(0,0,0,0.45)',
                }}
              >
                {act.section}.
              </div>

              <div
                style={{
                  fontFamily: 'var(--serif)',
                  fontWeight: 500,
                  fontSize: 'clamp(18px, 1.5vw, 23px)',
                  lineHeight: 1.45,
                  color: 'rgba(252, 248, 236, 0.92)',
                  textShadow: '0 2px 18px rgba(0,0,0,0.45)',
                  maxWidth: '300px',
                }}
              >
                {act.change}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function Backdrop() {
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
      }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="bg-field" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#2D2F35" />
          <stop offset="28%" stopColor="#4E4538" />
          <stop offset="55%" stopColor="#856845" />
          <stop offset="80%" stopColor="#6A3D24" />
          <stop offset="100%" stopColor="#2C160E" />
        </linearGradient>
        <linearGradient id="bg-vertical" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#000" stopOpacity="0.28" />
          <stop offset="50%" stopColor="#000" stopOpacity="0.0" />
          <stop offset="100%" stopColor="#000" stopOpacity="0.42" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="1600" height="900" fill="url(#bg-field)" />
      <rect x="0" y="0" width="1600" height="900" fill="url(#bg-vertical)" />
    </svg>
  )
}
