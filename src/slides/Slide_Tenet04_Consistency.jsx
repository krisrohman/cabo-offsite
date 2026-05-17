import TenetLayout from './_TenetLayout.jsx'

export default function Slide_Tenet04_Consistency() {
  return (
    <TenetLayout
      index={4}
      title="Consistency"
      tagline="Same standard, every trip."
      description="No off-version. First trip or fiftieth. The standard never bends."
      Graphic={ConsistencyGraphic}
    />
  )
}

function ConsistencyGraphic() {
  const color = '#B0823F'

  // Scalloped circle path — 12 petals
  const cx = 200
  const cy = 180
  const petals = 12
  const outerR = 92
  const innerR = 76
  let scalloped = ''
  for (let i = 0; i < petals; i++) {
    const a1 = ((i - 0.5) / petals) * Math.PI * 2 - Math.PI / 2
    const a2 = ((i + 0.5) / petals) * Math.PI * 2 - Math.PI / 2
    const aMid = (a1 + a2) / 2
    const sx = cx + innerR * Math.cos(a1)
    const sy = cy + innerR * Math.sin(a1)
    const ex = cx + innerR * Math.cos(a2)
    const ey = cy + innerR * Math.sin(a2)
    const mx = cx + outerR * Math.cos(aMid)
    const my = cy + outerR * Math.sin(aMid)
    if (i === 0) scalloped += `M ${sx.toFixed(2)} ${sy.toFixed(2)} `
    scalloped += `Q ${mx.toFixed(2)} ${my.toFixed(2)}, ${ex.toFixed(2)} ${ey.toFixed(2)} `
  }
  scalloped += 'Z'

  return (
    <svg viewBox="0 0 400 400" style={{ width: '100%', height: '100%' }} aria-hidden="true">
      {/* Ribbon tails behind the badge */}
      <path
        d="M 170 226 L 150 332 L 174 314 L 198 332 L 198 270 Z"
        fill={color}
        fillOpacity="0.22"
        stroke={color}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M 230 226 L 250 332 L 226 314 L 202 332 L 202 270 Z"
        fill={color}
        fillOpacity="0.22"
        stroke={color}
        strokeWidth="2"
        strokeLinejoin="round"
      />

      {/* Scalloped badge */}
      <path
        d={scalloped}
        fill={color}
        fillOpacity="0.18"
        stroke={color}
        strokeWidth="2.4"
        strokeLinejoin="round"
      />

      {/* Inner medallion ring */}
      <circle cx={cx} cy={cy} r="52" fill="none" stroke={color} strokeWidth="2" />

      {/* Renewal cycle — two curved arrows */}
      <g transform={`translate(${cx}, ${cy})`}>
        {/* Top arc, clockwise */}
        <path
          d="M -28 -6 A 30 30 0 0 1 26 -14"
          fill="none"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
        />
        {/* Arrowhead at end of top arc */}
        <polygon points="26,-14 18,-22 30,-2" fill={color} />

        {/* Bottom arc, clockwise */}
        <path
          d="M 28 6 A 30 30 0 0 1 -26 14"
          fill="none"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
        />
        {/* Arrowhead at end of bottom arc */}
        <polygon points="-26,14 -18,22 -30,2" fill={color} />
      </g>
    </svg>
  )
}
