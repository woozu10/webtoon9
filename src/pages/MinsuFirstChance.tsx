import { useState } from 'react'
import { minsuFirstChance } from '../data/minsuFirstChance'

type Props = {
  onBack: () => void
}

const assetUrl = (path: string) => `${import.meta.env.BASE_URL}${path}`

export default function MinsuFirstChance({ onBack }: Props) {
  const [episodeOpen, setEpisodeOpen] = useState(false)

  if (!episodeOpen) {
    return (
      <main className="reader-page episode-entry-page">
        <div className="reader-toolbar episode-entry-toolbar">
          <button type="button" className="reader-back" onClick={onBack}>
            ← WEBTOON9
          </button>
        </div>

        <header className="episode-entry-header">
          <span className="reader-day">월요일 연재 · 신작</span>
          <h1>{minsuFirstChance.title.ko}</h1>
          <p className="reader-fr-title">{minsuFirstChance.title.fr}</p>
          <p className="reader-summary">{minsuFirstChance.subtitle.ko}</p>
          <div className="reader-meta">
            <span>{minsuFirstChance.author}</span>
            <span>스포츠</span>
            <span>학교</span>
            <span>성장</span>
          </div>
        </header>

        <section className="episode-entry-section">
          <div className="episode-entry-section-head">
            <h2>회차</h2>
            <span>1개</span>
          </div>

          <button
            type="button"
            className="episode-entry-card"
            onClick={() => {
              setEpisodeOpen(true)
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
          >
            <img
              src={assetUrl('webtoons/minsu-first-chance/scene-01.webp')}
              alt="민수의 첫 번째 기회 1화"
            />
            <div className="episode-entry-copy">
              <strong>1화</strong>
              <span>민수의 첫 번째 기회</span>
              <small>눌러서 보기</small>
            </div>
            <span className="episode-entry-arrow" aria-hidden="true">›</span>
          </button>
        </section>
      </main>
    )
  }

  return (
    <main className="reader-page fullscreen-reader-page">
      <div className="reader-toolbar fullscreen-reader-toolbar">
        <button
          type="button"
          className="reader-back"
          onClick={() => {
            setEpisodeOpen(false)
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        >
          ← 회차 목록
        </button>
        <span className="reader-progress">1화 · {minsuFirstChance.panels.length}컷</span>
      </div>

      <section className="fullscreen-comic-reader" aria-label={`${minsuFirstChance.title.ko} 웹툰`}>
        {minsuFirstChance.panels.map((panel, index) => (
          <figure className="fullscreen-comic-panel" key={panel}>
            <div className="fullscreen-panel-stage">
              <img
                src={assetUrl(panel)}
                alt={`${minsuFirstChance.title.ko} ${index + 1}컷`}
                loading={index < 2 ? 'eager' : 'lazy'}
              />
            </div>
          </figure>
        ))}
      </section>

      <div className="reader-end fullscreen-reader-end">
        <strong>1화 끝</strong>
        <button type="button" onClick={() => setEpisodeOpen(false)}>
          회차 목록으로
        </button>
      </div>
    </main>
  )
}
