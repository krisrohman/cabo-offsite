export default function SlideContext_Foundation() {
  const calmSignals = [
    'The waiter, who knew.',
    'The private tour, seamless.',
    'Your wine, already chilling.',
  ]
  const chaos = [
    'Pilot got food poisoning.',
    'Car broke down on the way to pickup.',
    'Peanut allergy reconfirmed three times.',
    'Three restaurants held your table.',
    'Private chef caught the flu day-of.',
    'Sommelier ran out of your vintage.',
  ]
  return (
    <div
      className="slide-inner"
      style={{
        padding: 0,
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <BoatRiptideBackdrop />

      {/* ZONE 1 — ABOVE WATERLINE: the client experience */}
      <div
        style={{
          position: 'absolute',
          top: 'clamp(90px, 11vh, 160px)',
          left: 0,
          right: 0,
          textAlign: 'center',
          padding: '0 var(--slide-pad-x)',
          zIndex: 2,
        }}
      >
        <div
          className="reveal"
          style={{
            fontFamily: 'var(--sans)',
            fontSize: 'clamp(10px, 0.78vw, 12px)',
            fontWeight: 500,
            letterSpacing: '0.36em',
            textTransform: 'uppercase',
            color: 'rgba(70, 82, 79, 0.62)',
            marginBottom: '1rem',
          }}
        >
          What the client sees
        </div>
        <div
          className="reveal reveal-2"
          style={{
            fontFamily: 'var(--serif)',
            fontStyle: 'italic',
            fontWeight: 500,
            fontSize: 'clamp(28px, 3vw, 46px)',
            lineHeight: 1.05,
            letterSpacing: '-0.005em',
            color: 'var(--teal-deep)',
            marginBottom: 'clamp(12px, 1.4vh, 20px)',
          }}
        >
          A calm crossing.
        </div>
        <div
          className="reveal reveal-2"
          style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(14px, 1.15vw, 18px)',
            color: 'rgba(40, 56, 54, 0.72)',
            letterSpacing: '0.01em',
          }}
        >
          {calmSignals.map((s, i) => (
            <span key={i}>
              {i > 0 && (
                <span
                  style={{
                    margin: '0 0.7em',
                    color: 'rgba(40, 56, 54, 0.3)',
                  }}
                >
                  ·
                </span>
              )}
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* ZONE 2 — BELOW WATERLINE: the complexity */}
      <div
        style={{
          position: 'absolute',
          top: '60%',
          left: 0,
          right: 0,
          bottom: 'clamp(60px, 7vh, 100px)',
          padding: '0 var(--slide-pad-x)',
          zIndex: 2,
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div
          className="reveal reveal-3"
          style={{
            fontFamily: 'var(--sans)',
            fontSize: 'clamp(11px, 0.88vw, 14px)',
            fontWeight: 700,
            letterSpacing: '0.4em',
            textTransform: 'uppercase',
            color: 'rgba(240, 229, 203, 0.92)',
            marginBottom: 'clamp(20px, 2.8vh, 36px)',
          }}
        >
          What the client doesn't
        </div>

        <div
          className="reveal reveal-4"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            columnGap: 'clamp(36px, 4vw, 80px)',
            rowGap: 'clamp(22px, 2.8vh, 36px)',
            maxWidth: '1280px',
            width: '100%',
            margin: '0 auto',
            justifyItems: 'start',
          }}
        >
          {chaos.map((line, i) => (
            <div
              key={i}
              className="chaos-item"
              style={{
                fontFamily: 'var(--serif)',
                fontWeight: 500,
                fontSize: 'clamp(18px, 1.5vw, 26px)',
                color: 'rgba(252, 248, 236, 0.94)',
                textShadow: '0 2px 12px rgba(0,0,0,0.55)',
                textAlign: 'left',
                lineHeight: 1.3,
                opacity: 0.82 + (i % 3) * 0.06,
              }}
            >
              {line}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function BoatRiptideBackdrop() {
  return (
    <svg
      viewBox="0 0 1600 900"
      preserveAspectRatio="xMidYMid slice"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
      }}
      aria-hidden="true"
    >
      <defs>
        {/* Cabo sky — warm dawn-cream */}
        <linearGradient id="cabo-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F4ECD7" />
          <stop offset="100%" stopColor="#E0CFA8" />
        </linearGradient>

        {/* Sea — deeper teal with subtle warm undertone */}
        <linearGradient id="cabo-sea" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#244847" />
          <stop offset="40%" stopColor="#153232" />
          <stop offset="100%" stopColor="#0A1716" />
        </linearGradient>

        {/* Soft warm horizon glow over the sea */}
        <radialGradient id="sea-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#D9AB72" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#D9AB72" stopOpacity="0" />
        </radialGradient>

        {/* Subtle warm vignette near the boat on the surface */}
        <radialGradient id="boat-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFE7B5" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#FFE7B5" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Sky */}
      <rect x="0" y="0" width="1600" height="420" fill="url(#cabo-sky)" />

      {/* Sea */}
      <rect x="0" y="420" width="1600" height="480" fill="url(#cabo-sea)" />

      {/* Horizon ambient warmth */}
      <ellipse cx="800" cy="420" rx="700" ry="180" fill="url(#sea-glow)" />

      {/* Soft glow behind the boat */}
      <circle cx="800" cy="400" r="260" fill="url(#boat-glow)" />

      {/* Waterline — clean horizon */}
      <line
        x1="0"
        x2="1600"
        y1="420"
        y2="420"
        stroke="#152C2C"
        strokeWidth="1.5"
        strokeOpacity="0.5"
      />

      {/* Gentle surface ripples spreading from the boat */}
      {Array.from({ length: 6 }).map((_, i) => {
        const y = 426 + i * 6
        const len = 360 + i * 100
        return (
          <line
            key={i}
            x1={800 - len / 2}
            x2={800 + len / 2}
            y1={y}
            y2={y}
            stroke="#FAF3E2"
            strokeWidth="0.6"
            strokeOpacity={Math.max(0.05, 0.3 - i * 0.05)}
          />
        )
      })}

      {/* THE YACHT — sleek motor yacht silhouette, sitting on the waterline */}
      <g transform="translate(800, 420)">
        {/* Reflection mirrored in the water */}
        <g opacity="0.18" transform="scale(1, -0.55)">
          <path d="M -148 0 L -148 -10 Q -142 -18 -126 -20 L 80 -22 Q 124 -22 152 -10 L 152 0 Z" fill="#0E0E0E" />
          <path d="M -108 -22 L -98 -34 L 56 -34 Q 70 -34 76 -28 L 84 -22 Z" fill="#F5EBD8" />
          <path d="M -44 -34 L -34 -48 L 28 -48 L 40 -34 Z" fill="#FAF3E2" />
          <path d="M -18 -48 Q -18 -62 0 -62 Q 18 -62 18 -48" stroke="#1A1A1A" strokeWidth="1.4" fill="none" />
          <line x1="0" y1="-62" x2="0" y2="-78" stroke="#1A1A1A" strokeWidth="1.2" />
        </g>

        {/* Wake — V-shape spreading off the stern */}
        <path d="M -150 3 Q -230 10 -310 18" fill="none" stroke="#FAF3E2" strokeWidth="0.8" strokeOpacity="0.4" />
        <path d="M -150 3 Q -230 -2 -310 -6" fill="none" stroke="#FAF3E2" strokeWidth="0.7" strokeOpacity="0.3" />
        <path d="M -150 4 Q -200 14 -270 22" fill="none" stroke="#FAF3E2" strokeWidth="0.5" strokeOpacity="0.18" />

        {/* HULL — long, with a soft sheer curve and a raked plumb bow */}
        <path
          d="
            M -148 0
            L -148 -10
            Q -142 -18 -126 -20
            L 80 -22
            Q 124 -22 152 -10
            L 152 0
            Z
          "
          fill="#0E0E0E"
        />
        {/* Bow tip continuation — gives the prow some forward lean */}
        <path d="M 152 -10 L 158 -4 L 152 0 Z" fill="#0E0E0E" />
        {/* Boot stripe at the waterline */}
        <line x1="-146" x2="156" y1="-3.5" y2="-3.5" stroke="#FAF3E2" strokeWidth="0.6" strokeOpacity="0.55" />
        {/* Sheer-line highlight along the top of the hull */}
        <path
          d="M -142 -18 L -126 -20 L 80 -22 Q 124 -22 150 -10"
          fill="none"
          stroke="#D4C7A3"
          strokeWidth="0.4"
          strokeOpacity="0.45"
        />

        {/* MAIN DECK / SALOON — long, low cabin with rounded front */}
        <path
          d="
            M -108 -22
            L -98 -34
            L 56 -34
            Q 70 -34 76 -28
            L 84 -22
            Z
          "
          fill="#F5EBD8"
        />
        {/* Long window band */}
        <rect x="-92" y="-30" width="168" height="4.5" fill="#1F2F2E" opacity="0.85" />
        {/* Aft-deck divider line (where the open cockpit would be) */}
        <line x1="-108" y1="-22" x2="-108" y2="-12" stroke="#1F2F2E" strokeOpacity="0.45" strokeWidth="0.7" />

        {/* FLYBRIDGE — narrower upper deck, stepped back from the bow */}
        <path d="M -44 -34 L -34 -48 L 28 -48 L 40 -34 Z" fill="#FAF3E2" />
        {/* Wraparound windscreen */}
        <rect x="-28" y="-44" width="64" height="3" fill="#1F2F2E" opacity="0.8" />

        {/* RADAR ARCH — distinctive yacht silhouette */}
        <path
          d="M -18 -48 Q -18 -62 0 -62 Q 18 -62 18 -48"
          fill="none"
          stroke="#1A1A1A"
          strokeWidth="1.6"
        />

        {/* Mast & radar */}
        <line x1="0" y1="-62" x2="0" y2="-82" stroke="#1A1A1A" strokeWidth="1.4" />
        <ellipse cx="0" cy="-68" rx="6" ry="1.8" fill="#1A1A1A" />
        {/* Whip antenna */}
        <line x1="0" y1="-82" x2="0" y2="-88" stroke="#1A1A1A" strokeWidth="0.6" />
        {/* Mast tip warm light */}
        <circle cx="0" cy="-88" r="1.4" fill="#FFE7B5" />

        {/* Tiny jackstaff at the bow */}
        <line x1="152" y1="-10" x2="158" y2="-22" stroke="#1A1A1A" strokeWidth="0.7" />
      </g>

      {/* ===== THE RIPTIDE — swirling currents below the waterline ===== */}

      {/* Wide horizontal turbulence sweeps */}
      {[
        { y: 410, q1: 360, q2: 470, q3: 420, opacity: 0.22 },
        { y: 480, q1: 280, q2: 510, q3: 360, opacity: 0.2 },
        { y: 555, q1: 440, q2: 460, q3: 500, opacity: 0.18 },
        { y: 625, q1: 320, q2: 540, q3: 380, opacity: 0.16 },
        { y: 700, q1: 480, q2: 470, q3: 460, opacity: 0.14 },
        { y: 770, q1: 360, q2: 510, q3: 420, opacity: 0.12 },
        { y: 835, q1: 280, q2: 540, q3: 360, opacity: 0.1 },
      ].map((line, i) => (
        <path
          key={`flow-${i}`}
          d={`M -100 ${line.y} Q ${line.q1} ${line.y - 14} ${line.q2 + 200} ${line.y + 4} T 1100 ${line.y - 6} T 1700 ${line.y + 8}`}
          fill="none"
          stroke="#A8C5C5"
          strokeWidth="1"
          strokeOpacity={line.opacity}
        />
      ))}

      {/* Vortex / spiral swirl — left-of-center riptide pull */}
      <g transform="translate(420, 560)" opacity="0.55">
        {[140, 110, 82, 56, 32].map((r, i) => (
          <ellipse
            key={i}
            cx="0"
            cy="0"
            rx={r}
            ry={r * 0.55}
            fill="none"
            stroke="#A8C5C5"
            strokeWidth="1"
            strokeOpacity={0.22 - i * 0.035}
            transform={`rotate(${i * 12})`}
          />
        ))}
      </g>

      {/* Vortex / spiral swirl — right-of-center counter-current */}
      <g transform="translate(1180, 670)" opacity="0.5">
        {[160, 122, 92, 66, 38].map((r, i) => (
          <ellipse
            key={i}
            cx="0"
            cy="0"
            rx={r}
            ry={r * 0.5}
            fill="none"
            stroke="#A8C5C5"
            strokeWidth="1"
            strokeOpacity={0.2 - i * 0.032}
            transform={`rotate(${-(i * 14)})`}
          />
        ))}
      </g>

      {/* Faint diagonal cross-currents (riptide tension) */}
      <path
        d="M 0 720 Q 400 600 800 660 T 1600 580"
        fill="none"
        stroke="#A8C5C5"
        strokeWidth="1"
        strokeOpacity="0.1"
      />
      <path
        d="M 0 600 Q 380 700 820 620 T 1600 700"
        fill="none"
        stroke="#A8C5C5"
        strokeWidth="1"
        strokeOpacity="0.09"
      />
    </svg>
  )
}
