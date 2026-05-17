export default function Slide_InPractice() {
  const rows = [
    {
      tenet: 'Client first',
      looks: 'Respond in 2 hours. Flag issues before the client finds them.',
      doesnt: "'I'll get back to them tomorrow.'",
    },
    {
      tenet: 'Personalization',
      looks: 'Reference past trips in every proposal. Tailor to this client.',
      doesnt: "'Here are the top 10 hotels in Paris.'",
    },
    {
      tenet: 'Detail',
      looks: 'Confirm in writing. Triple-check dates, names, rates.',
      doesnt: "'I assumed it was correct.'",
    },
    {
      tenet: 'Consistency',
      looks: 'Same process every time. Every trip. Every client.',
      doesnt: "'It's just a small trip.'",
    },
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
      <h2
        className="display reveal"
        style={{
          fontSize: 'clamp(56px, 6.2vw, 94px)',
          lineHeight: 1,
          letterSpacing: '-0.012em',
          marginBottom: 'clamp(40px, 5vh, 64px)',
        }}
      >
        What that <em>looks like.</em>
      </h2>

      <div
        className="reveal reveal-2"
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {rows.map((r, i) => (
          <div
            key={i}
            style={{
              display: 'grid',
              gridTemplateColumns: '220px 1fr 1fr',
              columnGap: 'clamp(28px, 3vw, 56px)',
              alignItems: 'baseline',
              padding: 'clamp(18px, 2.2vh, 28px) 0',
              borderTop: i === 0 ? 'none' : '1px solid rgba(217, 171, 114, 0.18)',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--serif)',
                fontStyle: 'italic',
                fontWeight: 500,
                fontSize: 'clamp(20px, 1.8vw, 28px)',
                color: 'var(--teal-deep)',
                lineHeight: 1.1,
              }}
            >
              {r.tenet}
            </div>
            <div
              style={{
                fontFamily: 'var(--serif)',
                fontSize: 'clamp(16px, 1.3vw, 21px)',
                color: 'var(--teal-deep)',
                lineHeight: 1.5,
              }}
            >
              {r.looks}
            </div>
            <div
              style={{
                fontFamily: 'var(--serif)',
                fontStyle: 'italic',
                fontSize: 'clamp(15px, 1.2vw, 19px)',
                color: 'var(--ink-mute)',
                lineHeight: 1.5,
              }}
            >
              {r.doesnt}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
