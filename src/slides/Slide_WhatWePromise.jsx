export default function Slide_WhatWePromise() {
  const promises = [
    {
      title: 'Concierge luxury, seamlessly delivered',
      note: 'You own the full experience. Bespoke itineraries that anticipate every need.',
    },
    {
      title: 'No guesswork. No surprises.',
      note: 'Deep insider knowledge. Vetted partners. Know your properties.',
    },
    {
      title: 'Unparalleled 24/7 support',
      note: "Always reachable during a trip. We open doors others can't.",
    },
    {
      title: 'More than perks. Privileges.',
      note: 'Virtuoso, FSPP, hotel relationships = real upgrades. Know your programs.',
    },
    {
      title: 'Trusted partnerships, vetted with precision',
      note: 'Every vendor vetted. If you would not trust them with your family, do not use them.',
    },
    {
      title: 'Private jet travel, demystified',
      note: 'Charter, fractional, management. Ironbird partnership. Know the basics.',
    },
  ]
  return (
    <div className="slide-inner" style={{ maxWidth: '1300px', margin: '0 auto', justifyContent: 'center' }}>
      <div className="reveal">
        <h2
          className="display"
          style={{ fontSize: 'clamp(48px, 5.4vw, 76px)' }}
        >
          What we <em>promise.</em>
        </h2>
        <p
          className="lede"
          style={{ marginTop: '0.75rem', fontSize: 'clamp(16px, 1.3vw, 22px)' }}
        >
          What clients see when they join. What you deliver on.
        </p>
      </div>

      <div
        className="reveal reveal-2"
        style={{
          marginTop: '3.5vh',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 'clamp(18px, 1.8vw, 32px)',
        }}
      >
        {promises.map((p, i) => (
          <div
            key={i}
            style={{
              background: 'rgba(250, 243, 226, 0.72)',
              border: '1px solid var(--rule-light)',
              borderTop: '3px solid var(--gold)',
              padding: 'clamp(22px, 2.6vh, 34px) clamp(20px, 1.8vw, 28px)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--mono)',
                fontSize: '11px',
                color: 'var(--gold)',
                letterSpacing: '0.18em',
              }}
            >
              {String(i + 1).padStart(2, '0')}
            </div>
            <div
              style={{
                fontFamily: 'var(--serif)',
                fontWeight: 500,
                fontSize: 'clamp(18px, 1.55vw, 24px)',
                color: 'var(--teal-deep)',
                lineHeight: 1.15,
              }}
            >
              {p.title}
            </div>
            <div
              style={{
                fontFamily: 'var(--serif)',
                fontStyle: 'italic',
                fontSize: 'clamp(13px, 1vw, 17px)',
                color: 'var(--ink-soft)',
                lineHeight: 1.45,
              }}
            >
              {p.note}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
