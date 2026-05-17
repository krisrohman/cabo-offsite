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
      }}
    >
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
              fontSize: 'clamp(56px, 6vw, 100px)',
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
              fontSize: 'clamp(32px, 3vw, 48px)',
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
              fontSize: 'clamp(96px, 10vw, 168px)',
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
              fontSize: 'clamp(24px, 2.2vw, 36px)',
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
              fontSize: 'clamp(18px, 1.5vw, 24px)',
              color: 'var(--ink-soft)',
              lineHeight: 1.45,
            }}
          >
            Booking <span style={{ color: 'var(--gold)', opacity: 0.7 }}>→</span> planning <span style={{ color: 'var(--gold)', opacity: 0.7 }}>→</span> execution.
          </div>
        </div>
      </div>
    </div>
  )
}
