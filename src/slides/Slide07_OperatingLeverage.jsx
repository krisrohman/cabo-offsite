export default function Slide07_OperatingLeverage() {
  return (
    <div className="slide-inner" style={{ maxWidth: '1300px', margin: '0 auto', justifyContent: 'center' }}>
      <div className="reveal">
        <h2
          className="display"
          style={{ fontSize: 'clamp(56px, 6vw, 88px)' }}
        >
          Grew more. <em>Cost less.</em>
        </h2>
      </div>

      <div
        className="reveal reveal-2"
        style={{
          marginTop: '4vh',
          display: 'flex',
          flexDirection: 'column',
          gap: 'clamp(28px, 3.5vh, 48px)',
        }}
      >
        <LeverageBar label="Revenue" amount="2.5×" pct={100} color="var(--gold)" />
        <LeverageBar label="Operating expense" amount="40%" pct={16} color="var(--teal-mid)" muted />
        <LeverageBar label="Net income" amount="Expanded" pct={70} color="var(--gold-bright)" italic />
      </div>
    </div>
  )
}

function LeverageBar({ label, amount, pct, color, muted, italic }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr 200px', alignItems: 'center', gap: 'clamp(20px, 2.4vw, 40px)' }}>
      <div
        style={{
          fontFamily: 'var(--sans)',
          fontSize: 'clamp(15px, 1.15vw, 19px)',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: muted ? 'var(--ink-mute)' : 'var(--ink-soft)',
        }}
      >
        {label}
      </div>
      <div style={{ height: '20px', background: 'rgba(230, 219, 190, 0.55)', borderRadius: '999px', overflow: 'hidden' }}>
        <div
          style={{
            width: `${pct}%`,
            height: '100%',
            background: color,
            borderRadius: '999px',
            transition: 'width 0.9s cubic-bezier(0.2,0.8,0.2,1)',
            boxShadow: italic ? '0 0 24px rgba(221, 184, 126, 0.4)' : 'none',
          }}
        />
      </div>
      <div
        style={{
          fontFamily: 'var(--serif)',
          fontStyle: italic ? 'italic' : 'normal',
          fontWeight: 500,
          fontSize: 'clamp(36px, 3.4vw, 60px)',
          color: italic ? 'var(--gold)' : 'var(--teal-deep)',
          textAlign: 'right',
        }}
      >
        {amount}
      </div>
    </div>
  )
}
