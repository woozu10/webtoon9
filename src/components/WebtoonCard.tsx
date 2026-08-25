import type { Webtoon } from '../data/mockWebtoons'

type Props = {
  item: Webtoon
  large?: boolean
  showRank?: boolean
  onOpen?: (item: Webtoon) => void
}

const assetUrl = (path: string) => `${import.meta.env.BASE_URL}${path}`

export default function WebtoonCard({ item, large = false, showRank = false, onOpen }: Props) {
  const interactive = Boolean(onOpen)

  return (
    <article className={`card ${large ? 'card-large' : ''}`}>
      <button
        type="button"
        className={`card-button ${interactive ? 'is-interactive' : ''}`}
        onClick={() => onOpen?.(item)}
        disabled={!interactive}
        aria-label={`${item.title} 열기`}
      >
        <div className={`cover ${item.coverImage ? 'has-image' : ''}`}>
          {item.coverImage ? (
            <img className="cover-image" src={assetUrl(item.coverImage)} alt="" />
          ) : null}
          <div className="cover-top">
            {showRank && item.rank ? <strong className="rank">{item.rank}</strong> : <span />}
            {item.badge ? <span className="badge">{item.badge}</span> : null}
          </div>
          {!item.coverImage ? <div className="cover-number">9</div> : null}
        </div>
        <h3>{item.title}</h3>
        <p>{item.subtitle}</p>
        {item.author ? <span className="card-author">{item.author}</span> : null}
      </button>
    </article>
  )
}
