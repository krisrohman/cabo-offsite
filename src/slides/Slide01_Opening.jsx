export default function Slide01_Opening() {
  return (
    <div className="slide-inner center">
      <div className="eyebrow reveal" style={{ marginBottom: '3rem' }}>
        State of the Business · 2026
      </div>
      <h1 className="hero reveal reveal-2" style={{ textAlign: 'center' }}>
        The <em>Maturation</em> of FlySmoother.
      </h1>
      <p
        className="reveal reveal-3"
        style={{
          marginTop: '2.5rem',
          fontFamily: 'var(--serif)',
          fontStyle: 'italic',
          fontSize: 'clamp(20px, 1.6vw, 28px)',
          color: 'var(--on-dark-mute)',
          textAlign: 'center',
        }}
      >
        Becoming more intentional.
      </p>
    </div>
  )
}
