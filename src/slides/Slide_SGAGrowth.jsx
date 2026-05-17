export default function Slide_SGAGrowth() {
  const spend = [
    { year: '2024', value: '$1.26M', pct: 56, projected: false },
    { year: '2025', value: '$1.54M', pct: 68, projected: false },
    { year: '2026', value: '$2.25M', pct: 100, projected: true, actualPct: 32, actualLabel: '$714K YTD' },
  ]

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
        className="reveal reveal-2"
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.15rem',
          marginBottom: 'clamp(28px, 3.6vh, 44px)',
        }}
      >
        <div
          style={{
            fontFamily: 'var(--serif)',
            fontWeight: 500,
            fontSize: 'clamp(28px, 2.6vw, 42px)',
            color: 'var(--teal-deep)',
            lineHeight: 1.2,
          }}
        >
          We put it back in.
        </div>
        <div
          style={{
            fontFamily: 'var(--serif)',
            fontStyle: 'italic',
            fontSize: 'clamp(28px, 2.6vw, 42px)',
            color: 'var(--gold)',
            lineHeight: 1.2,
          }}
        >
          Capacity for what's next.
        </div>
      </div>

      <div
        className="reveal reveal-3"
        style={{
          borderTop: '1px solid rgba(217, 171, 114, 0.32)',
          paddingTop: 'clamp(24px, 3vh, 36px)',
        }}
      >
        <BarChart label="Operating spend" bars={spend} />
      </div>

      <div
        className="reveal reveal-4"
        style={{
          marginTop: 'clamp(20px, 2.4vh, 32px)',
          fontFamily: 'var(--serif)',
          fontStyle: 'italic',
          fontSize: 'clamp(16px, 1.3vw, 22px)',
          color: 'var(--ink-soft)',
          lineHeight: 1.5,
          maxWidth: '760px',
        }}
      >
        Salaries, contractors, software — the systems behind the experience.
      </div>
    </div>
  )
}

function BarChart({ label, bars }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '900px' }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${bars.length}, 1fr)`,
          columnGap: 'clamp(28px, 3vw, 56px)',
          alignItems: 'end',
          height: 'clamp(220px, 30vh, 320px)',
          borderBottom: '1px solid rgba(217, 171, 114, 0.45)',
        }}
      >
        {bars.map((b, i) => {
          const isLatest = i === bars.length - 1
          const isMid = !isLatest && i === bars.length - 2 && bars.length > 2
          return (
            <div
              key={i}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-end',
                height: '100%',
                position: 'relative',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--serif)',
                  fontWeight: 500,
                  fontSize: 'clamp(22px, 2vw, 32px)',
                  color: isLatest ? 'var(--gold)' : isMid ? 'var(--ink-soft)' : 'var(--ink-mute)',
                  marginBottom: '0.5rem',
                  lineHeight: 1,
                }}
              >
                {b.value}
              </div>
              {b.actualPct !== undefined ? (
                <SplitBar pct={b.pct} actualPct={b.actualPct} actualLabel={b.actualLabel} />
              ) : (
                <div
                  style={{
                    width: '70%',
                    maxWidth: '140px',
                    height: `${b.pct}%`,
                    background: isLatest
                      ? 'linear-gradient(180deg, #D4A86A 0%, #B0823F 100%)'
                      : isMid
                      ? 'linear-gradient(180deg, #B89163 0%, #7E5E36 100%)'
                      : 'linear-gradient(180deg, #B0AA98 0%, #857F6D 100%)',
                    borderRadius: '2px 2px 0 0',
                    boxShadow: '0 -1px 0 rgba(255,255,255,0.4) inset',
                  }}
                />
              )}
            </div>
          )
        })}
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${bars.length}, 1fr)`,
          columnGap: 'clamp(28px, 3vw, 56px)',
          marginTop: '0.6rem',
        }}
      >
        {bars.map((b, i) => (
          <div
            key={i}
            style={{
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.15rem',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--sans)',
                fontSize: 'clamp(11px, 0.9vw, 13px)',
                fontWeight: 500,
                letterSpacing: '0.22em',
                color: 'var(--ink-mute)',
              }}
            >
              {b.year}
            </div>
          </div>
        ))}
      </div>
      <div
        style={{
          fontFamily: 'var(--sans)',
          fontSize: 'clamp(11px, 0.9vw, 13px)',
          fontWeight: 600,
          letterSpacing: '0.32em',
          textTransform: 'uppercase',
          color: 'var(--gold)',
          marginTop: 'clamp(16px, 1.8vh, 24px)',
        }}
      >
        {label}
      </div>
    </div>
  )
}

function SplitBar({ pct, actualPct, actualLabel }) {
  return (
    <div
      style={{
        width: '70%',
        maxWidth: '140px',
        height: `${pct}%`,
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '2px 2px 0 0',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          flex: `${100 - actualPct}`,
          background:
            'linear-gradient(180deg, rgba(212, 168, 106, 0.42) 0%, rgba(176, 130, 63, 0.42) 100%)',
          borderTop: '2px dashed rgba(255, 255, 255, 0.55)',
          borderBottom: '1px dashed rgba(176, 130, 63, 0.55)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--serif)',
            fontStyle: 'italic',
            fontSize: 'clamp(11px, 0.95vw, 14px)',
            color: 'rgba(120, 85, 45, 0.78)',
            letterSpacing: '0.02em',
          }}
        >
          projected
        </span>
      </div>
      <div
        style={{
          flex: `${actualPct}`,
          background: 'linear-gradient(180deg, #D4A86A 0%, #B0823F 100%)',
          boxShadow: '0 -1px 0 rgba(255,255,255,0.4) inset',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {actualLabel && (
          <span
            style={{
              fontFamily: 'var(--serif)',
              fontStyle: 'italic',
              fontWeight: 500,
              fontSize: 'clamp(11px, 0.95vw, 14px)',
              color: 'rgba(252, 248, 236, 0.96)',
              letterSpacing: '0.02em',
              textAlign: 'center',
            }}
          >
            {actualLabel}
          </span>
        )}
      </div>
    </div>
  )
}
