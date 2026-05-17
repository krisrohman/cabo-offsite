import TenetLayout from './_TenetLayout.jsx'

export default function Slide_Tenet03_Detail() {
  return (
    <TenetLayout
      index={3}
      title="Detail Orientation"
      tagline="The details of the details are equally important."
      description="The small things are the trip. Confirmed, logged, planned. Nothing missed."
      Graphic={DetailGraphic}
    />
  )
}

function DetailGraphic() {
  const color = '#B0823F'
  const items = [
    { line: 180, checked: true },
    { line: 150, checked: true },
    { line: 175, checked: true },
    { line: 145, checked: true },
    { line: 165, checked: true },
    { line: 130, checked: false },
  ]
  return (
    <svg viewBox="0 0 400 400" style={{ width: '100%', height: '100%' }} aria-hidden="true">
      {/* Paper backing */}
      <rect
        x="78"
        y="70"
        width="244"
        height="260"
        fill={color}
        fillOpacity="0.06"
        stroke={color}
        strokeWidth="1.1"
        strokeOpacity="0.45"
        rx="2"
      />
      {/* Header band */}
      <line x1="100" y1="105" x2="220" y2="105" stroke={color} strokeWidth="1.7" />
      <line x1="100" y1="118" x2="170" y2="118" stroke={color} strokeWidth="0.7" strokeOpacity="0.5" />
      {/* Checklist items */}
      {items.map((it, i) => {
        const y = 158 + i * 28
        return (
          <g key={i}>
            {/* Checkbox */}
            <rect
              x="102"
              y={y - 9}
              width="16"
              height="16"
              fill="none"
              stroke={color}
              strokeWidth="1.3"
              rx="1"
            />
            {/* Checkmark */}
            {it.checked && (
              <path
                d={`M 105 ${y} L 110 ${y + 4} L 117 ${y - 4}`}
                fill="none"
                stroke={color}
                strokeWidth="1.9"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            )}
            {/* List text line */}
            <line
              x1="132"
              y1={y}
              x2={132 + it.line}
              y2={y}
              stroke={color}
              strokeWidth="1.2"
              strokeOpacity={it.checked ? 0.55 : 0.32}
            />
          </g>
        )
      })}
    </svg>
  )
}
