import GoalLayout from './_GoalLayout.jsx'

export default function Slide_YA02_WelcomeWings() {
  return (
    <GoalLayout
      index={2}
      total={3}
      title="Grow Welcome Wings"
      target="$5M"
      targetLabel="business"
      targetHint="Standalone scale, not a side service."
      description="Welcome Wings becomes a real line of business with its own size and standard. Built into the practice, not bolted on."
      Graphic={WingsGraphic}
    />
  )
}

function WingsGraphic() {
  return (
    <svg viewBox="0 0 400 400" style={{ width: '100%', height: '100%' }} aria-hidden="true">
      <defs>
        <linearGradient id="ww-fill" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#B0AA98" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#B0823F" stopOpacity="1" />
        </linearGradient>
        <linearGradient id="ww-wing" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#D4A86A" />
          <stop offset="100%" stopColor="#B0823F" />
        </linearGradient>
      </defs>

      {/* Baseline */}
      <line x1="40" y1="320" x2="360" y2="320" stroke="rgba(217, 171, 114, 0.35)" strokeWidth="1" />

      {/* Growth bars climbing toward $5M */}
      {[
        { x: 70, h: 60, label: 'Today' },
        { x: 150, h: 110 },
        { x: 230, h: 175 },
        { x: 310, h: 235, label: '$5M' },
      ].map((b, i) => (
        <g key={i}>
          <rect
            x={b.x - 22}
            y={320 - b.h}
            width="44"
            height={b.h}
            fill={i === 3 ? 'url(#ww-fill)' : 'rgba(176, 170, 152, 0.55)'}
          />
          {b.label && (
            <text
              x={b.x}
              y={i === 3 ? 320 - b.h - 12 : 340}
              textAnchor="middle"
              style={{
                fontFamily: i === 3 ? 'var(--serif)' : 'var(--sans)',
                fontStyle: i === 3 ? 'italic' : 'normal',
                fontSize: i === 3 ? '22px' : '11px',
                letterSpacing: i === 3 ? '0' : '0.22em',
                fill: i === 3 ? 'var(--gold)' : 'var(--ink-mute)',
              }}
            >
              {b.label}
            </text>
          )}
        </g>
      ))}

    </svg>
  )
}
