export default function Slide05_TeamMatured() {
  const lanes = [
    { name: 'Advisors', stat: 'Relationship', note: 'Own the client. Set the vision.' },
    { name: 'Designers', stat: 'Craft', note: 'Execute the details. Real capability now.' },
    { name: 'Itinerary Ops', stat: '+ Deirdre & April', note: 'Proactive, structured, owned.' },
    { name: 'Air', stat: 'Layer', note: 'Check-in and reconfirmation, in-house.' },
    { name: 'WelcomeWings', stat: '200+ / mo', note: "It's own operation now." },
    { name: 'Data', stat: 'Weekly rhythm', note: 'A signal, not a one-off report.' },
  ]
  return (
    <div className="slide-inner" style={{ maxWidth: '1300px', margin: '0 auto', justifyContent: 'center' }}>
      <div className="reveal">
        <h2
          className="display"
          style={{ fontSize: 'clamp(48px, 5.4vw, 76px)' }}
        >
          The <em>team.</em>
        </h2>
        <p
          className="lede"
          style={{ marginTop: '0.75rem', fontSize: 'clamp(16px, 1.3vw, 22px)' }}
        >
          Six lanes. Each one matured this year.
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
        {lanes.map((l, i) => (
          <div
            key={i}
            style={{
              background: 'rgba(250, 243, 226, 0.78)',
              border: '1px solid var(--rule-light)',
              borderTop: '3px solid var(--gold)',
              padding: 'clamp(22px, 2.6vh, 34px) clamp(20px, 1.8vw, 28px)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.7rem',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--serif)',
                fontWeight: 500,
                fontSize: 'clamp(24px, 2.2vw, 34px)',
                color: 'var(--teal-deep)',
                lineHeight: 1.1,
              }}
            >
              {l.name}
            </div>
            <div
              style={{
                fontFamily: 'var(--serif)',
                fontStyle: 'italic',
                fontWeight: 500,
                fontSize: 'clamp(15px, 1.2vw, 20px)',
                color: 'var(--gold)',
              }}
            >
              {l.stat}
            </div>
            <div
              style={{
                fontFamily: 'var(--serif)',
                fontStyle: 'italic',
                fontSize: 'clamp(14px, 1.05vw, 17px)',
                color: 'var(--ink-soft)',
                lineHeight: 1.45,
              }}
            >
              {l.note}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
