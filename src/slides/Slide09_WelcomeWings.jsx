export default function Slide09_WelcomeWings() {
  const months = [40, 55, 70, 85, 100, 120, 140, 160, 175, 190, 200, 210]
  const max = 240
  return (
    <div className="slide-inner" style={{ maxWidth: '1300px', margin: '0 auto', justifyContent: 'center' }}>
      <div className="reveal">
        <h2
          className="display"
          style={{ fontSize: 'clamp(56px, 6vw, 88px)' }}
        >
          A gap became <em>a business.</em>
        </h2>
      </div>

      <div
        className="reveal reveal-2"
        style={{
          marginTop: '4vh',
          display: 'grid',
          gridTemplateColumns: '1.6fr 1fr',
          gap: 'clamp(40px, 5vw, 80px)',
          alignItems: 'center',
        }}
      >
        <div>
          <svg viewBox="0 0 600 280" style={{ width: '100%', height: 'auto' }} aria-hidden="true">
            <defs>
              <linearGradient id="wing-fill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#C9A06A" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#C9A06A" stopOpacity="0" />
              </linearGradient>
            </defs>
            <line x1="0" y1="275" x2="600" y2="275" stroke="#D7C9A8" strokeWidth="1" />
            {[60, 120, 180].map((y) => (
              <line key={y} x1="0" y1={275 - (y / max) * 260} x2="600" y2={275 - (y / max) * 260}
                stroke="#E6DBBE" strokeWidth="1" strokeDasharray="3 5" />
            ))}
            <path
              d={`M 0 ${275 - (months[0] / max) * 260} ${months
                .map((v, i) => `L ${(i / (months.length - 1)) * 600} ${275 - (v / max) * 260}`)
                .join(' ')} L 600 275 L 0 275 Z`}
              fill="url(#wing-fill)"
            />
            <path
              d={`M 0 ${275 - (months[0] / max) * 260} ${months
                .map((v, i) => `L ${(i / (months.length - 1)) * 600} ${275 - (v / max) * 260}`)
                .join(' ')}`}
              fill="none"
              stroke="#C9A06A"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="600" cy={275 - (months[months.length - 1] / max) * 260} r="6" fill="#C9A06A" />
          </svg>
        </div>

        <div className="reveal reveal-3">
          <p
            style={{
              fontFamily: 'var(--serif)',
              fontWeight: 500,
              fontSize: 'clamp(96px, 10vw, 160px)',
              lineHeight: 0.95,
              color: 'var(--teal-deep)',
              letterSpacing: '-0.02em',
            }}
          >
            200<span style={{ color: 'var(--gold)' }}>+</span>
          </p>
          <p
            style={{
              fontFamily: 'var(--sans)',
              fontSize: 'clamp(13px, 1vw, 16px)',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--ink-mute)',
              marginTop: '0.85rem',
            }}
          >
            Services per month
          </p>
          <p
            style={{
              fontFamily: 'var(--serif)',
              fontStyle: 'italic',
              fontSize: 'clamp(18px, 1.4vw, 24px)',
              color: 'var(--ink-soft)',
              marginTop: '1.5rem',
              maxWidth: '320px',
            }}
          >
            Target next year: <span style={{ color: 'var(--gold)' }}>400</span>.
          </p>
        </div>
      </div>
    </div>
  )
}
