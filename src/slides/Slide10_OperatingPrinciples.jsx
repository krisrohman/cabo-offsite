export default function Slide10_OperatingPrinciples() {
  const principles = [
    { num: '01', label: <>Clear <em>ownership.</em></> },
    { num: '02', label: <>Clean <em>handoffs.</em></> },
    { num: '03', label: <>Shared <em>visibility.</em></> },
    { num: '04', label: <>Documented <em>processes.</em></> },
    { num: '05', label: <>Client <em>continuity.</em></> },
  ]
  return (
    <div className="slide-inner" style={{ maxWidth: '1300px', margin: '0 auto', justifyContent: 'center' }}>
      <div className="reveal">
        <h2
          className="display"
          style={{ fontSize: 'clamp(56px, 6vw, 88px)' }}
        >
          The <em>FlySmoother Way.</em>
        </h2>
      </div>

      <div
        className="reveal reveal-2"
        style={{
          marginTop: '4vh',
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: 'clamp(18px, 1.8vw, 32px)',
        }}
      >
        {principles.map((p, i) => (
          <div
            key={i}
            style={{
              padding: 'clamp(24px, 2.8vh, 40px) 0 0',
              borderTop: '1px solid var(--rule-light)',
              position: 'relative',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '-2px',
                left: 0,
                width: '32px',
                height: '3px',
                background: 'var(--gold)',
              }}
            />
            <div
              style={{
                fontFamily: 'var(--mono)',
                fontSize: '11px',
                color: 'var(--gold)',
                letterSpacing: '0.18em',
                marginBottom: '1.5rem',
              }}
            >
              {p.num}
            </div>
            <div
              style={{
                fontFamily: 'var(--serif)',
                fontWeight: 500,
                fontSize: 'clamp(22px, 2vw, 32px)',
                color: 'var(--teal-deep)',
                lineHeight: 1.15,
              }}
            >
              {p.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
