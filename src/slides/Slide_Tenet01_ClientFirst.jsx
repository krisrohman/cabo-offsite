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
  return (
    <svg viewBox="0 0 400 400" style={{ width: '100%', height: '100%' }} aria-hidden="true">
      <defs>
        <radialGradient id="beacon-core" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFE7B5" stopOpacity="1" />
          <stop offset="60%" stopColor="#D4A86A" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#B0823F" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* Outer concentric pulses */}
      {[180, 150, 122, 96, 72].map((r, i) => (
        <circle
          key={i}
          cx="200"
          cy="200"
          r={r}
          fill="none"
          stroke="#C9A06A"
          strokeWidth={i === 0 ? 0.6 : 0.9}
          strokeOpacity={0.12 + i * 0.06}
        />
      ))}
      {/* Diffuse glow */}
      <circle cx="200" cy="200" r="90" fill="url(#beacon-core)" />
      {/* Inner ring */}
      <circle cx="200" cy="200" r="42" fill="none" stroke="#B0823F" strokeWidth="1.2" strokeOpacity="0.7" />
      {/* Bright core */}
      <circle cx="200" cy="200" r="18" fill="#F2C078" />
      <circle cx="200" cy="200" r="9" fill="#FFE7B5" />
    </svg>
  )
}
