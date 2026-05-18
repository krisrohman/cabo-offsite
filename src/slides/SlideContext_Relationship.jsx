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
      }}
    >
      {/* Quiet eyebrow */}
      <div
        className="reveal"
        style={{
          fontFamily: 'var(--sans)',
          fontSize: 'clamp(10px, 0.85vw, 12px)',
          fontWeight: 600,
          letterSpacing: '0.4em',
          textTransform: 'uppercase',
          color: 'rgba(184, 130, 80, 0.65)',
          marginBottom: 'clamp(40px, 5.5vh, 80px)',
        }}
      >
        From transaction to trust.
      </div>

      {/* Hero — the transformation */}
      <h2
        className="display reveal reveal-2"
        style={{
          fontFamily: 'var(--serif)',
          fontWeight: 500,
          fontSize: 'clamp(48px, 5.6vw, 92px)',
          lineHeight: 1.02,
          letterSpacing: '-0.018em',
          color: 'var(--teal-deep)',
          marginBottom: 'clamp(14px, 1.8vh, 22px)',
          maxWidth: '1200px',
          textWrap: 'balance',
        }}
      >
        Once it was a flight.
      </h2>
      <h2
        className="display reveal reveal-3"
        style={{
          fontFamily: 'var(--serif)',
          fontStyle: 'italic',
          fontWeight: 500,
          fontSize: 'clamp(56px, 6.6vw, 116px)',
          lineHeight: 1.0,
          letterSpacing: '-0.022em',
          color: 'var(--gold)',
          marginBottom: 'clamp(48px, 6.5vh, 90px)',
          maxWidth: '1200px',
          textWrap: 'balance',
        }}
      >
        Now it's the whole journey.
      </h2>

      {/* Supporting arrow string */}
      <div
        className="reveal reveal-4"
        style={{
          display: 'flex',
          alignItems: 'baseline',
          gap: 'clamp(14px, 1.6vw, 26px)',
          fontFamily: 'var(--serif)',
          fontSize: 'clamp(20px, 1.85vw, 32px)',
          color: 'var(--ink-soft)',
          letterSpacing: '0.005em',
          flexWrap: 'wrap',
        }}
      >
        <span>One flight</span>
        <Arrow />
        <span>the whole trip</span>
        <Arrow />
        <span>the year ahead</span>
        <Arrow />
        <span style={{ color: 'var(--gold)', fontStyle: 'italic' }}>their life with us</span>
      </div>
    </div>
  )
}

function Arrow() {
  return (
    <span
      style={{
        fontFamily: 'var(--serif)',
        fontStyle: 'italic',
        color: 'rgba(184, 130, 80, 0.65)',
        fontSize: '0.85em',
      }}
    >
      →
    </span>
  )
}
