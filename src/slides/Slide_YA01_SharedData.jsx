import GoalLayout from './_GoalLayout.jsx'

export default function Slide_YA01_SharedData() {
  return (
    <GoalLayout
      index={1}
      total={3}
      title="A shared data backbone"
      target="One source of truth"
      targetLabel="across the team"
      targetHint="Client, itinerary, and travel data in one place."
      description="Every trip starts from the same picture. Preferences, history, vendors, plans — together, instead of scattered across tools and inboxes."
      Graphic={DataHubGraphic}
    />
  )
}

function DataHubGraphic() {
  const nodes = [
    { x: 60, y: 80, label: 'Clients' },
    { x: 340, y: 80, label: 'Itineraries' },
    { x: 60, y: 320, label: 'Vendors' },
    { x: 340, y: 320, label: 'History' },
  ]
  return (
    <svg viewBox="0 0 400 400" style={{ width: '100%', height: '100%' }} aria-hidden="true">
      <defs>
        <radialGradient id="hub-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFE7B5" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#B0823F" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* Spokes */}
      {nodes.map((n, i) => (
        <line
          key={`l-${i}`}
          x1={n.x}
          y1={n.y}
          x2={200}
          y2={200}
          stroke="#C9A06A"
          strokeWidth="1.4"
          strokeOpacity="0.7"
        />
      ))}
      {/* Central hub glow */}
      <circle cx="200" cy="200" r="80" fill="url(#hub-glow)" />
      {/* Central hub */}
      <circle cx="200" cy="200" r="32" fill="none" stroke="#B0823F" strokeWidth="1.6" />
      <circle cx="200" cy="200" r="18" fill="#D4A86A" />
      <circle cx="200" cy="200" r="8" fill="#FFE7B5" />
      {/* Outer nodes */}
      {nodes.map((n, i) => (
        <g key={`n-${i}`}>
          <circle cx={n.x} cy={n.y} r="14" fill="var(--ivory, #F8F2E8)" stroke="#B0823F" strokeWidth="1.4" />
          <circle cx={n.x} cy={n.y} r="5" fill="#B0823F" />
          <text
            x={n.x}
            y={n.y + (n.y < 200 ? -24 : 30)}
            textAnchor="middle"
            style={{
              fontFamily: 'var(--serif)',
              fontStyle: 'italic',
              fontSize: '14px',
              fill: 'var(--ink-soft)',
            }}
          >
            {n.label}
          </text>
        </g>
      ))}
    </svg>
  )
}
