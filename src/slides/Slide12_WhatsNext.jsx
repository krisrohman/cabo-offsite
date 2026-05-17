export default function Slide12_WhatsNext() {
  const roles = [
    { role: 'Lead Tech', note: 'BuildTravel + integrations.' },
    { role: 'Data Scientist', note: 'Signal from every system.' },
    { role: 'Aviation Manager', note: 'Protecting the growing line.' },
    { role: 'Design Capacity', note: 'More lanes, clear ownership.' },
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
      <div className="reveal" style={{ marginBottom: 'clamp(36px, 5vh, 60px)' }}>
        <h2
          className="display"
          style={{
            fontSize: 'clamp(56px, 6.2vw, 94px)',
            lineHeight: 1,
            letterSpacing: '-0.012em',
          }}
        >
          Growing into <em>the work.</em>
        </h2>
        <p
          className="lede"
          style={{
            marginTop: '0.85rem',
            fontFamily: 'var(--serif)',
            fontStyle: 'italic',
            fontSize: 'clamp(20px, 1.6vw, 28px)',
            color: 'var(--ink-soft)',
            maxWidth: '900px',
          }}
        >
          Seventeen on the team. Four roles to add. Each one earned.
        </p>
      </div>

      <div
        className="reveal reveal-2"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          columnGap: 'clamp(36px, 4vw, 70px)',
        }}
      >
        {roles.map((r, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column' }}>
            <div
              style={{
                width: '28px',
                height: '1px',
                background: 'var(--gold)',
                marginBottom: '1.25rem',
              }}
            />
            <div
              style={{
                fontFamily: 'var(--sans)',
                fontSize: 'clamp(10px, 0.78vw, 12px)',
                fontWeight: 500,
                letterSpacing: '0.26em',
                textTransform: 'uppercase',
                color: 'var(--gold)',
                marginBottom: '0.75rem',
              }}
            >
              Open
            </div>
            <div
              style={{
                fontFamily: 'var(--serif)',
                fontStyle: 'italic',
                fontWeight: 500,
                fontSize: 'clamp(24px, 2.1vw, 34px)',
                lineHeight: 1.05,
                color: 'var(--teal-deep)',
                marginBottom: '0.85rem',
              }}
            >
              {r.role}
            </div>
            <div
              style={{
                fontFamily: 'var(--serif)',
                fontSize: 'clamp(15px, 1.15vw, 19px)',
                color: 'var(--ink-soft)',
                lineHeight: 1.45,
              }}
            >
              {r.note}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
