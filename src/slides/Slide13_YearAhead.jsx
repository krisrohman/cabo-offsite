export default function Slide13_YearAhead() {
  const goals = [
    { num: '01', name: 'Shared data backbone' },
    { num: '02', name: 'Welcome Wings to $5M' },
    { num: '03', name: 'Interactive client itineraries' },
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
        className="reveal"
        style={{
          fontFamily: 'var(--sans)',
          fontSize: '11px',
          fontWeight: 500,
          letterSpacing: '0.32em',
          textTransform: 'uppercase',
          color: 'var(--gold)',
          marginBottom: 'clamp(24px, 3vh, 36px)',
        }}
      >
        The Year Ahead
      </div>

      <h2
        className="display reveal reveal-2"
        style={{
          fontFamily: 'var(--serif)',
          fontWeight: 500,
          fontSize: 'clamp(40px, 4.4vw, 64px)',
          lineHeight: 1.1,
          letterSpacing: '-0.01em',
          color: 'var(--teal-deep)',
          maxWidth: '1100px',
          marginBottom: 'clamp(56px, 7vh, 88px)',
        }}
      >
        Three things we're <em style={{ color: 'var(--gold)' }}>building toward.</em>
      </h2>

      <div
        className="reveal reveal-3"
        style={{
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '12px',
            left: '8%',
            right: '8%',
            height: '1px',
            background:
              'linear-gradient(90deg, transparent 0%, rgba(217, 171, 114, 0.5) 10%, rgba(217, 171, 114, 0.5) 90%, transparent 100%)',
            zIndex: 0,
          }}
        />
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            columnGap: 'clamp(28px, 3vw, 56px)',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {goals.map((g) => (
            <div
              key={g.num}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  border: '1.5px solid var(--gold)',
                  background: 'var(--ivory, #F8F2E8)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--serif)',
                  fontStyle: 'italic',
                  fontSize: '11px',
                  color: 'var(--gold)',
                  fontWeight: 500,
                  marginBottom: 'clamp(22px, 2.6vh, 32px)',
                }}
              >
                {g.num}
              </div>
              <div
                style={{
                  fontFamily: 'var(--serif)',
                  fontStyle: 'italic',
                  fontWeight: 500,
                  fontSize: 'clamp(22px, 2.2vw, 34px)',
                  lineHeight: 1.15,
                  color: 'var(--teal-deep)',
                  maxWidth: '260px',
                }}
              >
                {g.name}.
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}
