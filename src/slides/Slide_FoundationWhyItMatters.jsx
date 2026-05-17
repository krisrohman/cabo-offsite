export default function Slide_FoundationWhyItMatters() {
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
          marginBottom: 'clamp(40px, 5vh, 64px)',
        }}
      >
        The client should never have to feel <em style={{ color: 'var(--gold)' }}>how many moving parts</em> are behind the trip.
      </h2>

      <div
        className="reveal reveal-3"
        style={{
          borderTop: '1px solid rgba(217, 171, 114, 0.32)',
          paddingTop: 'clamp(24px, 3vh, 36px)',
          fontFamily: 'var(--serif)',
          fontStyle: 'italic',
          fontSize: 'clamp(22px, 2vw, 32px)',
          color: 'var(--ink-soft)',
          maxWidth: '900px',
        }}
      >
        We do this exceptionally well.
      </div>
    </div>
  )
}
