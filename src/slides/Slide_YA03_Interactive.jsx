import GoalLayout from './_GoalLayout.jsx'

export default function Slide_YA03_Interactive() {
  return (
    <GoalLayout
      index={3}
      total={3}
      title="Interactive client itineraries"
      target="Co-creation"
      targetLabel="with the client"
      targetHint="Less static back-and-forth. More picking, swapping, shaping."
      description="Clients shape their own trips. The advisor-to-design handoff becomes seamless."
      Graphic={InteractiveGraphic}
    />
  )
}

function InteractiveGraphic() {
  return (
    <svg viewBox="0 0 400 400" style={{ width: '100%', height: '100%' }} aria-hidden="true">
      <defs>
        <linearGradient id="ya3-pick" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D4A86A" />
          <stop offset="100%" stopColor="#B0823F" />
        </linearGradient>
      </defs>

      {/* Three option cards */}
      {[
        { x: 60, y: 80, selected: false },
        { x: 156, y: 60, selected: true },
        { x: 252, y: 80, selected: false },
      ].map((c, i) => (
        <g key={i}>
          <rect
            x={c.x}
            y={c.y}
            width="92"
            height="140"
            rx="4"
            fill={c.selected ? 'url(#ya3-pick)' : 'none'}
            stroke={c.selected ? '#B0823F' : 'rgba(217, 171, 114, 0.55)'}
            strokeWidth={c.selected ? 2 : 1.4}
          />
          {/* Card "image" placeholder */}
          <rect
            x={c.x + 12}
            y={c.y + 14}
            width="68"
            height="56"
            fill={c.selected ? 'rgba(255, 255, 255, 0.25)' : 'rgba(217, 171, 114, 0.25)'}
            rx="2"
          />
          {/* Card lines */}
          <rect x={c.x + 12} y={c.y + 82} width="60" height="5" fill={c.selected ? 'rgba(255, 255, 255, 0.85)' : 'rgba(176, 170, 152, 0.85)'} rx="1" />
          <rect x={c.x + 12} y={c.y + 94} width="44" height="4" fill={c.selected ? 'rgba(255, 255, 255, 0.55)' : 'rgba(176, 170, 152, 0.55)'} rx="1" />
          <rect x={c.x + 12} y={c.y + 110} width="36" height="4" fill={c.selected ? 'rgba(255, 255, 255, 0.55)' : 'rgba(176, 170, 152, 0.55)'} rx="1" />
        </g>
      ))}

      {/* Selected indicator dot above the middle card */}
      <circle cx="202" cy="44" r="5" fill="#B0823F" />
      <line x1="202" y1="50" x2="202" y2="58" stroke="#B0823F" strokeWidth="1.5" />

      {/* Cursor / pointer near the chosen card */}
      <g transform="translate(216, 110)">
        <path
          d="M 0 0 L 0 16 L 4 12 L 8 22 L 11 21 L 7 11 L 12 11 Z"
          fill="var(--teal-deep)"
        />
      </g>

      {/* Curated line below — "Your trip" */}
      <line x1="80" y1="288" x2="320" y2="288" stroke="rgba(217, 171, 114, 0.5)" strokeWidth="1" />
      <text
        x="200"
        y="320"
        textAnchor="middle"
        style={{
          fontFamily: 'var(--serif)',
          fontStyle: 'italic',
          fontSize: '17px',
          fill: 'var(--ink-soft)',
        }}
      >
        Client trip
      </text>

      {/* Three small dots forming the chosen path */}
      {[120, 200, 280].map((x, i) => (
        <circle key={i} cx={x} cy="270" r={i === 1 ? 5 : 3} fill={i === 1 ? '#B0823F' : 'rgba(176, 145, 99, 0.55)'} />
      ))}
      <line x1="120" y1="270" x2="280" y2="270" stroke="rgba(176, 145, 99, 0.55)" strokeWidth="1" />
    </svg>
  )
}
