export default function Slide_PrivateAviation() {
  const bars = [
    { year: '2024', value: '$5.7M', pct: 34, projected: false, placeholder: false },
    { year: '2025', value: '$10.9M', pct: 65, projected: false, placeholder: false },
    { year: '2026', value: '$16.7M', pct: 100, projected: true, placeholder: false, actualPct: 29, actualLabel: '$4.8M YTD' },
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
      <h2
        className="display reveal reveal-2"
        style={{
          fontFamily: 'var(--serif)',
          fontWeight: 500,
          fontSize: 'clamp(48px, 5.4vw, 80px)',
          lineHeight: 1.0,
          letterSpacing: '-0.015em',
          color: 'var(--teal-deep)',
          marginBottom: 'clamp(20px, 2.4vh, 28px)',
        }}
      >
        Trust, <em style={{ color: 'var(--gold)' }}>at altitude.</em>
      </h2>

      <div
        className="reveal reveal-3"
        style={{
          fontFamily: 'var(--serif)',
          fontStyle: 'italic',
          fontSize: 'clamp(18px, 1.5vw, 24px)',
          color: 'var(--ink-soft)',
          lineHeight: 1.5,
          maxWidth: '900px',
          marginBottom: 'clamp(28px, 3.6vh, 44px)',
        }}
      >
        Higher-touch. Higher-stakes.
      </div>

      <div
        className="reveal reveal-4"
        style={{
          borderTop: '1px solid rgba(217, 171, 114, 0.32)',
          paddingTop: 'clamp(24px, 3vh, 36px)',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${bars.length}, 1fr)`,
            columnGap: 'clamp(28px, 3vw, 56px)',
            alignItems: 'end',
            height: 'clamp(200px, 28vh, 300px)',
            borderBottom: '1px solid rgba(217, 171, 114, 0.45)',
            maxWidth: '900px',
          }}
        >
          {bars.map((b, i) => {
            const isLatest = i === bars.length - 1
            const isMid = !isLatest && i > 0
            return (
              <div
                key={i}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  height: '100%',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--serif)',
                    fontWeight: 500,
                    fontSize: 'clamp(20px, 1.8vw, 30px)',
                    color: b.placeholder
                      ? 'var(--ink-mute)'
                      : isLatest
                      ? 'var(--gold)'
                      : 'var(--ink-mute)',
                    fontStyle: b.placeholder ? 'italic' : 'normal',
                    marginBottom: '0.5rem',
                    lineHeight: 1,
                  }}
                >
                  {b.value}
                </div>
                {b.actualPct !== undefined ? (
                  <div
                    style={{
                      width: '70%',
                      maxWidth: '140px',
                      height: `${b.pct}%`,
                      display: 'flex',
                      flexDirection: 'column',
                      borderRadius: '2px 2px 0 0',
                      overflow: 'hidden',
                    }}
                  >
                    <div
                      style={{
                        flex: `${100 - b.actualPct}`,
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
                        flex: `${b.actualPct}`,
                        background: 'linear-gradient(180deg, #D4A86A 0%, #B0823F 100%)',
                        boxShadow: '0 -1px 0 rgba(255,255,255,0.4) inset',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {b.actualLabel && (
                        <span
                          style={{
                            fontFamily: 'var(--serif)',
                            fontStyle: 'italic',
                            fontWeight: 500,
                            fontSize: 'clamp(11px, 0.95vw, 14px)',
                            color: 'rgba(252, 248, 236, 0.96)',
                            letterSpacing: '0.02em',
                          }}
                        >
                          {b.actualLabel}
                        </span>
                      )}
                    </div>
                  </div>
                ) : (
                  <div
                    style={{
                      width: '70%',
                      maxWidth: '140px',
                      height: `${b.pct}%`,
                      background: b.placeholder
                        ? 'repeating-linear-gradient(135deg, rgba(176, 170, 152, 0.45), rgba(176, 170, 152, 0.45) 4px, transparent 4px, transparent 9px)'
                        : isLatest
                        ? 'linear-gradient(180deg, #D4A86A 0%, #B0823F 100%)'
                        : isMid
                        ? 'linear-gradient(180deg, #B89163 0%, #7E5E36 100%)'
                        : 'linear-gradient(180deg, #B0AA98 0%, #857F6D 100%)',
                      border: b.placeholder ? '1px dashed rgba(176, 170, 152, 0.7)' : 'none',
                      borderBottom: 'none',
                      borderRadius: '2px 2px 0 0',
                      boxShadow: b.placeholder ? 'none' : '0 -1px 0 rgba(255,255,255,0.4) inset',
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
            maxWidth: '900px',
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
              {b.placeholder && (
                <div
                  style={{
                    fontFamily: 'var(--serif)',
                    fontStyle: 'italic',
                    fontSize: 'clamp(11px, 0.9vw, 13px)',
                    color: 'var(--ink-mute)',
                    opacity: 0.85,
                  }}
                >
                  tbd
                </div>
              )}
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
            marginTop: 'clamp(14px, 1.6vh, 22px)',
          }}
        >
          Private aviation, year over year
        </div>
      </div>
    </div>
  )
}
