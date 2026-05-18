export default function TenetLayout({ index, title, tagline, description, Graphic }) {
  const total = 4
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
          display: 'flex',
          alignItems: 'center',
          gap: 'clamp(20px, 2.4vw, 32px)',
          marginBottom: 'clamp(36px, 4.6vh, 56px)',
        }}
      >
        <div
          style={{
            fontFamily: 'var(--sans)',
            fontSize: '11px',
            fontWeight: 500,
            letterSpacing: '0.32em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
          }}
        >
          The Four Tenets
        </div>
        <ProgressDots current={index} total={total} />
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          columnGap: 'clamp(48px, 6vw, 100px)',
          alignItems: 'center',
        }}
      >
        <div>
          <div
            className="reveal reveal-2"
            style={{
              fontFamily: 'var(--serif)',
              fontStyle: 'italic',
              fontSize: 'clamp(16px, 1.3vw, 20px)',
              color: 'var(--ink-mute)',
              marginBottom: '0.5rem',
            }}
          >
            {String(index).padStart(2, '0')} <span style={{ opacity: 0.5 }}>of</span> {String(total).padStart(2, '0')}
          </div>
          <h2
            className="display reveal reveal-2"
            style={{
              fontFamily: 'var(--serif)',
              fontWeight: 500,
              fontSize: 'clamp(48px, 5vw, 76px)',
              lineHeight: 1.0,
              letterSpacing: '-0.015em',
              color: 'var(--teal-deep)',
              marginBottom: 'clamp(16px, 2vh, 22px)',
            }}
          >
            {title}<em style={{ color: 'var(--gold)' }}>.</em>
          </h2>
          <div
            className="reveal reveal-3"
            style={{
              fontFamily: 'var(--serif)',
              fontStyle: 'italic',
              fontSize: 'clamp(22px, 2vw, 32px)',
              lineHeight: 1.3,
              color: 'var(--gold)',
              maxWidth: '520px',
              textWrap: 'balance',
            }}
          >
            {tagline}
          </div>
        </div>

        <div
          className="reveal reveal-3"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div style={{ width: '100%', maxWidth: '420px', aspectRatio: '1 / 1' }}>
            <Graphic />
          </div>
        </div>
      </div>
    </div>
  )
}

function ProgressDots({ current, total }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
      {Array.from({ length: total }).map((_, i) => {
        const isCurrent = i + 1 === current
        const isPast = i + 1 < current
        return (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div
              style={{
                width: isCurrent ? '10px' : '6px',
                height: isCurrent ? '10px' : '6px',
                borderRadius: '50%',
                background: isCurrent
                  ? 'var(--gold)'
                  : isPast
                  ? 'rgba(217, 171, 114, 0.45)'
                  : 'transparent',
                border: isCurrent ? 'none' : '1px solid rgba(217, 171, 114, 0.45)',
                transition: 'all 0.3s ease',
              }}
            />
            {i < total - 1 && (
              <div
                style={{
                  width: '22px',
                  height: '1px',
                  background: isPast
                    ? 'rgba(217, 171, 114, 0.45)'
                    : 'rgba(217, 171, 114, 0.2)',
                }}
              />
            )}
          </div>
        )
      })}
    </div>
  )
}
