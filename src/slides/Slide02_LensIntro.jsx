export default function Slide02_LensIntro() {
  const acts = [
    {
      num: '01',
      section: 'The Foundation',
      change: 'The business became more complex.',
    },
    {
      num: '02',
      section: 'The Relationship',
      change: 'The client relationships became deeper.',
    },
    {
      num: '03',
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

        <div className="reveal reveal-2" style={{ position: 'relative' }}>
          {/* Connecting line */}
          <div
            style={{
              position: 'absolute',
              top: '12px',
              left: '8%',
              right: '8%',
              height: '1px',
              background:
                'linear-gradient(90deg, transparent 0%, rgba(217, 171, 114, 0.6) 10%, rgba(217, 171, 114, 0.6) 90%, transparent 100%)',
              zIndex: 0,
            }}
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              columnGap: 'clamp(28px, 3vw, 56px)',
              position: 'relative',
              zIndex: 1,
            }}
          >
            {acts.map((act) => (
              <div
                key={act.num}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    width: '26px',
                    height: '26px',
                    borderRadius: '50%',
                    border: '1.5px solid rgba(232, 192, 130, 0.85)',
                    background: 'rgba(28, 18, 12, 0.55)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--serif)',
                    fontStyle: 'italic',
                    fontSize: '11px',
                    color: 'rgba(232, 192, 130, 0.95)',
                    fontWeight: 500,
                    marginBottom: 'clamp(28px, 3.4vh, 44px)',
                  }}
                >
                  {act.num}
                </div>

                <div
                  style={{
                    fontFamily: 'var(--serif)',
                    fontStyle: 'italic',
                    fontWeight: 500,
                    fontSize: 'clamp(28px, 2.8vw, 44px)',
                    lineHeight: 1.05,
                    letterSpacing: '-0.008em',
                    color: 'rgba(232, 192, 130, 0.96)',
                    marginBottom: 'clamp(18px, 2.2vh, 28px)',
                    textShadow: '0 2px 18px rgba(0,0,0,0.45)',
                    maxWidth: '280px',
                  }}
                >
                  {act.section}.
                </div>

                <div
                  style={{
                    fontFamily: 'var(--serif)',
                    fontWeight: 500,
                    fontSize: 'clamp(16px, 1.35vw, 21px)',
                    lineHeight: 1.4,
                    color: 'rgba(252, 248, 236, 0.85)',
                    textShadow: '0 2px 18px rgba(0,0,0,0.45)',
                    maxWidth: '260px',
                  }}
                >
                  {act.change}
                </div>
              </div>
            ))}
          </div>
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
