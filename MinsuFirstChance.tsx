import { minsuFirstChance } from '../data/minsuFirstChance'

type Props = {
  onBack: () => void
}

const assetUrl = (path: string) => `${import.meta.env.BASE_URL}${path}`

export default function MinsuFirstChance({ onBack }: Props) {
  return (
    <main className="reader-page">
      <div className="reader-toolbar">
        <button type="button" className="reader-back" onClick={onBack}>
          ← WEBTOON9
        </button>
      </div>

      <header className="reader-header">
        <span className="reader-day">월요일 연재 · 신작</span>
        <h1>{minsuFirstChance.title.ko}</h1>
        <p className="reader-fr-title">{minsuFirstChance.title.fr}</p>
        <p className="reader-summary">{minsuFirstChance.subtitle.ko}</p>
        <div className="reader-meta">
          <span>{minsuFirstChance.author}</span>
          <span>{minsuFirstChance.panels.length}컷</span>
          {minsuFirstChance.genres.map((genre) => (
            <span key={genre}>{genre}</span>
          ))}
        </div>
      </header>

      {/* WEBTOON9 reader: comic images only.
          No separate speaker name, transcript, translation, or dialogue box is rendered. */}
      <section className="comic-strip" aria-label={`${minsuFirstChance.title.ko} 웹툰`}>
        {minsuFirstChance.panels.map((panel, index) => (
          <figure className="comic-panel" key={panel}>
            <img
              src={assetUrl(panel)}
              alt={`${minsuFirstChance.title.ko} ${index + 1}컷`}
              loading={index < 2 ? 'eager' : 'lazy'}
            />
          </figure>
        ))}
      </section>

      <div className="reader-end">
        <strong>1화 끝</strong>
        <p>다음 이야기는 WEBTOON9에서 이어집니다.</p>
        <button type="button" onClick={onBack}>홈으로</button>
      </div>
    </main>
  )
}
