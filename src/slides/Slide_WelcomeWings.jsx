export default function Slide_WelcomeWings() {
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
          fontSize: 'clamp(10px, 0.78vw, 12px)',
          fontWeight: 500,
          letterSpacing: '0.36em',
          textTransform: 'uppercase',
          color: 'var(--gold)',
          marginBottom: 'clamp(20px, 2.6vh, 32px)',
        }}
      >
        WelcomeWings
      </div>

      <h2
        className="display reveal reveal-2"
        style={{
          fontSize: 'clamp(56px, 6.4vw, 96px)',
          lineHeight: 1.02,
          letterSpacing: '-0.015em',
          marginBottom: 'clamp(40px, 5vh, 64px)',
          maxWidth: '1100px',
        }}
      >
        Continuity, <em>built around friction.</em>
      </h2>

      <div
        className="reveal reveal-3"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          columnGap: 'clamp(48px, 6vw, 100px)',
          alignItems: 'start',
          maxWidth: '1200px',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(20px, 1.7vw, 28px)',
            color: 'var(--ink-soft)',
            lineHeight: 1.45,
          }}
        >
          We noticed where the client experience could break: the moment of arrival.
          <br /><br />
          So we built a service around that gap.
        </p>
        <p
          style={{
            fontFamily: 'var(--serif)',
            fontStyle: 'italic',
            fontSize: 'clamp(20px, 1.7vw, 28px)',
            color: 'var(--teal-deep)',
            lineHeight: 1.45,
            fontWeight: 500,
          }}
        >
          That's hospitality thinking. Not operational expansion.
        </p>
      </div>
    </div>
  )
}
