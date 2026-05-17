import TenetLayout from './_TenetLayout.jsx'

export default function Slide_Tenet02_Personalization() {
  return (
    <TenetLayout
      index={2}
      title="Personalization"
      tagline="No two clients are alike."
      description="Names, preferences, histories. Each trip curated for the person on it."
      Graphic={SignatureGraphic}
    />
  )
}

function SignatureGraphic() {
  return (
    <svg viewBox="0 0 400 400" style={{ width: '100%', height: '100%' }} aria-hidden="true">
      <g transform="translate(200, 200)">
        {/* Concentric fingerprint-like ellipses, rotated slightly */}
        {Array.from({ length: 12 }).map((_, i) => {
          const r = 28 + i * 12
          const ry = r * (0.85 + (i % 3) * 0.05)
          const rot = (i % 2 === 0 ? 1 : -1) * (i * 3)
          const opacity = Math.max(0.12, 0.55 - i * 0.035)
          return (
            <ellipse
              key={i}
              cx="0"
              cy="0"
              rx={r}
              ry={ry}
              fill="none"
              stroke="#C9A06A"
              strokeWidth="1.1"
              strokeOpacity={opacity}
              transform={`rotate(${rot})`}
            />
          )
        })}
        {/* Open break in some rings — fingerprint imperfection */}
        {[60, 100, 140].map((r, i) => (
          <path
            key={`break-${i}`}
            d={`M ${r - 8} ${-r * 0.05} A ${r} ${r * 0.92} 0 0 1 ${r + 6} ${r * 0.4}`}
            fill="none"
            stroke="#F8F2E8"
            strokeWidth="6"
            opacity="0.5"
          />
        ))}
        {/* Center marker */}
        <circle cx="0" cy="0" r="4" fill="#B0823F" />
      </g>
    </svg>
  )
}
