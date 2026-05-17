export default function Slide_TenetToYear() {
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
        className="display reveal"
        style={{
          fontFamily: 'var(--serif)',
          fontWeight: 500,
          fontSize: 'clamp(64px, 7vw, 112px)',
          lineHeight: 1.02,
          letterSpacing: '-0.015em',
          color: 'var(--teal-deep)',
        }}
      >
        2026 <em style={{ color: 'var(--gold)' }}>H2 goals.</em>
      </h2>
    </div>
  )
}
