export default function Slide04_WhatChanged() {
  const rows = [
    { before: 'Dropped balls', after: 'Caught early' },
    { before: 'Murky handoffs', after: 'Cleaner handoffs' },
    { before: "'I thought you had that'", after: 'Clear ownership' },
    { before: 'Dependent on heroics', after: 'Dependent on systems' },
    { before: 'Capacity surprises', after: 'Capacity visible' },
  ]
  return (
    <div className="slide-inner" style={{ maxWidth: '1300px', margin: '0 auto', justifyContent: 'center' }}>
      <div className="reveal">
        <h2
          className="display"
          style={{ fontSize: 'clamp(56px, 6vw, 84px)' }}
        >
          Before. <em>After.</em>
        </h2>
      </div>

      <div
        className="reveal reveal-2"
        style={{
          marginTop: '3rem',
          background: 'rgba(250, 243, 226, 0.78)',
          backdropFilter: 'blur(2px)',
          border: '1px solid var(--rule-light)',
          borderRadius: '4px',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            background: 'var(--ivory-deep)',
            padding: 'clamp(14px, 1.6vh, 20px) clamp(20px, 2vw, 36px)',
            fontFamily: 'var(--sans)',
            fontSize: '11px',
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            color: 'var(--ink-soft)',
          }}
        >
          <span>Before</span>
          <span>After</span>
        </div>
        {rows.map((r, i) => (
          <div
            key={i}
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              padding: 'clamp(16px, 2vh, 26px) clamp(20px, 2vw, 36px)',
              borderTop: i === 0 ? 'none' : '1px solid var(--rule-light)',
              alignItems: 'baseline',
              gap: '1rem',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--serif)',
                fontStyle: 'italic',
                fontSize: 'clamp(20px, 1.7vw, 30px)',
                color: 'var(--ink-mute)',
              }}
            >
              {r.before}
            </span>
            <span
              style={{
                fontFamily: 'var(--serif)',
                fontWeight: 500,
                fontSize: 'clamp(22px, 1.8vw, 32px)',
                color: 'var(--teal-deep)',
              }}
            >
              <span style={{ color: 'var(--gold)' }}>→ </span>
              {r.after}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
