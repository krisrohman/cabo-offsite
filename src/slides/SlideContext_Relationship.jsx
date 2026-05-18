export default function SlideContext_Relationship() {
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
        gap: 'clamp(60px, 9vh, 140px)',
      }}
    >
      {/* TOP — the buildup */}
      <div>
        <h2
          className="display reveal reveal-2"
          style={{
            fontFamily: 'var(--serif)',
            fontWeight: 500,
            fontSize: 'clamp(40px, 4.4vw, 64px)',
            lineHeight: 1.02,
            letterSpacing: '-0.015em',
            color: 'var(--teal-deep)',
            marginBottom: 'clamp(14px, 1.6vh, 22px)',
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
          }}
        >
          By name. By preference. By history.
        </div>
      </div>

      {/* BOTTOM — Time as the hero */}
      <div className="reveal reveal-4">
        <div
          style={{
            fontFamily: 'var(--serif)',
            fontStyle: 'italic',
            fontSize: 'clamp(16px, 1.3vw, 22px)',
            color: 'var(--ink-mute)',
            letterSpacing: '0.02em',
            marginBottom: 'clamp(6px, 0.8vh, 14px)',
          }}
        >
          Trusted with their most precious resource:
        </div>
        <div
          style={{
            fontFamily: 'var(--serif)',
            fontStyle: 'italic',
            fontWeight: 500,
            fontSize: 'clamp(120px, 14vw, 240px)',
            lineHeight: 0.95,
            letterSpacing: '-0.025em',
            color: 'var(--gold)',
          }}
        >
          Time.
        </div>
      </div>
    </div>
  )
}
