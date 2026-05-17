export default function Slide_FourTenets() {
  const tenets = [
    { num: '01', name: 'Client Comes First' },
    { num: '02', name: 'Personalization' },
    { num: '03', name: 'Detail Orientation' },
    { num: '04', name: 'Consistency' },
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
        The Four Tenets
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
        How we <em style={{ color: 'var(--gold)' }}>hold</em> to that standard.
      </h2>

      <div
        className="reveal reveal-3"
        style={{
          position: 'relative',
        }}
      >
        {/* Connecting line behind the dots — grows left to right */}
        <div
          className="tenet-timeline"
          style={{
            position: 'absolute',
            top: '12px',
            left: '5%',
            right: '5%',
            height: '1px',
            background:
              'linear-gradient(90deg, transparent 0%, rgba(217, 171, 114, 0.5) 8%, rgba(217, 171, 114, 0.5) 92%, transparent 100%)',
            zIndex: 0,
          }}
        />
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            columnGap: 'clamp(20px, 2.4vw, 40px)',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {tenets.map((t) => (
            <div
              key={t.num}
              className="tenet-stop"
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
                  marginBottom: 'clamp(20px, 2.4vh, 30px)',
                }}
              >
                {t.num}
              </div>
              <div
                style={{
                  fontFamily: 'var(--serif)',
                  fontStyle: 'italic',
                  fontWeight: 500,
                  fontSize: 'clamp(22px, 2.2vw, 34px)',
                  lineHeight: 1.1,
                  color: 'var(--teal-deep)',
                  maxWidth: '220px',
                }}
              >
                {t.name}.
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}
