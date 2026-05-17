export default function Slide02_Problem() {
  return (
    <div className="slide-inner" style={{ justifyContent: 'center', maxWidth: '1200px', margin: '0 auto' }}>
      <div className="reveal">
        <div className="tick" />
        <div className="eyebrow" style={{ marginBottom: '1.5rem' }}>Act One · The Foundation</div>
      </div>

      <h2 className="display reveal reveal-2" style={{ maxWidth: '1100px' }}>
        Growth masked <em>inefficiency.</em>
      </h2>

      <div className="reveal reveal-3" style={{ marginTop: '3rem', maxWidth: '900px' }}>
        <Divergence />
      </div>
    </div>
  )
}

function Divergence() {
  return (
    <svg viewBox="0 0 600 200" style={{ width: '100%', height: 'auto' }} aria-hidden="true">
      <defs>
        <linearGradient id="rev-line" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#C9A06A" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#C9A06A" />
        </linearGradient>
      </defs>
      <line x1="0" y1="195" x2="600" y2="195" stroke="#D7C9A8" strokeWidth="1" />
      <line x1="0" y1="0" x2="0" y2="200" stroke="#D7C9A8" strokeWidth="1" />
      <path
        d="M 0 160 Q 150 140, 280 100 T 600 14"
        fill="none"
        stroke="url(#rev-line)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M 0 70 Q 120 78, 240 110 T 600 180"
        fill="none"
        stroke="#46524F"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeDasharray="4 5"
      />
      <text x="595" y="24" textAnchor="end" fontFamily="Inter" fontSize="11" fill="#1F3E3D" letterSpacing="2" fontWeight="500">
        REVENUE
      </text>
      <text x="595" y="186" textAnchor="end" fontFamily="Inter" fontSize="11" fill="#46524F" letterSpacing="2">
        OPERATIONAL HEALTH
      </text>
    </svg>
  )
}
