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
          <span>1화</span>
          <span>세로 웹툰</span>
          {minsuFirstChance.genres.map((genre) => (
            <span key={genre}>{genre}</span>
          ))}
        </div>
      </header>

      <section className="comic-strip clean-strip" aria-label={`${minsuFirstChance.title.ko} 웹툰`}>
        <figure className="comic-panel long-strip-panel">
          <img
            src={assetUrl('webtoons/minsu-first-chance/minsu-first-chance-portrait-long.jpg')}
            alt={`${minsuFirstChance.title.ko} 1화 전체`}
            loading="eager"
          />
        </figure>
      </section>

      <div className="reader-end">
        <strong>1화 끝</strong>
        <p>장면 안 말풍선만 유지하고, 장면 밖 대사 박스는 제거했습니다.</p>
        <button type="button" onClick={onBack}>홈으로</button>
      </div>
    </main>
  )
}
