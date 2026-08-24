import type { Webtoon } from '../data/mockWebtoons'

type Props = {
  item: Webtoon
  large?: boolean
  showRank?: boolean
}

export default function WebtoonCard({ item, large = false, showRank = false }: Props) {
  return (
    <article className={`card ${large ? 'card-large' : ''}`}>
      <div className="cover">
        <div className="cover-top">
          {showRank && item.rank ? <strong className="rank">{item.rank}</strong> : <span />}
          {item.badge ? <span className="badge">{item.badge}</span> : null}
        </div>
        <div className="cover-number">9</div>
      </div>
      <h3>{item.title}</h3>
      <p>{item.subtitle}</p>
    </article>
  )
}
