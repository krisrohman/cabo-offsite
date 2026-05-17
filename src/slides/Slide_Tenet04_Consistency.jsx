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
  const rows = 7
  const wavesPerRow = 1
  const width = 320
  const startX = 40
  const startY = 60
  const rowSpacing = 42
  return (
    <svg viewBox="0 0 400 400" style={{ width: '100%', height: '100%' }} aria-hidden="true">
      {Array.from({ length: rows }).map((_, i) => {
        const y = startY + i * rowSpacing
        return (
          <g key={i}>
            <path
              d={`M ${startX} ${y} Q ${startX + width * 0.25} ${y - 22} ${startX + width * 0.5} ${y} T ${startX + width} ${y}`}
              fill="none"
              stroke="#C9A06A"
              strokeWidth="1.4"
              strokeOpacity={0.32 + i * 0.025}
              strokeLinecap="round"
            />
          </g>
        )
      })}
      {/* Vertical alignment markers showing the identical pattern */}
      <line x1={startX} y1={startY - 30} x2={startX} y2={startY + rows * rowSpacing - 12} stroke="#B0823F" strokeWidth="0.6" strokeOpacity="0.3" />
      <line x1={startX + width} y1={startY - 30} x2={startX + width} y2={startY + rows * rowSpacing - 12} stroke="#B0823F" strokeWidth="0.6" strokeOpacity="0.3" />
    </svg>
  )
}
