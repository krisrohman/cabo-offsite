export default function GoalLayout({
  index,
  total = 3,
  title,
  target,
  targetLabel,
  targetHint,
  description,
  Graphic,
}) {
  const isPlaceholder = !target || target === '??' || target === '—'
  return (
    <div
      className="slide-inner"
      style={{
        padding: 'clamp(72px, 10vh, 140px) var(--slide-pad-x) 0',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        maxWidth: '1320px',
        margin: '0 auto',
        height: '100%',
      }}
    >
      <div
        className="reveal"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'clamp(20px, 2.4vw, 32px)',
          marginBottom: 'clamp(48px, 6vh, 72px)',
          minHeight: '14px',
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
          The Year Ahead
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
              fontSize: 'clamp(40px, 4.2vw, 60px)',
              lineHeight: 1.05,
              letterSpacing: '-0.012em',
              color: 'var(--teal-deep)',
              marginBottom: 'clamp(28px, 3.4vh, 40px)',
            }}
          >
            {title}<em style={{ color: 'var(--gold)' }}>.</em>
          </h2>

          <div
            className="reveal reveal-3"
            style={{
              borderTop: '1px solid rgba(217, 171, 114, 0.32)',
              borderBottom: '1px solid rgba(217, 171, 114, 0.32)',
              padding: 'clamp(16px, 2vh, 22px) 0',
              marginBottom: 'clamp(22px, 2.6vh, 30px)',
              display: 'grid',
              gridTemplateColumns: 'auto 1fr',
              columnGap: '1.2rem',
              alignItems: 'baseline',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--sans)',
                fontSize: 'clamp(10px, 0.8vw, 12px)',
                fontWeight: 600,
                letterSpacing: '0.36em',
                textTransform: 'uppercase',
                color: 'var(--gold)',
              }}
            >
              Target
            </div>
            <div>
              <div
                style={{
                  fontFamily: 'var(--serif)',
                  fontWeight: 500,
                  fontStyle: isPlaceholder ? 'italic' : 'normal',
                  fontSize: 'clamp(28px, 2.8vw, 44px)',
                  lineHeight: 1.05,
                  color: isPlaceholder ? 'var(--ink-mute)' : 'var(--gold)',
                  marginBottom: '0.4rem',
                  textWrap: 'balance',
                }}
              >
                {isPlaceholder ? '[ set target ]' : target}{' '}
                <span
                  style={{
                    fontFamily: 'var(--serif)',
                    fontStyle: 'italic',
                    fontSize: 'clamp(15px, 1.2vw, 19px)',
                    color: 'var(--ink-soft)',
                    fontWeight: 400,
                    whiteSpace: 'nowrap',
                  }}
                >
                  {targetLabel}
                </span>
              </div>
              {targetHint && (
                <div
                  style={{
                    fontFamily: 'var(--serif)',
                    fontStyle: 'italic',
                    fontSize: 'clamp(13px, 1.05vw, 16px)',
                    color: 'var(--ink-mute)',
                  }}
                >
                  {targetHint}
                </div>
              )}
            </div>
          </div>

          <div
            className="reveal reveal-4"
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(16px, 1.3vw, 21px)',
              color: 'var(--ink-soft)',
              lineHeight: 1.55,
              maxWidth: '500px',
            }}
          >
            {description}
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
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      {Array.from({ length: total }).map((_, i) => {
        const isCurrent = i + 1 === current
        const isPast = i + 1 < current
        return (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
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
              }}
            />
            {i < total - 1 && (
              <div
                style={{
                  width: '18px',
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
