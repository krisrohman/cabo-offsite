export default function Slide06_NumbersOpener() {
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
        <div
          style={{
            fontFamily: 'var(--serif)',
            fontWeight: 500,
            fontSize: 'clamp(120px, 13vw, 220px)',
            lineHeight: 0.88,
            letterSpacing: '-0.02em',
            color: 'var(--gold)',
          }}
        >
          ~50%
        </div>

        <div>
          <div
            style={{
              fontFamily: 'var(--serif)',
              fontWeight: 500,
              fontSize: 'clamp(24px, 2.2vw, 36px)',
              color: 'var(--teal-deep)',
              lineHeight: 1.25,
              marginBottom: '0.65rem',
            }}
          >
            Clients now taking multiple trips each year.
          </div>
          <div
            style={{
              fontFamily: 'var(--serif)',
              fontStyle: 'italic',
              fontSize: 'clamp(18px, 1.5vw, 26px)',
              color: 'var(--ink-soft)',
              lineHeight: 1.45,
            }}
          >
            The relationships are growing and ongoing.
          </div>
        </div>
      </div>
    </div>
  )
}
