export default function Slide11_Technology() {
  const built = [
    { name: 'BuildTravel', note: 'The integrations layer. Advisor input becomes ops output.', live: true },
    { name: 'Jet Options', note: 'Backend for the private aviation business.', live: true },
    { name: 'Data layer', note: 'Notion, Access, into one source of truth.', live: false },
  ]
  return (
    <div className="slide-inner" style={{ maxWidth: '1300px', margin: '0 auto', justifyContent: 'center' }}>
      <div className="reveal">
        <h2
          className="display"
          style={{ fontSize: 'clamp(48px, 5.4vw, 76px)' }}
        >
          The tools we <em>own.</em>
        </h2>
        <p
          className="lede"
          style={{ marginTop: '0.75rem', fontSize: 'clamp(16px, 1.3vw, 22px)' }}
        >
          Built in-house. Doing the tedious work so we can do the human work.
        </p>
      </div>

      <div
        className="reveal reveal-2"
        style={{
          marginTop: '4vh',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 'clamp(20px, 2vw, 36px)',
        }}
      >
        {built.map((b, i) => (
          <div
            key={i}
            style={{
              padding: 'clamp(26px, 2.8vh, 38px) clamp(22px, 2vw, 32px)',
              background: 'rgba(250, 243, 226, 0.75)',
              border: '1px solid var(--rule-light)',
              borderTop: '3px solid var(--gold)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              position: 'relative',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                fontFamily: 'var(--mono)',
                fontSize: '10px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: b.live ? 'var(--gold)' : 'var(--ink-mute)',
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '999px',
                  background: b.live ? 'var(--gold)' : 'var(--ink-mute)',
                  boxShadow: b.live ? '0 0 8px var(--gold)' : 'none',
                }}
              />
              {b.live ? 'Live' : 'In flight'}
            </div>
            <div
              style={{
                fontFamily: 'var(--serif)',
                fontStyle: 'italic',
                fontWeight: 500,
                fontSize: 'clamp(28px, 2.4vw, 38px)',
                color: 'var(--teal-deep)',
                lineHeight: 1.1,
              }}
            >
              {b.name}
            </div>
            <div
              style={{
                fontFamily: 'var(--serif)',
                fontSize: 'clamp(15px, 1.15vw, 19px)',
                color: 'var(--ink-soft)',
                lineHeight: 1.45,
              }}
            >
              {b.note}
            </div>
          </div>
        ))}
      </div>

      <p
        className="reveal reveal-3"
        style={{
          marginTop: '3vh',
          fontFamily: 'var(--serif)',
          fontStyle: 'italic',
          fontSize: 'clamp(18px, 1.4vw, 24px)',
          color: 'var(--teal-deep)',
          textAlign: 'center',
        }}
      >
        Boring work the system handles. <em style={{ color: 'var(--gold)' }}>Human work that we own.</em>
      </p>
    </div>
  )
}
