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
      {/* Hero — two lines, the second the payoff */}
      <h2
        className="display reveal reveal-2"
        style={{
          fontFamily: 'var(--serif)',
          fontWeight: 500,
          fontSize: 'clamp(48px, 5.4vw, 88px)',
          lineHeight: 1.02,
          letterSpacing: '-0.018em',
          color: 'var(--teal-deep)',
          marginBottom: 'clamp(8px, 1vh, 16px)',
          maxWidth: '1200px',
          textWrap: 'balance',
        }}
      >
        Trust isn't given once.
      </h2>
      <h2
        className="display reveal reveal-3"
        style={{
          fontFamily: 'var(--serif)',
          fontStyle: 'italic',
          fontWeight: 500,
          fontSize: 'clamp(76px, 8.6vw, 160px)',
          lineHeight: 0.96,
          letterSpacing: '-0.028em',
          color: 'var(--gold)',
          marginBottom: 'clamp(56px, 7vh, 96px)',
          maxWidth: '1300px',
          textWrap: 'balance',
        }}
      >
        It compounds.
      </h2>

      {/* Supporting line */}
      <div
        className="reveal reveal-4"
        style={{
          fontFamily: 'var(--serif)',
          fontStyle: 'italic',
          fontSize: 'clamp(20px, 1.85vw, 32px)',
          color: 'var(--ink-soft)',
          lineHeight: 1.35,
          maxWidth: '880px',
        }}
      >
        Trip after trip, our clients entrust us with more of their journey.
      </div>
    </div>
  )
}
