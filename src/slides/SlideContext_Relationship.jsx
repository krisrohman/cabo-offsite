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
          fontSize: 'clamp(64px, 7.2vw, 112px)',
          lineHeight: 0.98,
          letterSpacing: '-0.015em',
          color: 'var(--teal-deep)',
          marginBottom: 'clamp(24px, 3vh, 40px)',
        }}
      >
        Our clients are <em style={{ fontStyle: 'italic', color: 'var(--gold)', fontWeight: 500 }}>Known.</em>
      </h2>

      <div
        className="reveal reveal-3"
        style={{
          fontFamily: 'var(--serif)',
          fontStyle: 'italic',
          fontWeight: 400,
          fontSize: 'clamp(28px, 2.6vw, 44px)',
          lineHeight: 1.25,
          color: 'var(--gold)',
          maxWidth: '900px',
          marginBottom: 'clamp(48px, 6vh, 80px)',
        }}
      >
        By name. By preference. By history.
      </div>

      <div
        className="reveal reveal-4"
        style={{
          borderTop: '1px solid rgba(217, 171, 114, 0.32)',
          paddingTop: 'clamp(24px, 3vh, 36px)',
          maxWidth: '900px',
          fontFamily: 'var(--serif)',
          fontWeight: 500,
          fontSize: 'clamp(22px, 2vw, 32px)',
          color: 'var(--teal-deep)',
          lineHeight: 1.3,
        }}
      >
        Clients trust us with their most precious resource:{' '}
        <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Time.</em>
      </div>
    </div>
  )
}
