export default function Slide_ThePromise() {
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
      <div
        className="reveal"
        style={{
          fontFamily: 'var(--sans)',
          fontSize: 'clamp(11px, 0.9vw, 14px)',
          fontWeight: 500,
          letterSpacing: '0.32em',
          textTransform: 'uppercase',
          color: 'var(--gold)',
          marginBottom: 'clamp(40px, 5.4vh, 72px)',
        }}
      >
        The FlySmoother Standard
      </div>

      <div
        className="reveal reveal-2"
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'clamp(8px, 1vh, 16px)',
        }}
      >
        <div
          style={{
            fontFamily: 'var(--serif)',
            fontWeight: 500,
            fontSize: 'clamp(64px, 7vw, 120px)',
            lineHeight: 1.0,
            letterSpacing: '-0.018em',
            color: 'var(--teal-deep)',
          }}
        >
          Impeccable planning.
        </div>
        <div
          style={{
            fontFamily: 'var(--serif)',
            fontWeight: 500,
            fontSize: 'clamp(64px, 7vw, 120px)',
            lineHeight: 1.0,
            letterSpacing: '-0.018em',
            color: 'var(--teal-deep)',
          }}
        >
          Brilliant execution.
        </div>
        <div
          style={{
            fontFamily: 'var(--serif)',
            fontStyle: 'italic',
            fontWeight: 500,
            fontSize: 'clamp(64px, 7vw, 120px)',
            lineHeight: 1.0,
            letterSpacing: '-0.018em',
            color: 'var(--gold)',
          }}
        >
          Extraordinary experiences.
        </div>
      </div>
    </div>
  )
}
