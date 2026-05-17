export default function Slide03_WhatWeBuilt() {
  const process = [
    { name: 'Reconfirmations', detail: 'Formalized into a process.' },
    { name: 'Itinerary Ops', detail: 'Built around the trip lifecycle.' },
    { name: 'Jet Options', detail: 'Added for private aviation.' },
    { name: 'VIP Email', detail: 'Built in-house.' },
    { name: 'BuildTravel', detail: 'Expanded for the team.' },
    { name: 'Monday.com', detail: 'Smarter assignment, using availability and history.' },
    { name: 'Custom Resource Tool', detail: 'Built for the team.' },
  ]
  const people = [
    { name: 'Advisor team', detail: 'A department is formed.' },
    { name: 'Design team', detail: 'A structured, disciplined practice.' },
    { name: 'Technology', detail: 'Brought in-house, full-time.' },
    { name: 'Operations', detail: 'In place.' },
  ]

  const half = Math.ceil(process.length / 2)
  const processA = process.slice(0, half)
  const processB = process.slice(half)

  return (
    <div
      className="slide-inner"
      style={{
        padding: '0 var(--slide-pad-x)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        maxWidth: '1400px',
        margin: '0 auto',
      }}
    >
      <h2
        className="display reveal"
        style={{
          fontFamily: 'var(--serif)',
          fontWeight: 500,
          fontSize: 'clamp(40px, 4.2vw, 60px)',
          lineHeight: 1.05,
          letterSpacing: '-0.012em',
          color: 'var(--teal-deep)',
          maxWidth: '1100px',
          marginBottom: 'clamp(44px, 5.4vh, 64px)',
        }}
      >
        What's let us <em style={{ color: 'var(--gold)' }}>keep getting better.</em>
      </h2>

      <div
        className="reveal reveal-2"
        style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr',
          columnGap: 'clamp(56px, 6vw, 96px)',
          alignItems: 'start',
        }}
      >
        <Section
          title="Process"
          caption="What we built."
          accent="teal"
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              columnGap: 'clamp(32px, 4vw, 64px)',
              rowGap: 'clamp(18px, 2.2vh, 28px)',
            }}
          >
            <ItemColumn items={processA} startIndex={1} />
            <ItemColumn items={processB} startIndex={half + 1} />
          </div>
        </Section>

        <Section title="People" caption="Who we built it with." accent="gold">
          <ItemColumn items={people} startIndex={1} />
        </Section>
      </div>
    </div>
  )
}

function Section({ title, caption, accent, children }) {
  const accentColor = accent === 'gold' ? 'var(--gold)' : '#7E9695'
  return (
    <div
      style={{
        position: 'relative',
        paddingLeft: 'clamp(20px, 2vw, 32px)',
        borderLeft: `2px solid ${accentColor}`,
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'baseline',
          gap: '0.9rem',
          marginBottom: 'clamp(22px, 2.6vh, 32px)',
        }}
      >
        <div
          style={{
            fontFamily: 'var(--sans)',
            fontSize: 'clamp(11px, 0.9vw, 13px)',
            fontWeight: 600,
            letterSpacing: '0.36em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontFamily: 'var(--serif)',
            fontStyle: 'italic',
            fontSize: 'clamp(13px, 1vw, 17px)',
            color: 'var(--ink-mute)',
          }}
        >
          {caption}
        </div>
      </div>

      {children}
    </div>
  )
}

function ItemColumn({ items, startIndex }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'clamp(18px, 2.2vh, 28px)',
      }}
    >
      {items.map((item, i) => (
        <div key={i}>
          <div
            style={{
              display: 'flex',
              alignItems: 'baseline',
              gap: '0.7rem',
              marginBottom: '0.25rem',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--serif)',
                fontStyle: 'italic',
                fontSize: 'clamp(15px, 1.2vw, 18px)',
                color: 'rgba(184, 107, 74, 0.7)',
                letterSpacing: '0.04em',
                minWidth: '1.6em',
              }}
            >
              {String(startIndex + i).padStart(2, '0')}
            </div>
            <div
              style={{
                fontFamily: 'var(--serif)',
                fontStyle: 'italic',
                fontWeight: 500,
                fontSize: 'clamp(20px, 1.7vw, 26px)',
                color: 'var(--teal-deep)',
                lineHeight: 1.15,
              }}
            >
              {item.name}
            </div>
          </div>
          <div
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(14px, 1.15vw, 18px)',
              color: 'var(--ink-soft)',
              lineHeight: 1.4,
              paddingLeft: 'calc(1.6em + 0.7rem)',
            }}
          >
            {item.detail}
          </div>
        </div>
      ))}
    </div>
  )
}
