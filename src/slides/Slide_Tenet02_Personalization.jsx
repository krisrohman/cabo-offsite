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
  const color = '#B0823F'
  return (
    <svg viewBox="0 0 400 400" style={{ width: '100%', height: '100%' }} aria-hidden="true">
      {/* Folded place card — back panel tilted up */}
      <path
        d="M 100 170 L 122 152 L 298 152 L 276 170 Z"
        fill={color}
        fillOpacity="0.1"
        stroke={color}
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      {/* Front panel of the card */}
      <rect
        x="100"
        y="170"
        width="200"
        height="120"
        fill={color}
        fillOpacity="0.15"
        stroke={color}
        strokeWidth="1.7"
      />
      {/* Inner border on front */}
      <rect
        x="112"
        y="182"
        width="176"
        height="96"
        fill="none"
        stroke={color}
        strokeWidth="0.6"
        strokeOpacity="0.4"
      />

      {/* "Welcome," — italic serif */}
      <text
        x="200"
        y="222"
        textAnchor="middle"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontStyle: 'italic',
          fontWeight: 500,
          fontSize: '26px',
          fill: color,
        }}
      >
        Welcome,
      </text>

      {/* Handwritten cursive name (two squiggle strokes) */}
      <path
        d="M 144 256
          Q 154 248 164 258
          Q 175 268 186 256
          Q 197 244 210 258
          Q 222 270 234 256
          Q 246 244 256 258"
        fill="none"
        stroke={color}
        strokeWidth="2.4"
        strokeLinecap="round"
      />

      {/* Card shadow under the table */}
      <line x1="110" y1="295" x2="290" y2="295" stroke={color} strokeWidth="0.8" strokeOpacity="0.25" />

      {/* Table line below */}
      <line x1="60" y1="320" x2="340" y2="320" stroke={color} strokeWidth="0.8" strokeOpacity="0.4" />
    </svg>
  )
}
