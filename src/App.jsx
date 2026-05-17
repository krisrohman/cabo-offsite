import { useEffect, useState, useCallback } from 'react'
import { slides } from './slides/index.js'
import LensBackdrop from './slides/LensBackdrop.jsx'

export default function App() {
  const [current, setCurrent] = useState(0)
  const [overviewOpen, setOverviewOpen] = useState(false)

  const total = slides.length

  const goTo = useCallback((i) => {
    if (i < 0 || i >= total) return
    setCurrent(i)
    setOverviewOpen(false)
  }, [total])

  const next = useCallback(() => goTo(Math.min(current + 1, total - 1)), [current, total, goTo])
  const prev = useCallback(() => goTo(Math.max(current - 1, 0)), [current, goTo])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault()
        next()
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault()
        prev()
      } else if (e.key === 'Escape') {
        setOverviewOpen((v) => !v)
      } else if (e.key === 'Home') {
        goTo(0)
      } else if (e.key === 'End') {
        goTo(total - 1)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [next, prev, goTo, total])

  const currentSlide = slides[current]
  const tone = currentSlide?.tone || 'light'

  return (
    <div className="deck">
      {slides.map((S, i) => (
        <div key={i} className={`slide${i === current ? ' active' : ''} ${S.tone || 'light'}`}>
          {S.lens && <LensBackdrop lens={S.lens} />}
          <div className="slide-stack"><S.Component /></div>
        </div>
      ))}

      <div className="nav-pill" onClick={(e) => e.stopPropagation()}>
        <button
          className="pill-arrow"
          onClick={prev}
          disabled={current === 0}
          aria-label="Previous"
        >
          ←
        </button>
        <span className="slide-counter">
          {String(current + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </span>
        <button
          className="pill-arrow"
          onClick={next}
          disabled={current === total - 1}
          aria-label="Next"
        >
          →
        </button>
      </div>

      {overviewOpen && (
        <div className="overview" onClick={() => setOverviewOpen(false)}>
          {slides.map((S, i) => (
            <div
              key={i}
              className="overview-card"
              onClick={(e) => {
                e.stopPropagation()
                goTo(i)
              }}
            >
              <div className="num">{String(i + 1).padStart(2, '0')}</div>
              <div className="title">{S.title}</div>
              <div className="act">{S.act}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
