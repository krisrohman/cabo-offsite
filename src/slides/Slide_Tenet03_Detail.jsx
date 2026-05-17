import TenetLayout from './_TenetLayout.jsx'

export default function Slide_Tenet03_Detail() {
  return (
    <TenetLayout
      index={3}
      title="Detail Orientation"
      tagline="At this altitude, details matter."
      description="The small things are the trip. Confirmed, logged, planned. Nothing missed."
      Graphic={DetailGraphic}
    />
  )
}

function DetailGraphic() {
  return (
    <svg viewBox="0 0 400 400" style={{ width: '100%', height: '100%' }} aria-hidden="true">
      <g transform="translate(200, 200)">
        {/* Concentric squares, getting tighter toward the center */}
        {[170, 140, 112, 86, 64, 44, 28, 16].map((s, i) => (
          <rect
            key={i}
            x={-s}
            y={-s}
            width={s * 2}
            height={s * 2}
            fill="none"
            stroke="#C9A06A"
            strokeWidth={0.7 + i * 0.1}
            strokeOpacity={0.18 + i * 0.06}
          />
        ))}
        {/* Crosshairs */}
        <line x1="-170" x2="170" y1="0" y2="0" stroke="#C9A06A" strokeWidth="0.5" strokeOpacity="0.35" />
        <line x1="0" x2="0" y1="-170" y2="170" stroke="#C9A06A" strokeWidth="0.5" strokeOpacity="0.35" />

        {/* Tick marks on the crosshairs */}
        {[-140, -100, -60, 60, 100, 140].map((p) => (
          <g key={p}>
            <line x1={p} x2={p} y1="-4" y2="4" stroke="#C9A06A" strokeOpacity="0.5" strokeWidth="0.8" />
            <line y1={p} y2={p} x1="-4" x2="4" stroke="#C9A06A" strokeOpacity="0.5" strokeWidth="0.8" />
          </g>
        ))}

        {/* Tiny precise center dot */}
        <circle cx="0" cy="0" r="3" fill="#B0823F" />
      </g>
    </svg>
  )
}
