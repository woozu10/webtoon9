import { minsuFirstChance } from '../data/minsuFirstChance'

type Props = {
  onBack: () => void
}

const assetUrl = (path: string) => `${import.meta.env.BASE_URL}${path}`

export default function MinsuFirstChance({ onBack }: Props) {
  return (
    <main className="reader-page fullscreen-reader-page">
      <div className="reader-toolbar fullscreen-reader-toolbar">
        <button type="button" className="reader-back" onClick={onBack}>
          ← WEBTOON9
        </button>
        <span className="reader-progress">1화 · {minsuFirstChance.panels.length}컷</span>
      </div>

      <header className="reader-header fullscreen-reader-header">
        <span className="reader-day">월요일 연재 · 신작</span>
        <h1>{minsuFirstChance.title.ko}</h1>
        <p className="reader-fr-title">{minsuFirstChance.title.fr}</p>
        <p className="reader-summary">{minsuFirstChance.subtitle.ko}</p>
        <div className="reader-meta">
          <span>{minsuFirstChance.author}</span>
          <span>1화</span>
          <span>한 화면 한 컷</span>
        </div>
      </header>

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
            <span className="panel-number" aria-hidden="true">{index + 1} / {minsuFirstChance.panels.length}</span>
          </figure>
        ))}
      </section>

      <div className="reader-end fullscreen-reader-end">
        <strong>1화 끝</strong>
        <p>장면 안 말풍선만 유지하고, 장면 밖 대사 박스는 표시하지 않습니다.</p>
        <button type="button" onClick={onBack}>홈으로</button>
      </div>
    </main>
  )
}
