export default function Slide_OperatingLeverage() {
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
        gap: 'clamp(36px, 4.5vh, 56px)',
      }}
    >
      {/* Row 1 — Full-service relationships */}
      <div
        className="reveal reveal-2"
        style={{
          display: 'grid',
          gridTemplateColumns: 'auto 1fr',
          columnGap: 'clamp(48px, 6vw, 100px)',
          alignItems: 'center',
          maxWidth: '1200px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.6rem' }}>
          <div
            style={{
              fontFamily: 'var(--serif)',
              fontWeight: 500,
              fontSize: 'clamp(44px, 4.6vw, 76px)',
              lineHeight: 0.9,
              color: 'var(--ink-mute)',
            }}
          >
            32%
          </div>
          <div
            style={{
              fontFamily: 'var(--serif)',
              fontStyle: 'italic',
              fontSize: 'clamp(26px, 2.4vw, 38px)',
              color: 'var(--gold)',
              opacity: 0.7,
            }}
          >
            →
          </div>
          <div
            style={{
              fontFamily: 'var(--serif)',
              fontWeight: 500,
              fontSize: 'clamp(72px, 7.5vw, 124px)',
              lineHeight: 0.88,
              letterSpacing: '-0.02em',
              color: 'var(--gold)',
            }}
          >
            48%
          </div>
        </div>

        <div>
          <div
            style={{
              fontFamily: 'var(--serif)',
              fontWeight: 500,
              fontSize: 'clamp(22px, 2vw, 32px)',
              color: 'var(--teal-deep)',
              lineHeight: 1.2,
              marginBottom: '0.5rem',
            }}
          >
            Full-service relationships.
          </div>
          <div
            style={{
              fontFamily: 'var(--serif)',
              fontStyle: 'italic',
              fontSize: 'clamp(16px, 1.35vw, 22px)',
              color: 'var(--ink-soft)',
              lineHeight: 1.45,
            }}
          >
            Booking <span style={{ color: 'var(--gold)', opacity: 0.7 }}>→</span> planning{' '}
            <span style={{ color: 'var(--gold)', opacity: 0.7 }}>→</span> execution.
          </div>
        </div>
      </div>

      {/* Divider */}
      <div
        className="reveal reveal-3"
        style={{ borderTop: '1px solid rgba(217, 171, 114, 0.32)' }}
      />

      {/* Row 2 — High-complexity trips */}
      <div
        className="reveal reveal-3"
        style={{
          display: 'grid',
          gridTemplateColumns: 'auto 1fr',
          columnGap: 'clamp(48px, 6vw, 100px)',
          alignItems: 'center',
          maxWidth: '1200px',
        }}
      >
        <div
          style={{
            fontFamily: 'var(--serif)',
            fontWeight: 500,
            fontSize: 'clamp(96px, 10vw, 160px)',
            lineHeight: 0.88,
            letterSpacing: '-0.02em',
            color: 'var(--gold)',
            minWidth: 'clamp(140px, 14vw, 220px)',
            textAlign: 'left',
          }}
        >
          3×
        </div>

        <div>
          <div
            style={{
              fontFamily: 'var(--serif)',
              fontWeight: 500,
              fontSize: 'clamp(22px, 2vw, 32px)',
              color: 'var(--teal-deep)',
              lineHeight: 1.2,
              marginBottom: '0.65rem',
            }}
          >
            Growth in high-complexity trips.
          </div>
          <div
            style={{
              fontFamily: 'var(--serif)',
              fontStyle: 'italic',
              fontSize: 'clamp(16px, 1.35vw, 22px)',
              color: 'var(--ink-soft)',
              lineHeight: 1.5,
              display: 'flex',
              flexDirection: 'column',
              gap: '0.15rem',
            }}
          >
            <div>More layered itineraries.</div>
            <div>More integrated journeys.</div>
            <div>More responsibility handed over.</div>
          </div>
        </div>
      </div>
    </div>
  )
}
