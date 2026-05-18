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
      }}
    >
      <h2
        className="display reveal reveal-2"
        style={{
          fontFamily: 'var(--serif)',
          fontWeight: 500,
          fontSize: 'clamp(72px, 8.4vw, 140px)',
          lineHeight: 0.95,
          letterSpacing: '-0.02em',
          color: 'var(--teal-deep)',
          marginBottom: 'clamp(20px, 2.4vh, 32px)',
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
          fontSize: 'clamp(20px, 1.8vw, 30px)',
          lineHeight: 1.3,
          color: 'rgba(184, 130, 80, 0.78)',
          marginBottom: 'clamp(80px, 11vh, 140px)',
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
          maxWidth: '720px',
        }}
      >
        Trusted with their most precious resource:{' '}
        <span style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Time.</span>
      </div>
    </div>
  )
}
