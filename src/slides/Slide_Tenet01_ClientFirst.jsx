import TenetLayout from './_TenetLayout.jsx'

export default function Slide_Tenet01_ClientFirst() {
  return (
    <TenetLayout
      index={1}
      title="Client Comes First"
      tagline="Respond quickly. Anticipate. Solve before it's felt."
      description="Every decision starts with the client. Friction gone before they feel it."
      Graphic={BeaconGraphic}
    />
  )
}

function BeaconGraphic() {
  const color = '#B0823F'
  return (
    <svg viewBox="0 0 400 400" style={{ width: '100%', height: '100%' }} aria-hidden="true">
      {/* Concierge bell — dome */}
      <path
        d="M 130 250 Q 130 160 200 160 Q 270 160 270 250"
        fill={color}
        fillOpacity="0.18"
        stroke={color}
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      {/* Decorative band across the dome */}
      <path
        d="M 142 215 Q 200 195 258 215"
        fill="none"
        stroke="#F8F2E8"
        strokeWidth="1"
        strokeOpacity="0.55"
      />
      {/* Top stem */}
      <line x1="200" y1="160" x2="200" y2="140" stroke={color} strokeWidth="2" strokeLinecap="round" />
      {/* Button on top */}
      <circle cx="200" cy="132" r="7" fill={color} />
      {/* Bell rim */}
      <line x1="125" y1="250" x2="275" y2="250" stroke={color} strokeWidth="1.8" />
      {/* Base plate */}
      <rect x="110" y="252" width="180" height="14" rx="2" fill={color} fillOpacity="0.75" />
      <line x1="110" y1="252" x2="290" y2="252" stroke={color} strokeWidth="1.6" />
      {/* Counter line for context */}
      <line x1="50" y1="296" x2="350" y2="296" stroke={color} strokeWidth="0.8" strokeOpacity="0.4" />
    </svg>
  )
}
